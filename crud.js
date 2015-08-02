//**CRUD API CALLS**//

//GET
$scope.loadCriteria = function () {
    var connection = App.api.angulajConection('criteria');
    connection.method = 'GET';
    $http(connection).success(function (res) {

        console.log(res);
        console.log(res.data[0].concepts);
        $scope.list = res.data;
        $scope.table.params.reload();
        
    });
};

//POST
$scope.saveCriteria = function (){
        var connection = App.api.angulajConection('criteria', true);
        connection.data = $scope.newCriteriaData;
        $http(connection).success(function (res) {
            console.log(res);
            $scope.loadCriteria();
            //$state.go('app.scales');
        });
        $scope.showNamefield = false;
    };
    
//PUT
$scope.updateCriteria = function(){
        var connection = Orama.api.angulajConection('criteria/' + selectedRow.id);
        $scope.criteria.scale_id = $scope.criteria.scale_id.id;
        connection.method = 'PUT';
        connection.data = $scope.criteria;
        $http(connection).success(function (res) {
            console.log(res);
        });
    }

//DELETE
$scope.deleteCriteria = function(){
        var connection = App.api.angulajConection('criteria/' + selectedRow.id);
        $scope.criteria.scale_id = $scope.criteria.scale_id.id;
        connection.method = 'DELETE';
        connection.data = $scope.criteria;
        $http(connection).success(function (res) {
            console.log(res);
        });
    }