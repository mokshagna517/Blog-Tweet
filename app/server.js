var express = require('express');
var app = express();
var path=require('path');

app.get('/register', function (req, res) {
  console.log('Request received');
  res.sendFile(path.join(__dirname,'/html','register.html'));
});
app.get('/welcome', function (req, res) {
  console.log('Request received');
  res.send('Welcome to the next page');
});
app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
