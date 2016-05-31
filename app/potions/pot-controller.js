(function() {
  'use strict';

  angular
    .module('ShoppingCart')
    .controller('Pots', Pots);

  Pots.$inject = ['$scope', '$interval', 'potions', 'cart'];

  function Pots($scope, $interval, potions, cart) {
    var vm = this;

    vm.potList = potions;
    vm.pullDown = '';
    vm.bagSize = 0;
    vm.review = 0;

    var getReview = $interval(
      function(){
        if (vm.review === 4) {
          vm.review = 0;
        }
        else {
          vm.review++;
        }
      }, 7000);

    vm.addToCart = function(pot, qty) {
      if (qty > 0) {
        cart.addItem(pot, qty);
        vm.bagSize = cart.getCartSize();
      }
    };

    vm.sortByPullDown = function(category) {
      vm.pullDown = category;
    };
  }
})();
