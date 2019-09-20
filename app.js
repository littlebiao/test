var createError = require('http-errors');
var express = require('express');
var path = require('path');
var bodyParse = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();
const glob = require('glob');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));


app.use(function (req, res, next){      // 拦截器
  const url = req.originalUrl
    // if (!token.checkToken(req.cookies && req.cookies.token) && url.includes('/management') && url != '/management/login') {
    //     return res.redirect("/management/login");
    // }
	next()
})

app.use('/', require('./routes/index'))

// 添加路由
glob.sync('routes/**/*.js').forEach((val) =>  {
    let path = val.split('routes')[1].split('.')[0]
    app.use(path, require(`./${val.split('.')[0]}`))
})


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
