Nomadic.factory('HappeningService', ['$resource', function($resource) {
  return {
    happenings: $resource('/api/happenings/')
  }
}])
