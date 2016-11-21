import { SERVER } from "../server";

function HomeController ($scope, $http) {
  $scope.imgs = [];
  	$scope.errors = {
		name:"Title is Requried!",
		Link:"Link cannot be left empty!"

	};

  function init () {
    $http.get(SERVER + '/post').then((resp) => {
      $scope.imgs = resp.data;
    });
  }

  init();

   $scope.validateName = function (name){
  	// console.log(title)
      if (name === ''){
		$scope.errors.name = "Title cannot be left empty!"
      }else{
      	$scope.errors.name =''
      }
  };

$scope.validateEmail = function (email){
  	// console.log(title)
      if (email === ''){
		$scope.errors.email = "Link cannot be left empty!"
      }else{
      	$scope.errors.email =''
      }
  };

};


HomeController.$inject = ['$scope', '$http'];
export { HomeController };
