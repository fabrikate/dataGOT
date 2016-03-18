(function() {
  angular
  .module("gotData", [
    'ngRoute',
    'chart.js'
  ])
  .config(appConfig);

  appConfig.$inject = ['$routeProvider'];

  function appConfig ($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'MainController',
      controllerAs: 'vm'
    })
    .otherwise({
      templateUrl: 'partials/error.html',
      controller: 'ErrorController',
      controllerAs: 'vm'
    })
  }
})();
