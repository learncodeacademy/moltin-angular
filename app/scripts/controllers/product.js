'use strict';

/**
 * @ngdoc function
 * @name storefrontApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the storefrontApp
 */
angular.module('storefrontApp')
  .controller('ProductCtrl', function ($scope, $rootScope, product, moltin, $timeout) {
    $scope.product = product;
    $scope.addStatus = null;

    $scope.addCart = function() {
      $scope.addStatus = 'Adding to cart...';
      // Insert(id, qty, modifiers/size, callback)
      moltin.Cart.Insert(product.id, 1, null, function(cart) {
        $scope.addStatus = 'Success!';
        moltin.Cart.Contents(function(items) {
          $rootScope.cart = items;
          $rootScope.$apply();
        });
        $scope.$apply();
        $timeout(function() {
          $scope.addStatus = null;
        }, 1000);
      });
    }
    console.log(product);
  });
