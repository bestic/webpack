'use strict';

var angular = require('angular');

angular.module('cogniance.console.services', [])
  .factory('Campaign', ['$resource', function($resource) {
    return $resource('/campaign/:id', {}, {});
}]);
