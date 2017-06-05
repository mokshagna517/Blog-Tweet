 function myfunc(){
  var request=new XMLHttpRequest;
   request.onreadystatechange=function(){
              if(request.readyState===XMLHttpRequest.DONE){
                  if(request.status===200){
                      console.log("user registered");
                      alert("New user registerd successfully");
                      }
                      else{
                          alert("Error ");
                      }
                      
              }  
          }; 
    var username=document.getElementById("username").value;
    var password=document.getElementById("exampleInputPassword1").value;
    var email=document.getElementById("exampleInputEmail1").value;
     var mobile=document.getElementById("mobileno").value;
     console.log(username);
   request.open('POST','http://auth.vcap.me/signup',true);
   request.setRequestHeader('Content-Type', 'application/json');
   request.send(JSON.stringify({username:username,password:password,email:email,mobile:mobile}));
    
 }
