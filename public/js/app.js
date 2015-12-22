(function () {

	angular.module('app', ['ngRoute']);

	angular.module('app').config(function($routeProvider){
	    
	    $routeProvider
	        .when('/start', { 
	        	templateUrl: '/partials/features', 
	        	controller: 'mvFeatureCtrl'
	        })

	        .when('/feature/:feature_id', { 
	        	templateUrl: '/partials/featureSteps', 
	        	controller: 'mvFeatureStepsCtrl'
	        })

	        .when('/step/:step_id', { 
	        	templateUrl: '/partials/featureStep', 
	        	controller: 'mvFeatureStepCtrl'
	        })

	        .otherwise({ redirectTo: '/start' });

	})

}());
