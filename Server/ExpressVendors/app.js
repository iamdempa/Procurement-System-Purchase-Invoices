var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var restful = require('node-restful');
var methodOverride = require('method-override');
var cors = require('cors');

var index = require('./routes/index');
var users = require('./routes/users');
var items = require('./routes/items');
var vendors = require('./routes/vendors');
var app = express();

var swaggerUi = require('swagger-ui-express')
var swaggerDocument = require('./swagger.json');

mongoose.Promise = global.Promise;
//mongodb+srv://asiri:asiri123@cluster0-lok9v.mongodb.net/procurementDB?retryWrites=true&w=majority
const connection = mongoose.connect('mongodb+srv://asiri:asiri123@cluster0-lok9v.mongodb.net/procurementDB?retryWrites=true&w=majority', {useNewUrlParser: true, useFindAndModify: false })
  .then(() =>  console.log('MongoDB connection successful'))
  .catch((err) => console.error(err));

	
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(bodyParser.json({type:'application/json'}));
app.use(methodOverride());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
app.use('/', index);
app.use('/users', users);
app.use('/api/v1/items', items);
app.use('/api/v1/vendors', vendors);


/* SWAGGER API DOC*/
app.use('/api/v1', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
//app.use('/api/v1', router);

var Category = app.resource = restful.model('category', mongoose.Schema({
  cat_name: String,
}))
.methods(['get', 'post', 'put', 'delete']);

Category.register(app, '/category');

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
  res.json(err.message);
});


module.exports = app;
