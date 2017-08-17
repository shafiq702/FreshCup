var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var courseSchema = new Schema({
    title: {type: String, required: true},
    image: {type: String},
    summary: {type: String},
    categories: {type: [String]},
    price: {type: Number},
    length: {type: Number},
    purchases: {type: Number,default: 0},
    sales: {type: String, default: 0},
    rating: {type: Number},
    favorites: {type: Number},
    reviews:{type: [String]},
    order: {type: Number},
    link:{type: String}
});

var unitSchema = new Schema({
    course: {type: Schema.Types.ObjectId, ref:'Course', required: true},
    lessons: [{lesson: {type: Schema.Types.ObjectId, ref: 'Lesson'}}],
    title: {type: String, required: true},
    order: {type: Number, requied: true}
});

var lessonSchema = new Schema({
    unit: {type: Schema.Types.ObjectId, ref:'Unit', required: true},
    title: {type: String, required: true},
    order: {type: Number, required: true},
    video: {type: String},
    content: {type: String},
    resources: {type: [String]},
    length: {type: Number}
});


var Course = mongoose.model('Course', courseSchema);
var Lesson = mongoose.model('Lesson', lessonSchema);
var Unit = mongoose.model('Unit', unitSchema);

module.exports = {
    Course: Course,
    Lesson: Lesson,
    Unit: Unit
};
