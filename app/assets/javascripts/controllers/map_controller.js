Nomadic.controller("MapController", [ '$scope', '$http', function($scope, $http) {
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

  // Get zip code data from a JSON file
  $http.get("../../../app/assets/javascripts/directives/zip-code-tabulation-areas-2012.geo.json").success(function(data, status) {
    angular.extend($scope, {
      geojson: {
        data: data,
        style: {
          fillColor: 'green',
          weight: 2,
          opacity: 1,
          color: 'white',
          dashArray: '3',
          fillOpacity: 0.7
        }
      }
    });
  });
}]);