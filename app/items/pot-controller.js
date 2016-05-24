(function() {
  'use strict';

  angular
    .module('ShoppingCart')
    .controller('Pots', Pots);

  Pots.$inject = ['$scope', 'potData', 'pots'];

  function Pots($scope, pots) {
    var vm = this;
    console.log('working');

    vm.potList = pots;
  }
})();
