nytApp
.controller('MainCtrl', ['$scope', '$http', function MainCtrl($scope, $http){
	$scope.name = "maincontroller";
	console.log($scope.name);
}])
.controller('MovieRatingsCtrl', ['$scope', '$http', function MovieRatingsController($scope, $http){
	$scope.name = 'MovieRatingsController';
	console.log($scope.name);

	// A function to return movies reviews for the search query entered
	$scope.returnMovieRating = function(){
		console.log("I am clicked");
		var url = "https://api.nytimes.com/svc/movies/v2/reviews/search.json";
		url += "?" +"api-key=d66a121bec3c400c9cb051328f9d33ea" + "&query=" +$scope.query

		console.log(url);

		$http.get(url)
		.then(function(response){
			$scope.moviesData = response.data;
		}, function(response){
			console.log("Unable to perform get request");
		});
	};

	// Function to return critics info.
	$scope.returnMovieCritics = function(){
		console.log($scope.critic);

		var url = "https://api.nytimes.com/svc/movies/v2/critics/";
		url += $scope.critic +".json" + "?api-key=d66a121bec3c400c9cb051328f9d33ea";
		url = encodeURI(url);
		console.log(url);

		$http.get(url)
		.then(function(response){
			$scope.criticsData = response.data;
		});
	};

}])
.controller('TopStoriesCtrl', ['$scope', '$http', function TopStoriesController($scope, $http){
	$scope.name = 'TopStoriesController';
	console.log($scope.name);

	// a function to return top stories from new york times
	$scope.returnTopStory = function(){

		var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
		url += "?" +"api-key=d66a121bec3c400c9cb051328f9d33ea";
		$http.get(url)
		.then(function(response){
			$scope.results = response.data;
		}, function(response){
			console.log("Unable to perform get request");
		});
	};

	$scope.returnTopStory();
}]);
