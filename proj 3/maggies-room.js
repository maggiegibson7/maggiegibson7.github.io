/* globals require */
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
  tables.forEach((song) => {
    console.log("Song:", song);
  });
}

// loop through the books, create an h2 for each one, and add it to the page
function showTables() {
  console.log("showTables()");
  tables.forEach((song) => {
    const h2 = document.createElement("h2");
    if (song.fields['Song Cover'] == undefined)return;
    if (song.fields['Song Title'] == undefined)return;
    if (song.fields['Artist Name'] == undefined)return;
    if (song.fields['Rating'] == undefined)return;
    h2.innerText = song.fields['Song Title'];

    let myElement = document.createElement("div");
    document.querySelector('.song-list').appendChild(myElement);
    myElement.appendChild(h2);

    myElement.setAttribute("class", song.fields['Rating']);

    
  myElement.classList.add("song-grid");
  document.querySelector(".song-list").append(myElement);
  
  var artistName = document.createElement("p");
  artistName.classList.add("artist-name")
  artistName.innerText = song.fields['Artist Name'];
  myElement.appendChild(artistName);

  var albumCover = document.createElement("img");
  albumCover.classList.add("album-cover");
  albumCover.src = song.fields['Song Cover'][0].thumbnails.small.url;
  myElement.appendChild(albumCover);

  });


  }
document.getElementById("#one-star").addEventListener("click", function() {
  document.getElementsbyClassName('.1 song-grid')[0].item.style.display = "block";
  document.getElementsbyClassName('.2 song-grid')[0].item.style.display = "none";
  document.getElementsbyClassName('.3 song-grid')[0].item.style.display = "none";
  document.getElementsbyClassName('.4 song-grid')[0].item.style.display = "none";
  document.getElementsbyClassName('.5 song-grid')[0].item.style.display = "none";
});

document.getElementById("#two-star").addEventListener("click", function() {
  document.getElementsbyClassName('.1 song-grid')[0].item.style.display = "none";
  document.getElementsbyClassName('.2 song-grid')[0].item.style.display = "block";
  document.getElementsbyClassName('.3 song-grid')[0].item.style.display = "none";
  document.getElementsbyClassName('.4 song-grid')[0].item.style.display = "none";
  document.getElementsbyClassName('.5 song-grid')[0].item.style.display = "none";
});

document.getElementById("#three-star").addEventListener("click", function() {
  document.getElementsbyClassName('.1 song-grid')[0].item.style.display = "none";
  document.getElementsbyClassName('.2 song-grid')[0].item.style.display = "none";
  document.getElementsbyClassName('.3 song-grid')[0].item.style.display = "block";
  document.getElementsbyClassName('.4 song-grid')[0].item.style.display = "none";
  document.getElementsbyClassName('.5 song-grid')[0].item.style.display = "none";
});

document.getElementById("#four-star").addEventListener("click", function() {
  document.getElementsbyClassName('.1 song-grid')[0].item.style.display = "none";
  document.getElementsbyClassName('.2 song-grid')[0].item.style.display = "none";
  document.getElementsbyClassName('.3 song-grid')[0].item.style.display = "none";
  document.getElementsbyClassName('.4 song-grid')[0].item.style.display = "block";
  document.getElementsbyClassName('.5 song-grid')[0].item.style.display = "none";
});

document.getElementById("#five-star").addEventListener("click", function() {
  document.getElementsbyClassName('.1 song-grid')[0].item.style.display = "none";
  document.getElementsbyClassName('.2 song-grid')[0].item.style.display = "none";
  document.getElementsbyClassName('.3 song-grid')[0].item.style.display = "none";
  document.getElementsbyClassName('.4 song-grid')[0].item.style.display = "none";
  document.getElementsbyClassName('.5 song-grid')[0].item.style.display = "block";
});
