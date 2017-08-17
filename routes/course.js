var express = require('express');
var router = express.Router();
var Course = require('../models/course').Course;
var Lesson = require('../models/course').Lesson;
var Unit = require('../models/course').Unit;

/* GET all courses. */
router.get('/all/courses', function(req, res, next) {
  Course.find({}).lean()
  .sort('order')
  .then(function(courses){
    res.json(courses)
  })
});

/* GET single courses. */
router.get('/single/:courseId', function(req, res, next) {
  Course.find({_id: req.params.courseId}).lean().exec()
  .then(function(course){
    res.json(course)
  })
  .catch(function(err){
    console.error(err)
  })
});

/* POST new courses. */
router.post('/create', function(req, res, next){
  Course.create(req.body)
  .then(function(course){
    res.json(course)
  })
  .catch(function(err){
    res.json(err)
    console.error(err)
  })
})

/* PUT courses. */
router.put('/update', function(req, res, next){
  Course.update({_id: req.body._id},req.body)
  .then(function(result){
    res.json(result)
  })
  .catch(function(err){
    console.error(err)
  })
})

/* DELETE courses. */
router.delete('/delete/:courseId', function(req, res, next){
  Course.remove({_id: req.params.courseId})
  .then(function(result){
    res.json(result)
  })
  .catch(function(err){
    console.error(err)
  })
})
////////////////////////////////////////////////////////////////////////////////

/* GET all module for course. */
router.get('/unit/all/:courseId', function(req, res, next) {
  Unit.find({course:req.params.courseId})
  .populate('lessons.lesson')
  .then(function(units){
    res.json(units)
  })
  .catch(function(err){
    console.error(err)
  })
});

/* GET single unit. */
router.get('/unit/single/:unitId', function(req, res, next) {
  Unit.find({_id: req.params.unitId}).lean().exec()
  .then(function(unit){
    res.json(unit)
  })
  .catch(function(err){
    console.error(err)
  })
});

/* POST new unit. */
router.post('/unit/create', function(req, res, next){
  Unit.create(req.body)
  .then(function(unit){
    res.json(unit)
  })
  .catch(function(err){
    res.json(err)
    console.error(err)
  })
})

/* PUT units. */
router.put('/unit/update', function(req, res, next){
  Unit.update({_id: req.body._id}, req.body)
  .then(function(result){
    res.json(result)
  })
  .catch(function(err){
    console.error(err)
  })
})

/* DELETE courses. */
router.delete('/unit/delete/:unitId', function(req, res, next){
  Unit.remove({_id: req.params.unitId})
  .then(function(result){
    res.json(result)
  })
  .catch(function(err){
    console.error(err)
  })
})

////////////////////////////////////////////////////////////////////////////////


/* GET all lessons for course. */
router.get('/lesson/all/:unitId', function(req, res, next) {
  Lesson.find({unit:req.params.unitId}).lean().exec()
  .then(function(lessons){
    res.json(lessons)
  })
  .catch(function(err){
    console.error(err)
  })
});

/* GET single Lesson. */
router.get('/lesson/single/:lessonId', function(req, res, next) {
  Lesson.find({_id: req.params.lessonId}).lean().exec()
  .then(function(lesson){
    res.json(lesson)
  })
  .catch(function(err){
    console.error(err)
  })
});

/* POST new lessons. */
router.post('/lesson/create', function(req, res, next){
  Lesson.create(req.body)
  .then(function(lesson){
    Unit.update({_id: req.body.unit}, {$push: {lessons: {lesson: lesson._id}}})
    .then(function(result){
      res.json(result)
    })
    .catch(function(err){
      console.error(err)
    })
  })
  .catch(function(err){
    res.json(err)
    console.error(err)
  })
})

/* PUT lessons. */
router.put('/lesson/update', function(req, res, next){
  Lesson.update({_id: req.body._id}, req.body)
  .then(function(result){
    res.json(result)
  })
  .catch(function(err){
    console.error(err)
  })
})

/* DELETE courses. */
router.delete('/lesson/delete/:unitId/:lessonId', function(req, res, next){
  Lesson.remove({_id: req.params.lessonId})
  .then(function(result){
    Unit.update({_id: req.params.unitId}, {$pull: {lessons: {lesson: req.params.lesson}}})
  })
  .then(function(result){
    res.json(result)
  })
  .catch(function(err){
    console.error(err)
  })
})

module.exports = router;
