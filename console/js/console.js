'use strict';

var angular = require('angular');

require('oclazyload');
require('angular-animate');
require('angular-aria');
require('angular-material');
require('angular-ui-router');
require('ui-router-extras');

require('./directives/directives.js');
require('./services/services.js');

require('./demo/demo.js');

require('../scss/index.scss');
require('angular-material/angular-material.css');
require('../images/icons/menu.svg');


angular.module('cogniance.console', [
        'ngMaterial',

        'cogniance.console.directives',
        'cogniance.console.services',

        'cogniance.console.demo',

        'ui.router',

        'oc.lazyLoad',
        'ct.ui.router.extras.future'

    ])
    .config(function (
            $stateProvider,
            $urlRouterProvider,
            $futureStateProvider,
            $ocLazyLoadProvider,
            $mdThemingProvider
        ) {


        $ocLazyLoadProvider.config ({
            debug: true,
            modules: [{
                name: 'cogniance.advancedTV',
                files: ['advancedTV.js']
            }, {
                name: 'cogniance.totalTag',
                files: ['totalTag.js']
            }, {
                name: 'cogniance.ampRanker',
                files: ['ampRanker.js']
            }]
        });

        var ocLazyLoadStateFactory = function ($q, $ocLazyLoad, futureState) {
            var deferred = $q.defer();
            $ocLazyLoad.load(futureState.module).then(function(name) {
                deferred.resolve();
            }, function() {
                deferred.reject();
            });
            return deferred.promise;
        };

        $futureStateProvider.stateFactory('ocLazyLoad', ocLazyLoadStateFactory);

        $futureStateProvider.futureState({
            'stateName': 'advancedTV',
            'urlPrefix': '/advanced-tv',
            'type': 'ocLazyLoad',
            'module': 'cogniance.advancedTV'
        });
        $futureStateProvider.futureState({
            'stateName': 'totalTag',
            'urlPrefix': '/total-tag',
            'type': 'ocLazyLoad',
            'module': 'cogniance.totalTag'
        });
        $futureStateProvider.futureState({
            'stateName': 'ampRanker',
            'urlPrefix': '/amp-ranker',
            'type': 'ocLazyLoad',
            'module': 'cogniance.ampRanker'
        });


        // Current states of console module
        $urlRouterProvider.otherwise('/console');

        $stateProvider
            .state('console', {
                url: '/console',
                template: require('./console.html')
            })

    })
    .controller("consoleCtrl", require("./console.controller.js"));

