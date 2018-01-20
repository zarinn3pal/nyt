nytApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
	$routeProvider
	.when('/', {
		templateUrl: '/pages/topstories.html',
		controller: 'TopStoriesCtrl'
		// controllerAs: 'topstories'
	})
	.when('/reviews', {
		templateUrl: '/pages/movie.html',
		controller: 'MovieRatingsCtrl'
		// controllerAs: 'movie'
	})
	.when('/critics', {
		templateUrl: '/pages/critics.html',
		controller: "MovieRatingsCtrl"
	});
	$locationProvider.html5Mode({
	  enabled: true,
	  requireBase: false
	});
}]);