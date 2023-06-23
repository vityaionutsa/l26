var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
  $scope.items = [1, 2, 3, 4, 5];

  $scope.reverseList = function() {
    $scope.items = $scope.items.reverse();
  }
});