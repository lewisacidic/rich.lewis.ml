'use strict';

/**
 * @ngdoc overview
 * @name richlewismlApp
 * @description
 * # richlewismlApp
 *
 * Main module of the application.
 */
angular
  .module('richlewismlApp', [
    'angulartics',
    'angulartics.google.analytics',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngDisqus',
    'mm.foundation',
    'picardy.fontawesome'
  ])
  .config(function ($routeProvider, $locationProvider, $disqusProvider, $tooltipProvider) {

    // configure default tooltips
    $tooltipProvider.options({
      placement: 'top',
      animation: false,
      popupDelay: 0.1,
      appendToBody: true});

    // setup the disqus plugin
    $disqusProvider.setShortname('richlewis');

    // use hashbang for routing to enable crawlers to work better
    $locationProvider.hashPrefix('!');

    // configure the routing of the site
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/aboutme', {
        templateUrl: 'views/aboutme.html',
        controller: 'AboutmeCtrl'
      })
      .when('/CV', {
        templateUrl: 'views/cv.html',
        controller: 'CvCtrl'
      })
      .when('/research', {
        templateUrl: 'views/research.html',
        controller: 'ResearchCtrl'
      })
      .when('/teaching', {
        templateUrl: 'views/teaching.html',
        controller: 'TeachingCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/blog', {
        templateUrl: 'views/blog.html',
        controller: 'BlogCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

  });
