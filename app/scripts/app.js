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
    'ui.router'
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
        templateUrl: 'views/main.html'
      })
      .state('resume', {
        url: '/resume',
        templateUrl: 'views/resume.html'
      });
  });
