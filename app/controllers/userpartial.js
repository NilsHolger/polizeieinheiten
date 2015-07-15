
(function () {

    function UserController($scope) {
        $scope.user = { username: "anonymer", fullname: "anonymer Nutzer" };
    }

    policeApp.controller("UserController", UserController);

})();