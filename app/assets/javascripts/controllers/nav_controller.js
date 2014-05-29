Nomadic.controller('NavController', ['$scope', function($scope) {

  // set facebookAppID
  $scope.facebookAppId = gon.config.facebookAppId
  console.log($scope.facebookAppId)


}])