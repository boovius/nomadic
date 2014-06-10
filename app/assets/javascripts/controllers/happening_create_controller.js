Nomadic.controller('HappeningCreateController', ['$scope', '$window', 'HappeningService', function($scope, $window, HappeningService) {

  $scope.happening = {}

  $scope.createHappening = function(){
    HappeningService.happenings.save(angular.snakeize($scope.happening), function(happening){
      $window.location.href = '/'
    }, function(error){
      alert("There was an error")
    })
  }
}])
