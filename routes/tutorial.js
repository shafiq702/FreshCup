var express = require('express');
var router = express.Router();
var Tutorial = require('../models/tutorial').Tutorial;
var dateFormat = require('dateformat');

/* GET all posts. */
router.get('/all/posts', function(req, res, next) {
  Tutorial.find({}).lean().exec()
  .then(function(posts){
    posts = posts.map(function(post){
      post.time = dateFormat(post.time, "fullDate")
      return post
    })
    res.json(posts)
  })
});

/* GET all public posts. */
router.get('/all/public/posts', function(req, res, next) {
  Tutorial.find({isDraft: false}).lean().exec()
  .then(function(posts){
    posts = posts.map(function(post){
      post.time = dateFormat(post.time, "fullDate")
      if(post.articleBody){
        post.preview = post.articleBody.split("").slice(0,103)
        post.preview = post.preview.map(function(char){
            if(char === "#" || char === "*"){
              char = ""
            }
            return char
          })
        post.preview = post.preview.join("")
        return post
      }
    })
    res.json(posts)
  })
  .catch(function(err){
    console.error(err)
  })
});

/* GET single posts. */
router.get('/single/post/:postId', function(req, res, next) {
  Tutorial.find({_id: req.params.postId}).lean().exec()
  .then(function(post){
    post[0].time = dateFormat(post[0].time, "fullDate")
    res.json(post)
  })
  .catch(function(err){
    console.error(err)
  })
});

router.post('/create/post', function(req, res, next){
  Tutorial.create(req.body)
  .then(function(post){
    res.json(post)
  })
  .catch(function(err){
    res.json(err)
    console.error(err)
  })
})

router.put('/update/post', function(req, res, next){
  Tutorial.update({_id: req.body._id},req.body)
  .then(function(post){
    res.json(post)
  })
  .catch(function(err){
    console.error(err)
  })
})

router.delete('/delete/post/:postId', function(req, res, next){
  Tutorial.remove({_id: req.params.postId})
  .then(function(result){
    res.json(result)
  })
  .catch(function(err){
    console.error(err)
  })
})

module.exports = router;
