
console.log("Hello, Airtable");


var Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'keyOvunAd4LXOhZPV'
});
var base = Airtable.base('appEHWOuDJ7PsdrIA');

//get the "books" table from the base, select ALL the records, and specify the functions that will receive the data
base("Table 1").select({view:"Grid view"}).eachPage(gotPageOfTable, gotAllTables);


// callback function that receives our data
function gotPageOfTable(records, fetchNextPage) {
  console.log("gotPageOfTable()");
  // add the records from this page to our books array
  songs.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllTables(err) {
  console.log("gotAllTables()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading table");
    console.error(err);
    return;
  }

  // call functions to log and show the books
  printTables();
  showTables();
}

// just loop through the books and console.log them
function printTables() {
  console.log("printTables()");
  songs.forEach((song) => {
    console.log("Song:", song);
  });
}

// loop through the books, create an h2 for each one, and add it to the page
function showTables() {
  console.log("showTables()");
  songs.forEach((song) => {
      const h2 = document.createElement("h2");
      if (song.fields['Song Cover'] == undefined)return;
      if (song.fields['Song Title'] == undefined)return;
      if (song.fields['Artist Name'] == undefined)return;
      if (song.fields['Rating'] == undefined)return;
      h2.innerText = song.fields['Song Title']; });


    let allSongs = document.querySelectorAll('.song-list')
    allSongs.forEach((item, i) => {
      item.addEventListener("click", function(){
      console.log(event)
      var element = event.currentTarget
      var song = element.dataset.song
      console.log(song)
      filter(song);
  }});

songs.forEach((song) => {
  var songGrid = document.createElement("div");
  songGrid.classList.add("song-grid");
  document.querySelector(".song-list").appendChild(songGrid);

  var songTitle = document.createElement("h2");
  songTitle.classList.add("song-title")
  songTitle.innerText = song.fields['Song Title']
  songGrid.appendChild(songTitle);
  
  var artistName = document.createElement("p");
  artistName.classList.add("artist-name")
  artistName.innerText = song.fields['Artist Name'];
  songGrid.appendChild(artistName);

  var albumCover = document.createElement("img");
  albumCover.classList.add("album-cover");
  albumCover.src = song.fields['Song Cover'][0].thumbnails.small.url;
  songGrid.appendChild(albumCover);





  var songRating = song.fields['Rating'];
  songRating.forEach(function(rating) {
    songGrid.dataset.rating = rating
  })
});

function filter(rating){
  console.log("filter(rating)")
  let allSongs = document.querySelectorAll('.song-list')
  allSongs.forEach((item, i) => {
    if (item.dataset.song == song) {
      item.style.display = 'grid'
    } else {
      item.style.display = 'none'
    }
    });

  }
document.querySelector("#one-star").addEventListener("click", function() {
  document.querySelector('one')[0].style.display = "block";
  document.querySelector('two')[0].style.display = "none";
  document.querySelector('three')[0].style.display = "none";
  document.querySelector('four')[0].style.display = "none";
  document.querySelector('five')[0].style.display = "none";
});

document.querySelector("#two-star").addEventListener("click", function() {
  document.querySelector('one')[0].style.display = "none";
  document.querySelector('two')[0].style.display = "block";
  document.querySelector('three')[0].style.display = "none";
  document.querySelector('four')[0].style.display = "none";
  document.querySelector('five')[0].style.display = "none";
});

document.querySelector("#three-star").addEventListener("click", function() {
  document.querySelector('one')[0].style.display = "none";
  document.querySelector('two')[0].style.display = "none";
  document.querySelector('three')[0].style.display = "block";
  document.querySelector('four')[0].style.display = "none";
  document.querySelector('five')[0].style.display = "none";
});

document.querySelector("#four-star").addEventListener("click", function() {
  document.querySelector('one')[0].style.display = "none";
  document.querySelector('two')[0].style.display = "none";
  document.querySelector('three')[0].style.display = "none";
  document.querySelector('four')[0].style.display = "block";
  document.querySelector('five')[0].style.display = "none";
});

document.querySelector("#five-star").addEventListener("click", function() {
  document.querySelector('one')[0].style.display = "none";
  document.querySelector('two')[0].style.display = "none";
  document.querySelector('three')[0].style.display = "none";
  document.querySelector('four')[0].style.display = "none";
  document.querySelector('five')[0].style.display = "block";
});