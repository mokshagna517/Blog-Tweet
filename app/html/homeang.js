var app=angular.module("myApp",[]);
app.controller=("myCtrl",function($scope,$http){

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
		}, 	function errorCallback(response){
			
			alert("no article found");
			
			}
		
});