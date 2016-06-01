(function() {
  'use strict';

  angular
    .module('ShoppingCart')
    .controller('CheckoutCart', CheckoutCart);

  CheckoutCart.$inject = ['$scope', '$timeout', '$location', 'cart'];

  function CheckoutCart($scope, $timeout, $location, cart) {
    var vm = this;

    vm.potCart = cart.getCart();
    vm.total = cart.getTotal();
    vm.goodbye = false;

    vm.checkout = function() {
      vm.goodbye = true;
      $timeout(function(){
        cart.checkoutCart();
        $location.path('/');
        vm.goodbye = false;
      }, 3000);
    }
  }
})();
