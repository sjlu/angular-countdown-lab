MyApp.config(['$routeProvider', function($routeProvider) {

  $routeProvider.when('/', {
    templateUrl: 'countdown.html',
    controller: 'countdown'
  });

  $routeProvider.otherwise({
    redirectTo: '/'
  });

}]);