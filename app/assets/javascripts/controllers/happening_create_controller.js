Nomadic.controller('HappeningCreateController', ['$scope', '$window', 'HappeningService', function($scope, $window, HappeningService) {

  $scope.roving = false
  $scope.stationary = false

  $scope.showRoving = function(){
    $scope.roving = true
    $scope.stationary = false
  }

  $scope.showStationary = function(){
    $scope.stationary = true
    $scope.roving = false
  }

  $scope.happening = {}

  $scope.createHappening = function(){
    HappeningService.happenings.save(angular.snakeize($scope.happening), function(happening){
      $window.location.href = '/'
    }, function(error){
      alert("There was an error")
    })
  }
}])
