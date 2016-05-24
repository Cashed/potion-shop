(function() {
  'use strict';

  angular
    .module('ShoppingCart')
    .factory('potData', potData);

  potData.$inject = ['$http'];

  function potData($http) {
    var getPots = function() {
      return $http.get('app/data/pots.json').then(
        function(pots) {
          return pots.data.potions;
        }
      );
    };

    return {
      getPots: getPots
    };
  }
})();
