angular.module('green.home', [])

.controller('HomeController', function($scope, $location){
	$scope.signin = function() {
		$location.path('/dash');	
	}
});