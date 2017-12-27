app.controller('xiangqingController', ['$scope','$http','$stateParams', function($scope,$http,$stateParams){
	$scope.id = $stateParams.id
	$http({
		url:" http://localhost:8887/"+$scope.id
	})
	.then(function(result){
		$scope.data=result.data;
	},function(err){
		console.log(err);
	})
}])