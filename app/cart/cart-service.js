(function() {
  'use strict';

  angular
    .module('ShoppingCart')
    .factory('cart', cart);

  function cart() {
     var cart = [];

    var addItem = function(pot, qty) {
      // check if pot is already in cart, if so, update qty
      var isUpdate = false;
      cart.forEach(function(item) {
        if (pot._id === item._id) {
          item.qty = qty;
          isUpdate = true;
        }
      });

      if (!isUpdate) {
        pot.qty = qty;
        cart.push(pot);
      }
    }

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
