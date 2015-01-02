'use strict';

/**
 * @ngdoc directive
 * @name richlewismlApp.directive:navbar
 * @description
 * # navbar
 */
angular.module('richlewismlApp').directive('navbar', function () {
    return {
    	templateUrl: 'views/navbar.html',
      	restrict: 'E',
      	link: function postLink(scope) {

  			scope.pages.forEach(function(page) {
      			page.isSelected = (page.url === '#!' + scope.url);
      		});

      		scope.$watch('url', function (newUrl, oldUrl) {
      			if (newUrl !== oldUrl) {
	      			scope.pages.forEach(function(page) {
		      			page.isSelected = (page.url === '#!' + newUrl);
	      			});
      			}
      		});
      	}
    };
});
