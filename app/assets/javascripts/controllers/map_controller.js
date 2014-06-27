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
      },
      layers: {
        baselayers: {
          stamen: {
            name: 'Stamen',
            url: "https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png",
            type: 'stamen'
          }
        },
        overlays: {
          wms: {
            name: 'EEUU States (WMS)',
            type: 'wms',
            visible: true,
            url: 'http://suite.opengeo.org/geoserver/usa/wms',
            layerParams: {
              layers: 'usa:states',
              format: 'image/png',
              transparent: true
            }
          }
        }
      }
    });
}]);