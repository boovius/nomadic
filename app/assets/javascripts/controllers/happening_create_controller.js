Nomadic.controller('HappeningCreateController', ['$scope', '$window', 'HappeningService', function($scope, $window, HappeningService) {

  $scope.createHappening = function(){
    console.log('HELLLELELELLELEKLELEL')
    HappeningService.happenings.save(angular.snakeize($scope.happening), function(happening){
      $window.location.href = '/'
    }, function(error){
      alert("There was an error")
    })
  }
}])
