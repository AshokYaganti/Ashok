// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'starter.translations', 'pascalprecht.translate'])

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function ($stateProvider, $urlRouterProvider, $translateProvider) {

    for (lang in translations) {
        $translateProvider.translations(lang, translations[lang]);
    }
    $translateProvider.preferredLanguage('en');

    $stateProvider
        .state('app', {
            url: "/app",
            abstract: true,
            templateUrl: "templates/menu.html",
            controller: 'AppCtrl'
        })

    .state('app.majorindexes', {
        url: "/majorindexes",
        views: {
            'menuContent': {
                templateUrl: "templates/majorindexes.html",
                controller: 'MajorIndexesCtrl'
            }
        }
    })
	
	 .state('app.singleton', {
    url: '/singleton',
    views: {
      'menuContent': {
        templateUrl: 'templates/singleton.html',
        controller: 'DashCtrl'
      }
    }
  })
  
   .state('app.shares', {
    url: '/shares',
    views: {
      'menuContent': {
        templateUrl: 'templates/shares.html',
        controller: 'DashCtrl'
      }
    }
  })
  
   .state('app.customer', {
    url: '/customer',
    views: {
      'menuContent': {
        templateUrl: 'templates/customer.html',
        controller: 'ContactController'
      }
    }
  })
        .state('app.majormarkets', {
            url: "/majormarkets",
            views: {
                'menuContent': {
                    templateUrl: "templates/majormarkets.html",
                    controller: 'MajorMarketsCtrl'
                }
            }
        })
        .state('app.marketbreath', {
            url: "/marketbreath",
            views: {
                'menuContent': {
                    templateUrl: "templates/marketbreath.html",
                    controller: 'MarketBreathCtrl'
                }
            }
        })
        .state('app.sectors', {
            url: "/sectors",
            views: {
                'menuContent': {
                    templateUrl: "templates/sectors.html",
                    controller: "SectorsCtrl"
                }
            }
        })
        .state('app.subsectors', {
            url: "/subsectors/{sectorId}",
            views: {
                'menuContent': {
                    templateUrl: "templates/subsectors.html",
                    controller: "SubsectorsCtrl"
                }
            }
        })


    .state('app.single', {
        url: "/playlists/:playlistId",
        views: {
            'menuContent': {
                templateUrl: "templates/playlist.html",
                controller: 'PlaylistCtrl'
            }
        }
    });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/marketbreath');
});
