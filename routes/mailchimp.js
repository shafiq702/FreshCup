var express = require('express');
var router = express.Router();
var request = require('superagent');

var mailchimpInstance = 'us10',
    listUniqueId      = '154ad72311',
    mailchimpApiKey   = '2c6b3ab995af34f721febcc756098973-us10';

router.post('/free-coupon', function(req, res, next) {
  request
        .post('https://' + mailchimpInstance + '.api.mailchimp.com/3.0/lists/' + listUniqueId + '/members/')
        .set('Content-Type', 'application/json;charset=utf-8')
        .set('Authorization', 'Basic ' + new Buffer('any:' + mailchimpApiKey ).toString('base64'))
        .send({
          'email_address': req.body.email,
          'status': 'subscribed'
        })
        .end(function(err, response) {
          if (response.status < 300 || (response.status === 400 && response.body.title === "Member Exists")) {
            res.send('Signed Up!');
          } else {
            res.send('Sign Up Failed :(');
          }
      });
});

module.exports = router;
