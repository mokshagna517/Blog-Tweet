var app=angular.module('myProfile',[]);

app.controller('profileCtrl',['$scope','$http',function($scope,$http){
	
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