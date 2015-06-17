'use strict';

var angular = require('angular');

angular.module('cogniance.console.directives', [])
       .directive('helloWorld', function() {

            return function(scope, element) {
                element.html('Hello user!');
            };


       })
       .directive('scroll', function($window) {

            return function(scope, element, attrs) {
                angular.element($window).bind("scroll", function(){
                    if (this.scrollY > 34) {
                        scope.regular = false;
                        scope.fixed = true;
                    } else {
                        scope.regular = true;
                        scope.fixed = false;
                    }

                    scope.$apply();
                });
            }

       });