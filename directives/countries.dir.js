(function(){
'use strict';
  angular
  .module('myApp')
  .directive('countryCard', function(){
    return{
      templateUrl:'views/countries.html',
      scope:{
        countries:"=countries",
        search:"=search",
        region:"=region",
        sort:"=sort"
      },
      controller:countryCardController,
      controllerAs:'vm'
    }

    function countryCardController($scope, $sce){
      var vm = this;

        $scope.dynamicPopover = {
          content: 'Hello, World!',
          templateUrl: 'myPopoverTemplate.html',
          title: 'Title'
        };


  }
});
})();
