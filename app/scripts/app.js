'use strict';

/**
 * @ngdoc overview
 * @name storefrontApp
 * @description
 * # storefrontApp
 *
 * Main module of the application.
 */
angular
  .module('storefrontApp', [
    'storefrontApp.moltin',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/store', {
        templateUrl: 'views/store.html',
        controller: 'StoreCtrl',
        resolve: {
          categories: function($q, MoltinAuth) {
            var deferred = $q.defer();
            MoltinAuth.then(function(moltin) {
              moltin.Category.List(null, function(categories) {
                deferred.resolve(categories);
              });
            })
            return deferred.promise;
          },
          features: function($q, MoltinAuth) {
            var deferred = $q.defer();
            MoltinAuth.then(function(moltin) {
              //"Homepage Features" collection
              moltin.Product.List({collection:'947420948187841171'}, function(collection) {
                deferred.resolve(collection);
              });
            });
            return deferred.promise;
          }
        }
      })
      .when('/category/:id', {
        templateUrl: 'views/category.html',
        controller: 'CategoryCtrl',
        resolve: {
          category: function($q, $route, MoltinAuth) {
            var deferred = $q.defer();
            MoltinAuth.then(function(moltin) {
              moltin.Category.Get($route.current.params.id, function(category) {
                deferred.resolve(category);
              });
            })
            return deferred.promise;
          },
          products: function($q, $route, MoltinAuth) {
            var deferred = $q.defer();
            MoltinAuth.then(function(moltin) {
              moltin.Product.List({category: $route.current.params.id}, function(products) {
                deferred.resolve(products);
              });
            })
            return deferred.promise;
          }
        }
      })
      .when('/product/:id', {
        templateUrl: 'views/product.html',
        controller: 'ProductCtrl',
        resolve: {
          product: function($q, $route, MoltinAuth) {
            var deferred = $q.defer();
            MoltinAuth.then(function(moltin) {
              moltin.Product.Get($route.current.params.id, function(product) {
                deferred.resolve(product);
              });
            })
            return deferred.promise;
          },
          moltin: function(MoltinAuth) {
            return MoltinAuth;
          }
        }
      })
      .when('/cart', {
        templateUrl: 'views/cart.html',
        controller: 'CartCtrl',
        resolve: {
          cart: function($q, MoltinAuth) {
            var deferred = $q.defer();
            MoltinAuth.then(function(moltin) {
              moltin.Cart.Contents(function(cart) {
                deferred.resolve(cart);
              });
            })
            return deferred.promise;
          },
        }
      })
      .when('/checkout', {
        templateUrl: 'views/checkout.html',
        controller: 'CheckoutCtrl',
        resolve: {
          cart: function($q, MoltinAuth) {
            var deferred = $q.defer();
            MoltinAuth.then(function(moltin) {
              moltin.Cart.Contents(function(cart) {
                deferred.resolve(cart);
              });
            })
            return deferred.promise;
          },
          options: function($q, MoltinAuth) {
            var deferred = $q.defer();
            MoltinAuth.then(function(moltin) {
              moltin.Cart.Checkout(function(options) {
                deferred.resolve(options);
              });
            })
            return deferred.promise;
          },
          fields: function($q, MoltinAuth) {
            var deferred = $q.defer();
            MoltinAuth.then(function(moltin) {
              moltin.Address.Fields(null, null, function(fields) {
                deferred.resolve(fields);
              });
            })
            return deferred.promise;
          },
          moltin: function(MoltinAuth) {
            return MoltinAuth;
          }
        }
      })
      .when('/payment', {
        templateUrl: 'views/payment.html',
        controller: 'PaymentCtrl',
        resolve: {
          moltin: function($q, MoltinAuth) {
            return MoltinAuth;
          }
        }
      })
      .when('/complete', {
        templateUrl: 'views/complete.html',
        controller: 'CompleteCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).run(function(MoltinAuth, $rootScope) {
    MoltinAuth.then(function(moltin) {
      moltin.Cart.Contents(function(items) {
        $rootScope.cart = items;
        $rootScope.$apply();
      });
    });
  });
