var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();
var server = require('http').Server(app);
var passport = require('passport');
var session = require('express-session');
var flash = require('connect-flash');

//configuration
var passportConfig = require('./config/passport')(passport); // pass passport for configuration
// var secret = require('./config/variables').SESSION_SECRET

// mongoose setup
mongoose.Promise = require('bluebird');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/icerv');
mongoose.connection.on('error', console.error.bind(console));
// // // body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// required for passport
app.use(session({ secret: "thisissupercool" }) || session({secret:process.env.secret})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash())

//import routes
var auth = require('./routes/auth');
var blog = require('./routes/blog');
var user = require('./routes/user');
var book = require('./routes/book');
var course = require('./routes/course');
var order = require('./routes/order');
var tutorial = require('./routes/tutorial');
var mailchimp = require('./routes/mailchimp');

//routes
app.use('/auth', auth);
app.use('/blog', blog);
app.use('/user', user);
app.use('/book', book);
app.use('/course', course);
app.use('/order', order);
app.use('/tutorial', tutorial);
app.use('/mailchimp', mailchimp);

// static routes
app.use(express.static(path.join(__dirname, './node_modules/')));
app.use(express.static(path.join(__dirname, './dist/')));


// load ./index.html
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './dist/index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.json('error');
});

//run local express server
server.listen(process.env.PORT || 5000, () => console.log('App is running on port 5000'));

module.exports = app;
