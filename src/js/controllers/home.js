import { SERVER } from "../server";

function HomeController ($scope, $http) {
  $scope.imgs = [];
  	$scope.errors = {
		name:"Name is Requried",
		emial:"Email must contain an @",
		Web:"Website cannot be left empty"

	};

  function init () {
    $http.get(SERVER + '/post').then((resp) => {
      $scope.imgs = resp.data;
    });
  }

  init();

 
};

HomeController.$inject = ['$scope', '$http'];
export { HomeController };
