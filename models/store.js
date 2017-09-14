var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var storeSchema = new Schema({
    storeNumber: {type: String},
    corpName: {type: String},
    dba: {type: String},
    streetAddress: {type: String},
    city: {type: String},
    state: {type: String},
    zipcode: {type: String},
    storePhoneNumber: {type: String},
    serviceCategory: {type: String},
    emailAddress: {type: String},
    salesTaxId: {type: String},
    status: {type: String, enum:['active', 'inactive', 'pending'], default: 'pending'},
    ownerFirstName: {type: String},
    ownerLastName: {type: String},
    ownerPhoneNumber: {type: String},
    ownerEmailAddress: {type: String},
    storeManager: {type: String},
    route: {type: Schema.Types.ObjectId, ref: 'Route'},
});


var Store = mongoose.model('Store', storeSchema);

module.exports = {
    Store: Store
};
