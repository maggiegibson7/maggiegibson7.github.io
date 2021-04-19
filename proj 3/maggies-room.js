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

    //myElement.setAttribute("class", song.fields['Rating']);
    myElement.dataset.rating = song.fields['Rating'];

    
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

  albumCover.addEventListener('click', () => showCircles(albumCover));
  albumCover.addEventListener('click', () => playSound(song.fields['Audio'][0].url)); 
  //

  });

function filterOneStar() {
  //document.getElementsByClassName('.1 song-grid')[0].style.display = "block";
  //document.getElementsByClassName('.2 song-grid')[0].style.display = "none";
  //document.getElementsByClassName('.3 song-grid')[0].style.display = "none";
  //document.getElementsByClassName('.4 song-grid')[0].style.display = "none";
  //document.getElementsByClassName('.5 song-grid')[0].style.display = "none";
  var songs = document.querySelectorAll('.song-grid');
  songs.forEach((item) => {
    if (item.dataset.rating == '1'){
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
    document.querySelector(".title").innerText = "showing one star";
  });
}

function filterTwoStar() {
  var songs = document.querySelectorAll('.song-grid');
  songs.forEach((item) => {
    if (item.dataset.rating == '2'){
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
    document.querySelector(".title").innerText = "showing two stars";
  });
}

function filterThreeStar() {
  var songs = document.querySelectorAll('.song-grid');
  songs.forEach((item) => {
    if (item.dataset.rating == '3'){
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
    document.querySelector(".title").innerText = "showing three stars";
  });
}

function filterFourStar() {
  var songs = document.querySelectorAll('.song-grid');
  songs.forEach((item) => {
    if (item.dataset.rating == '4'){
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
    document.querySelector(".title").innerText = "showing four stars";
  });
}

function filterFiveStar() {
  var songs = document.querySelectorAll('.song-grid');
  songs.forEach((item) => {
    if (item.dataset.rating == '5'){
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
    document.querySelector(".title").innerText = "showing five stars";
  });
}

function showAll() {
    var songs = document.querySelectorAll('.song-grid');
  songs.forEach((item) => {
    item.style.display = "block";
  });
  document.querySelector(".title").innerText = "showing all";
}


document.querySelector("#one-star").addEventListener("click", filterOneStar);

document.querySelector("#two-star").addEventListener("click", filterTwoStar);

document.querySelector("#three-star").addEventListener("click", filterThreeStar);
 
document.querySelector("#four-star").addEventListener("click", filterFourStar); 

document.querySelector("#five-star").addEventListener("click", filterFiveStar);

document.querySelector("#show-all").addEventListener("click", showAll);


}

var circles = document.querySelector(".sound-waves");
circles.remove(); 

var circlesExist = false;


function showCircles(albumCover) {
  if (circlesExist == false) {
    albumCover.parentElement.appendChild(circles);
    circlesExist = true;
  } else {
    circles.remove();
    circlesExist = false;
  }
}

function playSound(url) {
  audio.src=url;
  if (isPlaying == 1) { //if the first audio is playing
    audio.pause(); //pause the first audio
    isPlaying = 0; //second click
    //document.querySelector('.sound-waves').setAttribute("hidden", true); //show circles
  } // if statement syntax: if(condition_expression){//true}else{false}
  else if (isPlaying == 0) { //if no audio is playing
    audio.play(); //play the first audio
    isPlaying = 1;//first click
    //document.querySelector('.sound-waves').removeAttribute("hidden"); //show circles
  }
 
}

var audio = document.createElement('audio'); 
audio.style.display = "none";

var isPlaying = 0;

//document.querySelector('.sound-waves').setAttribute("hidden", true);




  
