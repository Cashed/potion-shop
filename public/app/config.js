(function() {
  'use strict';

  angular
    .module('ShoppingCart')
    .config(router);

  router.$inject = ['$routeProvider', '$locationProvider'];

  function router($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/potions/pot-menu.html',
        controller: 'Pots',
        controllerAs: 'pots',
        resolve: {
          potions: getPots
        }
      })
      .when('/cart', {
        templateUrl: 'app/cart/cart.html',
        controller: 'CheckoutCart',
        controllerAs: 'cart'
      });
      
    $locationProvider.html5Mode(true);
  };

  function getPots(potData) {
    return potData.getPots().then(
      function(pots) {
        return pots;
      }
    );
  }
})();
