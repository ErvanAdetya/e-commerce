const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const index = require('./routes/index');
const users = require('./routes/users');
const items = require('./routes/items');

var app = express();


const dbUrl = 'mongodb://localhost:27017/travey';  //Local Test
// const dbUrl = 'mongodb://ervan:123456@ds029615.mlab.com:29615/travey'; //Online Db

mongoose.connect(dbUrl, (err) => {
  if(!err) {console.log('Connected to Database');}
  else {throw new Error(err);}
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use('/', index);
app.use('/users', users);
app.use('/items', items);


app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
