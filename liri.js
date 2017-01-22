//the searchType could be spotify search, movie search, tweet search

searchType = process.argv[2];
searchItem = process.argv[3];


//// HERE GOES THE OMDB SECTION ////


if (searchType === 'movie-this') {

// in case the title of the movie is more than one word, let's concatenate each word
// with + symbols

var moveTitle = searchItem.split(' ').join('+');;

//Then run a request to the OMDB API with movie title specified
var queryUrl = "http://www.omdbapi.com/?t=" + moveTitle + "&y=&plot=short&tomatoes=true&r=json";

//Include the request npm package

var movieRequest = require("request");

// run the a request 

movieRequest(queryUrl, function(error, response, body) {

// if the request is sucessful (the status.Code is equal to 200)
 if(!error && response.statusCode === 200) {

// Title of the movie.
console.log("The movie's title is: " + JSON.parse(body).Title);
// Year the movie came out.
console.log("The movie came out in: " + JSON.parse(body).Released);
// IMDB Rating of the movie.
console.log("The IMBD rating of the movie was: " + JSON.parse(body).imdbRating);
// Country where the movie was produced.
console.log("The country where the movie was produced was: " + JSON.parse(body).Country);
// Language of the movie.
console.log("The language of the movie is: " + JSON.parse(body).Language);
// Plot of the movie.
console.log("The plot of the movie is: " + JSON.parse(body).Plot);
// Actors in the movie.
console.log("The actors in the movie are: " + JSON.parse(body).Actors);
// Rotten Tomatoes Rating.
console.log("The Rotten Tomatoes rating is: " + JSON.parse(body).tomatoUserRating);
// Rotten Tomatoes URL.
console.log("The Rotten Tomatoes URL is: " + JSON.parse(body).tomatoURL);
 }

})
};

/// HERE GOES THE SPOTITY SECTION //////

if (searchType === 'spotify-this-song') {


var spotify = require('spotify');

// in case the title of the movie is more than one word, let's concatenate each word
// with + symbols

var songTitle = searchItem.split(' ').join('+');;
 
spotify.search({ type: 'track', query: songTitle, limit: 1}, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }

// console.log(JSON.stringify(data, null, 2));

var result = data.tracks.items[0];

// console.log(data.tracks.items.length)

// data.tracks.items.forEach(function(item){
// 	console.log(item.album.album_type);
// })

// Artist(s)
console.log('The name of the group: ' + result.artists[0].name);

// The song's name
console.log('The name of the song: ' + result.name);

// A preview link of the song from Spotify

console.log('The preview link from Spotify: ' + result.external_urls.spotify);


// The album that the song is from

console.log('The name of the album: ' + result.album.name);
// if no song is provided then your program will default to

// "The Sign" by Ace of Base


})
};


/// HERE GOES THE TWEETER SECTION //////