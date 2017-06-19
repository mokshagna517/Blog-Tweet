console.log("login");

function myfunc(){
  var request=new XMLHttpRequest;
   request.onreadystatechange=function(){
              if(request.readyState===XMLHttpRequest.DONE){
                  if(request.status===200){
                      console.log("user logged in");
                  window.user_id = JSON.parse(this.responseText).hasura_id;
                  console.log(user_id);  
                 window.localStorage.setItem("u_id",user_id);
                       
                      alert(" You are logged in successfully and your user id is"+ user_id);
                      window.location="home";
                      }
                      else{
                          alert("Error ");
                      }
                      
              }  
          }; 
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    
     console.log(username);
   request.open('POST','http://auth.vcap.me/login',true);
   request.setRequestHeader('Content-Type', 'application/json');
   request.send(JSON.stringify({username:username,password:password}));
    
 }
