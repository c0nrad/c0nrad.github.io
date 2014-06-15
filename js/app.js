var app = angular.module("app", ["ngRoute", "ngResource"])

app.config(function($routeProvider) {
	$routeProvider

	.when('/', {
		templateUrl: "templates/home.html",
		controller: "HomeController",
		resolve: { posts: "Posts" }
	})

	.when('/post/:post', {
		templateUrl: "templates/post.html",
		controller: "PostController",
		resolve: { posts: "Posts" }
	})
})

app.controller("HomeController", function($scope, Posts) {
	$scope.posts = Posts
})

app.controller("PostController", function($scope, Posts, $routeParams) {
	$scope.post = Posts[$routeParams.post]
})

app.factory("Posts", function($resource) {
	return $resource('/posts/:id', {id: "@id"}, {'query': {url: '/posts/posts.json'}}).query()
})

app.directive('markdown', function ($http) {
  var converter = new Showdown.converter();
  return {
    restrict: 'A',
    scope: { link:'@' },
    link: function (scope, element, attrs) {
      attrs.$observe('link',function(link){
        $http.get('/posts/' + link).success(function(response){
        	var htmlText = converter.makeHtml(response);
        	element.html(htmlText);
        });
      });
    }
  };
 });