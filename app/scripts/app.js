'use strict';

/**
 * @ngdoc overview
 * @name mattportfolioApp
 * @description
 * # mattportfolioApp
 *
 * Main module of the application.
 */
angular
  .module('mattportfolioApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'angularLazyImg'
  ])
  .config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise('/about');
    //
    // Now set up the states
    $stateProvider
      .state('about', {
        url: '/about',
        templateUrl: 'views/main.html',
        resolve: {
          title: function() {
            return 'Foo'
          }
        }
      })
      .state('resume', {
        url: '/resume',
        templateUrl: 'views/resume.html'
      })

      .state('work', {
        url: '/work',
        templateUrl: 'views/work.html'
      })

      .state('work.development', {
        url: '/development',
        views: {
          'type': {
            templateUrl: 'views/work-development.html'
          }
        }
      })

      .state('work.product', {
        url: '/product',
        views: {
          'type': {
            templateUrl: 'views/work-product.html'
          }
        }
      })

      .state('work.design', {
        url: '/design',
        views: {
          'type': {
            templateUrl: 'views/work-design.html'
          }
        }
      })
  });
