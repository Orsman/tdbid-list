var tdbidStore = require('./stores/tdbidStore');

// Styles
require('./index.less');

angular.module('tdbidApp', ['ui.router'])
    .factory('tdbidStore', tdbidStore)
    .config(config);

function config($stateProvider, $httpProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(false);

    $stateProvider
        .state('tdbid', {
            abstract: true,
            url: '/',
            template: '<ui-view />'
        })
        .state('tdbid.all', {
            url: '',
            component: 'tdbid',
            resolve: {
                filter: function() {
                    return 'all'
                }
            }
        })
        .state('tdbid.active', {
            url: 'active',
            component: 'tdbid',
            resolve: {
                filter: function() {
                    return 'active'
                }
            }
        })
        .state('tdbid.completed', {
            url: 'completed',
            component: 'tdbid',
            resolve: {
                filter: function() {
                    return 'completed'
                }
            }
        })
}

require('./components')
