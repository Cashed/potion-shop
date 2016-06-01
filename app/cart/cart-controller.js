(function() {
  'use strict';

  angular
    .module('ShoppingCart')
    .controller('CheckoutCart', CheckoutCart);

  CheckoutCart.$inject = ['$scope', 'cart'];

  function CheckoutCart($scope, cart) {
    var vm = this;

    vm.potCart = cart.getCart();
    vm.total = cart.getTotal();
  }
})();
