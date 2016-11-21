import { SERVER } from "../server";

function HomeController ($scope, $http, $stateParams, $document) {
  $scope.imgs = [];
  $scope.img = {};

  function init () {
    $http.get(SERVER + '/post').then((resp) => {
      $scope.imgs = resp.data;
    });
  }

  $scope.addLike = (img) => {
      img.count++
      $document.find('button').eq(0).addClass('loved');
        setTimeout(()=>{
          $document.find('button').eq(0).removeClass('loved');
        }, 1000);

      if (img.count === 1) $scope.times = '';
      else $scope.times = '\'s';

      $http.put(SERVER + '/post/' + $stateParams.id, img)
    };

  init();

};

HomeController.$inject = ['$scope', '$http', '$stateParams', '$document'];
export { HomeController };
