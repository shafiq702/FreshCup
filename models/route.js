var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var routeSchema = new Schema({
    routeName: {type: String},
    routeNumber: {type: Number},
    storeCount: {type: String},
    totalHours: {type: Number},
    totalMiles: {type: Number},
    salesRep: {type: Schema.Types.ObjectId, ref: 'User'},
    deliveryDay: {type: [String]},
    distance: {type: String}
});


var Route = mongoose.model('Route', routeSchema);

module.exports = {
    Route: Route
};
