'use strict';

/**
 * @ngdoc function
 * @name storefrontApp.controller:PaymentCtrl
 * @description
 * # PaymentCtrl
 * Controller of the storefrontApp
 */
angular.module('storefrontApp')
  .controller('PaymentCtrl', function ($scope, $location, $rootScope, moltin) {
    $scope.payment = function(data) {
      moltin.Checkout.Payment('purchase', $scope.order.id, {data: $scope.data}, function(response) {
        $rootScope.order = $rootScope.cart = null;
        $rootScope.payment = response;
        $rootScope.$apply(function() {
          $location.path('/complete');
        });
      });
    }
  });
