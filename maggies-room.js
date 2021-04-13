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

    let image = document.createElement("img");
    image.setAttribute("src", song.fields['Song Cover'][0].thumbnails.small.url);
    document.querySelector('.song-list').appendChild(image);
    myElement.appendChild(image);

    myElement.setAttribute("star", song.fields['Rating']);
  });

let buttonElement = document.querySelector('#buttons');
const buttons = []

function filterByStars(event, numStars) {

}





}
