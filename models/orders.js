var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orderSchema = new Schema({
    date: {type: Date, default: Date.now},
    status:{type: String, default:'pending'},
    products:{type: Object, required: true},
    customer: {type: Schema.Types.ObjectId, ref:'User'}
});

var Order = mongoose.model('Order', orderSchema);

module.exports = {
    Order: Order
};
