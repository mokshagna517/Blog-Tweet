var app=angular.module('myUser',[]);
app.controller('userCtrl',['$scope','$http',function($scope,$http){
	
	
	$http({
		method: "POST",
		url:   "http://data.vcap.me/v1/query",
		data: {
	"type" : "select",
    "args" : {
        "table" : "Profile",
        "columns": ["name", "place"]

    }
    
}
			
	}).then(function successCallback(response){
		    console.log("successful");
				$scope.user=response.data;
		}), 	function errorCallback(response){
			
			 console.log("failure");
			
			}
	
	
	
	
	
	
	
	}]);