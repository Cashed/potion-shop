(function() {
  'use strict';

  angular
    .module('ShoppingCart')
    .factory('cart', cart);

  function cart() {
    var cart = {};
    cart.size = 0;

    var addItem = function(pot, qty) {
      if (!cart.hasOwnProperty(pot._id)) {
        cart.size += 1;
      }

      cart[pot._id] = qty;
      console.log(pot._id + ' ' + cart[pot._id]);
    };

    var getCartSize =  function() {
      return cart.size;
    }

    return {
      addItem: addItem,
      getCartSize: getCartSize
    }
  }
})();
