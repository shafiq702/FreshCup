var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
    articleTitle: {type: String, required: true},
    articleBody: {type: String, required: true},
    articleImage: {type: String},
    articleVideo: {type: String},
    author: {type: String, default: 'Noureen Hashim'},
    time:{type: Date, default: Date.now},
    isDraft: {type: Boolean, default: true},
});


var Post = mongoose.model('Post', postSchema);

module.exports = {
    Post: Post
};
