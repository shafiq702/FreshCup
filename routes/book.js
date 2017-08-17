var express = require('express');
var router = express.Router();
var Book = require('../models/book').Book;



/* GET all books. */
router.get('/all/books', function(req, res, next) {
  Book.find({}).lean().exec()
  .then(function(books){
    res.json(books)
  })
});

/* GET single books. */
router.get('/single/:bookId', function(req, res, next) {
  Book.find({_id: req.params.bookId}).lean().exec()
  .then(function(book){
    res.json(book)
  })
  .catch(function(err){
    console.error(err)
  })
});

router.post('/create', function(req, res, next){
  Book.create(req.body)
  .then(function(book){
    res.json(book)
  })
  .catch(function(err){
    res.json(err)
    console.error(err)
  })
})

router.put('/update', function(req, res, next){
  Book.update({_id: req.body._id},req.body)
  .then(function(book){
    res.json(book)
  })
  .catch(function(err){
    console.error(err)
  })
})

router.delete('/delete/:bookId', function(req, res, next){
  Book.remove({_id: req.params.bookId})
  .then(function(result){
    res.json(result)
  })
  .catch(function(err){
    console.error(err)
  })
})

module.exports = router;
