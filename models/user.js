var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    firstName: {type: String},
    lastName: {type: String},
    email: {type: String, required: true},
    password: {type: String, required: true},
    userType: {type: String},
});

// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};


var User = mongoose.model('User', userSchema);

module.exports = {
    User: User
};
