angular.module('green', [
	'green.home',
	'green.dash'
	'ngRoute'
	])

.config(function($routeProvider){
	$routeProvider
		.when('/dashboard', {
			templateUrl:'app/dash/dash.html',
			controller:'DashController'
		})
		.otherwise({
			redirectTo: '/'
		});
})