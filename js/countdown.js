MyApp.controller('countdown', function($scope, $interval) {

  $scope.countdown = 100

  $interval(function() {
    $scope.countdown--;
  }, 1000)

})