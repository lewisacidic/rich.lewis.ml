'use strict';

/**
 * @ngdoc function
 * @name richlewismlApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the richlewismlApp
 */
angular.module('richlewismlApp')
  .controller('MainCtrl', function ($scope) {
       $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });