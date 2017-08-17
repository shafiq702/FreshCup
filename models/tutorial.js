var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tutorialSchema = new Schema({
    articleTitle: {type: String, required: true},
    articleBody: {type: String},
    articleImage: {type: String},
    articleVideo:{type: String},
    articleType: {type: String, required: true},
    author: {type: String, default: 'Shafiq Marediya'},
    time:{type: Date, default: Date.now},
    isDraft: {type: Boolean, default: true},
});


var Tutorial = mongoose.model('Tutorial', tutorialSchema);

module.exports = {
    Tutorial: Tutorial
};
