var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
    title: {type: String, required: true},
    image: {type: String, required: true},
    summary: {type: String, required: true},
    price: {type: Number, required: true},
    Purchases: {type: Number,default: 0},
    sales: {type: String, default: 0},
    rating: {type: [String]}
});


var Book = mongoose.model('Book', bookSchema);

module.exports = {
    Book: Book
};
