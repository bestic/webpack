
module.exports = function($scope, $mdSidenav) {

    $scope.regular = true;
    $scope.fixed = false;


    $scope.openLeftMenu = function() {
        $mdSidenav('left').open();
    };

    $scope.closeLeftMenu = function() {
        $mdSidenav('left').close();
    };



};