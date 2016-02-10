//NOTE - for testing purposes, the code starting at line 37 generates random users for mock data
//The "in-memory" test version has been commented out, the app is curently correctly using the Firebase DB

angular.module('Culturalyst-Landing.signup', [])

.controller('signupController', function ($scope){
  $scope.message = "Signup";
})

