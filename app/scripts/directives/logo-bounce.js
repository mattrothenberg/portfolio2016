'use strict';

/**
 * @ngdoc directive
 * @name mattportfolioApp.directive:logoBounce
 * @description
 * # logoBounce
 */
angular.module('mattportfolioApp')
  .directive('logoBounce', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        $('.navbar-brand').on('click', function() {
          $('.navbar-brand').addClass('animated alternate iteration rubberband')
            .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
              $('.navbar-brand').removeClass('animated alternate iteration rubberband');
            })
        })
      }
    };
  });
