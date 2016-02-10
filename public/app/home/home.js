angular.module('Culturalyst-Landing.home', [])

.controller('homeController', function ($scope){
  $scope.message = "Home";
  // angular.element(document).ready(function () {
  //       jQuery(document).ready(function($) {
      

  //       navbar = $('#navbar-main'),
  //       distance = navbar.offset().top,
  //           $window = $(window);

  //       $window.scroll(function() {
  //           if ($window.scrollTop() >= distance) {
  //               navbar.removeClass('navbar-fixed-top').addClass('navbar-fixed-top');
  //               $("body").css("padding-top", "30px");
  //           } else {
  //               navbar.removeClass('navbar-fixed-top');
  //               $("body").css("padding-top", "0px");
  //           }
  //       });
  //   });
  // });


})

//service for SearchService
.factory('SearchService', function (){

})



