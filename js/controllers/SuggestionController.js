app.controller('SuggestionController', ['$scope', '$routeParams', 'suggestions', function($scope, $routeParams, suggestions) {
  $scope.post = suggestions.posts[$routeParams.id];

  $scope.addComment = function() {
    //if input empty, don't submit
    if(!$scope.body || $scope.body === "") {
      return;
    }

    //push comments in suggestions.js
    $scope.posts.comments.push({
      body: $scope.body,
      upvotes: 0,
    });
  };

  $scope.upVote = function(comment) {
    comment.upvotes += 1;
  }
}]);
