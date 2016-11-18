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
        img.count++;
        $http.put(SERVER + '/post/',img + $stateParams.id,img) 
    }





 init();
}

DetailController.$inject = ['$scope', '$http', '$stateParams', '$document'];
export {DetailController};