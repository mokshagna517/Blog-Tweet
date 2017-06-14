
var app=angular.module("myApp",[]);
app.controller("myCtrl",[ '$scope','$http', function($scope,$http){
   $scope.articles=[];
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
		
				$scope.articles=response.data.context;
		}), 	function errorCallback(response){
			
			 $scope.articles=response.data;
			
			}
		
}]);
