var app=angular.module('myProfile',[]);
app.controller('profileCtrl',['$scope','$http',function($scope,$http){
	
	$scope.
	$http({
		method: "POST",
		url:   "http://data.vcap.me/v1/query",
		data: {
	"type" : "select",
    "args" : {
        "table" : "Profile",
        "columns": ["name", 
        {
        	"name":"auth_post",
        	"columns":["context"]
        }
        
        ]

    }
    
}
			
	}).then(function successCallback(response){
		    console.log("successful");
				$scop
		}), 	function errorCallback(response){
			
			 console.log("failure");
			
			}
	
	
	
	
	
	
	
	}]);