(function () {

    angular.module('app')
        .controller('mvFeatureStepsCtrl', ['$scope', '$routeParams', 'dataFactory', 
            function ($scope, $routeParams, dataFactory) {

                var vm = $scope,
                    featureId = $routeParams.feature_id;

                function getFeature(id) {
                    dataFactory.getFeature(id)
                        .success(function (feature) {
                            console.log('Got data: ')
                            console.log(feature);
                            vm.feature = feature;
                        })
                        .error(function (error) {
                            console.log('Unable to load data: ' + error.message);
                        });
                }

                function init() {
                    //createWatches();
                    getFeature(featureId);
                }
                init();

            }]);

}());