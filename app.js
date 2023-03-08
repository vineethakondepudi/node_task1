var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var db = require('./database/database');
var db1 = require('./database/database1');
var db2 = require('./database/atask1');
var m1 = require('./models/atask1');
var token = require('./jwtToken');
var annatask = require('./models/annatask');
var chinna = require('./models/chinna_task');
var srTask2 = require('./models/sirTask2');



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var staticdataRouter = require('./routes/staticdata');
var joiRouter = require('./routes/joivalid');
var atask1 = require('./routes/atask1');
var annaRouter = require('./routes/annatask');
var joiValidationTask1Router = require('./routes/joiValidationTask');
var chinnaRouter = require('./routes/chinna_task');
var sirTask2 = require('./routes/sirTask2')


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/staticdata',staticdataRouter);
app.use('/joi',joiRouter);
app.use('/task',atask1);
app.use('/atask',annaRouter);
app.use('/joi',joiValidationTask1Router);
app.use('/chinna',chinnaRouter);
app.use('/sir',sirTask2)



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
