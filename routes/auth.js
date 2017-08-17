var express = require('express');
var router = express.Router();
var User = require('../models/user').User;
var passport = require('passport')

function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.sendStatus(403);
}

router.post('/signup', passport.authenticate('local-signup', {
    successRedirect : '/auth/profile', // redirect to the secure profile section
    failureRedirect : '/auth/failure', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
}));

router.post('/login', passport.authenticate('local-login', {
    successRedirect : '/auth/profile', // redirect to the secure profile section
    failureRedirect : '/auth/failure', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
}));

router.get('/profile', isLoggedIn, function(req, res) {
    res.json({user : req.user});
});

router.get('/logout', function(req, res){
  req.logout();
  res.json({user:''})
})


module.exports = router
