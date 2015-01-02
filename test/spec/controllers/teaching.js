'use strict';

describe('Controller: TeachingCtrl', function () {

  // load the controller's module
  beforeEach(module('richlewismlApp'));

  var TeachingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TeachingCtrl = $controller('TeachingCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
