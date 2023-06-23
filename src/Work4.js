var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
	$scope.numbers = [5, 2, 8, 4, 9];
	$scope.sortBy = function() {
		$scope.numbers.sort();
	};
});