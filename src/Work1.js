angular.module('myApp', [])
.controller('MyController', ['$scope', function($scope) {
  $scope.numbers = [1, 2, 3, 4, 5];
}]);