'use strict';

/**
 * @ngdoc function
 * @name richlewismlApp.controller:PageCtrl
 * @description
 * # PageCtrl
 * Controller of the richlewismlApp
 */
angular.module('richlewismlApp')
  .controller('PageCtrl', function ($scope, $attrs, $location) {
  	
  	$scope.pages = JSON.parse($attrs.pages);
  	$scope.url = $location.url();

    $scope.$on('$locationChangeStart', function() {
    	$scope.url = $location.url();
    });

  });
