
var app=angular.module("myApp",[]);
app.controller("myCtrl",[ '$scope','$http', function($scope,$http){
   
	$http({
		method: "POST",
		url:   "http://data.vcap.me/v1/query",
		data: {
			   "type" : "select",
    "args" : {
        "table" : "Posts",
        "columns": ["context"]
        
    }

	}	
			
	}).then(function successCallback(response){
		    console.log("successful");
				$scope.articles=response.data;
		}), 	function errorCallback(response){
			
			 console.log("failure");
			
			}
		
}]);
