//= require angular
//= require angular-resource
//= require angular-route
//= require_self
//= require_tree ./controllers
//= require_tree ./directives
//= require_tree ./services

Nomadic = angular.module('Nomadic', [
  'ngRoute',
  'ngResource',
  'leaflet-directive'
])

.config(['$httpProvider', '$routeProvider', '$locationProvider', function($httpProvider, $routeProvider, $locationProvider) {

}])

// Repurposed function to convert camelCase to snake_case
// https://github.com/nathan7/snakeize
angular.snakeize = function(obj) {
  if (!obj || typeof obj !== 'object' || obj instanceof Date === true) return obj;
  if (Array.isArray(obj)) return obj.map(angular.snakeize);
  return Object.keys(obj).reduce(function (acc, key) {
      var camel = key[0].toLowerCase() + key.slice(1).replace(/([A-Z]+)/g, function (m, x) {
          return '_' + x.toLowerCase();
      });
      acc[camel] = angular.snakeize(obj[key]);
      return acc;
  }, {});
}
