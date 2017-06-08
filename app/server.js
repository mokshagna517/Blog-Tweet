var express = require('express');
var app = express();
var path=require('path');
var request = require('request');



app.get('/', function (req, res) {
  console.log('Request received');
  res.sendFile(path.join(__dirname,'/html','register.html'));
});
app.get('/login', function (req, res) {
  console.log('Request received');
  res.sendFile(path.join(__dirname,'/html','login.html'));
});
app.get('/home', function(req,res){
  console.log('Request received');
  res.sendFile(path.join(__dirname,'/html','home.html'));
});



app.get('/register.js',function(req,res){
res.sendFile(path.join(__dirname,'/html','register.js'));
});
app.post('http://auth.vcap.me/signup',function(req,res){
  console.log(res.body);
  });
app.post('http://auth.vcap.me/login',function(req,res){
console.log(res.body);
});
app.post('http://auth.vcap.me/mobile/confirm',function(req,res){
console.log(res.body);
});
app.post('http://auth.vcap.me/user/logout',function(req,res){
console.log(res.body);
});
app.get('/login.js',function(req,res){
res.sendFile(path.join(__dirname,'/html','login.js'));
});
app.get('/home.js',function(req,res){
res.sendFile(path.join(__dirname,'/html','home.js'));
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
