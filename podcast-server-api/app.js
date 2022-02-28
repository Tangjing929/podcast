var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var albumRouter = require('./routes/api/albumApi');
var dataRouter = require('./routes/api/dataApi')
var inviteRouter = require('./routes/api/inviteApi')
var platformRouter = require('./routes/api/platformApi')
var realnameRouter = require('./routes/api/realnameApi')
var settlementRouter = require('./routes/api/settlementApi')
var uploadRouter = require('./routes/api/uploadApi')

var userRouter = require('./routes/api/userApi')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

//app.use('/api',albumRouter);
app.use('/api',dataRouter);
app.use('/api',inviteRouter);
app.use('/api',platformRouter);
app.use('/api',realnameRouter);
app.use('/api',settlementRouter);
app.use('/api',userRouter)
app.use('/api',uploadRouter)


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
