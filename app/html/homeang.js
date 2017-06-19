
var app=angular.module("myApp",[]);
app.controller("myCtrl",[ '$scope','$http', function($scope,$http){
	
	var hasLiked=false;
	$scope.likeClick=function(){
		if(!hasLiked){
			hasLiked=true;
			$scope.likeCount+=1;
			$scope.liked='Unlike';
		}else{
			hasLiked=false;
			$scope.likeCount-=1;
			$scope.liked='Like';
			
			}
			$http({
		method: "POST",
		url:   "http://data.vcap.me/v1/query",
		withCredentials:true,
		data: {
	"type" : "insert",
    "args" : {
        "table" : "Likes",
        "objects":[
            {"post_id":document.getElementById("post_id").innerHTML, "user_id":document.getElementById("author_id").innerHTML}
        ]
        
    }
    
}
			
	}).then(function successCallback(response){
		    console.log("successful");
				
		}), 	function errorCallback(response){
			
			 console.log("failure");
			
			}
			
		}
   
	$http({
		method: "POST",
		url:   "http://data.vcap.me/v1/query",
		withCredentials:true,
		data: {
	"type" : "select",
    "args" : {
        "table" : "Posts",
        "columns": ["context", "created", "id",
        {
        	"name":"author",
        	"columns":["name","id"]
        }
        ],
        "order_by":"-created",
        "limit":10
        
    }
    
}
			
	}).then(function successCallback(response){
		    console.log("successful");
				$scope.articles=response.data;
		}), 	function errorCallback(response){
			
			 console.log("failure");
			
			}
			
			$scope.isCommentClicked=false;
			$scope.commentClick=function(index){
				
				if(!$scope.isCommentClicked){
				$scope.isCommentClicked=true;
				}else{
					$scope.isCommentClicked=false;}
				}
				
				$scope.insertComment=function(index){
					console.log(document.getElementById("$index"));
					}
		
}]);
 
