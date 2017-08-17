var express = require('express');
var router = express.Router();
var User = require('../models/user').User;
var bcrypt = require('bcrypt-nodejs');
/* GET all users. */
router.get('/all/users', function(req, res, next) {
  User.find({}).lean().exec()
  .then(function(users){
    res.json(users)
  })
});

/* GET single users. */
router.get('/single/:userId', function(req, res, next) {
  User.find({_id: req.params.userId}).lean().exec()
  .then(function(user){
    res.json(user)
  })
  .catch(function(err){
    console.error(err)
  })
});

router.post('/create', function(req, res, next){
  User.create(req.body) 
  .then(function(user){
    res.json(user)
  })
  .catch(function(err){
    res.json(err)
    console.error(err)
  })
})

router.put('/update', function(req, res, next){
  User.update({_id: req.body._id}, req.body)
  .then(function(user){
    res.json(user)
  })
  .catch(function(err){
    console.error(err)
  })
})

router.delete('/delete/:userId', function(req, res, next){
  User.remove({_id: req.params.userId})
  .then(function(result){
    res.json(result)
  })
  .catch(function(err){
    console.error(err)
  })
})

module.exports = router;