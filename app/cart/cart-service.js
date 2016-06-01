(function() {
  'use strict';

  angular
    .module('ShoppingCart')
    .factory('cart', cart);

  function cart() {
    var cart = [];
    var total = 0;

    // check if pot is already in cart while still shopping, if so, only update qty
    var addPot = function(pot, qty) {
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

    var removePot = function(potID) {
      for (var i = 0; i < cart.length; i++) {
        if (potID === cart[i]._id) {
          total -= cart[i].qty * cart[i].price;
          cart.splice(i, 1);
        }
      }
    }

    var updatePot = function(pot, qty) {
      for (var i = 0; i < cart.length; i++) {
        if (pot._id === cart[i]._id) {
          var difference = Math.abs(cart[i].qty - qty);
          if (cart[i].qty - qty >= 0) {
            cart[i].qty -= difference;
            total -= cart[i].price * difference;
          }
          else {
            // parsing because it was a string!
            var newQty = Number.parseInt(cart[i].qty) + difference;
            cart[i].qty = newQty;
            total += cart[i].price * difference;
          }
        }
      }
    };

    var getCartSize =  function() {
      return cart.length;
    };

    var getCart = function() {
      return cart;
    };

    var getTotal = function() {
      return total;
    };

    return {
      addPot: addPot,
      removePot: removePot,
      updatePot: updatePot,
      getCartSize: getCartSize,
      getCart: getCart,
      getTotal: getTotal
    };
  }
})();
