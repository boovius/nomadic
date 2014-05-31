Nomadic.factory('UserService', ['$resource', function($resource) {
  return {
    user: $resource('/api/users/:id', {id: '@id'}, {update: {method: 'PUT'}})
  }
}])
