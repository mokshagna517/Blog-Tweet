 console.log("Register js called");
  var button=document.getElementById("button");
  button.onclick=function(){
   var request=new XMLHttpRequest;
   request.onreadystatechange=function(){
     if(request.readyState===XMLHttpRequest.DONE){
     if(request.status===200){
       alert("New User created successfully"); 
      }
    else {
      alert("Something wrong on the server");
     }
      }



   }
   var username=document.getElementById("username").value;
   var password=document.getElementById("exampleInputPassword1").value;
   var email=document.getElementById("exampleInputEmail1");
   var mobile=document.getElementById("mobileno");
   console.log(username);
    
  request.open('POST','http://auth.vcap.me/signup',true);
   request.setRequestHeader('Content-Type','application/json');
   request.send(JSON.stringify({username: username, password: password, email: email, mobile: mobile}));
   



   };
