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
    vm.pullDownTitle = 'All';
    vm.bagSize = cart.getCartSize();
    vm.review = 0;

    vm.addToCart = function(pot, qty) {
      if (qty > 0) {
        cart.addItem(pot, qty);
        vm.bagSize = cart.getCartSize();
      }
    };

    vm.sortByPullDown = function(category) {
      if (category === '') {
        vm.pullDownTitle = 'All';
      }
      else {
        vm.pullDownTitle = category.charAt(0).toUpperCase() + category.slice(1);
      }

      vm.pullDown = category;
    };

    vm.changeReview = function(direction) {
      if (direction === 1 && vm.review === 4) {
        vm.review = 0;
      }
      else if (direction === -1 && vm.review === 0) {
        vm.review = 4;
      }
      else {
        vm.review += direction;
      }
    };

    var getReview = $interval(
      function(){
        if (vm.review === 4) {
          vm.review = 0;
        }
        else {
          vm.review++;
        }
      }, 7000);
  }
})();
