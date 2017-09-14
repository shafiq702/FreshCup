var express = require('express');
var router = express.Router();
var Store = require('../models/store').Store;



/* GET all stores. */
router.get('/all/stores', function(req, res, next) {
  Store.find({}).populate({path:'route', populate:{path: 'salesRep', model: 'User'}}).lean().exec()
  .then(function(stores){
    res.json(stores)
  })
});

/* GET single stores. */
router.get('/single/:storeId', function(req, res, next) {
  Store.find({_id: req.params.storeId}).lean().exec()
  .then(function(store){
    res.json(store)
  })
  .catch(function(err){
    console.error(err)
  })
});
/* POST create stores. */
router.post('/create', function(req, res, next){
  Store.create(req.body)
  .then(function(store){
    res.json(store)
  })
  .catch(function(err){
    res.json(err);
    console.error(err)
  })
});
/* PUT update stores. */
router.put('/update', function(req, res, next){
  Store.update({_id: req.body._id},req.body)
  .then(function(store){
    res.json(store)
  })
  .catch(function(err){
    console.error(err)
  })
});

/* DELETE delete stores. */
router.delete('/delete/:storeId', function(req, res, next){
  Store.remove({_id: req.params.storeId})
  .then(function(result){
    res.json(result)
  })
  .catch(function(err){
    console.error(err)
  })
});

module.exports = router;
