var express = require('express');
var app = express();
var path=require('path');


app.get('/', function (req, res) {
  console.log('Request received');
  res.sendFile(path.join(__dirname,'/html','register.html'));
});
app.get('/login', function (req, res) {
  console.log('Request received');
  res.sendFile(path.join(__dirname,'/html','login.html'));
});
app.get('/register.js',function(req,res){
res.sendFile(path.join(__dirname,'/html','register.js'));
});
app.post('http://auth.vcap.me/signup',function(req,res){
var username=req.body.username;
var password=req.body.password;
var email=req.body.email;
var mobile=req.body.mobile;

});
app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
