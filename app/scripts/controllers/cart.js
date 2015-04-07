'use strict';

/**
 * @ngdoc function
 * @name storefrontApp.controller:CartCtrl
 * @description
 * # CartCtrl
 * Controller of the storefrontApp
 */
angular.module('storefrontApp')
  .controller('CartCtrl', function ($scope, cart) {
    $scope.cart = cart;
    console.log(cart);
  });
