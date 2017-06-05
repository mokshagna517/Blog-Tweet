var express = require('express');
var app = express();
var path=require('path');
var http=require('http');
var options = {
    host: "http://auth.vcap.me",
    path: "/signup",
    method: "POST",
    headers: {
        "Content-Type": "application/json"
       
    }
    body: {
        "username":
         "password":
         "email":
         "mobile":
     }
}; 

app.get('/', function (req, res) {
  console.log('Request received');
  res.sendFile(path.join(__dirname,'/html','register.html'));
});
app.get('/login', function (req, res) {
  console.log('Request received');
  res.sendFile(path.join(__dirname,'/html','login.html'));
});
app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
