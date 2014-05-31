Nomadic.controller('EditProfileController', ['$scope', '$location', 'UserService', function($scope, $location, UserService) {
  console.log('hello')

  // if user has filled in work/home zips but not profession
  $scope.completeProfile = function(){
    UserService.user.update(angular.snakeize($scope.user))
  }
}])
