'use strict';

/**
 * @ngdoc function
 * @name storefrontApp.controller:StoreCtrl
 * @description
 * # StoreCtrl
 * Controller of the storefrontApp
 */
angular.module('storefrontApp')
  .controller('StoreCtrl', function ($scope, categories, features) {
    $scope.categories = categories;
    $scope.features = features;
    console.log(features);
  });
