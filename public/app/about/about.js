//NOTE - for testing purposes, the code starting at line 37 generates random users for mock data
//The "in-memory" test version has been commented out, the app is curently correctly using the Firebase DB

angular.module('Culturalyst-Landing.about', [])

.controller('aboutController', function ($scope){
  $scope.message = "About";
})

//service for SearchService
.factory('SearchService', function (){

})
