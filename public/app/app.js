angular.module('Culturalyst-Landing', [
  'Culturalyst-Landing.about',
  'Culturalyst-Landing.home',
  'Culturalyst-Landing.how',
  'Culturalyst-Landing.nav',
  'Culturalyst-Landing.signup',
  'ngRoute'
])

.config(function($routeProvider) {
  $routeProvider
     .when('/home', {
      templateUrl: 'app/home/home.html',
      controller: 'homeController'
    })
     .when('/about', {
      templateUrl: 'app/about/about.html',
      controller: 'aboutController'
    })
      .when('/how', {
      templateUrl: 'app/how/how.html',
      controller: 'howController'
    })
      .when('/signup', {
      templateUrl: 'app/signup/signup.html',
      controller: 'signupController'
    })
    .otherwise({
      templateUrl: 'app/home/home.html',
      controller: 'homeController'
    });

});