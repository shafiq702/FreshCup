var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
    body: {type: String},
    store: {type: Schema.Types.ObjectId, ref: 'Store'},
    author:{type: Schema.Types.ObjectId, ref: 'User'},
    timestamp:{type: Date, default: Date.now},
});


var Comment = mongoose.model('Comment', commentSchema);

module.exports = {
    Comment: Comment
};
