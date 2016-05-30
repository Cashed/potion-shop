(function() {
  'use strict';

  angular
    .module('ShoppingCart')
    .controller('Pots', Pots);

  Pots.$inject = ['$scope', 'potions', 'cart'];

  function Pots($scope, potions, cart) {
    var vm = this;

    vm.potList = potions;
    vm.pullDown = '';
    vm.bagSize = 0;

    vm.addToCart = function(pot, qty) {
      cart.addItem(pot, qty);
      vm.bagSize = cart.getCartSize();
    }

    vm.sortByPullDown = function(category) {
      vm.pullDown = category;
    };
  }
})();
