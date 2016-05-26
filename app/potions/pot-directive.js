(function() {
  'use strict';

  angular
    .module('potItem', [])
    .directive('potItem', potItem);

    function potItem() {
      return {
        restrict: 'E',
        scope: {
          pot: '=',
          category: '='
        },
        replace: true,
        templateUrl: 'app/potions/pots.html'
      }
    }
})();
