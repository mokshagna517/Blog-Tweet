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



app.get('/register.js',function(req,res){
res.sendFile(path.join(__dirname,'/html','register.js'));
});
request.post(function(req,res){
    'http://auth.vcap.me/signup',
    { json: {username:req.body.username, password: req.body.password, email:req.body.email, mobile:req.body.mobile } },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(username);
        }
    }
}
);


app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
