console.log("home");
function myfunc(){
  var request=new XMLHttpRequest;
   request.onreadystatechange=function(){
              if(request.readyState===XMLHttpRequest.DONE){
                  if(request.status===200){
                      console.log("user logged out");
                      alert(" you are logged out successfully");
                       window.location="login";
                      }
                      else{
                          alert("Error ");
                      }
                      
              }  
          }; 
   
    
     
   request.open('POST','http://auth.vcap.me/user/logout',true);
   request.withCredentials=true;
   
   request.setRequestHeader('Content-Type', 'application/json');
   request.setRequestHeader('Authorization', 'Bearer');
    
   request.send(null);
    
 }
