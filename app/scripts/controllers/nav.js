'use strict';

/**
 * @ngdoc function
 * @name mattportfolioApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the mattportfolioApp
 */
angular.module('mattportfolioApp')
  .controller('NavCtrl', function ($scope, $rootScope) {

    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams, options) {
      if ( toState.name === 'work.design' || toState.name === 'work.development') {
        $scope.isSubPage = true;
      } else {
        $scope.isSubPage = false;
      }
    })
  });
