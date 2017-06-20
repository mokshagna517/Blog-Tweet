var app=angular.module('myProfile',[]);



app.controller('profileCtrl',['$scope','$http',function($scope,$http){
	$http({
		method: "GET",
		url:   "http://auth.vcap.me/user/account/info",
		withCredentials:true,
		
			
	}).then(function successCallback(response){
		    console.log("successful info");
				$scope.information=response.data;
		}), 	function errorCallback(response){
			
			 console.log("failure");
			
			}
	$scope.posts=[];
	$http({
		method: "POST",
		url:   "http://data.vcap.me/v1/query",
		data: {
	"type" : "select",
    "args" : {
        "table" : "Profile",
        "columns": ["id","name", 
        {
        	"name":"auth_post",
        	"columns":["context"]
        }
        
        ],
        "where":{"id":user_id}

    }
    
}
			
	}).then(function successCallback(response){
		    console.log("successful");
				$scope.posts=response.data;
				
		}), 	function errorCallback(response){
			
			 console.log("failure");
			
			}
	
	
	
	
	
	
	
	}]);