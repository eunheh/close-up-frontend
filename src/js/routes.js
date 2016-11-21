function routerConfig ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'templates/home.tpl.html',
      controller: 'HomeController'
    })
    .state('add', {
      url: '/add',
      templateUrl: 'templates/add.tpl.html',
      controller: 'AddController'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'templates/about.tpl.html',
    })
    .state('detail', {
      url: '/img/:id',
      templateUrl: 'templates/detail.tpl.html',
      controller: 'DetailController'
    });

    $urlRouterProvider.otherwise('/');
};

routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
export { routerConfig };
