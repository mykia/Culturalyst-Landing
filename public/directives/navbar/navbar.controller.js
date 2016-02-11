/* globals confirm */
'use strict';

angular.module('Culturalyst-Landing.nav', [])
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.isActive = function(path){
      var currentPath = $location.path().split('/')[1];
      if (currentPath.indexOf('?') !== -1) {
        currentPath = currentPath.split('?')[0];
      }
      return currentPath === path.split('/')[1];
    };

    angular.element(document).ready(function(){
    	jQuery(document).ready(function(){
		    		$(window).scroll(function() {
		        var scroll = $(window).scrollTop();
		        if (scroll >= 500) {
		            $(".header").addClass('smaller');
                $(".logo").addClass('pull-left');
		        } else {
		            $(".header").removeClass("smaller");
                $(".logo").removeClass('pull-left');
		        }
		    });
    	})
    })

  });