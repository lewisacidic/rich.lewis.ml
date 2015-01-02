'use strict';

/**
 * @ngdoc function
 * @name richlewismlApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the richlewismlApp
 */
angular.module('richlewismlApp')
  .controller('BlogCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
