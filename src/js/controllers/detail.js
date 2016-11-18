import { SERVER } from "../server";

function DetailController ($scope, $http, $stateParams, $document) {

 $scope.img = {};

 function init () {
   let url = SERVER + '/post/' + $stateParams.id;
   $http.get(url).then((resp) => {
     $scope.img = resp.data;
     $scope.times = ($scope.img.count === null || $scope.img.count === 1) ? '' : '\'s';
     console.log($scope.img)
   });
 };

$scope.addLike = (img) => {
    img.count++
    // console.log($document.find('button').eq(0));
    $document.find('button').eq(0).addClass('loved');
      setTimeout(()=>{
        $document.find('button').eq(0).removeClass('loved');
      }, 1000);

    if (img.count === 1) $scope.times = '';
    else $scope.times = '\'s';

    $http.put(SERVER + '/post/' + $stateParams.id, img)
    // $document.find('span').eq().addClass('count');
  };


 init();
}

DetailController.$inject = ['$scope', '$http', '$stateParams', '$document'];
export {DetailController};
