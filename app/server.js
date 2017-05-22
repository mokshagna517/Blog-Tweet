var express = require('express');
var app = express();

app.get('/', function (req, res) {
  console.log('Request received');
  res.send('Hello world Once again!');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
