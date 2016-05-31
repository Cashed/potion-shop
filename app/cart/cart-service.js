(function() {
  'use strict';

  angular
    .module('ShoppingCart')
    .factory('cart', cart);

  function cart() {
     var cart = [];

    var addItem = function(pot, qty) {
      // check if pot is already in cart, if so, update qty
      if (cart.length > 0) {
        for (item in cart) {
          if (item._id === pot._id) {
            item.qty = qty;
          }
        }
      }
      else {
        pot.qty = qty;

        cart.push(pot);
      }
    };

    var getCartSize =  function() {
      return cart.length;
    };

    var getCart = function() {
      return cart;
    };

    return {
      addItem: addItem,
      getCartSize: getCartSize,
      getCart: getCart
    }
  }
})();
