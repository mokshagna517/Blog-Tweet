 function myfunc(){
  var request=new XMLHttpRequest;
   request.onreadystatechange=function(){
              if(request.readyState===XMLHttpRequest.DONE){
                  if(request.status===200){
                      console.log("user registered");
                      alert("New user registerd successfully.Please enter your otp below");
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


   function myotpfunc(){
  var request=new XMLHttpRequest;
   request.onreadystatechange=function(){
              if(request.readyState===XMLHttpRequest.DONE){
                  if(request.status===200){
                      console.log("user registered");
                      alert("Your mobile is confirmed.GO to login page");
                      }
                      else{
                          alert("Error.Your otp might be incorrect ");
                      }
                      
              }  
          }; 
     var otp=document.getElementById("OTP").value;
     var mobile=document.getElementById("mobileno").value;
     console.log(otp);
   request.open('POST','http://auth.vcap.me/mobile/confirm',true);
   request.setRequestHeader('Content-Type', 'application/json');
   request.send(JSON.stringify({mobile:mobile,otp:otp}));
    
 }
