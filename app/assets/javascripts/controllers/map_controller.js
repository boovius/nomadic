Nomadic.controller("MapController", [ '$scope', function($scope) {

  $scope.latitude;
  $scope.longitude;

  if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(setLatLong)
  }
  else {
    alert("Geolcation not supported")
  }

  function setLatLong(position){
    $scope.latitude = position.coords.latitude
    $scope.longitude = position.coords.longitude

    console.log ($scope.latitude)
    console.log ($scope.longitude)

    angular.extend($scope, {
      center: {
        lat: $scope.latitude,
        lng: $scope.longitude,
        zoom: 4
      },
      defaults: {
          scrollWheelZoom: false
      }
    });
  }
}]);
