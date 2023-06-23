var app = angular.module("myApp", []);
app.controller("myController", function($scope) {
	$scope.users = ['Микола', 'Василь', 'Петро'];
	$scope.moreUsers = ['Аня', 'Валя', 'Маша'];
	$scope.counter = 0;
	$scope.addUser = function() {
		if($scope.counter >= $scope.moreUsers.length) {
			$scope.users.sort();
		} else {
			$scope.users.push($scope.moreUsers[$scope.counter]);
			$scope.counter++;
		}
	};
});