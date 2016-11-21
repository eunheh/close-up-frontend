import { SERVER } from "../server";

function DetailController ($scope, $http, $stateParams, $document) {

 $scope.img = {};
 $scope.comments = [];

 function init () {
   let url = SERVER + '/post/' + $stateParams.id;
   $http.get(url).then((resp) => {
     $scope.img = resp.data;
     $scope.times = ($scope.img.count === null || $scope.img.count === 1) ? '' : '\'s';
     console.log($scope.img)
     getComment();
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

  $scope.addComment = function (comment) {
      let url = SERVER + '/image/' + $stateParams.id + '/comment';
      console.log(comment)
      $http.post(url, comment).then(function (resp) {
        let addedComment = resp.data;
        console.log(addedComment);
        $scope.comments.unshift(addedComment);
      });
      $scope.comment = {};
  }

  function getComment(){
       let url = SERVER + '/image/' + $stateParams.id + '/comment';
       $http.get(url, $scope.comment).then(function(response){
         $scope.comments = response.data;
       })
     }

 init();

}


DetailController.$inject = ['$scope', '$http', '$stateParams', '$document'];
export {DetailController};
