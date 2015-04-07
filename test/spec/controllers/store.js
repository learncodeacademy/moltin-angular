'use strict';

describe('Controller: StoreCtrl', function () {

  // load the controller's module
  beforeEach(module('storefrontApp'));

  var StoreCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StoreCtrl = $controller('StoreCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
