(function() {
  'use strict';

  angular
    .module('ShoppingCart')
    .factory('potData', potData);

  potData.$inject = ['$http'];

  function potData($http) {
    var getPots = function() {
      return $http.get('http://localhost:3000/potions').then(
        function(pots) {
          return pots.data;
        }
      );
    };

    return {
      getPots: getPots
    };
  }
})();
