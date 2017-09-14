var express = require('express');
var router = express.Router();
var Route = require('../models/route').Route;
var Store = require('../models/store').Store;


/* GET all routes. */
router.get('/all/routes', function(req, res, next) {
  Route.find({}).populate('salesRep').lean().exec()
  .then(function(routes){
    res.json(routes)
  })
});

/* GET single routes. */
router.get('/single/:routeId', function(req, res, next) {
  Route.find({_id: req.params.routeId}).lean().exec()
  .then(function(route){
    res.json(route)
  })
  .catch(function(err){
    console.error(err)
  })
});
/* POST create routes. */
router.post('/create', function(req, res, next){
  Route.create(req.body)
  .then(function(route){
    res.json(route)
  })
  .catch(function(err){
    res.json(err);
    console.error(err)
  })
});
/* PUT update routes. */
router.put('/update', function(req, res, next){
  Route.update({_id: req.body._id},req.body)
  .then(function(route){
    res.json(route)
  })
  .catch(function(err){
    console.error(err)
  })
});

/* DELETE delete routes. */
router.delete('/delete/:routeId', function(req, res, next){
  Route.remove({_id: req.params.routeId})
  .then(function(result){
    res.json(result)
  })
  .catch(function(err){
    console.error(err)
  })
});

module.exports = router;
