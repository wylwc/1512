app.controller('zhuController', ['$scope','$http', function($scope,$http){
	$http({
		url:" http://localhost:8887/data"
	})
	.then(function(result){
		$scope.data=result.data;
	},function(err){
		console.log(err);
	})
}])