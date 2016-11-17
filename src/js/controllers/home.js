import { SERVER } from "../server";

function HomeController ($scope, $http) {
  $scope.imgs = [];

  function init () {
    $http.get(SERVER + '/post').then((resp) => {
      $scope.imgs = resp.data;
    });
  }

  init();

};

HomeController.$inject = ['$scope', '$http'];
export { HomeController };
