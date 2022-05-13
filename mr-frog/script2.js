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
  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading table");
    console.error(err);
    return;
  }

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
    if (song.fields['Name'] == undefined)return;
    if (song.fields['Description'] == undefined)return;
    if (song.fields['Location'] == undefined)return;
    if (song.fields['Link'] == undefined)return;
    h2.innerText = song.fields['Name'];
    h2.classList.add("name");

    let myElement = document.createElement("div");
    document.querySelector('.grid').appendChild(myElement);
    myElement.appendChild(h2);


  myElement.classList.add("song-grid");
  document.querySelector(".grid").append(myElement);

  var location = document.createElement("h3");
  location.classList.add("location")
  location.innerText = song.fields['Location'];
  myElement.appendChild(location);
  location.style.display = "none";

  var a = document.createElement('a');
  var link = document.createTextNode("Link");
  a.appendChild(link);
  a.title = "Link";
  a.href = song.fields['Link'];
  myElement.appendChild(a);
  a.classList.add("link");

  var descr = document.createElement("p");
  descr.classList.add("descr");
  descr.innerText = song.fields['Description'];
  myElement.appendChild(descr);
  descr.style.display = "none";

  var icon = document.createElement("img");
  icon.classList.add("icon");
  icon.src = 'icon-crop-07.svg';
  icon.height = 200;
  myElement.appendChild(icon);



  myElement.addEventListener("click", showMe);

  function showMe(){
    if (descr.style.display == "none"){
      descr.style.display = "block";
      location.style.display = "block";
      icon.style.display = "none";
      myElement.style.backgroundColor = "#FFFFFF";
    } else {
      descr.style.display = "none";
      icon.style.display = "block";
      myElement.style.backgroundColor = "#000000";
      location.style.display = "none";
    }
  }
});
}
