'use strict';

/**
 * @ngdoc function
 * @name storefrontApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the storefrontApp
 */
angular.module('storefrontApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
