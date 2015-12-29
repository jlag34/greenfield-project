angular.module('dibs.home', [])

.controller('HomeController', function($scope, $location){
	$scope.signup = function() {
		$location.path('/dashboard');	
	};

	//These are for the placeholders
	$scope.firstName = 'First Name';
	$scope.lastName = 'Last Name';
	$scope.email = 'Email';
	$scope.password = 'Password';
});