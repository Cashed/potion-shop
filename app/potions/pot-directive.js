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
          pots: '=',
          minimal: '='
        },
        replace: true,
        templateUrl: 'app/potions/pots.html',
        controller: function($scope) {
          var vm = this;
        }
      }
    }
})();
