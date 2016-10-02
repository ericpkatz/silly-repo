angular.module('app')
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home', {
        url: '/',
        template: 'HOME'
      })
      .state('settings', {
        url: '/settings',
        template: 'Settings'
      })
      .state('login', {
        url: '/login',
        templateUrl: '/browser/templates/login.html',
        controller: function($scope, AuthService, $state){
          $scope.login = function(){
            AuthService.login()
              .then(function(){
                $state.go('home');
              });
          }
        }
      })
    $urlRouterProvider.otherwise('/');
  });
