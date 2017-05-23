var express = require('express');
var app = express();
var path=require('path');

app.get('/', function (req, res) {
  console.log('Request received');
  res.sendFile(path.join(__dirname,'app','index.html'));
});
app.get('/welcome', function (req, res) {
  console.log('Request received');
  res.send('Welcome to the next page');
});
app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
