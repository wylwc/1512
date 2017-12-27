var app = angular.module('app', ['ui.router']);

app.config(['$stateProvider',function($stateProvider) {
	$stateProvider
	.state("zhu",{
		url:"/zhu",
		templateUrl:'App/View/zhu.html',
		controller:"zhuController"	
	})
	.state("xiangqing",{
		url:"/xiangqing/:id",
		templateUrl:'App/View/xiangqing.html',
		controller:"xiangqingController"	
	})
}])