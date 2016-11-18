import { SERVER } from "../server";

function AddController ($scope, $http, $state) {

  $scope.addImg = (img) => {
    $http.post(SERVER + '/post', img).then((resp) => {
      $state.go('home');
    });
  };

};

AddController.$inject = ['$scope', '$http', '$state'];
export { AddController };
