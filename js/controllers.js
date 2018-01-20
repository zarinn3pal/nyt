// nytApp.controller('MainCtrl', function($scope) {
// 	$scope.name = "MainCtrl";
// 	console.log("Hello");
// })
// .controller('TopStoriesCtrl', function($scope) {
// 	$scope.name = "TopStoriesController";
// 	console.log($scope.name);
// 	console.log("Hello");
// })
// .controller('MovieRatingsCtrl', function($scope) {
// 	$scope.name = "MovieRatingsCtrl";
// 	console.log($scope.name);
// });

nytApp
.controller('MainCtrl', ['$scope', '$http', function MainCtrl($scope, $http){
	$scope.name = "maincontroller";
	console.log($scope.name);
}])
.controller('MovieRatingsCtrl', ['$scope', '$http', function MovieRatingsController($scope, $http){
	$scope.name = 'MovieRatingsController';
	console.log($scope.name);

	$scope.returnMovieRating = function(){
		console.log("I am clicked");
		var url = "https://api.nytimes.com/svc/movies/v2/reviews/search.json";
		url += "?" +"api-key=d66a121bec3c400c9cb051328f9d33ea" + "&query=" +$scope.query

		console.log(url);

		$http.get(url)
		.then(function(response){
			$scope.moviesData = response.data;
		});
	};

	$scope.returnMovieCritics = function(){
		console.log($scope.critic);

		var url = "https://api.nytimes.com/svc/movies/v2/critics/";
		url += $scope.critic +".json" + "?api-key=d66a121bec3c400c9cb051328f9d33ea";
		console.log(url);

		// $http.get(url)
		// .then(function(response){
		// 	$scope.criticsData = response.data;
		// });



		$scope.criticsData = {
			  "status": "OK",
			  "copyright": "Copyright (c) 2018 The New York Times Company. All Rights Reserved.",
			  "num_results": 82,
			  "results": [
			    {
			      "display_name": "A. O. Scott",
			      "sort_name": "A. O. Scott",
			      "status": "full-time",
			      "bio": "A. O. Scott joined The New York Times as a film critic in January 2000, and was named a chief critic in 2004. Previously, Mr. Scott had been the lead Sunday book reviewer for Newsday and a frequent contributor to Slate, The New York Review of Books, and many other publications. \n<br/><br/>\nIn the 1990s he served on the editorial staffs of Lingua Franca and The New York Review of Books. He also edited \"A Bolt from the Blue and Other Essays,\" a collection by Mary McCarthy, which was published by The New York Review of Books in 2002. \n<br/><br/>\nMr. Scott was a finalist for the Pulitzer Prize in Criticism in 2010, the same year he served as co-host (with Michael Phillips of the Chicago Tribune) on the last season of \"At the Movies,\" the syndicated film-reviewing program started by Roger Ebert and Gene Siskel.\n<br/><br/>\nA frequent presence on radio and television, Mr. Scott is Distinguished Professor of Film Criticism at Wesleyan University and the author of Better Living Through Criticism, forthcoming in 2016 from The Penguin Press. A collection of his film writing will be published by Penguin in 2017. \n<br/><br/>\nHe lives in Brooklyn with his family.",
			      "seo_name": "A-O-Scott",
			      "multimedia": {
			        "resource": {
			          "type": "image",
			          "src": "http://static01.nyt.com/images/2015/10/07/topics/ao-scott/ao-scott-articleInline.jpg",
			          "height": 163,
			          "width": 220,
			          "credit": "Earl Wilson/<br/>The New York Times"
			        }
			      }
			    },
			    {
			      "display_name": "Manohla Dargis",
			      "sort_name": "Manohla Dargis",
			      "status": "full-time",
			      "bio": "Manohla Dargis is the co-chief film critic for The Times, where she started in 2004. She has also written for The Los Angeles Times, where she was a chief film critic, and for the LA Weekly, where she was both a film critic and the film editor. She lives in Los Angeles.",
			      "seo_name": "Manohla-Dargis",
			      "multimedia": null
			    },
			    {
			      "display_name": "Stephen Holden",
			      "sort_name": "Stephen Holden",
			      "status": "full-time",
			      "bio": "Stephen Holden is a film and music critic for The Times; he joined the culture staff in 1988. Prior to that, he was a pop music critic and journalist for Rolling Stone, The Village Voice, and numerous other magazines and anthologies. Drawing on his experiences as a journalist and record executive, he wrote a satirical novel about the record business, \"Triple Platinum,\"  that was published in 1980 by Dell Books. In 1986, he won a Grammy with six other writers for Best Album Notes for \"The Voice: The Columbia Years, a Frank Sinatra Anthology.\" Born July 18, 1941, Mr. Holden graduated from Yale University in 1963 with a Bachelor of Arts degree in English and was elected Class Poet.",
			      "seo_name": "Stephen-Holden",
			      "multimedia": {
			        "resource": {
			          "type": "image",
			          "src": "http://nytimes.com/images/2007/01/05/movies/sholden.163.jpg",
			          "height": 163,
			          "width": 220,
			          "credit": "Brent Murray/<br>NYTimes.com"
			        }
			      }
			    },
			    {
			      "display_name": "Renata Adler",
			      "sort_name": "Adler, Renata",
			      "status": "part-time",
			      "bio": "",
			      "seo_name": "Renata-Adler",
			      "multimedia": null
			    },
			    {
			      "display_name": "Mordaunt Hall",
			      "sort_name": "Hall, Mordaunt ",
			      "status": "part-time",
			      "bio": "",
			      "seo_name": "Mordaunt-Hall",
			      "multimedia": null
			    },
			    {
			      "display_name": "Thomas M. Pryor",
			      "sort_name": "Pryor, Thomas M.",
			      "status": "part-time",
			      "bio": "",
			      "seo_name": "Thomas-M-Pryor",
			      "multimedia": null
			    },
			    {
			      "display_name": "Eugene Archer",
			      "sort_name": "Archer, Eugene",
			      "status": "part-time",
			      "bio": "",
			      "seo_name": "Eugene-Archer",
			      "multimedia": null
			    },
			    {
			      "display_name": "Donal J. Henahan",
			      "sort_name": "Henahan, Donal J.",
			      "status": "part-time",
			      "bio": "",
			      "seo_name": "Donal-J-Henahan",
			      "multimedia": null
			    },
			    {
			      "display_name": "Nora Sayre",
			      "sort_name": "Sayre, Nora",
			      "status": "part-time",
			      "bio": "",
			      "seo_name": "Nora-Sayre",
			      "multimedia": null
			    },
			    {
			      "display_name": "D. J. R. Bruckner",
			      "sort_name": "Bruckner, D. J. R. ",
			      "status": "part-time",
			      "bio": "",
			      "seo_name": "D-J-R-Bruckner",
			      "multimedia": null
			    },
			    {
			      "display_name": "Caryn James",
			      "sort_name": "James, Caryn",
			      "status": "part-time",
			      "bio": "",
			      "seo_name": "Caryn-James",
			      "multimedia": null
			    },
			    {
			      "display_name": "Harold C. Schonberg",
			      "sort_name": "Schonberg, Harold C.",
			      "status": "part-time",
			      "bio": "",
			      "seo_name": "Harold-C-Schonberg",
			      "multimedia": null
			    },
			    {
			      "display_name": "Tom Buckley",
			      "sort_name": "Buckley, Tom ",
			      "status": "part-time",
			      "bio": "",
			      "seo_name": "Tom-Buckley",
			      "multimedia": null
			    },
			    {
			      "display_name": "Stanley Kauffman",
			      "sort_name": "Kauffman, Stanley",
			      "status": "part-time",
			      "bio": "",
			      "seo_name": "Stanley-Kauffman",
			      "multimedia": null
			    },
			    {
			      "display_name": "Andre Sennwald",
			      "sort_name": "Sennwald, Andre",
			      "status": "part-time",
			      "bio": "",
			      "seo_name": "Andre-Sennwald",
			      "multimedia": null
			    },
			    {
			      "display_name": "Vincent Canby",
			      "sort_name": "Canby, Vincent",
			      "status": "part-time",
			      "bio": "",
			      "seo_name": "Vincent-Canby",
			      "multimedia": null
			    },
			    {
			      "display_name": "Dave Kehr",
			      "sort_name": "Kehr, Dave",
			      "status": "part-time",
			      "bio": "",
			      "seo_name": "Dave-Kehr",
			      "multimedia": null
			    },
			    {
			      "display_name": "Dana Stevens",
			      "sort_name": "Stevens, Dana",
			      "status": "part-time",
			      "bio": "",
			      "seo_name": "Dana-Stevens",
			      "multimedia": null
			    },
			    {
			      "display_name": "B. R. Crisler",
			      "sort_name": "Crisler, B. R.",
			      "status": "part-time",
			      "bio": "",
			      "seo_name": "B-R-Crisler",
			      "multimedia": null
			    },
			    {
			      "display_name": "Hilton Kramer",
			      "sort_name": "Kramer, Hilton",
			      "status": "part-time",
			      "bio": "",
			      "seo_name": "Hilton-Kramer",
			      "multimedia": null
			    },
			    {
			      "display_name": "Michael Stern",
			      "sort_name": "Stern, Michael",
			      "status": "part-time",
			      "bio": "",
			      "seo_name": "Michael-Stern",
			      "multimedia": null
			    },
			    {
			      "display_name": "Bosley Crowther",
			      "sort_name": "Crowther, Bosley",
			      "status": "part-time",
			      "bio": "",
			      "seo_name": "Bosley-Crowther",
			      "multimedia": null
			    },
			    {
			      "display_name": "Ned Martel",
			      "sort_name": "Martel, Ned",
			      "status": "part-time",
			      "bio": "",
			      "seo_name": "Ned-Martel",
			      "multimedia": null
			    },
			    {
			      "display_name": "Theodore Strauss",
			      "sort_name": "Strauss, Theodore",
			      "status": "part-time",
			      "bio": "",
			      "seo_name": "Theodore-Strauss",
			      "multimedia": null
			    },
			    {
			      "display_name": "Richard Eder",
			      "sort_name": "Eder, Richard",
			      "status": "part-time",
			      "bio": "",
			      "seo_name": "Richard-Eder",
			      "multimedia": null
			    },
			    {
			      "display_name": "Janet Maslin",
			      "sort_name": "Maslin, Janet",
			      "status": "part-time",
			      "bio": "",
			      "seo_name": "Janet-Maslin",
			      "multimedia": null
			    },
			    {
			      "display_name": "Howard Thompson",
			      "sort_name": "Thompson, Howard",
			      "status": "part-time",
			      "bio": "",
			      "seo_name": "Howard-Thompson",
			      "multimedia": null
			    },
			    {
			      "display_name": "Anita Gates",
			      "sort_name": "Gates, Anita",
			      "status": "part-time",
			      "bio": "",
			      "seo_name": "Anita-Gates",
			      "multimedia": null
			    },
			    {
			      "display_name": "John T. McManus",
			      "sort_name": "McManus, John T.",
			      "status": "part-time",
			      "bio": "",
			      "seo_name": "John-T-McManus",
			      "multimedia": null
			    },
			    {
			      "display_name": "Lawrence Van Gelder",
			      "sort_name": "Van Gelder, Lawrence",
			      "status": "part-time",
			      "bio": "",
			      "seo_name": "Lawrence-Van-Gelder",
			      "multimedia": null
			    },
			    {
			      "display_name": "Walter Goodman",
			      "sort_name": "Goodman, Walter",
			      "status": "part-time",
			      "bio": "",
			      "seo_name": "Walter-Goodman",
			      "multimedia": null
			    },
			    {
			      "display_name": "Elvis Mitchell",
			      "sort_name": "Mitchell, Elvis",
			      "status": "part-time",
			      "bio": "",
			      "seo_name": "Elvis-Mitchell",
			      "multimedia": null
			    },
			    {
			      "display_name": "A. H. Weiler",
			      "sort_name": "Weiler, A. H.",
			      "status": "part-time",
			      "bio": "",
			      "seo_name": "A-H-Weiler",
			      "multimedia": null
			    },
			    {
			      "display_name": "Roger Greenspun",
			      "sort_name": "Greenspun, Roger",
			      "status": "part-time",
			      "bio": "",
			      "seo_name": "Roger-Greenspun",
			      "multimedia": null
			    },
			    {
			      "display_name": "Frank S. Nugent",
			      "sort_name": "Nugent, Frank S.",
			      "status": "part-time",
			      "bio": "",
			      "seo_name": "Frank-S-Nugent",
			      "multimedia": null
			    },
			    {
			      "display_name": "Matt Zoller Seitz",
			      "sort_name": "Seitz, Matt Zoller",
			      "status": "part-time",
			      "bio": "",
			      "seo_name": "Matt-Zoller-Seitz",
			      "multimedia": null
			    },
			    {
			      "display_name": "Neil Genzlinger",
			      "sort_name": "Genzlinger, Neil",
			      "status": "part-time",
			      "bio": "",
			      "seo_name": "Neil-Genzlinger",
			      "multimedia": null
			    },
			    {
			      "display_name": "Andy Webster",
			      "sort_name": "Webster, Andy",
			      "status": "part-time",
			      "bio": "",
			      "seo_name": "Andy-Webster",
			      "multimedia": null
			    },
			    {
			      "display_name": "Jeannette Catsoulis",
			      "sort_name": "Catsoulis, Jeannette",
			      "status": "part-time",
			      "bio": "",
			      "seo_name": "Jeannette-Catsoulis",
			      "multimedia": null
			    },
			    {
			      "display_name": "Nathan Lee",
			      "sort_name": "Lee, Nathan",
			      "status": "part-time",
			      "bio": "",
			      "seo_name": "Nathan-Lee",
			      "multimedia": null
			    },
			    {
			      "display_name": "Kevin Cahillane",
			      "sort_name": "Cahillane, Kevin",
			      "status": null,
			      "bio": "",
			      "seo_name": "Kevin-Cahillane",
			      "multimedia": null
			    },
			    {
			      "display_name": "Laura Kern",
			      "sort_name": "Kern, Laura",
			      "status": "part-time",
			      "bio": "",
			      "seo_name": "Laura-Kern",
			      "multimedia": null
			    },
			    {
			      "display_name": "Anna Kisselgoff",
			      "sort_name": "Kisselgoff, Anna",
			      "status": null,
			      "bio": null,
			      "seo_name": "Anna-Kisselgoff",
			      "multimedia": null
			    },
			    {
			      "display_name": "C. Hooper Trask",
			      "sort_name": "Trask, C. Hooper",
			      "status": null,
			      "bio": null,
			      "seo_name": "C-Hooper-Trask",
			      "multimedia": null
			    },
			    {
			      "display_name": "Ernest Marshall",
			      "sort_name": "Marshall, Ernest",
			      "status": null,
			      "bio": null,
			      "seo_name": "Ernest-Marshall",
			      "multimedia": null
			    },
			    {
			      "display_name": "Herbert L. Matthews",
			      "sort_name": "Matthews, Herbert L.",
			      "status": null,
			      "bio": null,
			      "seo_name": "Herbert-L-Matthews",
			      "multimedia": null
			    },
			    {
			      "display_name": "Herbert Mitgang",
			      "sort_name": "Mitgang, Herbert",
			      "status": null,
			      "bio": null,
			      "seo_name": "Herbert-Mitgang",
			      "multimedia": null
			    },
			    {
			      "display_name": "Jennifer Dunning",
			      "sort_name": "Dunning, Jennifer",
			      "status": null,
			      "bio": null,
			      "seo_name": "Jennifer-Dunning",
			      "multimedia": null
			    },
			    {
			      "display_name": "John Corry",
			      "sort_name": "Corry, John",
			      "status": null,
			      "bio": null,
			      "seo_name": "John-Corry",
			      "multimedia": null
			    },
			    {
			      "display_name": "Jon Pareles",
			      "sort_name": "Pareles, John",
			      "status": null,
			      "bio": null,
			      "seo_name": "Jon-Pareles",
			      "multimedia": null
			    },
			    {
			      "display_name": "Nina Darnton",
			      "sort_name": "Darnton, Nina",
			      "status": null,
			      "bio": null,
			      "seo_name": "Nina-Darnton",
			      "multimedia": null
			    },
			    {
			      "display_name": "Patricia S. McCormick",
			      "sort_name": "McCormick, Patricia S.",
			      "status": null,
			      "bio": null,
			      "seo_name": "Patricia-S-McCormick",
			      "multimedia": null
			    },
			    {
			      "display_name": "Peter M. Nichols",
			      "sort_name": "Nichols, Peter M.",
			      "status": null,
			      "bio": null,
			      "seo_name": "Peter-M-Nichols",
			      "multimedia": null
			    },
			    {
			      "display_name": "Richard Bernstein",
			      "sort_name": "Bernstein, Richard",
			      "status": null,
			      "bio": null,
			      "seo_name": "Richard-Bernstein",
			      "multimedia": null
			    },
			    {
			      "display_name": "Richard F. Shepard",
			      "sort_name": "Shepard, Richard F.",
			      "status": null,
			      "bio": null,
			      "seo_name": "Richard-F-Shepard",
			      "multimedia": null
			    },
			    {
			      "display_name": "Richard W. Nason",
			      "sort_name": "Nason, Richard W.",
			      "status": null,
			      "bio": null,
			      "seo_name": "Richard-W-Nason",
			      "multimedia": null
			    },
			    {
			      "display_name": "Robert Alden",
			      "sort_name": "Alden, Robert",
			      "status": null,
			      "bio": null,
			      "seo_name": "Robert-Alden",
			      "multimedia": null
			    },
			    {
			      "display_name": "Charles Morgan",
			      "sort_name": "Morgan, Charles",
			      "status": null,
			      "bio": null,
			      "seo_name": "Charles-Morgan",
			      "multimedia": null
			    },
			    {
			      "display_name": "Dan Sullivan",
			      "sort_name": "Sullivan, Dan",
			      "status": null,
			      "bio": null,
			      "seo_name": "Dan-Sullivan",
			      "multimedia": null
			    },
			    {
			      "display_name": "Harry Gilroy",
			      "sort_name": "Gilroy, Harry",
			      "status": null,
			      "bio": null,
			      "seo_name": "Harry-Gilroy",
			      "multimedia": null
			    },
			    {
			      "display_name": "Julie Salamon",
			      "sort_name": "Salamon, Julie",
			      "status": null,
			      "bio": null,
			      "seo_name": "Julie-Salamon",
			      "multimedia": null
			    },
			    {
			      "display_name": "Morris Gilbert",
			      "sort_name": "Gilbert, Morris",
			      "status": null,
			      "bio": null,
			      "seo_name": "Morris-Gilbert",
			      "multimedia": null
			    },
			    {
			      "display_name": "W. L. Middleton",
			      "sort_name": "Middleton, W. L.",
			      "status": null,
			      "bio": null,
			      "seo_name": "W-L-Middleton",
			      "multimedia": null
			    },
			    {
			      "display_name": "Harry T. Smith",
			      "sort_name": "Smith, Harry T.",
			      "status": null,
			      "bio": null,
			      "seo_name": "Harry-T-Smith",
			      "multimedia": null
			    },
			    {
			      "display_name": "David DeWitt",
			      "sort_name": "DeWitt, David",
			      "status": "part-time",
			      "bio": null,
			      "seo_name": "David-DeWitt",
			      "multimedia": null
			    },
			    {
			      "display_name": "Ben Brantley",
			      "sort_name": "Brantley, Ben",
			      "status": "part-time",
			      "bio": null,
			      "seo_name": "Ben-Brantley",
			      "multimedia": null
			    },
			    {
			      "display_name": "Carina Chocano",
			      "sort_name": "Chocano, Carina",
			      "status": "part-time",
			      "bio": null,
			      "seo_name": "Carina-Chocano",
			      "multimedia": null
			    },
			    {
			      "display_name": "Daniel M. Gold",
			      "sort_name": "Gold, Daniel M.",
			      "status": "part-time",
			      "bio": null,
			      "seo_name": "Daniel-M-Gold",
			      "multimedia": null
			    },
			    {
			      "display_name": "Felicity Barringer",
			      "sort_name": "Barringer, Felicity",
			      "status": "part-time",
			      "bio": null,
			      "seo_name": "Felicity-Barringer",
			      "multimedia": null
			    },
			    {
			      "display_name": "Holcomb B. Noble",
			      "sort_name": "Noble, Holcomb B.",
			      "status": "part-time",
			      "bio": null,
			      "seo_name": "Holcomb-B-Noble",
			      "multimedia": null
			    },
			    {
			      "display_name": "Jack Gould",
			      "sort_name": "Gould, Jack",
			      "status": "part-time",
			      "bio": null,
			      "seo_name": "Jack-Gould",
			      "multimedia": null
			    },
			    {
			      "display_name": "Mike Hale",
			      "sort_name": "Hale, Mike",
			      "status": "part-time",
			      "bio": null,
			      "seo_name": "Mike-Hale",
			      "multimedia": null
			    },
			    {
			      "display_name": "Paul Brunick",
			      "sort_name": "Brunick, Pual",
			      "status": "part-time",
			      "bio": null,
			      "seo_name": "Paul-Brunick",
			      "multimedia": null
			    },
			    {
			      "display_name": "Peter Kihss",
			      "sort_name": "Kihss, Peter",
			      "status": "part-time",
			      "bio": null,
			      "seo_name": "Peter-Kihss",
			      "multimedia": null
			    },
			    {
			      "display_name": "Rachel Saltz",
			      "sort_name": "Saltz, Rachel",
			      "status": "part-time",
			      "bio": null,
			      "seo_name": "Rachel-Saltz",
			      "multimedia": null
			    },
			    {
			      "display_name": "Suzanne O'Connor",
			      "sort_name": "O'Connor, Suzanne",
			      "status": "part-time",
			      "bio": null,
			      "seo_name": "Suzanne-OConnor",
			      "multimedia": null
			    },
			    {
			      "display_name": "Victor Navasky",
			      "sort_name": "Navasky, Victor",
			      "status": "part-time",
			      "bio": null,
			      "seo_name": "Victor-Navasky",
			      "multimedia": null
			    },
			    {
			      "display_name": "Wayne King",
			      "sort_name": "King, Wayne",
			      "status": "part-time",
			      "bio": null,
			      "seo_name": "Wayne-King",
			      "multimedia": null
			    },
			    {
			      "display_name": "Nicolas Rapold",
			      "sort_name": "Rapold, Nicolas",
			      "status": "part-time",
			      "bio": null,
			      "seo_name": "Nicolas-Rapold",
			      "multimedia": null
			    },
			    {
			      "display_name": "Miriam Bale",
			      "sort_name": "Bale, Miriam",
			      "status": "part-time",
			      "bio": null,
			      "seo_name": "Miriam-Bale",
			      "multimedia": null
			    },
			    {
			      "display_name": "Nicole Herrington",
			      "sort_name": "Herrington, Nicole",
			      "status": "part-time",
			      "bio": null,
			      "seo_name": "Nicole-Herrington",
			      "multimedia": null
			    },
			    {
			      "display_name": "Ben Kenigsberg",
			      "sort_name": "Kenigsberg, Ben",
			      "status": "part-time",
			      "bio": null,
			      "seo_name": "Ben-Kenigsberg",
			      "multimedia": null
			    }
			  ]
			};



	};

	// $scope.movieData = {
	//   "status": "OK",
	//   "copyright": "Copyright (c) 2018 The New York Times Company. All Rights Reserved.",
	//   "has_more": false,
	//   "num_results": 18,
	//   "results": [
	//     {
	//       "display_title": "Indie Game: The Movie",
	//       "mpaa_rating": "Not Rated",
	//       "critics_pick": 1,
	//       "byline": "NICOLAS RAPOLD",
	//       "headline": "The Sweat, Tears and Passion Behind the Pixels",
	//       "summary_short": "“Indie Game: The Movie” is a tenderly wrought portrait of four independent video game designers.",
	//       "publication_date": "2012-05-18",
	//       "opening_date": null,
	//       "date_updated": "2017-11-02 04:16:36",
	//       "link": {
	//         "type": "article",
	//         "url": "http://www.nytimes.com/2012/05/18/movies/indie-game-the-movie-about-fez-and-phil-fish.html",
	//         "suggested_link_text": "Read the New York Times Review of Indie Game: The Movie"
	//       },
	//       "multimedia": null
	//     },
	//     {
	//       "display_title": "The Weird World of Blowfly",
	//       "mpaa_rating": "",
	//       "critics_pick": 0,
	//       "byline": "PAUL BRUNICK",
	//       "headline": "‘The Weird World of Blowfly’",
	//       "summary_short": "“The Weird World of Blowfly,” traces the musician Clarence Reid’s career as his alter ego Blowfly.",
	//       "publication_date": "2011-09-15",
	//       "opening_date": "2011-09-16",
	//       "date_updated": "2017-11-02 04:18:14",
	//       "link": {
	//         "type": "article",
	//         "url": "http://www.nytimes.com/2011/09/16/movies/the-weird-world-of-blowfly.html",
	//         "suggested_link_text": "Read the New York Times Review of The Weird World of Blowfly"
	//       },
	//       "multimedia": null
	//     },
	//     {
	//       "display_title": "The Whistleblower",
	//       "mpaa_rating": "R",
	//       "critics_pick": 0,
	//       "byline": "STEPHEN HOLDEN",
	//       "headline": "American in Bosnia Discovers the Horrors of Human Trafficking",
	//       "summary_short": "“The Whistleblower,” a film about a former United Nations peacekeeping officer, is a grueling exposé of human trafficking in postwar Bosnia.",
	//       "publication_date": "2011-08-04",
	//       "opening_date": null,
	//       "date_updated": "2017-11-02 04:16:27",
	//       "link": {
	//         "type": "article",
	//         "url": "http://www.nytimes.com/2011/08/05/movies/the-whistleblower-with-rachel-weisz-review.html",
	//         "suggested_link_text": "Read the New York Times Review of The Whistleblower"
	//       },
	//       "multimedia": null
	//     },
	//     {
	//       "display_title": "Blow",
	//       "mpaa_rating": "R",
	//       "critics_pick": 0,
	//       "byline": "A. O. Scott",
	//       "headline": "Blow (Movie)  ",
	//       "summary_short": "Johnny Depp's sorrowful countenance is the still point at the center of this film's swirling hyperactivity, and his witty, spare performance gives the picture a poignancy that Ted Demme's hectic direction and the hurried script by David McKenna and Nick Cassavetes don't quite earn. Mr. Depp plays George Jung, a real-life drug dealer, whose life is presented as a brightly colored, fizzy tale of entrepreneurship and hedonism. The movie's sense of history is shallow — mostly a matter of costume design and soundtrack selections  — and it skims so quickly over George's giddy prime that his eventual downfall lacks emotional impact. Mr. Depp carries the picture, but it's a light and flimsy contraption masquerading as a pop epic. — A. O. Scott\r\n",
	//       "publication_date": "2001-04-06",
	//       "opening_date": "2001-04-06",
	//       "date_updated": "2017-11-02 04:17:59",
	//       "link": {
	//         "type": "article",
	//         "url": "http://www.nytimes.com/movie/review?res=9D01E1DE153EF935A35757C0A9679C8B63",
	//         "suggested_link_text": "Read the New York Times Review of Blow"
	//       },
	//       "multimedia": null
	//     },
	//     {
	//       "display_title": "Blow Dry",
	//       "mpaa_rating": "R",
	//       "critics_pick": 0,
	//       "byline": "A. O. Scott",
	//       "headline": "Blow Dry (Movie)  ",
	//       "summary_short": "Ex-spouses and rival hairdressers face big events. ``Terms of Endearment'' with split ends.",
	//       "publication_date": "2001-03-07",
	//       "opening_date": null,
	//       "date_updated": "2017-11-02 04:16:17",
	//       "link": {
	//         "type": "article",
	//         "url": "http://www.nytimes.com/movie/review?res=9B05E7DC113BF934A35750C0A9679C8B63",
	//         "suggested_link_text": "Read the New York Times Review of Blow Dry"
	//       },
	//       "multimedia": null
	//     },
	//     {
	//       "display_title": "This World, Then the Fireworks",
	//       "mpaa_rating": "R",
	//       "critics_pick": 0,
	//       "byline": "Stephen Holden",
	//       "headline": "This World, Then the Fireworks (Movie)  ",
	//       "summary_short": "Reporter, ailing mother and prostitute sister. Elegant but self-conscious noir.",
	//       "publication_date": "1997-07-11",
	//       "opening_date": "1997-07-11",
	//       "date_updated": "2017-11-02 04:17:53",
	//       "link": {
	//         "type": "article",
	//         "url": "http://www.nytimes.com/movie/review?res=9904E5DC1039F932A25754C0A961958260",
	//         "suggested_link_text": "Read the New York Times Review of This World, Then the Fireworks"
	//       },
	//       "multimedia": null
	//     },
	//     {
	//       "display_title": "Blown Away",
	//       "mpaa_rating": "R",
	//       "critics_pick": 0,
	//       "byline": "Kenneth C. Davis",
	//       "headline": "BLOWN AWAY (MOVIE)",
	//       "summary_short": "Boston bomber vs. bomb squad. Let it tick.",
	//       "publication_date": "1994-07-10",
	//       "opening_date": "1994-07-01",
	//       "date_updated": "2017-11-02 04:17:47",
	//       "link": {
	//         "type": "article",
	//         "url": "http://www.nytimes.com/movie/review?res=9C00E3DA163FF933A25754C0A962958260",
	//         "suggested_link_text": "Read the New York Times Review of Blown Away"
	//       },
	//       "multimedia": null
	//     },
	//     {
	//       "display_title": "Blowback",
	//       "mpaa_rating": "",
	//       "critics_pick": 0,
	//       "byline": "Caryn James",
	//       "headline": "BLOWBACK (MOVIE)",
	//       "summary_short": "Unhip U.S. agent on covert mission meets recovering drug addicts. Satire trying desperately to be outrageous.",
	//       "publication_date": "1991-08-09",
	//       "opening_date": null,
	//       "date_updated": "2017-11-02 04:16:10",
	//       "link": {
	//         "type": "article",
	//         "url": "http://www.nytimes.com/movie/review?res=9D0CE4D71330F93AA3575BC0A967958260",
	//         "suggested_link_text": "Read the New York Times Review of Blowback"
	//       },
	//       "multimedia": null
	//     },
	//     {
	//       "display_title": "When the Wind Blows",
	//       "mpaa_rating": "",
	//       "critics_pick": 0,
	//       "byline": "Vincent Canby",
	//       "headline": "WHEN THE WIND BLOWS (MOVIE)",
	//       "summary_short": "",
	//       "publication_date": "1988-03-11",
	//       "opening_date": "1988-03-11",
	//       "date_updated": "2017-11-02 04:17:38",
	//       "link": {
	//         "type": "article",
	//         "url": "http://www.nytimes.com/movie/review?res=940DEFDC103FF932A25750C0A96E948260",
	//         "suggested_link_text": "Read the New York Times Review of When the Wind Blows"
	//       },
	//       "multimedia": null
	//     },
	//     {
	//       "display_title": "The Whistle Blower",
	//       "mpaa_rating": "PG",
	//       "critics_pick": 0,
	//       "byline": "JANET MASLIN",
	//       "headline": "WHISTLE BLOWER, THE (MOVIE)",
	//       "summary_short": "British spy-ring drama. Fine suspense.",
	//       "publication_date": "1987-07-10",
	//       "opening_date": "1987-07-10",
	//       "date_updated": "2017-11-02 04:17:37",
	//       "link": {
	//         "type": "article",
	//         "url": "http://www.nytimes.com/movie/review?res=9B0DE3DA1130F933A25754C0A961948260",
	//         "suggested_link_text": "Read the New York Times Review of The Whistle Blower"
	//       },
	//       "multimedia": null
	//     },
	//     {
	//       "display_title": "Blow Out",
	//       "mpaa_rating": "R",
	//       "critics_pick": 0,
	//       "byline": "VINCENT CANBY",
	//       "headline": "Blow Out (Movie)",
	//       "summary_short": "Movie sound-effects man and murder. Tough, effective but contrived De Palma thriller.",
	//       "publication_date": "1981-07-24",
	//       "opening_date": "1981-07-24",
	//       "date_updated": "2017-11-02 04:17:30",
	//       "link": {
	//         "type": "article",
	//         "url": "http://www.nytimes.com/movie/review?res=9903E1D81038F937A15754C0A967948260",
	//         "suggested_link_text": "Read the New York Times Review of Blow Out"
	//       },
	//       "multimedia": null
	//     },
	//     {
	//       "display_title": "Blow-Up",
	//       "mpaa_rating": "Not Rated",
	//       "critics_pick": 1,
	//       "byline": "Bosley Crowther",
	//       "headline": "BLOW-UP (MOVIE)",
	//       "summary_short": "Hip photographer and one all too revealing shot. Antonioni's tingling mod-London teaser will hook you, if you let it.",
	//       "publication_date": "1966-12-19",
	//       "opening_date": "1966-12-18",
	//       "date_updated": "2017-11-02 04:17:23",
	//       "link": {
	//         "type": "article",
	//         "url": "http://www.nytimes.com/movie/review?res=EE05E7DF1739E361BC4152DFB467838D679EDE",
	//         "suggested_link_text": "Read the New York Times Review of Blow-Up"
	//       },
	//       "multimedia": null
	//     },
	//     {
	//       "display_title": "Come Blow Your Horn",
	//       "mpaa_rating": "",
	//       "critics_pick": 0,
	//       "byline": "BOSLEY CROWTHER",
	//       "headline": "Come Blow Your Horn (Movie)",
	//       "summary_short": "Swinging bachelor inspires little brother. Very tinny stuff.",
	//       "publication_date": "1963-06-07",
	//       "opening_date": "1963-06-05",
	//       "date_updated": "2017-11-02 04:17:21",
	//       "link": {
	//         "type": "article",
	//         "url": "http://www.nytimes.com/movie/review?res=940DEFDA153CEF3BBC4F53DFB0668388679EDE",
	//         "suggested_link_text": "Read the New York Times Review of Come Blow Your Horn"
	//       },
	//       "multimedia": null
	//     },
	//     {
	//       "display_title": "The 400 Blows",
	//       "mpaa_rating": "Not Rated",
	//       "critics_pick": 1,
	//       "byline": "BOSLEY CROWTHER",
	//       "headline": "Quatre Cents Coups, Les",
	//       "summary_short": "Impressionable young boy turns to crime. Truffaut's perceptive self-portrait. A beauty.",
	//       "publication_date": "1959-11-17",
	//       "opening_date": "1959-11-16",
	//       "date_updated": "2017-11-02 04:17:19",
	//       "link": {
	//         "type": "article",
	//         "url": "http://www.nytimes.com/movie/review?res=9D07E7D71531EE3BBC4F52DFB7678382649EDE",
	//         "suggested_link_text": "Read the New York Times Review of The 400 Blows"
	//       },
	//       "multimedia": null
	//     },
	//     {
	//       "display_title": "Blowing Wild",
	//       "mpaa_rating": "",
	//       "critics_pick": 0,
	//       "byline": "BOSLEY CROWTHER",
	//       "headline": "Blowing Wild",
	//       "summary_short": "Good cast but mainly patches from old oil-field terrain.",
	//       "publication_date": "1953-10-08",
	//       "opening_date": null,
	//       "date_updated": "2017-11-02 04:15:53",
	//       "link": {
	//         "type": "article",
	//         "url": "http://www.nytimes.com/movie/review?res=9403E7DF1031E53BBC4053DFB6678388649EDE",
	//         "suggested_link_text": "Read the New York Times Review of Blowing Wild"
	//       },
	//       "multimedia": null
	//     },
	//     {
	//       "display_title": "Captain Horatio Hornblower",
	//       "mpaa_rating": "",
	//       "critics_pick": 0,
	//       "byline": "BOSLEY CROWTHER",
	//       "headline": "Captain Horatio Hornblower",
	//       "summary_short": "The Napoleonic Wars, at sea. Very good of this kind.",
	//       "publication_date": "1951-09-14",
	//       "opening_date": null,
	//       "date_updated": "2017-11-02 04:15:52",
	//       "link": {
	//         "type": "article",
	//         "url": "http://www.nytimes.com/movie/review?res=9F01E2D91031E23BBC4C52DFBF66838A649EDE",
	//         "suggested_link_text": "Read the New York Times Review of Captain Horatio Hornblower"
	//       },
	//       "multimedia": null
	//     },
	//     {
	//       "display_title": "They Came to Blow up America",
	//       "mpaa_rating": "",
	//       "critics_pick": 0,
	//       "byline": "BOSLEY CROWTHER",
	//       "headline": "They Came to Blow up America",
	//       "summary_short": "Sten.",
	//       "publication_date": "1943-05-15",
	//       "opening_date": "1943-05-07",
	//       "date_updated": "2017-11-02 04:17:06",
	//       "link": {
	//         "type": "article",
	//         "url": "http://www.nytimes.com/movie/review?res=9E02EFDD103CE03ABC4D52DFB3668388659EDE",
	//         "suggested_link_text": "Read the New York Times Review of They Came to Blow up America"
	//       },
	//       "multimedia": null
	//     },
	//     {
	//       "display_title": "The Trumpet Blows",
	//       "mpaa_rating": "",
	//       "critics_pick": 0,
	//       "byline": "MORDAUNT HALL",
	//       "headline": "Trumpet Blows, The",
	//       "summary_short": "",
	//       "publication_date": "1934-04-14",
	//       "opening_date": "1934-04-14",
	//       "date_updated": "2017-11-02 04:16:54",
	//       "link": {
	//         "type": "article",
	//         "url": "http://www.nytimes.com/movie/review?res=9E06E6DD1E3DE33ABC4C52DFB266838F629EDE",
	//         "suggested_link_text": "Read the New York Times Review of The Trumpet Blows"
	//       },
	//       "multimedia": null
	//     }
	//   ]
	// };

}])
.controller('TopStoriesCtrl', ['$scope', '$http', function TopStoriesController($scope, $http){
	$scope.name = 'TopStoriesController';
	console.log($scope.name);

	// "https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=d66a121bec3c400c9cb051328f9d33ea&query=Blow"

	


	$scope.returnTopStory = function(){

		var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
		url += "?" +"api-key=d66a121bec3c400c9cb051328f9d33ea";
		$http.get(url)
		.then(function(response){
			$scope.results = response.data;
		});

		

	};

	$scope.returnTopStory();

	// $scope.results = {
	//   "status": "OK",
	//   "copyright": "Copyright (c) 2018 The New York Times Company. All Rights Reserved.",
	//   "section": "home",
	//   "last_updated": "2018-01-18T04:29:08-05:00",
	//   "num_results": 46,
	//   "results": [
	//     {
	//       "section": "Briefing",
	//       "subsection": "",
	//       "title": "Angela Merkel, Brexit, Winter Olympics: Your Thursday Briefing",
	//       "abstract": "Here’s what you need to know to start your day.",
	//       "url": "https://www.nytimes.com/2018/01/17/briefing/angela-merkel-brexit-winter-olympics.html",
	//       "byline": "By PATRICK BOEHLER",
	//       "item_type": "Article",
	//       "updated_date": "2018-01-18T00:13:23-05:00",
	//       "created_date": "2018-01-17T23:59:53-05:00",
	//       "published_date": "2018-01-17T23:59:53-05:00",
	//       "material_type_facet": "",
	//       "kicker": "",
	//       "des_facet": [],
	//       "org_facet": [],
	//       "per_facet": [],
	//       "geo_facet": [],
	//       "multimedia": [
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/briefing/18amBriefiing-Europe-core-container-gif-trypt/18amBriefiing-Europe-ss-slide-IIW6-thumbStandard.jpg",
	//           "format": "Standard Thumbnail",
	//           "height": 75,
	//           "width": 75,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "",
	//           "copyright": "Doug Mills/The New York Times'"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/briefing/18amBriefiing-Europe-core-container-gif-trypt/18amBriefiing-Europe-ss-slide-IIW6-thumbLarge.jpg",
	//           "format": "thumbLarge",
	//           "height": 150,
	//           "width": 150,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "",
	//           "copyright": "Doug Mills/The New York Times'"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/briefing/18amBriefiing-Europe-core-container-gif-trypt/18amBriefiing-Europe-ss-slide-IIW6-articleInline.jpg",
	//           "format": "Normal",
	//           "height": 127,
	//           "width": 190,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "",
	//           "copyright": "Doug Mills/The New York Times'"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/briefing/18amBriefiing-Europe-core-container-gif-trypt/18amBriefiing-Europe-ss-slide-IIW6-mediumThreeByTwo210.jpg",
	//           "format": "mediumThreeByTwo210",
	//           "height": 140,
	//           "width": 210,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "",
	//           "copyright": "Doug Mills/The New York Times'"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/briefing/18amBriefiing-Europe-core-container-gif-trypt/18amBriefiing-Europe-core-container-gif-trypt-superJumbo.jpg",
	//           "format": "superJumbo",
	//           "height": 188,
	//           "width": 624,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "",
	//           "copyright": "Doug Mills/The New York Times'"
	//         }
	//       ],
	//       "short_url": "https://nyti.ms/2FRc9Sb"
	//     },
	//     {
	//       "section": "U.S.",
	//       "subsection": "Politics",
	//       "title": "Trump Was Not ‘Fully Informed’ in Campaign Vows on Wall, Chief of Staff Says",
	//       "abstract": "John F. Kelly told Hispanic members of Congress on Wednesday that President Trump’s campaign promises have “evolved” on immigration.",
	//       "url": "https://www.nytimes.com/2018/01/17/us/politics/chief-of-staff-kelly-trump-not-fully-informed.html",
	//       "byline": "By JULIE HIRSCHFELD DAVIS, SHERYL GAY STOLBERG and THOMAS KAPLAN",
	//       "item_type": "Article",
	//       "updated_date": "2018-01-18T03:19:16-05:00",
	//       "created_date": "2018-01-17T17:39:45-05:00",
	//       "published_date": "2018-01-17T17:39:45-05:00",
	//       "material_type_facet": "",
	//       "kicker": "",
	//       "des_facet": [
	//         "United States Politics and Government",
	//         "Presidential Election of 2016",
	//         "Immigration and Emigration",
	//         "Illegal Immigration",
	//         "Deferred Action for Childhood Arrivals"
	//       ],
	//       "org_facet": [
	//         "Congressional Hispanic Caucus"
	//       ],
	//       "per_facet": [
	//         "Kelly, John F (1950- )",
	//         "Trump, Donald J"
	//       ],
	//       "geo_facet": [],
	//       "multimedia": [
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/us/politics/18dc-kelly/18dc-kelly-thumbStandard.jpg",
	//           "format": "Standard Thumbnail",
	//           "height": 75,
	//           "width": 75,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "John F. Kelly, the White House chief of staff, met on Wednesday with members of the Congressional Hispanic Caucus.",
	//           "copyright": "Aaron P. Bernstein/Reuters"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/us/politics/18dc-kelly/18dc-kelly-thumbLarge.jpg",
	//           "format": "thumbLarge",
	//           "height": 150,
	//           "width": 150,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "John F. Kelly, the White House chief of staff, met on Wednesday with members of the Congressional Hispanic Caucus.",
	//           "copyright": "Aaron P. Bernstein/Reuters"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/us/politics/18dc-kelly/18dc-kelly-articleInline.jpg",
	//           "format": "Normal",
	//           "height": 127,
	//           "width": 190,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "John F. Kelly, the White House chief of staff, met on Wednesday with members of the Congressional Hispanic Caucus.",
	//           "copyright": "Aaron P. Bernstein/Reuters"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/us/politics/18dc-kelly/18dc-kelly-mediumThreeByTwo210.jpg",
	//           "format": "mediumThreeByTwo210",
	//           "height": 140,
	//           "width": 210,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "John F. Kelly, the White House chief of staff, met on Wednesday with members of the Congressional Hispanic Caucus.",
	//           "copyright": "Aaron P. Bernstein/Reuters"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/us/politics/18dc-kelly/18dc-kelly-superJumbo.jpg",
	//           "format": "superJumbo",
	//           "height": 1365,
	//           "width": 2048,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "John F. Kelly, the White House chief of staff, met on Wednesday with members of the Congressional Hispanic Caucus.",
	//           "copyright": "Aaron P. Bernstein/Reuters"
	//         }
	//       ],
	//       "short_url": "https://nyti.ms/2FKIM3T"
	//     },
	//     {
	//       "section": "U.S.",
	//       "subsection": "Politics",
	//       "title": "Senate Democrats Make Hard Turn Left in Warming Up for 2020 Race",
	//       "abstract": "The 2020 race for the White House is already unfolding in the Capitol, with no fewer than six Democratic senators angling for their party’s nomination.",
	//       "url": "https://www.nytimes.com/2018/01/17/us/politics/democrat-senators-presidential-election-left.html",
	//       "byline": "By SHERYL GAY STOLBERG",
	//       "item_type": "Article",
	//       "updated_date": "2018-01-17T20:33:00-05:00",
	//       "created_date": "2018-01-17T19:00:11-05:00",
	//       "published_date": "2018-01-17T19:00:11-05:00",
	//       "material_type_facet": "",
	//       "kicker": "",
	//       "des_facet": [
	//         "United States Politics and Government",
	//         "Presidential Election of 2020",
	//         "Elections, Senate",
	//         "Law and Legislation"
	//       ],
	//       "org_facet": [
	//         "Democratic Party"
	//       ],
	//       "per_facet": [],
	//       "geo_facet": [],
	//       "multimedia": [
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/us/politics/18dc-dems2/18dc-dems2-thumbStandard.jpg",
	//           "format": "Standard Thumbnail",
	//           "height": 75,
	//           "width": 75,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Democrats stood firmly together last year, when every Senate Democrat, including Elizabeth Warren of Massachusetts, voted against repealing the Affordable Care Act and the Republicans’ tax overhaul.",
	//           "copyright": "Tom Brenner/The New York Times"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/us/politics/18dc-dems2/18dc-dems2-thumbLarge.jpg",
	//           "format": "thumbLarge",
	//           "height": 150,
	//           "width": 150,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Democrats stood firmly together last year, when every Senate Democrat, including Elizabeth Warren of Massachusetts, voted against repealing the Affordable Care Act and the Republicans’ tax overhaul.",
	//           "copyright": "Tom Brenner/The New York Times"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/us/politics/18dc-dems2/merlin_131257139_9a1b5fd6-fcf1-42bc-85b7-380b944695de-articleInline.jpg",
	//           "format": "Normal",
	//           "height": 127,
	//           "width": 190,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Democrats stood firmly together last year, when every Senate Democrat, including Elizabeth Warren of Massachusetts, voted against repealing the Affordable Care Act and the Republicans’ tax overhaul.",
	//           "copyright": "Tom Brenner/The New York Times"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/us/politics/18dc-dems2/18dc-dems2-mediumThreeByTwo210.jpg",
	//           "format": "mediumThreeByTwo210",
	//           "height": 140,
	//           "width": 210,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Democrats stood firmly together last year, when every Senate Democrat, including Elizabeth Warren of Massachusetts, voted against repealing the Affordable Care Act and the Republicans’ tax overhaul.",
	//           "copyright": "Tom Brenner/The New York Times"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/us/politics/18dc-dems2/merlin_131257139_9a1b5fd6-fcf1-42bc-85b7-380b944695de-superJumbo.jpg",
	//           "format": "superJumbo",
	//           "height": 1365,
	//           "width": 2048,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Democrats stood firmly together last year, when every Senate Democrat, including Elizabeth Warren of Massachusetts, voted against repealing the Affordable Care Act and the Republicans’ tax overhaul.",
	//           "copyright": "Tom Brenner/The New York Times"
	//         }
	//       ],
	//       "short_url": "https://nyti.ms/2FOwAPy"
	//     },
	//     {
	//       "section": "U.S.",
	//       "subsection": "Politics",
	//       "title": "Olympic Détente Upends U.S. Strategy on North Korea",
	//       "abstract": "For the White House, the budding détente scrambles its strategy of pressuring the North, with sanctions and threats of military action, to give up its nuclear arsenal.",
	//       "url": "https://www.nytimes.com/2018/01/17/us/politics/trump-north-south-korea-olympics.html",
	//       "byline": "By CHOE SANG-HUN and MARK LANDLER",
	//       "item_type": "Article",
	//       "updated_date": "2018-01-17T20:29:44-05:00",
	//       "created_date": "2018-01-17T20:29:44-05:00",
	//       "published_date": "2018-01-17T20:29:44-05:00",
	//       "material_type_facet": "",
	//       "kicker": "",
	//       "des_facet": [
	//         "Olympic Games (2018)",
	//         "Nuclear Tests",
	//         "Nuclear Weapons",
	//         "Embargoes and Sanctions"
	//       ],
	//       "org_facet": [],
	//       "per_facet": [
	//         "Kim Jong-un"
	//       ],
	//       "geo_facet": [
	//         "North Korea",
	//         "South Korea",
	//         "United States"
	//       ],
	//       "multimedia": [
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/us/18dc-prexy1/18dc-prexy1-thumbStandard.jpg",
	//           "format": "Standard Thumbnail",
	//           "height": 75,
	//           "width": 75,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "South Koreans holding “unification flags” at a hockey game between South Korea and North Korea in 2017. In addition to marching together, the two Koreas will field a joint women’s hockey team at the Games, which begin Feb. 9 in Pyeongchang, South Korea.",
	//           "copyright": "Jung Yeon-Je/Agence France-Presse — Getty Images"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/us/18dc-prexy1/18dc-prexy1-thumbLarge.jpg",
	//           "format": "thumbLarge",
	//           "height": 150,
	//           "width": 150,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "South Koreans holding “unification flags” at a hockey game between South Korea and North Korea in 2017. In addition to marching together, the two Koreas will field a joint women’s hockey team at the Games, which begin Feb. 9 in Pyeongchang, South Korea.",
	//           "copyright": "Jung Yeon-Je/Agence France-Presse — Getty Images"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/us/18dc-prexy1/18dc-prexy1-articleInline.jpg",
	//           "format": "Normal",
	//           "height": 129,
	//           "width": 190,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "South Koreans holding “unification flags” at a hockey game between South Korea and North Korea in 2017. In addition to marching together, the two Koreas will field a joint women’s hockey team at the Games, which begin Feb. 9 in Pyeongchang, South Korea.",
	//           "copyright": "Jung Yeon-Je/Agence France-Presse — Getty Images"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/us/18dc-prexy1/18dc-prexy1-mediumThreeByTwo210.jpg",
	//           "format": "mediumThreeByTwo210",
	//           "height": 140,
	//           "width": 210,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "South Koreans holding “unification flags” at a hockey game between South Korea and North Korea in 2017. In addition to marching together, the two Koreas will field a joint women’s hockey team at the Games, which begin Feb. 9 in Pyeongchang, South Korea.",
	//           "copyright": "Jung Yeon-Je/Agence France-Presse — Getty Images"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/us/18dc-prexy1/18dc-prexy1-superJumbo.jpg",
	//           "format": "superJumbo",
	//           "height": 1387,
	//           "width": 2048,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "South Koreans holding “unification flags” at a hockey game between South Korea and North Korea in 2017. In addition to marching together, the two Koreas will field a joint women’s hockey team at the Games, which begin Feb. 9 in Pyeongchang, South Korea.",
	//           "copyright": "Jung Yeon-Je/Agence France-Presse — Getty Images"
	//         }
	//       ],
	//       "short_url": "https://nyti.ms/2mGsbFJ"
	//     },
	//     {
	//       "section": "Sports",
	//       "subsection": "",
	//       "title": "A Tricky Reunion on the Ice for North and South Korean Hockey",
	//       "abstract": "The two countries, who played against each other to acclaim last year, are set to field a joint women’s hockey team at the Winter Olympics next month.",
	//       "url": "https://www.nytimes.com/2018/01/17/sports/north-south-korea-olympics-hockey.html",
	//       "byline": "By SETH BERKMAN",
	//       "item_type": "Article",
	//       "updated_date": "2018-01-18T00:06:21-05:00",
	//       "created_date": "2018-01-17T20:16:58-05:00",
	//       "published_date": "2018-01-17T20:16:58-05:00",
	//       "material_type_facet": "",
	//       "kicker": "",
	//       "des_facet": [
	//         "Olympic Games (2018)",
	//         "Hockey, Ice"
	//       ],
	//       "org_facet": [
	//         "International Olympic Committee"
	//       ],
	//       "per_facet": [],
	//       "geo_facet": [
	//         "North Korea",
	//         "South Korea"
	//       ],
	//       "multimedia": [
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/sports/18koreahockey1/18koreahockey1-thumbStandard.jpg",
	//           "format": "Standard Thumbnail",
	//           "height": 75,
	//           "width": 75,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "South Korea’s Park Chae-lin, right, battling North Korea’s Kim Un-hyang in an April match.",
	//           "copyright": "Jung Yeon-Je/Agence France-Presse — Getty Images"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/sports/18koreahockey1/18koreahockey1-thumbLarge.jpg",
	//           "format": "thumbLarge",
	//           "height": 150,
	//           "width": 150,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "South Korea’s Park Chae-lin, right, battling North Korea’s Kim Un-hyang in an April match.",
	//           "copyright": "Jung Yeon-Je/Agence France-Presse — Getty Images"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/sports/18koreahockey1/merlin_132421718_e726b5bc-ab1f-4bdc-9fc7-9dde51cd221d-articleInline.jpg",
	//           "format": "Normal",
	//           "height": 129,
	//           "width": 190,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "South Korea’s Park Chae-lin, right, battling North Korea’s Kim Un-hyang in an April match.",
	//           "copyright": "Jung Yeon-Je/Agence France-Presse — Getty Images"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/sports/18koreahockey1/18koreahockey1-mediumThreeByTwo210.jpg",
	//           "format": "mediumThreeByTwo210",
	//           "height": 140,
	//           "width": 210,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "South Korea’s Park Chae-lin, right, battling North Korea’s Kim Un-hyang in an April match.",
	//           "copyright": "Jung Yeon-Je/Agence France-Presse — Getty Images"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/sports/18koreahockey1/merlin_132421718_e726b5bc-ab1f-4bdc-9fc7-9dde51cd221d-superJumbo.jpg",
	//           "format": "superJumbo",
	//           "height": 1392,
	//           "width": 2048,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "South Korea’s Park Chae-lin, right, battling North Korea’s Kim Un-hyang in an April match.",
	//           "copyright": "Jung Yeon-Je/Agence France-Presse — Getty Images"
	//         }
	//       ],
	//       "short_url": "https://nyti.ms/2FOIrNy"
	//     },
	//     {
	//       "section": "World",
	//       "subsection": "Asia Pacific",
	//       "title": "Hunting a C.I.A. Mole, Agents Gambled and Let a Suspect Return to China",
	//       "abstract": "Officials hoped it would help solve the mystery of the deaths of C.I.A. informants. Five years later, an arrest has been made but the mystery remains.",
	//       "url": "https://www.nytimes.com/2018/01/17/world/asia/jerry-lee-cia-china-mole-hunt-suspect.html",
	//       "byline": "By MATT APUZZO and ADAM GOLDMAN",
	//       "item_type": "Article",
	//       "updated_date": "2018-01-17T23:46:06-05:00",
	//       "created_date": "2018-01-17T20:30:54-05:00",
	//       "published_date": "2018-01-17T20:30:54-05:00",
	//       "material_type_facet": "",
	//       "kicker": "",
	//       "des_facet": [
	//         "Espionage and Intelligence Services",
	//         "Classified Information and State Secrets"
	//       ],
	//       "org_facet": [
	//         "Central Intelligence Agency",
	//         "Federal Bureau of Investigation",
	//         "Justice Department"
	//       ],
	//       "per_facet": [
	//         "Jerry Chun Shing Lee"
	//       ],
	//       "geo_facet": [
	//         "China"
	//       ],
	//       "multimedia": [
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/us/politics/18dc-intel1/18dc-intel1-thumbStandard.jpg",
	//           "format": "Standard Thumbnail",
	//           "height": 75,
	//           "width": 75,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Fears of a mole grew when the C.I.A. noticed in late 2010 that its spies were disappearing.",
	//           "copyright": "Doug Mills/The New York Times"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/us/politics/18dc-intel1/18dc-intel1-thumbLarge.jpg",
	//           "format": "thumbLarge",
	//           "height": 150,
	//           "width": 150,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Fears of a mole grew when the C.I.A. noticed in late 2010 that its spies were disappearing.",
	//           "copyright": "Doug Mills/The New York Times"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/us/politics/18dc-intel1/merlin_117034865_f250b732-2cf7-4446-aa56-71ae1bd61530-articleInline.jpg",
	//           "format": "Normal",
	//           "height": 127,
	//           "width": 190,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Fears of a mole grew when the C.I.A. noticed in late 2010 that its spies were disappearing.",
	//           "copyright": "Doug Mills/The New York Times"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/us/politics/18dc-intel1/18dc-intel1-mediumThreeByTwo210.jpg",
	//           "format": "mediumThreeByTwo210",
	//           "height": 140,
	//           "width": 210,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Fears of a mole grew when the C.I.A. noticed in late 2010 that its spies were disappearing.",
	//           "copyright": "Doug Mills/The New York Times"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/us/politics/18dc-intel1/merlin_117034865_f250b732-2cf7-4446-aa56-71ae1bd61530-superJumbo.jpg",
	//           "format": "superJumbo",
	//           "height": 1365,
	//           "width": 2048,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Fears of a mole grew when the C.I.A. noticed in late 2010 that its spies were disappearing.",
	//           "copyright": "Doug Mills/The New York Times"
	//         }
	//       ],
	//       "short_url": "https://nyti.ms/2mGKQRG"
	//     },
	//     {
	//       "section": "U.S.",
	//       "subsection": "Politics",
	//       "title": "Ex-C.I.A. Officer Suspected of Compromising Chinese Informants Is Arrested",
	//       "abstract": "The arrest of the former officer, Jerry Chun Shing Lee, 53, capped an intense F.B.I. investigation that began around 2012 after the C.I.A. began losing its agents in China.",
	//       "url": "https://www.nytimes.com/2018/01/16/us/politics/cia-china-mole-arrest-jerry-chun-shing-lee.html",
	//       "byline": "By ADAM GOLDMAN",
	//       "item_type": "Article",
	//       "updated_date": "2018-01-16T22:17:49-05:00",
	//       "created_date": "2018-01-16T18:19:30-05:00",
	//       "published_date": "2018-01-16T18:19:30-05:00",
	//       "material_type_facet": "",
	//       "kicker": "",
	//       "des_facet": [
	//         "Espionage and Intelligence Services",
	//         "United States Politics and Government",
	//         "Informers"
	//       ],
	//       "org_facet": [
	//         "Central Intelligence Agency",
	//         "Federal Bureau of Investigation"
	//       ],
	//       "per_facet": [
	//         "Lee, Jerry Chun Shing"
	//       ],
	//       "geo_facet": [
	//         "China"
	//       ],
	//       "multimedia": [
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/17/us/politics/17dc-intel/17dc-intel-thumbStandard.jpg",
	//           "format": "Standard Thumbnail",
	//           "height": 75,
	//           "width": 75,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "China killed or imprisoned several C.I.A. informants in the country starting in 2010, unraveling the agency’s source network in a devastating setback for the C.I.A.",
	//           "copyright": "Andy Wong/Associated Press"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/17/us/politics/17dc-intel/17dc-intel-thumbLarge.jpg",
	//           "format": "thumbLarge",
	//           "height": 150,
	//           "width": 150,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "China killed or imprisoned several C.I.A. informants in the country starting in 2010, unraveling the agency’s source network in a devastating setback for the C.I.A.",
	//           "copyright": "Andy Wong/Associated Press"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/17/us/politics/17dc-intel/merlin_132129410_3303a2a5-c0fd-4409-9f4e-0ee37982a43a-articleInline.jpg",
	//           "format": "Normal",
	//           "height": 127,
	//           "width": 190,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "China killed or imprisoned several C.I.A. informants in the country starting in 2010, unraveling the agency’s source network in a devastating setback for the C.I.A.",
	//           "copyright": "Andy Wong/Associated Press"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/17/us/politics/17dc-intel/merlin_132129410_3303a2a5-c0fd-4409-9f4e-0ee37982a43a-mediumThreeByTwo210.jpg",
	//           "format": "mediumThreeByTwo210",
	//           "height": 140,
	//           "width": 210,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "China killed or imprisoned several C.I.A. informants in the country starting in 2010, unraveling the agency’s source network in a devastating setback for the C.I.A.",
	//           "copyright": "Andy Wong/Associated Press"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/17/us/politics/17dc-intel/merlin_132129410_3303a2a5-c0fd-4409-9f4e-0ee37982a43a-superJumbo.jpg",
	//           "format": "superJumbo",
	//           "height": 1365,
	//           "width": 2048,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "China killed or imprisoned several C.I.A. informants in the country starting in 2010, unraveling the agency’s source network in a devastating setback for the C.I.A.",
	//           "copyright": "Andy Wong/Associated Press"
	//         }
	//       ],
	//       "short_url": "https://nyti.ms/2FIsusf"
	//     },
	//     {
	//       "section": "World",
	//       "subsection": "Asia Pacific",
	//       "title": "Killing C.I.A. Informants, China Crippled U.S. Spying Operations",
	//       "abstract": "At least 18 C.I.A. sources were killed or imprisoned in China between 2010 and 2012, one of the worst intelligence breaches in decades. Investigators still disagree about how it happened.",
	//       "url": "https://www.nytimes.com/2017/05/20/world/asia/china-cia-spies-espionage.html",
	//       "byline": "By MARK MAZZETTI, ADAM GOLDMAN, MICHAEL S. SCHMIDT and MATT APUZZO",
	//       "item_type": "Article",
	//       "updated_date": "2017-05-20T12:13:08-04:00",
	//       "created_date": "2017-05-20T12:13:12-04:00",
	//       "published_date": "2017-05-20T12:13:12-04:00",
	//       "material_type_facet": "",
	//       "kicker": "",
	//       "des_facet": [
	//         "Espionage and Intelligence Services",
	//         "United States International Relations"
	//       ],
	//       "org_facet": [
	//         "Central Intelligence Agency"
	//       ],
	//       "per_facet": [],
	//       "geo_facet": [
	//         "China"
	//       ],
	//       "multimedia": [
	//         {
	//           "url": "https://static01.nyt.com/images/2017/05/21/world/21chinaspy/21chinaspy-thumbStandard.jpg",
	//           "format": "Standard Thumbnail",
	//           "height": 75,
	//           "width": 75,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "An honor guard outside the Great Hall of the People in Beijing last month. The Chinese government killed or imprisoned 18 to 20 C.I.A sources from 2010 through 2012.",
	//           "copyright": "Wang Zhao/Agence France-Presse — Getty Images"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2017/05/21/world/21chinaspy/21chinaspy-thumbLarge.jpg",
	//           "format": "thumbLarge",
	//           "height": 150,
	//           "width": 150,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "An honor guard outside the Great Hall of the People in Beijing last month. The Chinese government killed or imprisoned 18 to 20 C.I.A sources from 2010 through 2012.",
	//           "copyright": "Wang Zhao/Agence France-Presse — Getty Images"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2017/05/21/world/21chinaspy/21chinaspy-articleInline.jpg",
	//           "format": "Normal",
	//           "height": 127,
	//           "width": 190,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "An honor guard outside the Great Hall of the People in Beijing last month. The Chinese government killed or imprisoned 18 to 20 C.I.A sources from 2010 through 2012.",
	//           "copyright": "Wang Zhao/Agence France-Presse — Getty Images"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2017/05/21/world/21chinaspy/21chinaspy-mediumThreeByTwo210.jpg",
	//           "format": "mediumThreeByTwo210",
	//           "height": 140,
	//           "width": 210,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "An honor guard outside the Great Hall of the People in Beijing last month. The Chinese government killed or imprisoned 18 to 20 C.I.A sources from 2010 through 2012.",
	//           "copyright": "Wang Zhao/Agence France-Presse — Getty Images"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2017/05/21/world/21chinaspy/merlin-to-scoop-120712856-46940-superJumbo.jpg",
	//           "format": "superJumbo",
	//           "height": 1367,
	//           "width": 2048,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "An honor guard outside the Great Hall of the People in Beijing last month. The Chinese government killed or imprisoned 18 to 20 C.I.A sources from 2010 through 2012.",
	//           "copyright": "Wang Zhao/Agence France-Presse — Getty Images"
	//         }
	//       ],
	//       "short_url": "https://nyti.ms/2rDr2PZ"
	//     },
	//     {
	//       "section": "U.S.",
	//       "subsection": "Politics",
	//       "title": "Trump’s Physical Revealed Serious Heart Concerns, Outside Experts Say",
	//       "abstract": "The White House physician had said President Trump was in “excellent” cardiac health despite having an LDL cholesterol level of 143, well above the desired number.",
	//       "url": "https://www.nytimes.com/2018/01/17/us/politics/trump-physical-heart-health-cholesterol.html",
	//       "byline": "By MICHAEL D. SHEAR and GINA KOLATA",
	//       "item_type": "Article",
	//       "updated_date": "2018-01-17T18:40:50-05:00",
	//       "created_date": "2018-01-17T15:29:52-05:00",
	//       "published_date": "2018-01-17T15:29:52-05:00",
	//       "material_type_facet": "",
	//       "kicker": "",
	//       "des_facet": [
	//         "United States Politics and Government",
	//         "Cholesterol",
	//         "Obesity",
	//         "Heart"
	//       ],
	//       "org_facet": [],
	//       "per_facet": [
	//         "Trump, Donald J"
	//       ],
	//       "geo_facet": [],
	//       "multimedia": [
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/us/politics/18dc-checkup/18dc-checkup-thumbStandard.jpg",
	//           "format": "Standard Thumbnail",
	//           "height": 75,
	//           "width": 75,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Dr. Ronny L. Jackson, a rear admiral and the White House physician, said during a briefing on Tuesday that President Trump does not have heart disease.",
	//           "copyright": "Doug Mills/The New York Times"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/us/politics/18dc-checkup/18dc-checkup-thumbLarge.jpg",
	//           "format": "thumbLarge",
	//           "height": 150,
	//           "width": 150,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Dr. Ronny L. Jackson, a rear admiral and the White House physician, said during a briefing on Tuesday that President Trump does not have heart disease.",
	//           "copyright": "Doug Mills/The New York Times"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/us/politics/18dc-checkup/18dc-checkup-articleInline.jpg",
	//           "format": "Normal",
	//           "height": 127,
	//           "width": 190,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Dr. Ronny L. Jackson, a rear admiral and the White House physician, said during a briefing on Tuesday that President Trump does not have heart disease.",
	//           "copyright": "Doug Mills/The New York Times"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/us/politics/18dc-checkup/18dc-checkup-mediumThreeByTwo210.jpg",
	//           "format": "mediumThreeByTwo210",
	//           "height": 140,
	//           "width": 210,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Dr. Ronny L. Jackson, a rear admiral and the White House physician, said during a briefing on Tuesday that President Trump does not have heart disease.",
	//           "copyright": "Doug Mills/The New York Times"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/us/politics/18dc-checkup/18dc-checkup-superJumbo.jpg",
	//           "format": "superJumbo",
	//           "height": 1365,
	//           "width": 2048,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Dr. Ronny L. Jackson, a rear admiral and the White House physician, said during a briefing on Tuesday that President Trump does not have heart disease.",
	//           "copyright": "Doug Mills/The New York Times"
	//         }
	//       ],
	//       "short_url": "https://nyti.ms/2EQyuOa"
	//     },
	//     {
	//       "section": "U.S.",
	//       "subsection": "Politics",
	//       "title": "The Next Hurdle for a Healthy Trump? Getting Some Exercise",
	//       "abstract": "Washington often holds the mantle of the fittest city in the United States. It is now home to a president who has no interest in exercise.",
	//       "url": "https://www.nytimes.com/2018/01/17/us/politics/trump-health-exercise.html",
	//       "byline": "By KATIE ROGERS",
	//       "item_type": "Article",
	//       "updated_date": "2018-01-17T05:00:23-05:00",
	//       "created_date": "2018-01-17T05:00:23-05:00",
	//       "published_date": "2018-01-17T05:00:23-05:00",
	//       "material_type_facet": "",
	//       "kicker": "",
	//       "des_facet": [
	//         "Exercise",
	//         "Weight",
	//         "United States Politics and Government",
	//         "Presidents and Presidency (US)"
	//       ],
	//       "org_facet": [],
	//       "per_facet": [
	//         "Trump, Donald J",
	//         "Jackson, Ronny L."
	//       ],
	//       "geo_facet": [],
	//       "multimedia": [
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/17/us/18dc-EXERCISE/18dc-EXERCISE-thumbStandard.jpg",
	//           "format": "Standard Thumbnail",
	//           "height": 75,
	//           "width": 75,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "President Trump this month at Joint Base Andrews in Maryland. He is being encouraged to lower the fat and carbohydrate content of his diet.",
	//           "copyright": "Al Drago for The New York Times"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/17/us/18dc-EXERCISE/18dc-EXERCISE-thumbLarge.jpg",
	//           "format": "thumbLarge",
	//           "height": 150,
	//           "width": 150,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "President Trump this month at Joint Base Andrews in Maryland. He is being encouraged to lower the fat and carbohydrate content of his diet.",
	//           "copyright": "Al Drago for The New York Times"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/17/us/18dc-EXERCISE/18dc-EXERCISE-articleInline.jpg",
	//           "format": "Normal",
	//           "height": 127,
	//           "width": 190,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "President Trump this month at Joint Base Andrews in Maryland. He is being encouraged to lower the fat and carbohydrate content of his diet.",
	//           "copyright": "Al Drago for The New York Times"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/17/us/18dc-EXERCISE/18dc-EXERCISE-mediumThreeByTwo210.jpg",
	//           "format": "mediumThreeByTwo210",
	//           "height": 140,
	//           "width": 210,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "President Trump this month at Joint Base Andrews in Maryland. He is being encouraged to lower the fat and carbohydrate content of his diet.",
	//           "copyright": "Al Drago for The New York Times"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/17/us/18dc-EXERCISE/18dc-EXERCISE-superJumbo.jpg",
	//           "format": "superJumbo",
	//           "height": 1365,
	//           "width": 2048,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "President Trump this month at Joint Base Andrews in Maryland. He is being encouraged to lower the fat and carbohydrate content of his diet.",
	//           "copyright": "Al Drago for The New York Times"
	//         }
	//       ],
	//       "short_url": "https://nyti.ms/2EQoeW6"
	//     },
	//     {
	//       "section": "Business Day",
	//       "subsection": "Media",
	//       "title": "Trump Hands Out ‘Fake News Awards,’ Sans the Red Carpet",
	//       "abstract": "President Trump made good on his promise to honor the media’s “most corrupt & biased,” delivering his awards in a blog post.",
	//       "url": "https://www.nytimes.com/2018/01/17/business/media/fake-news-awards.html",
	//       "byline": "By MATT FLEGENHEIMER and MICHAEL M. GRYNBAUM",
	//       "item_type": "Article",
	//       "updated_date": "2018-01-18T00:33:36-05:00",
	//       "created_date": "2018-01-17T16:33:23-05:00",
	//       "published_date": "2018-01-17T16:33:23-05:00",
	//       "material_type_facet": "",
	//       "kicker": "",
	//       "des_facet": [
	//         "News and News Media"
	//       ],
	//       "org_facet": [
	//         "Twitter"
	//       ],
	//       "per_facet": [
	//         "Trump, Donald J",
	//         "Sanders, Sarah Huckabee"
	//       ],
	//       "geo_facet": [],
	//       "multimedia": [
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/business/18TRUMPMEDIA-1/18TRUMPMEDIA-1-thumbStandard.jpg",
	//           "format": "Standard Thumbnail",
	//           "height": 75,
	//           "width": 75,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "A Times Square billboard that &ldquo;The Late Show With Stephen Colbert&rdquo; bought to nominate itself for President Trump&rsquo;s &ldquo;Fake News Awards.&rdquo;",
	//           "copyright": "Mike Segar/Reuters"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/business/18TRUMPMEDIA-1/18TRUMPMEDIA-1-thumbLarge.jpg",
	//           "format": "thumbLarge",
	//           "height": 150,
	//           "width": 150,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "A Times Square billboard that &ldquo;The Late Show With Stephen Colbert&rdquo; bought to nominate itself for President Trump&rsquo;s &ldquo;Fake News Awards.&rdquo;",
	//           "copyright": "Mike Segar/Reuters"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/business/18TRUMPMEDIA-1/18TRUMPMEDIA-1-articleInline.jpg",
	//           "format": "Normal",
	//           "height": 127,
	//           "width": 190,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "A Times Square billboard that &ldquo;The Late Show With Stephen Colbert&rdquo; bought to nominate itself for President Trump&rsquo;s &ldquo;Fake News Awards.&rdquo;",
	//           "copyright": "Mike Segar/Reuters"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/business/18TRUMPMEDIA-1/18TRUMPMEDIA-1-mediumThreeByTwo210.jpg",
	//           "format": "mediumThreeByTwo210",
	//           "height": 140,
	//           "width": 210,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "A Times Square billboard that &ldquo;The Late Show With Stephen Colbert&rdquo; bought to nominate itself for President Trump&rsquo;s &ldquo;Fake News Awards.&rdquo;",
	//           "copyright": "Mike Segar/Reuters"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/business/18TRUMPMEDIA-1/18TRUMPMEDIA-1-superJumbo.jpg",
	//           "format": "superJumbo",
	//           "height": 1366,
	//           "width": 2048,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "A Times Square billboard that &ldquo;The Late Show With Stephen Colbert&rdquo; bought to nominate itself for President Trump&rsquo;s &ldquo;Fake News Awards.&rdquo;",
	//           "copyright": "Mike Segar/Reuters"
	//         }
	//       ],
	//       "short_url": "https://nyti.ms/2EQLVh4"
	//     },
	//     {
	//       "section": "U.S.",
	//       "subsection": "Politics",
	//       "title": "With Trump’s Visit to Pennsylvania, G.O.P. Scrambles to Save a House Seat",
	//       "abstract": "President Trump will fly in to the southwestern Pennsylvania district vacated by a scandal-tarred Republican, hoping to bolster the flagging campaign of his handpicked successor.",
	//       "url": "https://www.nytimes.com/2018/01/17/us/politics/trump-pennsylvania-house-special-election.html",
	//       "byline": "By JONATHAN MARTIN and JULIE BOSMAN",
	//       "item_type": "Article",
	//       "updated_date": "2018-01-17T20:37:47-05:00",
	//       "created_date": "2018-01-17T19:34:08-05:00",
	//       "published_date": "2018-01-17T19:34:08-05:00",
	//       "material_type_facet": "",
	//       "kicker": "",
	//       "des_facet": [
	//         "United States Politics and Government",
	//         "Elections, House of Representatives"
	//       ],
	//       "org_facet": [
	//         "House of Representatives"
	//       ],
	//       "per_facet": [
	//         "Trump, Donald J"
	//       ],
	//       "geo_facet": [],
	//       "multimedia": [
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/us/politics/18dc-campaign1/18dc-campaign1-thumbStandard.jpg",
	//           "format": "Standard Thumbnail",
	//           "height": 75,
	//           "width": 75,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Campaign workers in Canonsburg, Pa., made calls this week to drum up support for Rick Saccone, a Republican candidate for the House.",
	//           "copyright": "Michael Henninger for The New York Times"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/us/politics/18dc-campaign1/18dc-campaign1-thumbLarge.jpg",
	//           "format": "thumbLarge",
	//           "height": 150,
	//           "width": 150,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Campaign workers in Canonsburg, Pa., made calls this week to drum up support for Rick Saccone, a Republican candidate for the House.",
	//           "copyright": "Michael Henninger for The New York Times"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/us/politics/18dc-campaign1/18dc-campaign1-articleInline.jpg",
	//           "format": "Normal",
	//           "height": 115,
	//           "width": 190,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Campaign workers in Canonsburg, Pa., made calls this week to drum up support for Rick Saccone, a Republican candidate for the House.",
	//           "copyright": "Michael Henninger for The New York Times"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/us/politics/18dc-campaign1/18dc-campaign1-mediumThreeByTwo210.jpg",
	//           "format": "mediumThreeByTwo210",
	//           "height": 140,
	//           "width": 210,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Campaign workers in Canonsburg, Pa., made calls this week to drum up support for Rick Saccone, a Republican candidate for the House.",
	//           "copyright": "Michael Henninger for The New York Times"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/us/politics/18dc-campaign1/18dc-campaign1-superJumbo.jpg",
	//           "format": "superJumbo",
	//           "height": 1244,
	//           "width": 2048,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Campaign workers in Canonsburg, Pa., made calls this week to drum up support for Rick Saccone, a Republican candidate for the House.",
	//           "copyright": "Michael Henninger for The New York Times"
	//         }
	//       ],
	//       "short_url": "https://nyti.ms/2mHt4xP"
	//     },
	//     {
	//       "section": "Technology",
	//       "subsection": "",
	//       "title": "Apple, Capitalizing on New Tax Law, Plans to Bring Billions in Cash Back to U.S.",
	//       "abstract": "Less than four weeks after President Trump signed a new tax bill, Apple plans to repatriate the vast majority of its $252 billion in cash held abroad.",
	//       "url": "https://www.nytimes.com/2018/01/17/technology/apple-tax-bill-repatriate-cash.html",
	//       "byline": "By DAISUKE WAKABAYASHI and BRIAN X. CHEN",
	//       "item_type": "Article",
	//       "updated_date": "2018-01-17T20:56:36-05:00",
	//       "created_date": "2018-01-17T14:55:53-05:00",
	//       "published_date": "2018-01-17T14:55:53-05:00",
	//       "material_type_facet": "",
	//       "kicker": "",
	//       "des_facet": [
	//         "Federal Taxes (US)",
	//         "Corporate Taxes",
	//         "Taxation",
	//         "United States Economy"
	//       ],
	//       "org_facet": [
	//         "Apple Inc"
	//       ],
	//       "per_facet": [
	//         "Cook, Timothy D"
	//       ],
	//       "geo_facet": [],
	//       "multimedia": [
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/business/18apple1/merlin_131532089_d13b7d96-7aed-45cf-8202-4e08a809fd03-thumbStandard.jpg",
	//           "format": "Standard Thumbnail",
	//           "height": 75,
	//           "width": 75,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Inside a building at Apple’s new headquarters in Cupertino, Calif. The company said Wednesday that it planned a $350 billion contribution to the American economy over the next five years.",
	//           "copyright": "Jim Wilson/The New York Times"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/business/18apple1/merlin_131532089_d13b7d96-7aed-45cf-8202-4e08a809fd03-thumbLarge.jpg",
	//           "format": "thumbLarge",
	//           "height": 150,
	//           "width": 150,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Inside a building at Apple’s new headquarters in Cupertino, Calif. The company said Wednesday that it planned a $350 billion contribution to the American economy over the next five years.",
	//           "copyright": "Jim Wilson/The New York Times"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/business/18apple1/merlin_131532089_d13b7d96-7aed-45cf-8202-4e08a809fd03-articleInline.jpg",
	//           "format": "Normal",
	//           "height": 127,
	//           "width": 190,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Inside a building at Apple’s new headquarters in Cupertino, Calif. The company said Wednesday that it planned a $350 billion contribution to the American economy over the next five years.",
	//           "copyright": "Jim Wilson/The New York Times"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/business/18apple1/merlin_131532089_d13b7d96-7aed-45cf-8202-4e08a809fd03-mediumThreeByTwo210.jpg",
	//           "format": "mediumThreeByTwo210",
	//           "height": 140,
	//           "width": 210,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Inside a building at Apple’s new headquarters in Cupertino, Calif. The company said Wednesday that it planned a $350 billion contribution to the American economy over the next five years.",
	//           "copyright": "Jim Wilson/The New York Times"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/business/18apple1/merlin_131532089_d13b7d96-7aed-45cf-8202-4e08a809fd03-superJumbo.jpg",
	//           "format": "superJumbo",
	//           "height": 1365,
	//           "width": 2048,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Inside a building at Apple’s new headquarters in Cupertino, Calif. The company said Wednesday that it planned a $350 billion contribution to the American economy over the next five years.",
	//           "copyright": "Jim Wilson/The New York Times"
	//         }
	//       ],
	//       "short_url": "https://nyti.ms/2EPQet6"
	//     },
	//     {
	//       "section": "Opinion",
	//       "subsection": "",
	//       "title": "‘Vision, Chutzpah and Some Testosterone’",
	//       "abstract": "A year into Trump’s presidency, we asked his voters for a progress report.",
	//       "url": "https://www.nytimes.com/2018/01/17/opinion/trump-voters-supporters.html",
	//       "byline": "",
	//       "item_type": "Article",
	//       "updated_date": "2018-01-17T21:29:07-05:00",
	//       "created_date": "2018-01-17T16:54:08-05:00",
	//       "published_date": "2018-01-17T16:54:08-05:00",
	//       "material_type_facet": "",
	//       "kicker": "",
	//       "des_facet": [
	//         "Presidential Election of 2016",
	//         "United States Politics and Government"
	//       ],
	//       "org_facet": [],
	//       "per_facet": [
	//         "Trump, Donald J"
	//       ],
	//       "geo_facet": [],
	//       "multimedia": [
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/opinion/18Ltrump1web/18Ltrump1web-thumbStandard.jpg",
	//           "format": "Standard Thumbnail",
	//           "height": 75,
	//           "width": 75,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Steven Sanabria",
	//           "copyright": "Max Whittaker for The New York Times"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/opinion/18Ltrump1web/18Ltrump1web-thumbLarge.jpg",
	//           "format": "thumbLarge",
	//           "height": 150,
	//           "width": 150,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Steven Sanabria",
	//           "copyright": "Max Whittaker for The New York Times"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/opinion/18Ltrump1web/18Ltrump1web-articleInline.jpg",
	//           "format": "Normal",
	//           "height": 135,
	//           "width": 190,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Steven Sanabria",
	//           "copyright": "Max Whittaker for The New York Times"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/opinion/18Ltrump1web/18Ltrump1web-mediumThreeByTwo210.jpg",
	//           "format": "mediumThreeByTwo210",
	//           "height": 140,
	//           "width": 210,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Steven Sanabria",
	//           "copyright": "Max Whittaker for The New York Times"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/opinion/18Ltrump1web/18Ltrump1web-superJumbo.jpg",
	//           "format": "superJumbo",
	//           "height": 1454,
	//           "width": 2048,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Steven Sanabria",
	//           "copyright": "Max Whittaker for The New York Times"
	//         }
	//       ],
	//       "short_url": "https://nyti.ms/2FN8WTC"
	//     },
	//     {
	//       "section": "Opinion",
	//       "subsection": "",
	//       "title": "What We Can Learn From ‘S-Hole Countries’",
	//       "abstract": "African nations are ahead of the U.S. in some respects.",
	//       "url": "https://www.nytimes.com/2018/01/17/opinion/shithole-countries-africa.html",
	//       "byline": "By NICHOLAS KRISTOF",
	//       "item_type": "Article",
	//       "updated_date": "2018-01-17T19:02:05-05:00",
	//       "created_date": "2018-01-17T19:02:05-05:00",
	//       "published_date": "2018-01-17T19:02:05-05:00",
	//       "material_type_facet": "",
	//       "kicker": "",
	//       "des_facet": [
	//         "Politics and Government",
	//         "Discrimination",
	//         "Cervical Cancer",
	//         "Women and Girls",
	//         "Vaccination and Immunization",
	//         "Human Papillomavirus (HPV)",
	//         "Refugees and Displaced Persons",
	//         "Immigration and Emigration",
	//         "Breastfeeding"
	//       ],
	//       "org_facet": [],
	//       "per_facet": [
	//         "Trump, Donald J"
	//       ],
	//       "geo_facet": [
	//         "Africa",
	//         "United States"
	//       ],
	//       "multimedia": [
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/16/opinion/16chappatte-inyt/16chappatte-inyt-thumbStandard.jpg",
	//           "format": "Standard Thumbnail",
	//           "height": 75,
	//           "width": 75,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "",
	//           "copyright": "Patrick Chappatte"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/16/opinion/16chappatte-inyt/16chappatte-inyt-thumbLarge.jpg",
	//           "format": "thumbLarge",
	//           "height": 150,
	//           "width": 150,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "",
	//           "copyright": "Patrick Chappatte"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/16/opinion/16chappatte-inyt/16chappatte-inyt-articleInline.jpg",
	//           "format": "Normal",
	//           "height": 129,
	//           "width": 190,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "",
	//           "copyright": "Patrick Chappatte"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/16/opinion/16chappatte-inyt/16chappatte-inyt-mediumThreeByTwo210.jpg",
	//           "format": "mediumThreeByTwo210",
	//           "height": 140,
	//           "width": 210,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "",
	//           "copyright": "Patrick Chappatte"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/16/opinion/16chappatte-inyt/16chappatte-inyt-superJumbo.jpg",
	//           "format": "superJumbo",
	//           "height": 712,
	//           "width": 1050,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "",
	//           "copyright": "Patrick Chappatte"
	//         }
	//       ],
	//       "short_url": "https://nyti.ms/2FMzlAO"
	//     },
	//     {
	//       "section": "Opinion",
	//       "subsection": "",
	//       "title": "John Kelly, Deacon of Deportation",
	//       "abstract": "The White House chief of staff has much to do with Trump’s anti-immigration policies.",
	//       "url": "https://www.nytimes.com/2018/01/17/opinion/john-kelly-deportation-ice.html",
	//       "byline": "By CHARLES M. BLOW",
	//       "item_type": "Article",
	//       "updated_date": "2018-01-17T19:54:03-05:00",
	//       "created_date": "2018-01-17T19:54:03-05:00",
	//       "published_date": "2018-01-17T19:54:03-05:00",
	//       "material_type_facet": "",
	//       "kicker": "",
	//       "des_facet": [
	//         "Immigration and Emigration",
	//         "United States Politics and Government",
	//         "Discrimination",
	//         "Illegal Immigration",
	//         "Race and Ethnicity",
	//         "Deportation"
	//       ],
	//       "org_facet": [
	//         "Homeland Security Department"
	//       ],
	//       "per_facet": [
	//         "Kelly, John F (1950- )",
	//         "Trump, Donald J"
	//       ],
	//       "geo_facet": [],
	//       "multimedia": [
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/opinion/18blowweb/18blowweb-thumbStandard.jpg",
	//           "format": "Standard Thumbnail",
	//           "height": 75,
	//           "width": 75,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "White House Chief of Staff General John Kelly in the Oval Office last October.",
	//           "copyright": "Tom Brenner/The New York Times"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/opinion/18blowweb/18blowweb-thumbLarge.jpg",
	//           "format": "thumbLarge",
	//           "height": 150,
	//           "width": 150,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "White House Chief of Staff General John Kelly in the Oval Office last October.",
	//           "copyright": "Tom Brenner/The New York Times"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/opinion/18blowweb/merlin_128993561_0ca455c1-67ec-4be2-8d5d-0d7f928b9543-articleInline.jpg",
	//           "format": "Normal",
	//           "height": 127,
	//           "width": 190,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "White House Chief of Staff General John Kelly in the Oval Office last October.",
	//           "copyright": "Tom Brenner/The New York Times"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/opinion/18blowweb/merlin_128993561_0ca455c1-67ec-4be2-8d5d-0d7f928b9543-mediumThreeByTwo210.jpg",
	//           "format": "mediumThreeByTwo210",
	//           "height": 140,
	//           "width": 210,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "White House Chief of Staff General John Kelly in the Oval Office last October.",
	//           "copyright": "Tom Brenner/The New York Times"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/opinion/18blowweb/merlin_128993561_0ca455c1-67ec-4be2-8d5d-0d7f928b9543-superJumbo.jpg",
	//           "format": "superJumbo",
	//           "height": 1365,
	//           "width": 2048,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "White House Chief of Staff General John Kelly in the Oval Office last October.",
	//           "copyright": "Tom Brenner/The New York Times"
	//         }
	//       ],
	//       "short_url": "https://nyti.ms/2FNsOpD"
	//     },
	//     {
	//       "section": "Opinion",
	//       "subsection": "",
	//       "title": "Donald Trump Gets His Sanity Grades",
	//       "abstract": "Relax, this man knows his camels.",
	//       "url": "https://www.nytimes.com/2018/01/17/opinion/donald-trump-physical-mental-health.html",
	//       "byline": "By GAIL COLLINS",
	//       "item_type": "Article",
	//       "updated_date": "2018-01-17T19:52:48-05:00",
	//       "created_date": "2018-01-17T19:52:48-05:00",
	//       "published_date": "2018-01-17T19:52:48-05:00",
	//       "material_type_facet": "",
	//       "kicker": "",
	//       "des_facet": [
	//         "Mental Health and Disorders",
	//         "United States Politics and Government"
	//       ],
	//       "org_facet": [],
	//       "per_facet": [
	//         "Trump, Donald J",
	//         "Wilson, Woodrow"
	//       ],
	//       "geo_facet": [],
	//       "multimedia": [
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/opinion/18Collins-web2/18Collins-web2-thumbStandard.jpg",
	//           "format": "Standard Thumbnail",
	//           "height": 75,
	//           "width": 75,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Dr. Ronny Jackson discussing President Trump’s health with reporters on Tuesday.",
	//           "copyright": "Doug Mills/The New York Times"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/opinion/18Collins-web2/18Collins-web2-thumbLarge.jpg",
	//           "format": "thumbLarge",
	//           "height": 150,
	//           "width": 150,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Dr. Ronny Jackson discussing President Trump’s health with reporters on Tuesday.",
	//           "copyright": "Doug Mills/The New York Times"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/opinion/18Collins-web2/merlin_132375090_7248774b-6fc5-41ae-9262-93678be6572e-articleInline.jpg",
	//           "format": "Normal",
	//           "height": 127,
	//           "width": 190,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Dr. Ronny Jackson discussing President Trump’s health with reporters on Tuesday.",
	//           "copyright": "Doug Mills/The New York Times"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/opinion/18Collins-web2/merlin_132375090_7248774b-6fc5-41ae-9262-93678be6572e-mediumThreeByTwo210.jpg",
	//           "format": "mediumThreeByTwo210",
	//           "height": 140,
	//           "width": 210,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Dr. Ronny Jackson discussing President Trump’s health with reporters on Tuesday.",
	//           "copyright": "Doug Mills/The New York Times"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/opinion/18Collins-web2/merlin_132375090_7248774b-6fc5-41ae-9262-93678be6572e-superJumbo.jpg",
	//           "format": "superJumbo",
	//           "height": 1365,
	//           "width": 2048,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Dr. Ronny Jackson discussing President Trump’s health with reporters on Tuesday.",
	//           "copyright": "Doug Mills/The New York Times"
	//         }
	//       ],
	//       "short_url": "https://nyti.ms/2FNpIlD"
	//     },
	//     {
	//       "section": "Opinion",
	//       "subsection": "",
	//       "title": "The Wrong Way to Treat Opioid Addiction",
	//       "abstract": "Buprenorphine and methadone are the most effective treatments for fighting opioid addiction. But most rehabilitation programs won’t use them.",
	//       "url": "https://www.nytimes.com/2018/01/17/opinion/treating-opioid-addiction.html",
	//       "byline": "By MAIA SZALAVITZ",
	//       "item_type": "Article",
	//       "updated_date": "2018-01-17T20:32:13-05:00",
	//       "created_date": "2018-01-17T19:54:58-05:00",
	//       "published_date": "2018-01-17T19:54:58-05:00",
	//       "material_type_facet": "",
	//       "kicker": "",
	//       "des_facet": [
	//         "Drug Abuse and Traffic",
	//         "Cocaine and Crack Cocaine",
	//         "Addiction (Psychology)",
	//         "Buprenorphine (Drug)",
	//         "Heroin",
	//         "Opioids and Opiates",
	//         "Methadone"
	//       ],
	//       "org_facet": [],
	//       "per_facet": [],
	//       "geo_facet": [],
	//       "multimedia": [
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/opinion/18szalavitz/18szalavitz-thumbStandard-v2.jpg",
	//           "format": "Standard Thumbnail",
	//           "height": 75,
	//           "width": 75,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "",
	//           "copyright": "Angie Wang"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/opinion/18szalavitz/18szalavitz-thumbLarge-v2.jpg",
	//           "format": "thumbLarge",
	//           "height": 150,
	//           "width": 150,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "",
	//           "copyright": "Angie Wang"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/opinion/18szalavitz/18szalavitz-articleInline.jpg",
	//           "format": "Normal",
	//           "height": 190,
	//           "width": 190,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "",
	//           "copyright": "Angie Wang"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/opinion/18szalavitz/18szalavitz-mediumThreeByTwo210-v2.jpg",
	//           "format": "mediumThreeByTwo210",
	//           "height": 140,
	//           "width": 210,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "",
	//           "copyright": "Angie Wang"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/opinion/18szalavitz/18szalavitz-superJumbo.jpg",
	//           "format": "superJumbo",
	//           "height": 2048,
	//           "width": 2048,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "",
	//           "copyright": "Angie Wang"
	//         }
	//       ],
	//       "short_url": "https://nyti.ms/2mJwb8f"
	//     },
	//     {
	//       "section": "U.S.",
	//       "subsection": "",
	//       "title": "Horror for 13 California Siblings Hidden by Veneer of a Private Home School",
	//       "abstract": "David A. Turpin created the school at his nondescript home southeast of Los Angeles. But what the authorities found inside were his emaciated children chained to furniture.",
	//       "url": "https://www.nytimes.com/2018/01/16/us/california-captive-family.html",
	//       "byline": "By LOUIS KEENE, JENNIFER MEDINA and PATRICIA MAZZEI",
	//       "item_type": "Article",
	//       "updated_date": "2018-01-16T21:02:27-05:00",
	//       "created_date": "2018-01-16T15:16:22-05:00",
	//       "published_date": "2018-01-16T15:16:22-05:00",
	//       "material_type_facet": "",
	//       "kicker": "",
	//       "des_facet": [
	//         "Child Abuse and Neglect"
	//       ],
	//       "org_facet": [],
	//       "per_facet": [
	//         "Turpin, David Allen",
	//         "Turpin, Louise Anna"
	//       ],
	//       "geo_facet": [
	//         "Perris (Calif)"
	//       ],
	//       "multimedia": [
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/17/us/17captivepresser/17captivepresser-thumbStandard-v2.jpg",
	//           "format": "Standard Thumbnail",
	//           "height": 75,
	//           "width": 75,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Members of the news media were parked outside the home of David A. Turpin and Louise A. Turpin in Perris, Calif.",
	//           "copyright": "Mike Blake/Reuters"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/17/us/17captivepresser/17captivepresser-thumbLarge-v2.jpg",
	//           "format": "thumbLarge",
	//           "height": 150,
	//           "width": 150,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Members of the news media were parked outside the home of David A. Turpin and Louise A. Turpin in Perris, Calif.",
	//           "copyright": "Mike Blake/Reuters"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/17/us/17captivepresser/17captivepresser-articleInline-v2.jpg",
	//           "format": "Normal",
	//           "height": 127,
	//           "width": 190,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Members of the news media were parked outside the home of David A. Turpin and Louise A. Turpin in Perris, Calif.",
	//           "copyright": "Mike Blake/Reuters"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/17/us/17captivepresser/17captivepresser-mediumThreeByTwo210-v2.jpg",
	//           "format": "mediumThreeByTwo210",
	//           "height": 140,
	//           "width": 210,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Members of the news media were parked outside the home of David A. Turpin and Louise A. Turpin in Perris, Calif.",
	//           "copyright": "Mike Blake/Reuters"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/17/us/17captivepresser/17captivepresser-superJumbo.jpg",
	//           "format": "superJumbo",
	//           "height": 1366,
	//           "width": 2048,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Members of the news media were parked outside the home of David A. Turpin and Louise A. Turpin in Perris, Calif.",
	//           "copyright": "Mike Blake/Reuters"
	//         }
	//       ],
	//       "short_url": "https://nyti.ms/2FJHm9y"
	//     },
	//     {
	//       "section": "Business Day",
	//       "subsection": "",
	//       "title": "China’s Economic Growth Looks Strong. Maybe Too Strong.",
	//       "abstract": "The country reported higher annual growth, but implausibly smooth numbers prompt experts to look for other ways to assess the world’s No. 2 economy.",
	//       "url": "https://www.nytimes.com/2018/01/18/business/china-gdp-economy-growth.html",
	//       "byline": "By KEITH BRADSHER",
	//       "item_type": "Article",
	//       "updated_date": "2018-01-18T04:18:46-05:00",
	//       "created_date": "2018-01-18T02:07:02-05:00",
	//       "published_date": "2018-01-18T02:07:02-05:00",
	//       "material_type_facet": "",
	//       "kicker": "",
	//       "des_facet": [
	//         "Economic Conditions and Trends",
	//         "Statistics",
	//         "vis-multimedia"
	//       ],
	//       "org_facet": [],
	//       "per_facet": [
	//         "Xi Jinping"
	//       ],
	//       "geo_facet": [
	//         "China"
	//       ],
	//       "multimedia": [
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/business/18CHINAGDP2/18CHINAGDP2-thumbStandard.jpg",
	//           "format": "Standard Thumbnail",
	//           "height": 75,
	//           "width": 75,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "An apartment complex under construction on the outskirts of Beijing. The costs of China’s economic growth have included a city-centric policy that has uprooted of tens of millions of workers.",
	//           "copyright": "Thomas Peter/Reuters"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/business/18CHINAGDP2/18CHINAGDP2-thumbLarge.jpg",
	//           "format": "thumbLarge",
	//           "height": 150,
	//           "width": 150,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "An apartment complex under construction on the outskirts of Beijing. The costs of China’s economic growth have included a city-centric policy that has uprooted of tens of millions of workers.",
	//           "copyright": "Thomas Peter/Reuters"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/business/18CHINAGDP2/merlin_131407950_ec429a90-2fd4-4115-bdb8-7829c5a9f757-articleInline.jpg",
	//           "format": "Normal",
	//           "height": 126,
	//           "width": 190,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "An apartment complex under construction on the outskirts of Beijing. The costs of China’s economic growth have included a city-centric policy that has uprooted of tens of millions of workers.",
	//           "copyright": "Thomas Peter/Reuters"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/business/18CHINAGDP2/18CHINAGDP2-mediumThreeByTwo210.jpg",
	//           "format": "mediumThreeByTwo210",
	//           "height": 140,
	//           "width": 210,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "An apartment complex under construction on the outskirts of Beijing. The costs of China’s economic growth have included a city-centric policy that has uprooted of tens of millions of workers.",
	//           "copyright": "Thomas Peter/Reuters"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/business/18CHINAGDP2/merlin_131407950_ec429a90-2fd4-4115-bdb8-7829c5a9f757-superJumbo.jpg",
	//           "format": "superJumbo",
	//           "height": 1360,
	//           "width": 2048,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "An apartment complex under construction on the outskirts of Beijing. The costs of China’s economic growth have included a city-centric policy that has uprooted of tens of millions of workers.",
	//           "copyright": "Thomas Peter/Reuters"
	//         }
	//       ],
	//       "short_url": "https://nyti.ms/2FRDhAj"
	//     },
	//     {
	//       "section": "U.S.",
	//       "subsection": "Politics",
	//       "title": "More Details Emerge About Trump’s Relationship With Porn Star",
	//       "abstract": "In Touch published excerpts from its 2011 interview with Stephanie Clifford, in which she details her first encounter with Donald Trump.",
	//       "url": "https://www.nytimes.com/2018/01/17/us/politics/stormy-daniels-trump.html",
	//       "byline": "By MAYA SALAM",
	//       "item_type": "Article",
	//       "updated_date": "2018-01-17T21:36:14-05:00",
	//       "created_date": "2018-01-17T20:40:34-05:00",
	//       "published_date": "2018-01-17T20:40:34-05:00",
	//       "material_type_facet": "",
	//       "kicker": "",
	//       "des_facet": [
	//         "Presidential Election of 2016"
	//       ],
	//       "org_facet": [],
	//       "per_facet": [
	//         "Clifford, Stephanie",
	//         "Trump, Donald J",
	//         "Cohen, Michael D (1966- )"
	//       ],
	//       "geo_facet": [],
	//       "multimedia": [
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/us/18xp-stormy/18xp-stormy-thumbStandard.jpg",
	//           "format": "Standard Thumbnail",
	//           "height": 75,
	//           "width": 75,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "In Touch has published excerpts from a 2011 interview with Stephanie Clifford, known as Stormy Daniels. The magazine reports that she said Donald Trump told her he would get her cast on “The Apprentice.”",
	//           "copyright": "Ethan Miller/Getty Images"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/us/18xp-stormy/18xp-stormy-thumbLarge.jpg",
	//           "format": "thumbLarge",
	//           "height": 150,
	//           "width": 150,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "In Touch has published excerpts from a 2011 interview with Stephanie Clifford, known as Stormy Daniels. The magazine reports that she said Donald Trump told her he would get her cast on “The Apprentice.”",
	//           "copyright": "Ethan Miller/Getty Images"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/us/18xp-stormy/18xp-stormy-articleInline.jpg",
	//           "format": "Normal",
	//           "height": 285,
	//           "width": 190,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "In Touch has published excerpts from a 2011 interview with Stephanie Clifford, known as Stormy Daniels. The magazine reports that she said Donald Trump told her he would get her cast on “The Apprentice.”",
	//           "copyright": "Ethan Miller/Getty Images"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/us/18xp-stormy/18xp-stormy-mediumThreeByTwo210.jpg",
	//           "format": "mediumThreeByTwo210",
	//           "height": 140,
	//           "width": 210,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "In Touch has published excerpts from a 2011 interview with Stephanie Clifford, known as Stormy Daniels. The magazine reports that she said Donald Trump told her he would get her cast on “The Apprentice.”",
	//           "copyright": "Ethan Miller/Getty Images"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/us/18xp-stormy/18xp-stormy-superJumbo.jpg",
	//           "format": "superJumbo",
	//           "height": 1713,
	//           "width": 1142,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "In Touch has published excerpts from a 2011 interview with Stephanie Clifford, known as Stormy Daniels. The magazine reports that she said Donald Trump told her he would get her cast on “The Apprentice.”",
	//           "copyright": "Ethan Miller/Getty Images"
	//         }
	//       ],
	//       "short_url": "https://nyti.ms/2mJsOOK"
	//     },
	//     {
	//       "section": "World",
	//       "subsection": "Europe",
	//       "title": "Moscow Got 6 Minutes of Sunlight in December",
	//       "abstract": "One internet user called the dark days in the Russian capital “Hillary’s revenge.”",
	//       "url": "https://www.nytimes.com/2018/01/17/world/europe/moscow-darkness-sunlight.html",
	//       "byline": "By MATTHEW LUXMOORE",
	//       "item_type": "Article",
	//       "updated_date": "2018-01-17T15:51:45-05:00",
	//       "created_date": "2018-01-17T12:16:47-05:00",
	//       "published_date": "2018-01-17T12:16:47-05:00",
	//       "material_type_facet": "",
	//       "kicker": "",
	//       "des_facet": [
	//         "Sunlight",
	//         "weather"
	//       ],
	//       "org_facet": [],
	//       "per_facet": [],
	//       "geo_facet": [
	//         "Moscow (Russia)",
	//         "Yakutia (Russia)"
	//       ],
	//       "multimedia": [
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/world/europe/18moscow2/18moscow2-thumbStandard.jpg",
	//           "format": "Standard Thumbnail",
	//           "height": 75,
	//           "width": 75,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "After a cold spell in Yakutia, in Russia’s far east, approached record levels, Anastasia Gruzdeva posted a photo of herself with frost-covered eyelashes.",
	//           "copyright": "Anastasia Gruzdeva/sakhalife.ru, via Associated Press"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/world/europe/18moscow2/18moscow2-thumbLarge.jpg",
	//           "format": "thumbLarge",
	//           "height": 150,
	//           "width": 150,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "After a cold spell in Yakutia, in Russia’s far east, approached record levels, Anastasia Gruzdeva posted a photo of herself with frost-covered eyelashes.",
	//           "copyright": "Anastasia Gruzdeva/sakhalife.ru, via Associated Press"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/world/europe/18moscow2/18moscow2-articleInline.jpg",
	//           "format": "Normal",
	//           "height": 285,
	//           "width": 190,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "After a cold spell in Yakutia, in Russia’s far east, approached record levels, Anastasia Gruzdeva posted a photo of herself with frost-covered eyelashes.",
	//           "copyright": "Anastasia Gruzdeva/sakhalife.ru, via Associated Press"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/world/europe/18moscow2/18moscow2-mediumThreeByTwo210.jpg",
	//           "format": "mediumThreeByTwo210",
	//           "height": 140,
	//           "width": 210,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "After a cold spell in Yakutia, in Russia’s far east, approached record levels, Anastasia Gruzdeva posted a photo of herself with frost-covered eyelashes.",
	//           "copyright": "Anastasia Gruzdeva/sakhalife.ru, via Associated Press"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/world/europe/18moscow2/18moscow2-superJumbo.jpg",
	//           "format": "superJumbo",
	//           "height": 2048,
	//           "width": 1366,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "After a cold spell in Yakutia, in Russia’s far east, approached record levels, Anastasia Gruzdeva posted a photo of herself with frost-covered eyelashes.",
	//           "copyright": "Anastasia Gruzdeva/sakhalife.ru, via Associated Press"
	//         }
	//       ],
	//       "short_url": "https://nyti.ms/2FMJgq4"
	//     },
	//     {
	//       "section": "World",
	//       "subsection": "Americas",
	//       "title": "Sex Abuse Case Shadows Pope Francis’ Visit to Peru",
	//       "abstract": "Prosecutors say that Luis Fernando Figari, who led a powerful all-male Catholic organization, perpetrated sexual and physical abuse. He moved to Rome in 2015.",
	//       "url": "https://www.nytimes.com/2018/01/17/world/americas/pope-peru-figari-solidatum-abuse.html",
	//       "byline": "By MARCELO ROCHABRÚN and ANDREA ZARATE",
	//       "item_type": "Article",
	//       "updated_date": "2018-01-18T03:03:24-05:00",
	//       "created_date": "2018-01-17T18:02:20-05:00",
	//       "published_date": "2018-01-17T18:02:20-05:00",
	//       "material_type_facet": "",
	//       "kicker": "",
	//       "des_facet": [
	//         "Sex Crimes"
	//       ],
	//       "org_facet": [
	//         "Roman Catholic Church"
	//       ],
	//       "per_facet": [
	//         "Figari, Luis Fernando",
	//         "Francis"
	//       ],
	//       "geo_facet": [
	//         "Peru"
	//       ],
	//       "multimedia": [
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/world/americas/18peru1/18peru1-thumbStandard.jpg",
	//           "format": "Standard Thumbnail",
	//           "height": 75,
	//           "width": 75,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Banners welcoming Pope Francis to Peru on display in Lima last week.",
	//           "copyright": "Ernesto Benavides/Agence France-Presse &mdash; Getty Images"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/world/americas/18peru1/18peru1-thumbLarge.jpg",
	//           "format": "thumbLarge",
	//           "height": 150,
	//           "width": 150,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Banners welcoming Pope Francis to Peru on display in Lima last week.",
	//           "copyright": "Ernesto Benavides/Agence France-Presse &mdash; Getty Images"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/world/americas/18peru1/merlin_132237728_67b2859f-bdb7-4217-aff8-1dbff21bdd15-articleInline.jpg",
	//           "format": "Normal",
	//           "height": 126,
	//           "width": 190,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Banners welcoming Pope Francis to Peru on display in Lima last week.",
	//           "copyright": "Ernesto Benavides/Agence France-Presse &mdash; Getty Images"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/world/americas/18peru1/18peru1-mediumThreeByTwo210.jpg",
	//           "format": "mediumThreeByTwo210",
	//           "height": 140,
	//           "width": 210,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Banners welcoming Pope Francis to Peru on display in Lima last week.",
	//           "copyright": "Ernesto Benavides/Agence France-Presse &mdash; Getty Images"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/world/americas/18peru1/merlin_132237728_67b2859f-bdb7-4217-aff8-1dbff21bdd15-superJumbo.jpg",
	//           "format": "superJumbo",
	//           "height": 1363,
	//           "width": 2048,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Banners welcoming Pope Francis to Peru on display in Lima last week.",
	//           "copyright": "Ernesto Benavides/Agence France-Presse &mdash; Getty Images"
	//         }
	//       ],
	//       "short_url": "https://nyti.ms/2FOWvqu"
	//     },
	//     {
	//       "section": "World",
	//       "subsection": "Europe",
	//       "title": "A Girl’s Killing Puts Germany’s Migration Policy on Trial",
	//       "abstract": "A deadly stabbing in a small German town has become Exhibit A for those arguing that Germany’s migration policy has increased the risk of violent crime.",
	//       "url": "https://www.nytimes.com/2018/01/17/world/europe/germany-teen-murder-migrant.html",
	//       "byline": "By KATRIN BENNHOLD",
	//       "item_type": "Article",
	//       "updated_date": "2018-01-18T01:37:39-05:00",
	//       "created_date": "2018-01-17T16:42:32-05:00",
	//       "published_date": "2018-01-17T16:42:32-05:00",
	//       "material_type_facet": "",
	//       "kicker": "",
	//       "des_facet": [
	//         "Politics and Government",
	//         "Immigration and Emigration",
	//         "Murders, Attempted Murders and Homicides",
	//         "Refugees and Displaced Persons",
	//         "Asylum, Right of"
	//       ],
	//       "org_facet": [],
	//       "per_facet": [],
	//       "geo_facet": [
	//         "Germany"
	//       ],
	//       "multimedia": [
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/09/world/europe/xxmurder1/xxmurder1-thumbStandard-v2.jpg",
	//           "format": "Standard Thumbnail",
	//           "height": 75,
	//           "width": 75,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Flowers and candles at the entrance of the drugstore where a teenage girl was killed in Kandel, Germany.",
	//           "copyright": "Dmitry Kostyukov for The New York Times"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/09/world/europe/xxmurder1/xxmurder1-thumbLarge-v2.jpg",
	//           "format": "thumbLarge",
	//           "height": 150,
	//           "width": 150,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Flowers and candles at the entrance of the drugstore where a teenage girl was killed in Kandel, Germany.",
	//           "copyright": "Dmitry Kostyukov for The New York Times"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/09/world/europe/xxmurder1/xxmurder1-articleInline-v2.jpg",
	//           "format": "Normal",
	//           "height": 127,
	//           "width": 190,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Flowers and candles at the entrance of the drugstore where a teenage girl was killed in Kandel, Germany.",
	//           "copyright": "Dmitry Kostyukov for The New York Times"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/09/world/europe/xxmurder1/xxmurder1-mediumThreeByTwo210-v2.jpg",
	//           "format": "mediumThreeByTwo210",
	//           "height": 140,
	//           "width": 210,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Flowers and candles at the entrance of the drugstore where a teenage girl was killed in Kandel, Germany.",
	//           "copyright": "Dmitry Kostyukov for The New York Times"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/09/world/europe/xxmurder1/xxmurder1-superJumbo-v2.jpg",
	//           "format": "superJumbo",
	//           "height": 1367,
	//           "width": 2048,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Flowers and candles at the entrance of the drugstore where a teenage girl was killed in Kandel, Germany.",
	//           "copyright": "Dmitry Kostyukov for The New York Times"
	//         }
	//       ],
	//       "short_url": "https://nyti.ms/2ES5cPt"
	//     },
	//     {
	//       "section": "Health",
	//       "subsection": "",
	//       "title": "Fed Up With Drug Companies, Hospitals Decide to Start Their Own",
	//       "abstract": "A group of large hospital systems plans to create a nonprofit generic drug company to battle shortages and high prices.",
	//       "url": "https://www.nytimes.com/2018/01/18/health/drug-prices-hospitals.html",
	//       "byline": "By REED ABELSON and KATIE THOMAS",
	//       "item_type": "Article",
	//       "updated_date": "2018-01-18T00:01:20-05:00",
	//       "created_date": "2018-01-18T00:01:21-05:00",
	//       "published_date": "2018-01-18T00:01:21-05:00",
	//       "material_type_facet": "",
	//       "kicker": "",
	//       "des_facet": [
	//         "Drugs (Pharmaceuticals)",
	//         "Shortages",
	//         "Prices (Fares, Fees and Rates)",
	//         "Hospitals",
	//         "Generic Brands and Products"
	//       ],
	//       "org_facet": [
	//         "Intermountain Healthcare"
	//       ],
	//       "per_facet": [],
	//       "geo_facet": [],
	//       "multimedia": [
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/science/18DRUGS1/18DRUGS1-thumbStandard.jpg",
	//           "format": "Standard Thumbnail",
	//           "height": 75,
	//           "width": 75,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Generic drugs at Intermountain Medical Center in Murray, Utah. Intermountain Healthcare is spearheading an effort by a group of hospitals to create a nonprofit generic drug company.",
	//           "copyright": "Kim Raff for The New York Times"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/science/18DRUGS1/18DRUGS1-thumbLarge.jpg",
	//           "format": "thumbLarge",
	//           "height": 150,
	//           "width": 150,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Generic drugs at Intermountain Medical Center in Murray, Utah. Intermountain Healthcare is spearheading an effort by a group of hospitals to create a nonprofit generic drug company.",
	//           "copyright": "Kim Raff for The New York Times"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/science/18DRUGS1/18DRUGS1-articleInline.jpg",
	//           "format": "Normal",
	//           "height": 122,
	//           "width": 190,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Generic drugs at Intermountain Medical Center in Murray, Utah. Intermountain Healthcare is spearheading an effort by a group of hospitals to create a nonprofit generic drug company.",
	//           "copyright": "Kim Raff for The New York Times"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/science/18DRUGS1/18DRUGS1-mediumThreeByTwo210.jpg",
	//           "format": "mediumThreeByTwo210",
	//           "height": 140,
	//           "width": 210,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Generic drugs at Intermountain Medical Center in Murray, Utah. Intermountain Healthcare is spearheading an effort by a group of hospitals to create a nonprofit generic drug company.",
	//           "copyright": "Kim Raff for The New York Times"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/science/18DRUGS1/18DRUGS1-superJumbo.jpg",
	//           "format": "superJumbo",
	//           "height": 2048,
	//           "width": 1366,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Generic drugs at Intermountain Medical Center in Murray, Utah. Intermountain Healthcare is spearheading an effort by a group of hospitals to create a nonprofit generic drug company.",
	//           "copyright": "Kim Raff for The New York Times"
	//         }
	//       ],
	//       "short_url": "https://nyti.ms/2FLf7Y9"
	//     },
	//     {
	//       "section": "World",
	//       "subsection": "Middle East",
	//       "title": "U.S. Funding Cut Reignites Debate on Palestinian Refugee Agency",
	//       "abstract": "The decision to withhold $65 million in aid from a U.N. agency that helps Palestinian refugees has brought new attention to the organization, which functions as a quasi-government in some areas.",
	//       "url": "https://www.nytimes.com/2018/01/17/world/middleeast/palestinian-refugee-agency-unrwa.html",
	//       "byline": "By DAVID M. HALBFINGER",
	//       "item_type": "Article",
	//       "updated_date": "2018-01-18T03:51:44-05:00",
	//       "created_date": "2018-01-17T17:49:00-05:00",
	//       "published_date": "2018-01-17T17:49:00-05:00",
	//       "material_type_facet": "",
	//       "kicker": "",
	//       "des_facet": [
	//         "Refugees and Displaced Persons",
	//         "Palestinians"
	//       ],
	//       "org_facet": [
	//         "United Nations Relief and Works Agency"
	//       ],
	//       "per_facet": [],
	//       "geo_facet": [
	//         "Israel",
	//         "Gaza Strip",
	//         "Beirut (Lebanon)",
	//         "Jordan",
	//         "Khan Younis (Gaza Strip)",
	//         "West Bank"
	//       ],
	//       "multimedia": [
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/world/18palestinians1/17palestinians-thumbStandard.jpg",
	//           "format": "Standard Thumbnail",
	//           "height": 75,
	//           "width": 75,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "The Khan Younis refugee camp in Gaza, where much of the population relies on assistance from the United Nations Relief and Works Agency.",
	//           "copyright": "Ibraheem Abu Mustafa/Reuters"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/world/18palestinians1/17palestinians-thumbLarge.jpg",
	//           "format": "thumbLarge",
	//           "height": 150,
	//           "width": 150,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "The Khan Younis refugee camp in Gaza, where much of the population relies on assistance from the United Nations Relief and Works Agency.",
	//           "copyright": "Ibraheem Abu Mustafa/Reuters"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/world/18palestinians1/merlin_131824811_19f9619e-3ec3-4f2f-8feb-7a8616ea1cdc-articleInline.jpg",
	//           "format": "Normal",
	//           "height": 121,
	//           "width": 190,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "The Khan Younis refugee camp in Gaza, where much of the population relies on assistance from the United Nations Relief and Works Agency.",
	//           "copyright": "Ibraheem Abu Mustafa/Reuters"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/world/18palestinians1/17palestinians-mediumThreeByTwo210.jpg",
	//           "format": "mediumThreeByTwo210",
	//           "height": 140,
	//           "width": 210,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "The Khan Younis refugee camp in Gaza, where much of the population relies on assistance from the United Nations Relief and Works Agency.",
	//           "copyright": "Ibraheem Abu Mustafa/Reuters"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/world/18palestinians1/merlin_131824811_19f9619e-3ec3-4f2f-8feb-7a8616ea1cdc-superJumbo.jpg",
	//           "format": "superJumbo",
	//           "height": 1306,
	//           "width": 2048,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "The Khan Younis refugee camp in Gaza, where much of the population relies on assistance from the United Nations Relief and Works Agency.",
	//           "copyright": "Ibraheem Abu Mustafa/Reuters"
	//         }
	//       ],
	//       "short_url": "https://nyti.ms/2FQfyAv"
	//     },
	//     {
	//       "section": "World",
	//       "subsection": "Europe",
	//       "title": "U.K. Appoints a Minister for Loneliness",
	//       "abstract": "Prime Minister Theresa May said an under secretary would work across government departments to tackle the issue.",
	//       "url": "https://www.nytimes.com/2018/01/17/world/europe/uk-britain-loneliness.html",
	//       "byline": "By CEYLAN YEGINSU",
	//       "item_type": "Article",
	//       "updated_date": "2018-01-18T02:44:57-05:00",
	//       "created_date": "2018-01-17T10:53:17-05:00",
	//       "published_date": "2018-01-17T10:53:17-05:00",
	//       "material_type_facet": "",
	//       "kicker": "",
	//       "des_facet": [
	//         "Depression (Mental)",
	//         "Politics and Government",
	//         "Medicine and Health"
	//       ],
	//       "org_facet": [],
	//       "per_facet": [
	//         "May, Theresa M",
	//         "Cox, Jo (1974-2016)",
	//         "Tracey Crouch"
	//       ],
	//       "geo_facet": [
	//         "Great Britain"
	//       ],
	//       "multimedia": [
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/17/world/europe/xxbritain1/xxbritain1-thumbStandard.jpg",
	//           "format": "Standard Thumbnail",
	//           "height": 75,
	//           "width": 75,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Tracey Crouch, left, Britain’s under secretary for sport and civil society, is to coordinate the government’s response to loneliness.",
	//           "copyright": "Stephen Pond/Getty Images for Sport England"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/17/world/europe/xxbritain1/xxbritain1-thumbLarge.jpg",
	//           "format": "thumbLarge",
	//           "height": 150,
	//           "width": 150,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Tracey Crouch, left, Britain’s under secretary for sport and civil society, is to coordinate the government’s response to loneliness.",
	//           "copyright": "Stephen Pond/Getty Images for Sport England"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/17/world/europe/xxbritain1/merlin_132405866_3aa9bda1-bf14-42a3-95c9-bfc73092a3c0-articleInline.jpg",
	//           "format": "Normal",
	//           "height": 127,
	//           "width": 190,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Tracey Crouch, left, Britain’s under secretary for sport and civil society, is to coordinate the government’s response to loneliness.",
	//           "copyright": "Stephen Pond/Getty Images for Sport England"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/17/world/europe/xxbritain1/merlin_132405866_3aa9bda1-bf14-42a3-95c9-bfc73092a3c0-mediumThreeByTwo210.jpg",
	//           "format": "mediumThreeByTwo210",
	//           "height": 140,
	//           "width": 210,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Tracey Crouch, left, Britain’s under secretary for sport and civil society, is to coordinate the government’s response to loneliness.",
	//           "copyright": "Stephen Pond/Getty Images for Sport England"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/17/world/europe/xxbritain1/merlin_132405866_3aa9bda1-bf14-42a3-95c9-bfc73092a3c0-superJumbo.jpg",
	//           "format": "superJumbo",
	//           "height": 1365,
	//           "width": 2048,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Tracey Crouch, left, Britain’s under secretary for sport and civil society, is to coordinate the government’s response to loneliness.",
	//           "copyright": "Stephen Pond/Getty Images for Sport England"
	//         }
	//       ],
	//       "short_url": "https://nyti.ms/2FL1WGP"
	//     },
	//     {
	//       "section": "Travel",
	//       "subsection": "",
	//       "title": "Savannah, a City With Charms Both Historical and Culinary",
	//       "abstract": "There is no shortage of history, sultry beauty and architectural delights. And a visit needn’t cost you much.",
	//       "url": "https://www.nytimes.com/2018/01/17/travel/savannah-georgia-budget.html",
	//       "byline": "By LUCAS PETERSON",
	//       "item_type": "Article",
	//       "updated_date": "2018-01-17T19:24:47-05:00",
	//       "created_date": "2018-01-17T13:00:22-05:00",
	//       "published_date": "2018-01-17T13:00:22-05:00",
	//       "material_type_facet": "",
	//       "kicker": "",
	//       "des_facet": [
	//         "Travel and Vacations",
	//         "Budget Travel"
	//       ],
	//       "org_facet": [],
	//       "per_facet": [],
	//       "geo_facet": [
	//         "Savannah (Ga)"
	//       ],
	//       "multimedia": [
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/17/travel/17frugal-savannah/merlin_131685140_16acb4cd-986d-40ea-8de7-58e32a4bea30-thumbStandard.jpg",
	//           "format": "Standard Thumbnail",
	//           "height": 75,
	//           "width": 75,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "",
	//           "copyright": "Hunter McRae for The New York Times"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/17/travel/17frugal-savannah/merlin_131685140_16acb4cd-986d-40ea-8de7-58e32a4bea30-thumbLarge.jpg",
	//           "format": "thumbLarge",
	//           "height": 150,
	//           "width": 150,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "",
	//           "copyright": "Hunter McRae for The New York Times"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/17/travel/17frugal-savannah/merlin_131685140_16acb4cd-986d-40ea-8de7-58e32a4bea30-articleInline.jpg",
	//           "format": "Normal",
	//           "height": 127,
	//           "width": 190,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "",
	//           "copyright": "Hunter McRae for The New York Times"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/17/travel/17frugal-savannah/merlin_131685140_16acb4cd-986d-40ea-8de7-58e32a4bea30-mediumThreeByTwo210.jpg",
	//           "format": "mediumThreeByTwo210",
	//           "height": 140,
	//           "width": 210,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "",
	//           "copyright": "Hunter McRae for The New York Times"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/17/travel/17frugal-savannah/merlin_131685140_16acb4cd-986d-40ea-8de7-58e32a4bea30-superJumbo.jpg",
	//           "format": "superJumbo",
	//           "height": 1365,
	//           "width": 2048,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "",
	//           "copyright": "Hunter McRae for The New York Times"
	//         }
	//       ],
	//       "short_url": "https://nyti.ms/2FNZGyG"
	//     },
	//     {
	//       "section": "N.Y. / Region",
	//       "subsection": "",
	//       "title": "The Pied Piper of Parrots",
	//       "abstract": "The colorful and intelligent birds can drive owners crazy with their loud and unpredictable behavior. Glenn Sorino is here to help.",
	//       "url": "https://www.nytimes.com/2018/01/17/nyregion/pet-parrot-trainer.html",
	//       "byline": "By BRITTA LOKTING",
	//       "item_type": "Article",
	//       "updated_date": "2018-01-17T12:18:00-05:00",
	//       "created_date": "2018-01-17T12:18:00-05:00",
	//       "published_date": "2018-01-17T12:18:00-05:00",
	//       "material_type_facet": "",
	//       "kicker": "",
	//       "des_facet": [
	//         "Animal Behavior",
	//         "Birds",
	//         "Pets",
	//         "parrots"
	//       ],
	//       "org_facet": [
	//         "Best Friends Animal Society",
	//         "Best Friends New York"
	//       ],
	//       "per_facet": [
	//         "Glenn Sorino"
	//       ],
	//       "geo_facet": [
	//         "New York City"
	//       ],
	//       "multimedia": [
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/21/nyregion/21parrot40/21parrot40-thumbStandard.jpg",
	//           "format": "Standard Thumbnail",
	//           "height": 75,
	//           "width": 75,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "",
	//           "copyright": "Andrew White for The New York Times"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/21/nyregion/21parrot40/21parrot40-thumbLarge.jpg",
	//           "format": "thumbLarge",
	//           "height": 150,
	//           "width": 150,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "",
	//           "copyright": "Andrew White for The New York Times"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/21/nyregion/21parrot40/21parrot40-articleInline.jpg",
	//           "format": "Normal",
	//           "height": 194,
	//           "width": 190,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "",
	//           "copyright": "Andrew White for The New York Times"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/21/nyregion/21parrot40/00parrot40-mediumThreeByTwo210.jpg",
	//           "format": "mediumThreeByTwo210",
	//           "height": 140,
	//           "width": 210,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "",
	//           "copyright": "Andrew White for The New York Times"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/21/nyregion/21parrot40/merlin_132035033_03acdbf8-e109-4764-826b-cdec6ec8ce91-superJumbo.jpg",
	//           "format": "superJumbo",
	//           "height": 1463,
	//           "width": 2048,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "",
	//           "copyright": "Andrew White for The New York Times"
	//         }
	//       ],
	//       "short_url": "https://nyti.ms/2FNOZMy"
	//     },
	//     {
	//       "section": "Sports",
	//       "subsection": "",
	//       "title": "The Center of U.S. Gymnastics’ Success Is Now a Haunted House",
	//       "abstract": "Athletes have said that they were sexually abused by the team doctor at the national training center in Texas, and Simone Biles said she dreads returning there. She shouldn’t have to.",
	//       "url": "https://www.nytimes.com/2018/01/16/sports/larry-nassar-simone-biles.html",
	//       "byline": "By JULIET MACUR",
	//       "item_type": "Article",
	//       "updated_date": "2018-01-16T22:29:22-05:00",
	//       "created_date": "2018-01-16T22:29:23-05:00",
	//       "published_date": "2018-01-16T22:29:23-05:00",
	//       "material_type_facet": "",
	//       "kicker": "",
	//       "des_facet": [
	//         "Gymnastics",
	//         "Sex Crimes"
	//       ],
	//       "org_facet": [
	//         "USA Gymnastics"
	//       ],
	//       "per_facet": [
	//         "Nassar, Lawrence G (1963- )",
	//         "Biles, Simone",
	//         "Karolyi, Martha",
	//         "Karolyi, Bela"
	//       ],
	//       "geo_facet": [
	//         "Texas"
	//       ],
	//       "multimedia": [
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/17/sports/17macurJMP1/17macur1-thumbStandard.jpg",
	//           "format": "Standard Thumbnail",
	//           "height": 75,
	//           "width": 75,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Simone Biles said on Monday that it &ldquo;broke her heart&rdquo; that she would have to train for the 2020 Olympics at the national team training facility where her abuse had occurred.",
	//           "copyright": "Chang W. Lee/The New York Times"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/17/sports/17macurJMP1/17macur1-thumbLarge.jpg",
	//           "format": "thumbLarge",
	//           "height": 150,
	//           "width": 150,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Simone Biles said on Monday that it &ldquo;broke her heart&rdquo; that she would have to train for the 2020 Olympics at the national team training facility where her abuse had occurred.",
	//           "copyright": "Chang W. Lee/The New York Times"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/17/sports/17macurJMP1/merlin_110772361_cf914818-e5e7-412d-bf5e-190cc8de21af-articleInline.jpg",
	//           "format": "Normal",
	//           "height": 127,
	//           "width": 190,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Simone Biles said on Monday that it &ldquo;broke her heart&rdquo; that she would have to train for the 2020 Olympics at the national team training facility where her abuse had occurred.",
	//           "copyright": "Chang W. Lee/The New York Times"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/17/sports/17macurJMP1/merlin_110772361_cf914818-e5e7-412d-bf5e-190cc8de21af-mediumThreeByTwo210.jpg",
	//           "format": "mediumThreeByTwo210",
	//           "height": 140,
	//           "width": 210,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Simone Biles said on Monday that it &ldquo;broke her heart&rdquo; that she would have to train for the 2020 Olympics at the national team training facility where her abuse had occurred.",
	//           "copyright": "Chang W. Lee/The New York Times"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/17/sports/17macurJMP1/merlin_110772361_cf914818-e5e7-412d-bf5e-190cc8de21af-superJumbo.jpg",
	//           "format": "superJumbo",
	//           "height": 1365,
	//           "width": 2048,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Simone Biles said on Monday that it &ldquo;broke her heart&rdquo; that she would have to train for the 2020 Olympics at the national team training facility where her abuse had occurred.",
	//           "copyright": "Chang W. Lee/The New York Times"
	//         }
	//       ],
	//       "short_url": "https://nyti.ms/2EOjnoy"
	//     },
	//     {
	//       "section": "Smarter Living",
	//       "subsection": "",
	//       "title": "How to Maintain Friendships",
	//       "abstract": "Keeping cherished friendships afloat doesn’t need to be a huge time commitment.",
	//       "url": "https://www.nytimes.com/2018/01/18/smarter-living/how-to-maintain-friends.html",
	//       "byline": "By ANNA GOLDFARB",
	//       "item_type": "Article",
	//       "updated_date": "2018-01-18T02:45:01-05:00",
	//       "created_date": "2018-01-18T02:45:01-05:00",
	//       "published_date": "2018-01-18T02:45:01-05:00",
	//       "material_type_facet": "",
	//       "kicker": "",
	//       "des_facet": [
	//         "Friendship",
	//         "Longevity",
	//         "Social Media",
	//         "Organizations, Societies and Clubs"
	//       ],
	//       "org_facet": [],
	//       "per_facet": [],
	//       "geo_facet": [],
	//       "multimedia": [
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/smarter-living/18sl-friendship1/18sl-friendship1-thumbStandard-v2.jpg",
	//           "format": "Standard Thumbnail",
	//           "height": 75,
	//           "width": 75,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "",
	//           "copyright": "Brook Mitchell/Getty Images"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/smarter-living/18sl-friendship1/18sl-friendship1-thumbLarge-v2.jpg",
	//           "format": "thumbLarge",
	//           "height": 150,
	//           "width": 150,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "",
	//           "copyright": "Brook Mitchell/Getty Images"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/smarter-living/18sl-friendship1/18sl-friendship1-articleInline-v2.jpg",
	//           "format": "Normal",
	//           "height": 127,
	//           "width": 190,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "",
	//           "copyright": "Brook Mitchell/Getty Images"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/smarter-living/18sl-friendship1/18sl-friendship1-mediumThreeByTwo210-v2.jpg",
	//           "format": "mediumThreeByTwo210",
	//           "height": 140,
	//           "width": 210,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "",
	//           "copyright": "Brook Mitchell/Getty Images"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/smarter-living/18sl-friendship1/18sl-friendship1-superJumbo.jpg",
	//           "format": "superJumbo",
	//           "height": 1366,
	//           "width": 2048,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "",
	//           "copyright": "Brook Mitchell/Getty Images"
	//         }
	//       ],
	//       "short_url": "https://nyti.ms/2FMbTnr"
	//     },
	//     {
	//       "section": "Travel",
	//       "subsection": "",
	//       "title": "How to Plan a Last-Minute Trip to the 2018 Winter Olympics in Pyeongchang",
	//       "abstract": "It’s not too late to plan a trip to the 2018 Winter Olympics in South Korea. Here’s how to score a cheap flight, find a place to stay, and catch the games.",
	//       "url": "https://www.nytimes.com/2018/01/17/travel/winter-olympics-trip-planning.html",
	//       "byline": "By ANN BABE",
	//       "item_type": "Article",
	//       "updated_date": "2018-01-18T03:12:00-05:00",
	//       "created_date": "2018-01-17T02:45:22-05:00",
	//       "published_date": "2018-01-17T02:45:22-05:00",
	//       "material_type_facet": "",
	//       "kicker": "",
	//       "des_facet": [
	//         "Olympic Games (2018)",
	//         "Olympic Games",
	//         "Travel and Vacations"
	//       ],
	//       "org_facet": [],
	//       "per_facet": [],
	//       "geo_facet": [
	//         "Pyeongchang (South Korea)",
	//         "South Korea"
	//       ],
	//       "multimedia": [
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/12/us/00olympicguide2/00olympicguide2-thumbStandard-v2.jpg",
	//           "format": "Standard Thumbnail",
	//           "height": 75,
	//           "width": 75,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Incheon International Airport, west of Seoul.",
	//           "copyright": "Yonhap/European Pressphoto Agency"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/12/us/00olympicguide2/00olympicguide2-thumbLarge-v2.jpg",
	//           "format": "thumbLarge",
	//           "height": 150,
	//           "width": 150,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Incheon International Airport, west of Seoul.",
	//           "copyright": "Yonhap/European Pressphoto Agency"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/12/us/00olympicguide2/00olympicguide2-articleInline-v2.jpg",
	//           "format": "Normal",
	//           "height": 135,
	//           "width": 190,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Incheon International Airport, west of Seoul.",
	//           "copyright": "Yonhap/European Pressphoto Agency"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/12/us/00olympicguide2/00olympicguide2-mediumThreeByTwo210-v2.jpg",
	//           "format": "mediumThreeByTwo210",
	//           "height": 140,
	//           "width": 210,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Incheon International Airport, west of Seoul.",
	//           "copyright": "Yonhap/European Pressphoto Agency"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/12/us/00olympicguide2/00olympicguide2-superJumbo.jpg",
	//           "format": "superJumbo",
	//           "height": 1006,
	//           "width": 2048,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Incheon International Airport, west of Seoul.",
	//           "copyright": "Yonhap/European Pressphoto Agency"
	//         }
	//       ],
	//       "short_url": "https://nyti.ms/2FMQ2wa"
	//     },
	//     {
	//       "section": "The Upshot",
	//       "subsection": "",
	//       "title": "A Memory Shortcut, With a Little Help From Friends",
	//       "abstract": "Humans formed social networks long before social media, so why not put them to use?",
	//       "url": "https://www.nytimes.com/2018/01/08/upshot/a-memory-shortcut-with-a-little-help-from-friends.html",
	//       "byline": "By AUSTIN FRAKT",
	//       "item_type": "Article",
	//       "updated_date": "2018-01-08T07:00:22-05:00",
	//       "created_date": "2018-01-08T07:00:22-05:00",
	//       "published_date": "2018-01-08T07:00:22-05:00",
	//       "material_type_facet": "",
	//       "kicker": "",
	//       "des_facet": [
	//         "Memory"
	//       ],
	//       "org_facet": [],
	//       "per_facet": [
	//         "Chalmers, David J"
	//       ],
	//       "geo_facet": [],
	//       "multimedia": [
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/09/upshot/09up-healthmemory-2/09up-healthmemory-2-thumbStandard.jpg",
	//           "format": "Standard Thumbnail",
	//           "height": 75,
	//           "width": 75,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "",
	//           "copyright": "Tim Enthoven"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/09/upshot/09up-healthmemory-2/09up-healthmemory-2-thumbLarge.jpg",
	//           "format": "thumbLarge",
	//           "height": 150,
	//           "width": 150,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "",
	//           "copyright": "Tim Enthoven"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/09/upshot/09up-healthmemory-2/09up-healthmemory-2-articleInline.jpg",
	//           "format": "Normal",
	//           "height": 190,
	//           "width": 190,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "",
	//           "copyright": "Tim Enthoven"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/09/upshot/09up-healthmemory-2/09up-healthmemory-2-mediumThreeByTwo210.jpg",
	//           "format": "mediumThreeByTwo210",
	//           "height": 140,
	//           "width": 210,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "",
	//           "copyright": "Tim Enthoven"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/09/upshot/09up-healthmemory-2/09up-healthmemory-2-superJumbo.jpg",
	//           "format": "superJumbo",
	//           "height": 1223,
	//           "width": 1223,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "",
	//           "copyright": "Tim Enthoven"
	//         }
	//       ],
	//       "short_url": "https://nyti.ms/2FgtIKP"
	//     },
	//     {
	//       "section": "Technology",
	//       "subsection": "",
	//       "title": "Is the Answer to Phone Addiction a Worse Phone?",
	//       "abstract": "A small group of people have turned their phone screens to shades of gray to make them less stimulating. That’s the opposite of what tech companies want.",
	//       "url": "https://www.nytimes.com/2018/01/12/technology/grayscale-phone.html",
	//       "byline": "By NELLIE BOWLES",
	//       "item_type": "Article",
	//       "updated_date": "2018-01-17T19:56:35-05:00",
	//       "created_date": "2018-01-12T16:02:30-05:00",
	//       "published_date": "2018-01-12T16:02:30-05:00",
	//       "material_type_facet": "",
	//       "kicker": "",
	//       "des_facet": [
	//         "Computers and the Internet",
	//         "Smartphones",
	//         "Social Media",
	//         "Addiction (Psychology)"
	//       ],
	//       "org_facet": [],
	//       "per_facet": [],
	//       "geo_facet": [],
	//       "multimedia": [
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/14/business/14GOINGGREY-GIF1/14GOINGGREY-GIF1-thumbStandard.gif",
	//           "format": "Standard Thumbnail",
	//           "height": 75,
	//           "width": 75,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "",
	//           "copyright": ""
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/14/business/14GOINGGREY-GIF1/14GOINGGREY-GIF1-thumbLarge.gif",
	//           "format": "thumbLarge",
	//           "height": 150,
	//           "width": 150,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "",
	//           "copyright": ""
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/14/business/14GOINGGREY-GIF1/14GOINGGREY-GIF1-articleInline.gif",
	//           "format": "Normal",
	//           "height": 337,
	//           "width": 190,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "",
	//           "copyright": ""
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/14/business/14GOINGGREY-GIF1/14GOINGGREY-GIF1-mediumThreeByTwo210.gif",
	//           "format": "mediumThreeByTwo210",
	//           "height": 140,
	//           "width": 210,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "",
	//           "copyright": ""
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/14/business/14GOINGGREY-GIF1/14GOINGGREY-GIF1-superJumbo.gif",
	//           "format": "superJumbo",
	//           "height": 1818,
	//           "width": 1024,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "",
	//           "copyright": ""
	//         }
	//       ],
	//       "short_url": "https://nyti.ms/2EBYAEN"
	//     },
	//     {
	//       "section": "T Magazine",
	//       "subsection": "Food",
	//       "title": "Six New Cocktails, Alcohol Not Included",
	//       "abstract": "These zero-proof drinks from top bartenders all over the country are healthy-ish, use fresh ingredients — and won't give you a hangover.",
	//       "url": "https://www.nytimes.com/2018/01/10/t-magazine/food/dryanuary-no-alcohol-cocktails.html",
	//       "byline": "By ALEXANDRIA SYMONDS",
	//       "item_type": "Article",
	//       "updated_date": "2018-01-11T13:37:36-05:00",
	//       "created_date": "2018-01-10T16:42:20-05:00",
	//       "published_date": "2018-01-10T16:42:20-05:00",
	//       "material_type_facet": "",
	//       "kicker": "",
	//       "des_facet": [
	//         "Cocktails and Mixed Drinks",
	//         "Alcoholic Beverages"
	//       ],
	//       "org_facet": [],
	//       "per_facet": [],
	//       "geo_facet": [],
	//       "multimedia": [
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/09/t-magazine/oakImage-1515535883495-copy/oakImage-1515535883495-copy-thumbStandard-v3.jpg",
	//           "format": "Standard Thumbnail",
	//           "height": 75,
	//           "width": 75,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Photo courtesy of Providence",
	//           "copyright": ""
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/09/t-magazine/oakImage-1515535883495-copy/oakImage-1515535883495-copy-thumbLarge-v3.jpg",
	//           "format": "thumbLarge",
	//           "height": 150,
	//           "width": 150,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Photo courtesy of Providence",
	//           "copyright": ""
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/09/t-magazine/oakImage-1515535883495-copy/oakImage-1515535883495-copy-articleInline-v2.jpg",
	//           "format": "Normal",
	//           "height": 127,
	//           "width": 190,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Photo courtesy of Providence",
	//           "copyright": ""
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/09/t-magazine/oakImage-1515535883495-copy/oakImage-1515535883495-copy-mediumThreeByTwo210-v3.jpg",
	//           "format": "mediumThreeByTwo210",
	//           "height": 140,
	//           "width": 210,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Photo courtesy of Providence",
	//           "copyright": ""
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/09/t-magazine/oakImage-1515535883495-copy/oakImage-1515535883495-copy-superJumbo-v2.jpg",
	//           "format": "superJumbo",
	//           "height": 1367,
	//           "width": 2048,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Photo courtesy of Providence",
	//           "copyright": ""
	//         }
	//       ],
	//       "short_url": "https://nyti.ms/2Foe8gt"
	//     },
	//     {
	//       "section": "Fashion & Style",
	//       "subsection": "",
	//       "title": "Milan Is Still Making It New",
	//       "abstract": "Giorgio Armani, Prada and Fendi proved that men’s fashion has the power to surprise.",
	//       "url": "https://www.nytimes.com/2018/01/17/fashion/milan-mens-fashion-week-review.html",
	//       "byline": "By GUY TREBAY",
	//       "item_type": "Article",
	//       "updated_date": "2018-01-17T17:01:55-05:00",
	//       "created_date": "2018-01-17T17:01:54-05:00",
	//       "published_date": "2018-01-17T17:01:54-05:00",
	//       "material_type_facet": "",
	//       "kicker": "",
	//       "des_facet": [
	//         "Fashion and Apparel",
	//         "Men's Fashion Week"
	//       ],
	//       "org_facet": [
	//         "Armani, Giorgio, SpA",
	//         "Pal Zileri (Fashion Label)",
	//         "Valentino Fashion Group SpA",
	//         "Fendi SpA",
	//         "Prada SpA"
	//       ],
	//       "per_facet": [],
	//       "geo_facet": [
	//         "Milan (Italy)"
	//       ],
	//       "multimedia": [
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/fashion/18FENDI1/18FENDI1-thumbStandard-v2.jpg",
	//           "format": "Standard Thumbnail",
	//           "height": 75,
	//           "width": 75,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "The designer Silvia Venturini Fendi seemed to straddle time zones in her Milan fashion show, above, including traditional elements like a parasol hat and futuristic touches like garments bonded with no need for stitching.",
	//           "copyright": "Valerio Mezzanotti for The New York Times"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/fashion/18FENDI1/18FENDI1-thumbLarge-v2.jpg",
	//           "format": "thumbLarge",
	//           "height": 150,
	//           "width": 150,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "The designer Silvia Venturini Fendi seemed to straddle time zones in her Milan fashion show, above, including traditional elements like a parasol hat and futuristic touches like garments bonded with no need for stitching.",
	//           "copyright": "Valerio Mezzanotti for The New York Times"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/fashion/18FENDI1/merlin_132309740_7a6b4672-3ae8-4928-affe-4cf9e6ee5cc6-articleInline.jpg",
	//           "format": "Normal",
	//           "height": 127,
	//           "width": 190,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "The designer Silvia Venturini Fendi seemed to straddle time zones in her Milan fashion show, above, including traditional elements like a parasol hat and futuristic touches like garments bonded with no need for stitching.",
	//           "copyright": "Valerio Mezzanotti for The New York Times"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/fashion/18FENDI1/merlin_132309740_7a6b4672-3ae8-4928-affe-4cf9e6ee5cc6-mediumThreeByTwo210.jpg",
	//           "format": "mediumThreeByTwo210",
	//           "height": 140,
	//           "width": 210,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "The designer Silvia Venturini Fendi seemed to straddle time zones in her Milan fashion show, above, including traditional elements like a parasol hat and futuristic touches like garments bonded with no need for stitching.",
	//           "copyright": "Valerio Mezzanotti for The New York Times"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/fashion/18FENDI1/merlin_132309740_7a6b4672-3ae8-4928-affe-4cf9e6ee5cc6-superJumbo.jpg",
	//           "format": "superJumbo",
	//           "height": 1365,
	//           "width": 2048,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "The designer Silvia Venturini Fendi seemed to straddle time zones in her Milan fashion show, above, including traditional elements like a parasol hat and futuristic touches like garments bonded with no need for stitching.",
	//           "copyright": "Valerio Mezzanotti for The New York Times"
	//         }
	//       ],
	//       "short_url": "https://nyti.ms/2FQ5yHt"
	//     },
	//     {
	//       "section": "Theater",
	//       "subsection": "",
	//       "title": "Fighting for Native Americans, in Court and Onstage",
	//       "abstract": "In her new play “Sovereignty,” Mary Kathryn Nagle brings together her legal activism and her family history.",
	//       "url": "https://www.nytimes.com/2018/01/17/theater/mary-kathryn-nagle-native-american-playwright-lawyer.html",
	//       "byline": "By LAURA COLLINS-HUGHES",
	//       "item_type": "Article",
	//       "updated_date": "2018-01-17T11:13:55-05:00",
	//       "created_date": "2018-01-17T11:12:27-05:00",
	//       "published_date": "2018-01-17T11:12:27-05:00",
	//       "material_type_facet": "",
	//       "kicker": "",
	//       "des_facet": [
	//         "Theater",
	//         "Native Americans",
	//         "Sovereignty (Play)",
	//         "Manahatta (Play)"
	//       ],
	//       "org_facet": [
	//         "Arena Stage"
	//       ],
	//       "per_facet": [
	//         "Smith, Molly D",
	//         "Nagle, Mary Kathryn"
	//       ],
	//       "geo_facet": [],
	//       "multimedia": [
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/21/arts/21NAGLE-alt/21NAGLE-alt-thumbStandard-v2.jpg",
	//           "format": "Standard Thumbnail",
	//           "height": 75,
	//           "width": 75,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Mary Kathryn Nagle at Arena Stage in Washington, D.C., where her play “Sovereignty” is having its world premiere.",
	//           "copyright": "Justin T. Gellerson for The New York Times"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/21/arts/21NAGLE-alt/21NAGLE-alt-thumbLarge-v2.jpg",
	//           "format": "thumbLarge",
	//           "height": 150,
	//           "width": 150,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Mary Kathryn Nagle at Arena Stage in Washington, D.C., where her play “Sovereignty” is having its world premiere.",
	//           "copyright": "Justin T. Gellerson for The New York Times"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/21/arts/21NAGLE-alt/21NAGLE-alt-articleInline-v2.jpg",
	//           "format": "Normal",
	//           "height": 180,
	//           "width": 190,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Mary Kathryn Nagle at Arena Stage in Washington, D.C., where her play “Sovereignty” is having its world premiere.",
	//           "copyright": "Justin T. Gellerson for The New York Times"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/21/arts/21NAGLE-alt/21NAGLE-alt-mediumThreeByTwo210-v3.jpg",
	//           "format": "mediumThreeByTwo210",
	//           "height": 140,
	//           "width": 210,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Mary Kathryn Nagle at Arena Stage in Washington, D.C., where her play “Sovereignty” is having its world premiere.",
	//           "copyright": "Justin T. Gellerson for The New York Times"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/21/arts/21NAGLE-alt/21NAGLE-alt-superJumbo.jpg",
	//           "format": "superJumbo",
	//           "height": 2048,
	//           "width": 1462,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Mary Kathryn Nagle at Arena Stage in Washington, D.C., where her play “Sovereignty” is having its world premiere.",
	//           "copyright": "Justin T. Gellerson for The New York Times"
	//         }
	//       ],
	//       "short_url": "https://nyti.ms/2FK8IMO"
	//     },
	//     {
	//       "section": "Movies",
	//       "subsection": "",
	//       "title": "Sundance Film Festival: 5 Movies to Watch",
	//       "abstract": "The festival starts Thursday. Here’s a look at five films we’re excited about.",
	//       "url": "https://www.nytimes.com/2018/01/17/movies/sundance-film-festival-preview.html",
	//       "byline": "By MEKADO MURPHY",
	//       "item_type": "Article",
	//       "updated_date": "2018-01-17T13:31:28-05:00",
	//       "created_date": "2018-01-17T13:31:28-05:00",
	//       "published_date": "2018-01-17T13:31:28-05:00",
	//       "material_type_facet": "",
	//       "kicker": "",
	//       "des_facet": [
	//         "Movies",
	//         "Sundance Film Festival (Park City, Utah)",
	//         "Sorry to Bother You (Movie)",
	//         "Leave No Trace (Movie)",
	//         "Hereditary (Movie)",
	//         "Wildlife (Movie)",
	//         "The Miseducation of Cameron Post (Movie)"
	//       ],
	//       "org_facet": [],
	//       "per_facet": [
	//         "Akhavan, Desiree",
	//         "Dano, Paul",
	//         "Moretz, Chloe Grace",
	//         "Hammer, Armie",
	//         "Thompson, Tessa",
	//         "Oxenbould, Ed"
	//       ],
	//       "geo_facet": [],
	//       "multimedia": [
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/movies/18sundance1/18sundance1-thumbStandard-v3.png",
	//           "format": "Standard Thumbnail",
	//           "height": 75,
	//           "width": 75,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Lakeith Stanfield and Tessa Thompson in &ldquo;Sorry to Bother You.&rdquo;",
	//           "copyright": "Doug Emmett"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/movies/18sundance1/18sundance1-thumbLarge-v3.png",
	//           "format": "thumbLarge",
	//           "height": 150,
	//           "width": 150,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Lakeith Stanfield and Tessa Thompson in &ldquo;Sorry to Bother You.&rdquo;",
	//           "copyright": "Doug Emmett"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/movies/18sundance1/18sundance1-articleInline-v3.png",
	//           "format": "Normal",
	//           "height": 94,
	//           "width": 190,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Lakeith Stanfield and Tessa Thompson in &ldquo;Sorry to Bother You.&rdquo;",
	//           "copyright": "Doug Emmett"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/movies/18sundance1/18sundance1-mediumThreeByTwo210-v3.png",
	//           "format": "mediumThreeByTwo210",
	//           "height": 140,
	//           "width": 210,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Lakeith Stanfield and Tessa Thompson in &ldquo;Sorry to Bother You.&rdquo;",
	//           "copyright": "Doug Emmett"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/movies/18sundance1/18sundance1-superJumbo-v3.png",
	//           "format": "superJumbo",
	//           "height": 447,
	//           "width": 899,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Lakeith Stanfield and Tessa Thompson in &ldquo;Sorry to Bother You.&rdquo;",
	//           "copyright": "Doug Emmett"
	//         }
	//       ],
	//       "short_url": "https://nyti.ms/2FJ95Y6"
	//     },
	//     {
	//       "section": "Fashion & Style",
	//       "subsection": "",
	//       "title": "Beyoncé Is Bonkers for This Woman’s Lace Jewelry",
	//       "abstract": "Monika Knutsson salvages delicate heirloom material, plunges pieces of it into silver or gold, and sells the results to an eager clientele.",
	//       "url": "https://www.nytimes.com/2018/01/17/fashion/gold-lace-jewelry-beyonce-monika-knutsson.html",
	//       "byline": "By LINDA DYETT",
	//       "item_type": "Article",
	//       "updated_date": "2018-01-17T14:20:16-05:00",
	//       "created_date": "2018-01-17T12:51:34-05:00",
	//       "published_date": "2018-01-17T12:51:34-05:00",
	//       "material_type_facet": "",
	//       "kicker": "",
	//       "des_facet": [
	//         "Gold",
	//         "Lace",
	//         "Silver",
	//         "Jewels and Jewelry"
	//       ],
	//       "org_facet": [],
	//       "per_facet": [
	//         "Knuttson, Monika"
	//       ],
	//       "geo_facet": [],
	//       "multimedia": [
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/fashion/18lace2/18lace2-thumbStandard.jpg",
	//           "format": "Standard Thumbnail",
	//           "height": 75,
	//           "width": 75,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Ms. Knutsson holding the same earrings Beyonc&eacute; wore on tour.",
	//           "copyright": "Stefania Curto for The New York Times"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/fashion/18lace2/18lace2-thumbLarge.jpg",
	//           "format": "thumbLarge",
	//           "height": 150,
	//           "width": 150,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Ms. Knutsson holding the same earrings Beyonc&eacute; wore on tour.",
	//           "copyright": "Stefania Curto for The New York Times"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/fashion/18lace2/18lace2-articleInline.jpg",
	//           "format": "Normal",
	//           "height": 130,
	//           "width": 190,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Ms. Knutsson holding the same earrings Beyonc&eacute; wore on tour.",
	//           "copyright": "Stefania Curto for The New York Times"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/fashion/18lace2/18lace2-mediumThreeByTwo210.jpg",
	//           "format": "mediumThreeByTwo210",
	//           "height": 140,
	//           "width": 210,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Ms. Knutsson holding the same earrings Beyonc&eacute; wore on tour.",
	//           "copyright": "Stefania Curto for The New York Times"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/18/fashion/18lace2/18lace2-superJumbo.jpg",
	//           "format": "superJumbo",
	//           "height": 1390,
	//           "width": 1995,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Ms. Knutsson holding the same earrings Beyonc&eacute; wore on tour.",
	//           "copyright": "Stefania Curto for The New York Times"
	//         }
	//       ],
	//       "short_url": "https://nyti.ms/2EQXZiH"
	//     },
	//     {
	//       "section": "Food",
	//       "subsection": "",
	//       "title": "Winter Salvation, Fresh From the Dumpling Steamer, in Queens",
	//       "abstract": "Found on the same stretch of Jackson Heights, where momos are a common language, Amdo Kitchen and Potala offer a simple warmth in deep cold.",
	//       "url": "https://www.nytimes.com/2018/01/16/dining/amdo-kitchen-review-potala-momo.html",
	//       "byline": "By LIGAYA MISHAN",
	//       "item_type": "Article",
	//       "updated_date": "2018-01-17T10:56:05-05:00",
	//       "created_date": "2018-01-16T13:39:25-05:00",
	//       "published_date": "2018-01-16T13:39:25-05:00",
	//       "material_type_facet": "",
	//       "kicker": "",
	//       "des_facet": [
	//         "Restaurants",
	//         "Food Trucks and Vendors"
	//       ],
	//       "org_facet": [
	//         "Potala Restaurant (Queens, NY, Restaurant)",
	//         "Amdo Kitchen (Food Truck)"
	//       ],
	//       "per_facet": [],
	//       "geo_facet": [
	//         "Jackson Heights (Queens, NY)"
	//       ],
	//       "multimedia": [
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/17/dining/17hungry1/17hungry1-thumbStandard.jpg",
	//           "format": "Standard Thumbnail",
	//           "height": 75,
	//           "width": 75,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "At the Amdo Kitchen food truck, momos come huddled unceremoniously.",
	//           "copyright": "An Rong Xu for The New York Times"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/17/dining/17hungry1/17hungry1-thumbLarge.jpg",
	//           "format": "thumbLarge",
	//           "height": 150,
	//           "width": 150,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "At the Amdo Kitchen food truck, momos come huddled unceremoniously.",
	//           "copyright": "An Rong Xu for The New York Times"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/17/dining/17hungry1/merlin_132248900_368109cc-fcf9-4967-9202-beaaa5279bef-articleInline.jpg",
	//           "format": "Normal",
	//           "height": 127,
	//           "width": 190,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "At the Amdo Kitchen food truck, momos come huddled unceremoniously.",
	//           "copyright": "An Rong Xu for The New York Times"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/17/dining/17hungry1/17hungry1-mediumThreeByTwo210.jpg",
	//           "format": "mediumThreeByTwo210",
	//           "height": 140,
	//           "width": 210,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "At the Amdo Kitchen food truck, momos come huddled unceremoniously.",
	//           "copyright": "An Rong Xu for The New York Times"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/17/dining/17hungry1/merlin_132248900_368109cc-fcf9-4967-9202-beaaa5279bef-superJumbo.jpg",
	//           "format": "superJumbo",
	//           "height": 1367,
	//           "width": 2048,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "At the Amdo Kitchen food truck, momos come huddled unceremoniously.",
	//           "copyright": "An Rong Xu for The New York Times"
	//         }
	//       ],
	//       "short_url": "https://nyti.ms/2EKsAyk"
	//     },
	//     {
	//       "section": "Health",
	//       "subsection": "",
	//       "title": "High-Fat Diet May Fuel Spread of Prostate Cancer",
	//       "abstract": "New research suggests a strong link between genes, dietary fat and prostate cancer.",
	//       "url": "https://www.nytimes.com/2018/01/16/health/fat-diet-prostate-cancer.html",
	//       "byline": "By GINA KOLATA",
	//       "item_type": "Article",
	//       "updated_date": "2018-01-16T13:04:42-05:00",
	//       "created_date": "2018-01-16T13:04:43-05:00",
	//       "published_date": "2018-01-16T13:04:43-05:00",
	//       "material_type_facet": "",
	//       "kicker": "",
	//       "des_facet": [
	//         "Prostate Cancer",
	//         "Obesity",
	//         "Prostate Gland",
	//         "Diet and Nutrition",
	//         "Genetics and Heredity",
	//         "Mice",
	//         "Tumors",
	//         "Cancer"
	//       ],
	//       "org_facet": [
	//         "Beth Israel Deaconess Medical Center",
	//         "Nature Genetics (Journal)"
	//       ],
	//       "per_facet": [],
	//       "geo_facet": [],
	//       "multimedia": [
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/16/science/17PROSTATE/16PROSTATE-thumbStandard.jpg",
	//           "format": "Standard Thumbnail",
	//           "height": 75,
	//           "width": 75,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "A color-enhanced scanning electron microscope image of prostate cancer cells. A new study suggests that dietary fat may feed prostate tumors and help them spread.",
	//           "copyright": "Eye of Science/Science Source"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/16/science/17PROSTATE/16PROSTATE-thumbLarge.jpg",
	//           "format": "thumbLarge",
	//           "height": 150,
	//           "width": 150,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "A color-enhanced scanning electron microscope image of prostate cancer cells. A new study suggests that dietary fat may feed prostate tumors and help them spread.",
	//           "copyright": "Eye of Science/Science Source"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/16/science/17PROSTATE/16PROSTATE-articleInline.jpg",
	//           "format": "Normal",
	//           "height": 131,
	//           "width": 190,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "A color-enhanced scanning electron microscope image of prostate cancer cells. A new study suggests that dietary fat may feed prostate tumors and help them spread.",
	//           "copyright": "Eye of Science/Science Source"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/16/science/17PROSTATE/16PROSTATE-mediumThreeByTwo210.jpg",
	//           "format": "mediumThreeByTwo210",
	//           "height": 140,
	//           "width": 210,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "A color-enhanced scanning electron microscope image of prostate cancer cells. A new study suggests that dietary fat may feed prostate tumors and help them spread.",
	//           "copyright": "Eye of Science/Science Source"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/16/science/17PROSTATE/merlin_132360443_729121c7-3772-4910-8836-968ab6644a85-superJumbo.jpg",
	//           "format": "superJumbo",
	//           "height": 1481,
	//           "width": 2048,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "A color-enhanced scanning electron microscope image of prostate cancer cells. A new study suggests that dietary fat may feed prostate tumors and help them spread.",
	//           "copyright": "Eye of Science/Science Source"
	//         }
	//       ],
	//       "short_url": "https://nyti.ms/2FIur7R"
	//     },
	//     {
	//       "section": "Health",
	//       "subsection": "",
	//       "title": "‘Smart Thermometers’ Track Flu Season in Real Time",
	//       "abstract": "Can 500,000 thermometers transmitting 25,000 readings a day forecast the spread of flu more accurately than the C.D.C.?",
	//       "url": "https://www.nytimes.com/2018/01/16/health/smart-thermometers-flu.html",
	//       "byline": "By DONALD G. McNEIL Jr.",
	//       "item_type": "Article",
	//       "updated_date": "2018-01-16T02:00:29-05:00",
	//       "created_date": "2018-01-16T02:00:29-05:00",
	//       "published_date": "2018-01-16T02:00:29-05:00",
	//       "material_type_facet": "",
	//       "kicker": "",
	//       "des_facet": [
	//         "Influenza",
	//         "Thermometers",
	//         "Fever",
	//         "Smartphones"
	//       ],
	//       "org_facet": [
	//         "Centers for Disease Control and Prevention",
	//         "Kinsa Inc"
	//       ],
	//       "per_facet": [],
	//       "geo_facet": [],
	//       "multimedia": [
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/16/science/16SCI-GLOBAL/16SCI-GLOBAL-thumbStandard.jpg",
	//           "format": "Standard Thumbnail",
	//           "height": 75,
	//           "width": 75,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "A flu patient at Palomar Medical Center in Escondido, Calif. New “smart thermometers” are tracking the spread of flu, which has struck California especially hard this year.",
	//           "copyright": "Gregory Bull/Associated Press"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/16/science/16SCI-GLOBAL/16SCI-GLOBAL-thumbLarge.jpg",
	//           "format": "thumbLarge",
	//           "height": 150,
	//           "width": 150,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "A flu patient at Palomar Medical Center in Escondido, Calif. New “smart thermometers” are tracking the spread of flu, which has struck California especially hard this year.",
	//           "copyright": "Gregory Bull/Associated Press"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/16/science/16SCI-GLOBAL/16SCI-GLOBAL-articleInline.jpg",
	//           "format": "Normal",
	//           "height": 122,
	//           "width": 190,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "A flu patient at Palomar Medical Center in Escondido, Calif. New “smart thermometers” are tracking the spread of flu, which has struck California especially hard this year.",
	//           "copyright": "Gregory Bull/Associated Press"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/16/science/16SCI-GLOBAL/16SCI-GLOBAL-mediumThreeByTwo210.jpg",
	//           "format": "mediumThreeByTwo210",
	//           "height": 140,
	//           "width": 210,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "A flu patient at Palomar Medical Center in Escondido, Calif. New “smart thermometers” are tracking the spread of flu, which has struck California especially hard this year.",
	//           "copyright": "Gregory Bull/Associated Press"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/16/science/16SCI-GLOBAL/16SCI-GLOBAL-superJumbo.jpg",
	//           "format": "superJumbo",
	//           "height": 1368,
	//           "width": 2048,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "A flu patient at Palomar Medical Center in Escondido, Calif. New “smart thermometers” are tracking the spread of flu, which has struck California especially hard this year.",
	//           "copyright": "Gregory Bull/Associated Press"
	//         }
	//       ],
	//       "short_url": "https://nyti.ms/2FHDaHy"
	//     },
	//     {
	//       "section": "Health",
	//       "subsection": "",
	//       "title": "The Parasite on the Playground",
	//       "abstract": "Roundworm eggs, shed by stray dogs, can be ingested by children playing outside. The worm’s larvae have been found in the brain, experts say, perhaps impairing development.",
	//       "url": "https://www.nytimes.com/2018/01/16/health/toxocara-children-new-york-playgrounds.html",
	//       "byline": "By LAURA BEIL",
	//       "item_type": "Article",
	//       "updated_date": "2018-01-17T10:27:52-05:00",
	//       "created_date": "2018-01-16T02:30:26-05:00",
	//       "published_date": "2018-01-16T02:30:26-05:00",
	//       "material_type_facet": "",
	//       "kicker": "",
	//       "des_facet": [
	//         "Children and Childhood",
	//         "Parasites",
	//         "Dogs",
	//         "Brain",
	//         "Worms",
	//         "Playgrounds",
	//         "Mental Health and Disorders"
	//       ],
	//       "org_facet": [
	//         "Clinical Infectious Diseases (Journal)",
	//         "SUNY Downstate Medical Center"
	//       ],
	//       "per_facet": [],
	//       "geo_facet": [],
	//       "multimedia": [
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/16/science/16SCI-PARASITE-02/16SCI-PARASITE-02-thumbStandard.jpg",
	//           "format": "Standard Thumbnail",
	//           "height": 75,
	//           "width": 75,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Adult Toxocara roundworms live in the small intestines of infected cats and dogs. The eggs are excreted in their feces.",
	//           "copyright": "Eye of Science/Science Source"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/16/science/16SCI-PARASITE-02/16SCI-PARASITE-02-thumbLarge.jpg",
	//           "format": "thumbLarge",
	//           "height": 150,
	//           "width": 150,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Adult Toxocara roundworms live in the small intestines of infected cats and dogs. The eggs are excreted in their feces.",
	//           "copyright": "Eye of Science/Science Source"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/16/science/16SCI-PARASITE-02/16SCI-PARASITE-02-articleInline.jpg",
	//           "format": "Normal",
	//           "height": 127,
	//           "width": 190,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Adult Toxocara roundworms live in the small intestines of infected cats and dogs. The eggs are excreted in their feces.",
	//           "copyright": "Eye of Science/Science Source"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/16/science/16SCI-PARASITE-02/16SCI-PARASITE-02-mediumThreeByTwo210.jpg",
	//           "format": "mediumThreeByTwo210",
	//           "height": 140,
	//           "width": 210,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Adult Toxocara roundworms live in the small intestines of infected cats and dogs. The eggs are excreted in their feces.",
	//           "copyright": "Eye of Science/Science Source"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/16/science/16SCI-PARASITE-02/16SCI-PARASITE-02-superJumbo.jpg",
	//           "format": "superJumbo",
	//           "height": 1365,
	//           "width": 2048,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Adult Toxocara roundworms live in the small intestines of infected cats and dogs. The eggs are excreted in their feces.",
	//           "copyright": "Eye of Science/Science Source"
	//         }
	//       ],
	//       "short_url": "https://nyti.ms/2FI7wcK"
	//     },
	//     {
	//       "section": "Books",
	//       "subsection": "Book Review",
	//       "title": "What Does It Take to Overcome Adversity?",
	//       "abstract": "In “Supernormal,” the psychologist Meg Jay derives lessons from the lives of her troubled patients.",
	//       "url": "https://www.nytimes.com/2018/01/12/books/review/meg-jay-supernormal.html",
	//       "byline": "By HARA ESTROFF MARANO",
	//       "item_type": "Article",
	//       "updated_date": "2018-01-12T05:00:23-05:00",
	//       "created_date": "2018-01-12T05:00:23-05:00",
	//       "published_date": "2018-01-12T05:00:23-05:00",
	//       "material_type_facet": "",
	//       "kicker": "",
	//       "des_facet": [
	//         "Books and Literature",
	//         "Supernormal: The Untold Story of Adversity and Resilience (Book)",
	//         "Psychology and Psychologists",
	//         "Child Abuse and Neglect"
	//       ],
	//       "org_facet": [],
	//       "per_facet": [
	//         "Jay, Meg"
	//       ],
	//       "geo_facet": [],
	//       "multimedia": [
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/14/books/review/14Marano/14Marano-thumbStandard.jpg",
	//           "format": "Standard Thumbnail",
	//           "height": 75,
	//           "width": 75,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "",
	//           "copyright": "Cécile Gariépy"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/14/books/review/14Marano/14Marano-thumbLarge.jpg",
	//           "format": "thumbLarge",
	//           "height": 150,
	//           "width": 150,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "",
	//           "copyright": "Cécile Gariépy"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/14/books/review/14Marano/14Marano-articleInline.jpg",
	//           "format": "Normal",
	//           "height": 152,
	//           "width": 190,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "",
	//           "copyright": "Cécile Gariépy"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/14/books/review/14Marano/14Marano-mediumThreeByTwo210.jpg",
	//           "format": "mediumThreeByTwo210",
	//           "height": 140,
	//           "width": 210,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "",
	//           "copyright": "Cécile Gariépy"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/14/books/review/14Marano/14Marano-superJumbo.jpg",
	//           "format": "superJumbo",
	//           "height": 1638,
	//           "width": 2048,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "",
	//           "copyright": "Cécile Gariépy"
	//         }
	//       ],
	//       "short_url": "https://nyti.ms/2EA27Dz"
	//     },
	//     {
	//       "section": "Opinion",
	//       "subsection": "Sunday Review",
	//       "title": "The Secret to a Happy Marriage Is Knowing How to Fight",
	//       "abstract": "Planning for conflict is more important than planning a wedding.",
	//       "url": "https://www.nytimes.com/2018/01/12/opinion/sunday/engagement-marriage-conflict.html",
	//       "byline": "By DAPHNE DE MARNEFFE",
	//       "item_type": "Article",
	//       "updated_date": "2018-01-12T16:03:47-05:00",
	//       "created_date": "2018-01-12T16:03:47-05:00",
	//       "published_date": "2018-01-12T16:03:47-05:00",
	//       "material_type_facet": "",
	//       "kicker": "",
	//       "des_facet": [
	//         "Marriages",
	//         "Emotions"
	//       ],
	//       "org_facet": [],
	//       "per_facet": [],
	//       "geo_facet": [],
	//       "multimedia": [
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/14/opinion/sunday/14demarneffe/14demarneffe-thumbStandard.jpg",
	//           "format": "Standard Thumbnail",
	//           "height": 75,
	//           "width": 75,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "",
	//           "copyright": "Jing Wei"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/14/opinion/sunday/14demarneffe/14demarneffe-thumbLarge.jpg",
	//           "format": "thumbLarge",
	//           "height": 150,
	//           "width": 150,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "",
	//           "copyright": "Jing Wei"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/14/opinion/sunday/14demarneffe/14demarneffe-articleInline.jpg",
	//           "format": "Normal",
	//           "height": 190,
	//           "width": 190,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "",
	//           "copyright": "Jing Wei"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/14/opinion/sunday/14demarneffe/14demarneffe-mediumThreeByTwo210.jpg",
	//           "format": "mediumThreeByTwo210",
	//           "height": 140,
	//           "width": 210,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "",
	//           "copyright": "Jing Wei"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/14/opinion/sunday/14demarneffe/14demarneffe-superJumbo.jpg",
	//           "format": "superJumbo",
	//           "height": 2048,
	//           "width": 2048,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "",
	//           "copyright": "Jing Wei"
	//         }
	//       ],
	//       "short_url": "https://nyti.ms/2Fwn6Ip"
	//     },
	//     {
	//       "section": "Style",
	//       "subsection": "",
	//       "title": "Everyone Is Getting Hilariously Rich and You’re Not",
	//       "abstract": "The revolution will be ushered in by young people who are also cryptocurrency millionaires. Oh wait, they may be broke already.",
	//       "url": "https://www.nytimes.com/2018/01/13/style/bitcoin-millionaires.html",
	//       "byline": "By NELLIE BOWLES",
	//       "item_type": "Article",
	//       "updated_date": "2018-01-14T01:35:33-05:00",
	//       "created_date": "2018-01-13T06:00:41-05:00",
	//       "published_date": "2018-01-13T06:00:41-05:00",
	//       "material_type_facet": "",
	//       "kicker": "",
	//       "des_facet": [
	//         "Bitcoin (Currency)",
	//         "Venture Capital",
	//         "Virtual Currency"
	//       ],
	//       "org_facet": [],
	//       "per_facet": [],
	//       "geo_facet": [
	//         "San Francisco (Calif)"
	//       ],
	//       "multimedia": [
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/14/fashion/14bitcoinmillionaires1/14bitcoinmillionaires1-thumbStandard.jpg",
	//           "format": "Standard Thumbnail",
	//           "height": 75,
	//           "width": 75,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Fredric Fortier wears an Ethereum sweater along with Mathieu Baril wearing a Bitcoin sweater at the San Francisco Bitcoin Meetup Holiday Party at the Runway Incubator in December.",
	//           "copyright": "Jason Henry for The New York Times"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/14/fashion/14bitcoinmillionaires1/14bitcoinmillionaires1-thumbLarge.jpg",
	//           "format": "thumbLarge",
	//           "height": 150,
	//           "width": 150,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Fredric Fortier wears an Ethereum sweater along with Mathieu Baril wearing a Bitcoin sweater at the San Francisco Bitcoin Meetup Holiday Party at the Runway Incubator in December.",
	//           "copyright": "Jason Henry for The New York Times"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/14/fashion/14bitcoinmillionaires1/14bitcoinmillionaires1-articleInline.jpg",
	//           "format": "Normal",
	//           "height": 127,
	//           "width": 190,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Fredric Fortier wears an Ethereum sweater along with Mathieu Baril wearing a Bitcoin sweater at the San Francisco Bitcoin Meetup Holiday Party at the Runway Incubator in December.",
	//           "copyright": "Jason Henry for The New York Times"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/14/fashion/14bitcoinmillionaires1/14bitcoinmillionaires1-mediumThreeByTwo210.jpg",
	//           "format": "mediumThreeByTwo210",
	//           "height": 140,
	//           "width": 210,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Fredric Fortier wears an Ethereum sweater along with Mathieu Baril wearing a Bitcoin sweater at the San Francisco Bitcoin Meetup Holiday Party at the Runway Incubator in December.",
	//           "copyright": "Jason Henry for The New York Times"
	//         },
	//         {
	//           "url": "https://static01.nyt.com/images/2018/01/14/fashion/14bitcoinmillionaires1/14bitcoinmillionaires1-superJumbo.jpg",
	//           "format": "superJumbo",
	//           "height": 1365,
	//           "width": 2048,
	//           "type": "image",
	//           "subtype": "photo",
	//           "caption": "Fredric Fortier wears an Ethereum sweater along with Mathieu Baril wearing a Bitcoin sweater at the San Francisco Bitcoin Meetup Holiday Party at the Runway Incubator in December.",
	//           "copyright": "Jason Henry for The New York Times"
	//         }
	//       ],
	//       "short_url": "https://nyti.ms/2Fzn4jk"
	//     }
	//   ]
	// };



}]);
