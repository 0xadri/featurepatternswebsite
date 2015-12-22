(function () {

    angular.module('app')
        .controller('mvFeatureStepCtrl', ['$scope', '$routeParams', 'dataFactory', 
            function ($scope, $routeParams, dataFactory) {

                var vm = $scope,
                    stepId = $routeParams.step_id;

                function getFeatureStep(id) {
                    /* dataFactory.getFeature(id)
                        .success(function (feature) {
                            console.log('Got data: ')
                            console.log(feature);
                            vm.feature = feature;
                        })
                        .error(function (error) {
                            console.log('Unable to load data: ' + error.message);
                        }); */
        			// TODO
        			vm.featureStep = {
									"name": "landing view",
									"_id": "5674f3cfb8042bbb8393cacd",
									"userStories": [
										"As a user I must enter my email address",
										"As a user I must enter a topic",
										"As a user I must enter a content",
										"As a user I must pass a test to verify I am not a robot",
										"As a user I can submit by form via a simple click"
									]
								}
                }

                function init() {
                    //createWatches();
                    getFeatureStep(stepId);
                }
                init();

            }]);

}());