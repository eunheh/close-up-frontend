import { SERVER } from "../server";

function DetailController ($scope, $http, $stateParams, $document) {

 $scope.img = {};

 function init () {
   let url = SERVER + '/post/' + $stateParams.id;
   $http.get(url).then((resp) => {
     $scope.img = resp.data;
   });
 };

$scope.addLike = (img) => {
<<<<<<< HEAD
        img.count++;
        $http.put(SERVER + '/post/',img + $stateParams.id,img) 
    }




=======
    img.count++
    $http.put(SERVER + '/post/' + $stateParams.id, img)
    // $document.find('span').eq().addClass('count');
  };
>>>>>>> bd2f5979e12066a02a01f5d438be691d9b680faa

 init();
}

DetailController.$inject = ['$scope', '$http', '$stateParams', '$document'];
export {DetailController};
