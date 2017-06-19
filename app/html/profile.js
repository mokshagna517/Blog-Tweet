console.log("Profilejs");
console.log(user_id);
document.getElementById('btn').onclick=function profunc(){
  var request=new XMLHttpRequest;
   request.onreadystatechange=function(){
              if(request.readyState===XMLHttpRequest.DONE){
                  if(request.status===200){
                      console.log("successful query");
                      alert(" Information updated successfully");
                    
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
    
   request.send(JSON.stringify({
   	
   	
    "type":"insert",
    "args":{
        "table":"Profile",
        "objects":[
            {"name":document.getElementById("name").value,"id":document.getElementById("userid").value,
            	"place":document.getElementById("place").value,"dob":document.getElementById("dob").value}
         
        ]
        
    }
})
   
   );
    
 }