var eventManager = angular.module('eventManager',['ngRoute']);

eventManager.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/',{
        templateUrl: 'views/main.html',
        controller: 'mainCtrl'
    })
    .otherwise({redirectTo: '/'});
}]);