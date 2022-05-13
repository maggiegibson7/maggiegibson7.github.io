console.log("Hello, Airtable");


var Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'keyOvunAd4LXOhZPV'
});
var base = Airtable.base('apps2EhDQLk5d7eAt');

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
  document.querySelector("#display").remove();
  var songRandom = tables[Math.floor(Math.random()*tables.length)];
  console.log(songRandom);
   const h2 = document.createElement("h2");
    if (songRandom.fields['Name'] == undefined)return;
    if (songRandom.fields['Link'] == undefined)return;
    if (songRandom.fields['Description'] == undefined)return;
    if (songRandom.fields['Location'] == undefined)return;
    h2.innerText = songRandom.fields['Name'];

    let myElement = document.createElement("div");
    document.body.appendChild(myElement);
    myElement.appendChild(h2);

    //myElement.setAttribute("class", song.fields['Rating']);

    var descr = document.createElement("h3");
    descr.classList.add("descr");
    descr.innerText = songRandom.fields['Description'];
    myElement.appendChild(descr);


  myElement.id = ("display");
  document.body.append(myElement);

  var location = document.createElement("p");
  location.classList.add("location");
  location.innerText = "Location: " + songRandom.fields['Location'];
  myElement.appendChild(location);

  var a = document.createElement('a');
  var link = document.createTextNode("Link");
  a.appendChild(link);
  a.title = "Link";
  a.href = songRandom.fields['Link'];
  myElement.appendChild(a);
  a.classList.add("link");

}



document.querySelector("#shuffle-me").addEventListener("click", shuffleMe);

var facts = [
  'Mr. Frog is currently the most popular person on planet Earth.',
  'Mr. Frog requests you provide him with grilled cheese.',
  'Mr. Frog requests you donate to mutual aid.',
  'Mr. Frog has a warrant out for arrest for biting Jimmy Fallon.',
  'Mr. Frog is currently listening to Arca on Spotify.',
  'Mr. Frog loves eating olives and watching Real Housewives.',
  'Mr. Frog believes that you should eat more hot pockets.'
]

var randomResponse = facts[Math.floor(Math.random() * facts.length)];
document.querySelector('#cool-fact').innerHTML = randomResponse;

var butt = document.querySelector("#show-me");
butt.addEventListener("click", showAnswer);

  var x = document.querySelector("#cool-fact");
  x.style.display = 'none';

function showAnswer() {
  if (x.style.display == 'none'){
    x.style.display = 'block';
  } else {
  x.style.display = 'none';
}
}
