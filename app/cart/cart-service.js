(function() {
  'use strict';

  angular
    .module('ShoppingCart')
    .factory('cart', cart);

  function cart() {
    var cart = [];
    var total = 0;

    // check if pot is already in cart, if so, update qty
    var addItem = function(pot, qty) {
      var isUpdate = false;
      cart.forEach(function(item) {
        if (pot._id === item._id) {
          item.qty = qty;
          total += item.qty * item.price;
          isUpdate = true;
        }
      });

      if (!isUpdate) {
        pot.qty = qty;
        total += pot.qty * pot.price;
        cart.push(pot);
      }
    }

    var getCartSize =  function() {
      return cart.length;
    };

    var getCart = function() {
      return cart;
    };

    var getTotal = function() {
      return total;
    }

    return {
      addItem: addItem,
      getCartSize: getCartSize,
      getCart: getCart,
      getTotal: getTotal
    }
  }
})();
