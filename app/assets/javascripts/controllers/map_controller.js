Nomadic.controller("MapController", [ '$scope', function($scope) {
  angular.extend($scope, {
    center: {
      lat: 34.004484,
      lng: -118.4796064,
      zoom: 11
    },
    defaults: {
        scrollWheelZoom: false
    }
  })
}]);
