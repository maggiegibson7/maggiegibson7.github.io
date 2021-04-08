/* globals require */
console.log("Hello, Airtable");

// load the airtable library, call it "Airtable"
var Airtable = require("airtable");
console.log(Airtable);

// use the airtable librar to get a variable that represents one of our bases
var base = new Airtable({apiKey: 'keyOvunAd4LXOhZPV'}).base('appZs01OFTUEl5Txc');

//get the "books" table from the base, select ALL the records, and specify the functions that will receive the data
base("room").select({}).eachPage(gotPageOfRoom, gotAllRooms);

// an empty array to hold our book data
const room = [];

// callback function that receives our data
function gotPageOfRooms(records, fetchNextPage) {
  console.log("gotPageOfRooms()");
  // add the records from this page to our books array
  room.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllRooms(err) {
  console.log("gotAllRooms()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading room");
    console.error(err);
    return;
  }

  // call functions to log and show the books
  consoleLogRoom();
  showRooms();
}

// just loop through the books and console.log them
function consoleLogRooms() {
  console.log("consoleLogRooms()");
  rooms.forEach((room) => {
    console.log("Room:", room);
  });
}

// loop through the books, create an h2 for each one, and add it to the page
function showRooms() {
  console.log("showRooms()");
  rooms.forEach((room) => {
    const h2 = document.createElement("h2");
    h2.innerText = room.fields.title;
    document.body.appendChild(h2);
  });
}
