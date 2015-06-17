var angular = require("angular");
require('angular-ui-router');


angular.module("cogniance.console.demo", ['ui.router'])
    .config(function($stateProvider) {
        $stateProvider
            .state('console.demo', {
                'url': '/demo',
                'template': require('./demo.html')
            });

    })
    .controller("demoCtrl", require("./demo.controller.js"));