function GiltCtrl($scope, $http) {

    $scope.saleRoot='https://api.gilt.com/v1/sales/';
    $scope.productRoot='https://api.gilt.com/v1/products/';
    $scope.active='/active.json';
    $scope.upcoming='/upcoming.json';
    $scope.apikey='?apikey=88658e0b728c695d6145ffde625f01f6';
    $scope.callback='&callback=JSON_CALLBACK';
    $scope.method="JSONP";

    $scope.fetchStore = function(store, saleMethod) {
        $scope.code = null;
        $scope.response = null;

        $scope.store=store;
        $scope.saleMethod=saleMethod;
        $scope.saleUrl=$scope.saleRoot + $scope.store +  $scope.saleMethod + $scope.apikey + $scope.callback;

        $http({method: $scope.method, url: $scope.saleUrl}).success(success).error(error);

        function success(data, status) {
            $scope.status = status;
            $scope.data = data;
        }

        function error(data, status) {
            $scope.data = data || "Request failed";
            $scope.status = status;
        }
    };
    // Initialise
    $scope.store='women';
    $scope.fetchStore($scope.store, $scope.active);
}