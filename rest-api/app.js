var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var healthCheckRouter = require('./routes/index');
var accountsRouter = require('./routes/accounts');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', healthCheckRouter);
app.use('/accounts', accountsRouter);

module.exports = app;
