angular.module('app')
    .factory('dataFactory', ['$http', function($http) {

    var urlBase = '/api/feature';
    var dataFactory = {};

    // Features
    dataFactory.getFeatures = function () {
        return $http.get(urlBase);
    };

    dataFactory.getFeature = function (id) {
        return $http.get(urlBase + '/' + id);
    };

    dataFactory.insertFeature = function (feature) {
        return $http.post(urlBase, feature);
    };

    dataFactory.updateFeature = function (feature) {
        return $http.put(urlBase + '/' + feature.ID, feature)
    };

    dataFactory.deleteFeature = function (id) {
        return $http.delete(urlBase + '/' + id);
    };

    // More
    dataFactory.getOrders = function (id) {
        return $http.get(urlBase + '/' + id + '/orders');
    };

    return dataFactory;
}]);