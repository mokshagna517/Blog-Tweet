var express = require('express');
var app = express();
var path=require('path');
var request = require('request');
var fetch = require('node-fetch');

var DEVELOPMENT = (process.env.NODE_ENV == 'production') ? false : true;
var headers = {'Content-Type': 'application/json'};
var url;
if (DEVELOPMENT) {
  headers.Authorization = 'Bearer ' + process.env.ADMIN_TOKEN;
  url = `https://data.vcap.me`;
} else {
  url = 'http://data.hasura';
}
headers['X-Hasura-Role'] = 'admin';
headers['X-Hasura-User-Id'] = 1;
app.get('/test', function (req, res) {
  var schemaFetchUrl = url + '/v1/query';
  var options = {
    method: 'POST',
    headers,
    body: JSON.stringify({
      "type" : "select",
    "args" : {
        "table" : "Posts",
        "columns": ["id", "context"]
        
    }})
  };
  fetch(schemaFetchUrl, options)
    .then(
      (response) => {
        response.text()
          .then(
            (data) => {
              res.send(data);
            },
            (e) => {
              res.send('Error in fetching current schema: ' + err.toString());
            })
          .catch((e) => {
            e.stack();
            res.send('Error in fetching current schema: ' + e.toString());
          });
      },
      (e) => {
        console.error(e);
        res.send('Error in fetching current schema: ' + e.toString());
      })
    .catch((e) => {
      e.stackTrace();
      res.send('Error in fetching current schema: ' + e.toString());
    });
});




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
app.get('/homeang.js',function(req,res){
	res.sendFile(path.join(__dirname,'/html','homeang.js'));
});
app.get('/profile', function(req,res){
	console.log("profile page requested");
	res.sendFile(path.join(__dirname,'/html','profile.html'));
});
app.post(url+'/v1/query/',function(req,res){
	console.log(res.body);
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
