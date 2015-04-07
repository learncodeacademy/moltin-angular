'use strict';

describe('Controller: CheckoutCtrl', function () {

  // load the controller's module
  beforeEach(module('storefrontApp'));

  var CheckoutCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CheckoutCtrl = $controller('CheckoutCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
