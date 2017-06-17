console.log("home");

function myfunc(){
  var request=new XMLHttpRequest;
   request.onreadystatechange=function(){
              if(request.readyState===XMLHttpRequest.DONE){
                  if(request.status===200){
                      console.log("user logged out");
                      alert(" you are logged out successfully");
                       window.location="/";
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
 function insert(){
  var request=new XMLHttpRequest;
  var x=document.getElementById("textarea").value;
  console.log(x);
   request.onreadystatechange=function(){
              if(request.readyState===XMLHttpRequest.DONE){
                  if(request.status===200){
                      console.log("data inserted");
                      alert(" Your post was successfully inserted into the database.");
                       document.getElementById('textarea').value=" ";
                      }
                      else{
                          alert("Error ");
                      }
                      
              }  
          }; 
   
    
     
   request.open('POST','http://data.vcap.me/v1/query',true);
   request.withCredentials=true;
   
   request.setRequestHeader('Content-Type', 'application/json');
   request.setRequestHeader('Authorization', 'Bearer');
    
   request.send(JSON.stringify({
   	
   	
    "type":"insert",
    "args":{
        "table":"Posts",
        "objects":[
            {"context":document.getElementById("textarea").value,"user_id":document.getElementById("txt").value}
            
        ],
        "returning":["id"]
    }
}));
}


	

   	
   	
   	
   	
   
   
   
   
   
   
   
   
    
 

