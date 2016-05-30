(function() {
  'use strict';

  angular
    .module('ShoppingCart')
    .controller('Pots', Pots);

  Pots.$inject = ['$scope', 'potions'];

  function Pots($scope, potions) {
    var vm = this;

    vm.potList = potions;
    vm.pullDown = '';

    vm.addToCart = function(pot) {
      
    }

    vm.sortByPullDown = function(category) {
      vm.pullDown = category;
    };
  }
})();
