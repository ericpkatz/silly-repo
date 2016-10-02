angular.module('app')
  .factory('AuthService', function($q){
    var _user = { };

    return {
      user: _user,
      logout: function(){
        var dfd = $q.defer();
        angular.copy({}, _user);
        dfd.resolve();
        return dfd.promise;
      
      },
      login: function(){
        var dfd = $q.defer();
        angular.copy({ id: 3}, _user);
        dfd.resolve();
        return dfd.promise;
      }
    };
  });
