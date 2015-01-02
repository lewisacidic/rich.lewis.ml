'use strict';

describe('Controller: PagectrlCtrl', function () {

  // load the controller's module
  beforeEach(module('richlewismlApp'));

  var PagectrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PagectrlCtrl = $controller('PagectrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
