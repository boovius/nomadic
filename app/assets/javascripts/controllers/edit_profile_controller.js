Nomadic.controller('EditProfileController', ['$scope', '$window', 'UserService', function($scope, $window, UserService) {
  $scope.user = {
    id: gon.currentUser.id
  }
  // if user has filled in work/home zips but not profession
  $scope.editProfile = function(){
    UserService.user.update({id: $scope.user.id}, {user: angular.snakeize($scope.user)}, function(updated_user){
      $window.location.href = '/'
    }, function(error){
      alert("There was an error")
    })
  }
}])
