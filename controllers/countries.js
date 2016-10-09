(function(){
'use strict';

angular.module('myApp')
.controller("countriesCtrl",function($http, countriesFactory, regionsFactory, countriesDbFactory){
var vm = this;
vm.countries = countriesDbFactory.ref;
regionsFactory.getRegions().then(function(data){
  vm.regions = data.data;
})


});




})();
