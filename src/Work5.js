var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
  $scope.languages = ['html', 'css', 'js', 'php'];
  
  $scope.changeLanguage = function(index) {
    var language = $scope.languages[index];
    if (language.slice(-1) !== '+') {
      var newLanguage = language + '+';
      $scope.languages[index] = newLanguage;
    }
  }
});