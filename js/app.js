var app = angular.module('SuggestionBox', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'HomeController',
      templateUrl: 'views/home.html'
    })
    .when('/:id', {
      controller: 'CommentController',
      templateUrl: 'views/comment.html'
  })
    .otherwise({
      redirectTo: '/'
    });
});
