angular.module('dibs', [
	'dibs.home',
	'dibs.dashboard',
	'ngRoute'
	])

.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'app/home/home.html',
			controller: 'HomeController'
		})
		.when('/dashboard', {
			templateUrl:'app/dashboard/dashboard.html',
			controller:'DashboardController'
		})
		.otherwise({
			redirectTo: '/'
		});
})