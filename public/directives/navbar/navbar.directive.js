'use strict';

angular.module('Culturalyst-Landing.nav')
  .directive('navbar', function () {
    return {
      restrict: 'E',
      templateUrl: 'directives/navbar/navbar.html',
      controller: 'NavbarCtrl',
    };
  });