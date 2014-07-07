Nomadic.controller("MapController", ['$scope', 'GeolocationService', function($scope, GeolocationService) {

  $scope.latitude  = GeolocationService.currentPosition.latitude
  $scope.longitude = GeolocationService.currentPosition.longitude

  angular.extend($scope, {
    center: {
      lat: $scope.latitude,
      lng: $scope.longitude,
      zoom: 11
    },
    defaults: {
        scrollWheelZoom: false
    }
  })
}]);
