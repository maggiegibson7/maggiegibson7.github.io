console.log("Hello, Airtable");


var Airtable = require("airtable");
Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: 'keyi1IBlNibommJFD'
})
var base = Airtable.base('appEHWOuDJ7PsdrIA');

//get the "books" table from the base, select ALL the records, and specify the functions that will receive the data
base("Table 1").select({}).eachPage(gotPageOfTable, gotAllTables);

// an empty array to hold our book data
const tables = [];

// callback function that receives our data
function gotPageOfTable(records, fetchNextPage) {
  console.log("gotPageOfTable()");
  // add the records from this page to our books array
  tables.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllTables(err) {
  console.log("gotAllTables()");
  shuffleMe();
  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading table");
    console.error(err);
    return;
  }
}

// just loop through the books and console.log them
function printTables() {
  console.log("printTables()");
  tables.forEach((song) => {
    console.log("Song:", song);
  });
}


function shuffleMe() {
  document.querySelector("#last-song").remove();
  var songRandom = tables[Math.floor(Math.random()*tables.length)];
  console.log(songRandom);
   const h2 = document.createElement("h2");
    if (songRandom.fields['Song Cover'] == undefined)return;
    if (songRandom.fields['Song Title'] == undefined)return;
    if (songRandom.fields['Artist Name'] == undefined)return;
    if (songRandom.fields['Rating'] == undefined)return;
    h2.innerText = songRandom.fields['Song Title'];

    let myElement = document.createElement("div");
    document.body.appendChild(myElement);
    myElement.appendChild(h2);

    //myElement.setAttribute("class", song.fields['Rating']);
    
    var rating = document.createElement("p");
    rating.classList.add("rating");
    rating.innerText = "rating of " + songRandom.fields['Rating'];
    myElement.appendChild(rating);

    
  myElement.id = ("last-song");
  document.body.append(myElement);
  
  var artistName = document.createElement("p");
  artistName.classList.add("artist-name")
  artistName.innerText = songRandom.fields['Artist Name'];
  myElement.appendChild(artistName);

  var albumCover = document.createElement("img");
  albumCover.classList.add("album-cover");
  albumCover.src = songRandom.fields['Song Cover'][0].thumbnails.small.url;
  myElement.appendChild(albumCover);

  var audioButton = document.createElement("button");
  audio.src = songRandom.fields['Audio'][0].url;
  audioButton.innerText = "hear song";
  myElement.appendChild(audioButton);
  audioButton.addEventListener("click", hearSong);

}

var isPlaying = 0;
var audio = document.createElement("audio");
audio.style.display = "none";

function hearSong() {
  //audio.src = url;
  if (isPlaying == 0) {
    audio.play();
    isPlaying = 1;
  } else {
    audio.pause();
    isPlaying = 0;
  }
}

document.querySelector(".shuffle-me").addEventListener("click", shuffleMe);


