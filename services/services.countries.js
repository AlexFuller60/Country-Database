(function(){
'use strict';
angular
.module('myApp')
.factory('countriesFactory',function($http){
  function getCountries(){
    return $http.get('model/countries.json');
  }
  return{
    getCountries:getCountries
  }
})
.factory('regionsFactory',function($http){
  function getRegions(){
    return $http.get('model/regions.json');
  }
  return{
    getRegions:getRegions
  }
})
.factory('countriesDbFactory', function($http, $firebaseArray) {

  //var ref = new Firebase('https://ngclassifieds.firebaseio.com/');
    var ref = new Firebase('https://countriesdata-b39c8.firebaseio.com/');
  return {
    ref: $firebaseArray(ref)
  }

});

})();
