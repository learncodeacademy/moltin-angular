'use strict';

/**
 * @ngdoc function
 * @name storefrontApp.controller:CategoryCtrl
 * @description
 * # CategoryCtrl
 * Controller of the storefrontApp
 */
angular.module('storefrontApp')
  .controller('CategoryCtrl', function ($scope, category, products) {
    $scope.category = category;
    $scope.products = products;
    console.log(category, products);
  });
