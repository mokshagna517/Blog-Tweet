console.log("home");
function myfunc(){
  var request=new XMLHttpRequest;
   request.onreadystatechange=function(){
              if(request.readyState===XMLHttpRequest.DONE){
                  if(request.status===200){
                      console.log("user logged out");
                      alert(" user logged out successfully");
                      }
                      else{
                          alert("Error ");
                      }
                      
              }  
          }; 
   
    
     
   request.open('POST','http://auth.vcap.me/user/logout',true);
   request.setRequestHeader('Content-Type', 'application/json');
   request.send(null);
    
 }
