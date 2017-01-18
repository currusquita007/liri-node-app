
// write the code you need to grab the data from keys.js. Then store the keys in a variable.

// my-tweets

// spotify-this-song

// movie-this

// do-what-it-says

// Do the spotify thing

// first define the input variables

//the searchType could be spotify search, movie search, tweet search

searchType = process.argv[2];
searchItem = process.argv[3];


var spotify = require('spotify');
 
spotify.search({ type: 'track', query: searchItem, limit: 1}, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }

var result = data.tracks.items[0];
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


});