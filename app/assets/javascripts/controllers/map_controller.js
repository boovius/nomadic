Nomadic.controller("MapController", [ '$scope', function($scope) {
    angular.extend($scope, {
      center: {
        lat: 34.0500,
        lng: -118.2500,
        zoom: 12
      },
      defaults: {
        scrollWheelZoom: false,
        tileLayer: "https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png"
      }
    });
}]);