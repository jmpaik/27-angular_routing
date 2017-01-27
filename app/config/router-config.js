'use strict';

module.exports = ['$stateProvider', '$urlRouterProvider', routerConfig];

function routerConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when('', '/join#signup');
  $urlRouterProvider.when('/', '/join#signup');
  $urlRouterProvider.when('/signup', '/join#signup');
  $urlRouterProvider.when('/signin', '/join#signin');

  let states = [
    {
      name: 'home',
      url: '/home',
      template: require('../view/home/home.html'),
      controller: 'HomeController',
      controllerAs: 'homeCtrl'
    },
    {
      name: 'landing',
      url: '/join',
      template: require('../view/landing/landing.html'),
      conroller: 'LandingController',
      controllerAs: 'landingCtrl'
    }
    // {
    //   name: 'signup',
    //   url: '/signup',
    //   template: require('../view/signup/signup.html'),
    //   controller: 'SignupController',
    //   controllerAs: 'signupCtrl'
    // },
    // {
    //   name: 'gallery',
    //   url: '/gallery',
    //   template: require('../view/gallery/gallery.html'),
    //   controller: 'GalleryController',
    //   controllerAs: 'galleryCtrl'
    // }
  ];

  states.forEach( state => {
    $stateProvider.state(state);
  });
}
