(function () { 'use strict';
/* App Module- holds route provider */

    var plantApp = angular.module('plantApp', [
//        'angular-gestures',
		'ngTouch',
        'plantAppControllerModule',
        'plantServicesModule',
        'ui.router',
        'ui.bootstrap'
    ]);

    plantApp.config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider.
            state('Default', {
                url: "",
                views: {
                    "topBar": { },
                    "app": { templateUrl: "partials/default.html"},
					"menuBar": { }
                }
            }).
            state('Home', {
                url: "/Home",
                views: {
                    "topBar": {templateUrl: "partials/topBar.html", controller: 'menuCtrl'},
                    "app": {templateUrl: "partials/home.html", controller: 'homeCtrl'},
					"menuBar": {templateUrl: "partials/menuBar.html", controller: 'mainCtrl'}
                }

            }).
            state('Search', {
                url: "/Search",
                views: {
					"topBar": {templateUrl: "partials/topBar.html", controller: 'menuCtrl'},
                    "app": {templateUrl: "partials/search.html", controller: 'mainCtrl'},
					"menuBar": {templateUrl: "partials/menuBar.html", controller: 'mainCtrl'}
                }
            }).
            state('SearchResults', {
                url: "/SearchResults",
                views: {
					"topBar": {templateUrl: "partials/topBar.html", controller: 'menuCtrl'},
                    "app": {templateUrl: "partials/searchResults.html", controller: 'SearchResultsCtrl'},
					"menuBar": {templateUrl: "partials/menuBar.html", controller: 'mainCtrl'}
                }
            }).
            state('PlantInfo', {
                url: "/PlantInfo",
                views: {
					"topBar": {templateUrl: "partials/topBar.html", controller: 'menuCtrl'},
                    "app": {templateUrl: "partials/plantInfo.html", controller: 'PlantInfoCtrl'},
					"menuBar": {templateUrl: "partials/menuBar.html", controller: 'mainCtrl'}
                }
            }).
		 state('More', {
			url: "/More",
			views: {
				"topBar": {templateUrl: "partials/topBar.html", controller: 'menuCtrl'},
				"menuBar":{templateUrl:"partials/menuBar.html", controller: 'mainCtrl'},
				"app": {templateUrl: "partials/more.html"}
			  }
		  }).
		state('PlantSuccess', {
                url: "/PlantSuccess",
                views: {
					"topBar": {templateUrl: "partials/topBar.html", controller: 'mainCtrl'},
                    "app": {templateUrl: "partials/plantSuccess.html"},
					"menuBar": {templateUrl: "partials/menuBar.html", controller: 'mainCtrl'}
                }
            }).
		state('UserTraits', {
                url: "/UserTraits",
                views: {
					"topBar": {templateUrl: "partials/topBar.html", controller: 'menuCtrl'},
                    "app": {templateUrl: "partials/userTraits.html"},
					"menuBar": {templateUrl: "partials/menuBar.html", controller: 'mainCtrl'}
                }
            });

    });
}());
    /*
   
     state('MyGarden', {
        url: "/MyGarden",
        views: {
            "menuBar":{ 
                templateUrl:"partials/menuBar.html",
                controller: 'mainCtrl'},
            "app": {templateUrl: "partials/myGarden.html"}
          }
         
      });*/