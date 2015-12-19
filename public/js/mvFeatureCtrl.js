angular.module('app').factory('featureCtrl', function($http){
    
    $scope.signin = function(featureId){
        $http.post('/feature-requirements', {_id:featureId})
                .then(function(response){
                    if(response.data.success){
                        // = response.data.requirements;
                        dfd.resolve(true);
                    } else {
                        dfd.resolve(false);
                    }
                });
    }

})