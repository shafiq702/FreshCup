var express = require('express');
var router = express.Router();
var Order = require('../models/orders').Order;



/* GET all orders. */
router.get('/all/orders', function(req, res, next) {
  Order.find({}).lean().exec()
  .then(function(orders){
    res.json(orders)
  })
});

// GET Single User Order
router.get('/single/user/:userId', function(req, res, next) {
  Order.find({_id: req.params.userId})
  .populate('Course')
  .populate('Book')
  .populate('User')
  .then(function(order){
    res.json(order)
  })
  .catch(function(err){
    console.error(err)
  })
});

/* GET single orders. */
router.get('/single/:orderId', function(req, res, next) {
  Order.find({_id: req.params.orderId}).lean().exec()
  .then(function(order){
    res.json(order)
  })
  .catch(function(err){
    console.error(err)
  })
});

router.post('/create', function(req, res, next){
  Order.create(req.body)
  .then(function(order){
    res.json(order)
  })
  .catch(function(err){
    res.json(err)
    console.error(err)
  })
})

router.put('/update', function(req, res, next){
  Order.update({_id: req.body._id},req.body)
  .then(function(order){
    res.json(order)
  })
  .catch(function(err){
    console.error(err)
  })
})

router.delete('/delete/:orderId', function(req, res, next){
  Order.remove({_id: req.params.orderId})
  .then(function(result){
    res.json(result)
  })
  .catch(function(err){
    console.error(err)
  })
})

module.exports = router;
