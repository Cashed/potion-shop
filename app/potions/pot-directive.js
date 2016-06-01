(function() {
  'use strict';

  angular
    .module('potItem', [])
    .directive('potItem', potItem);

    potItem.$inject = ['cart'];

    function potItem(cart) {
      return {
        restrict: 'E',
        scope: {
          pot: '=',
          pots: '=',
          minimal: '='
        },
        replace: true,
        templateUrl: 'app/potions/pots.html',
        controller: function($scope, cart) {
          var vm = this;
          vm.qty = $scope.pot.qty;

          vm.remove = function(potID) {
            cart.removePot(potID);
            $scope.$parent.cart.total = cart.getTotal();
          }
        },
        controllerAs: 'thisPot'
      }
    }
})();
