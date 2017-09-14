var express = require('express');
var router = express.Router();
var Comment = require('../models/comment').Comment;
var dateFormat = require('dateformat');

/* GET all comment. */
router.get('/all/:storeId', function(req, res, next) {
    Comment.find({store: req.params.storeId}).populate('author').lean().exec()
        .then(function(comments){
            comments = comments.map(function(comment){
                comment.timestamp = dateFormat(comment.timestamp, "dddd, mmmm dS, yyyy, h:MM:ss TT")
                return comments
            });
            res.json(comments)
        })
});

/* GET single comment. */
router.get('/single/:commentId', function(req, res, next) {
    Comment.find({_id: req.params.commentId}).lean().exec()
        .then(function(comment){
            res.json(comment)
        })
        .catch(function(err){
            console.error(err)
        })
});
/* POST create comment. */
router.post('/create', function(req, res, next){
    Comment.create(req.body)
        .then(function(comment){
            res.json(comment)
        })
        .catch(function(err){
            res.json(err);
            console.error(err)
        })
});
/* PUT update comment. */
router.put('/update', function(req, res, next){
    Comment.update({_id: req.body._id},req.body)
        .then(function(comment){
            res.json(comment)
        })
        .catch(function(err){
            console.error(err)
        })
});

/* DELETE delete comment. */
router.delete('/delete/:commentId', function(req, res, next){
    Comment.remove({_id: req.params.commentId})
        .then(function(result){
            res.json(result)
        })
        .catch(function(err){
            console.error(err)
        })
});

module.exports = router;
