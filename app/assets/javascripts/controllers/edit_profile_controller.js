Nomadic.controller('EditProfileController', ['$scope', '$location', 'UserService', function($scope, $location, UserService) {
  $scope.user = {
    id: gon.currentUser.id
  }
  // if user has filled in work/home zips but not profession
  $scope.editProfile = function(){
    UserService.user.update(angular.snakeize($scope.user), {id: $scope.user.id})
  }
}])
