import oscarNom from "./oscarNom.json" assert {type:"json"};
import topNarrative from "./topNarrative.json" assert {type:"json"};
import topDocumentary from "./topDocumentary.json" assert {type:"json"};
console.log("hello!");
var oscarBox = document.querySelector("#oscarNom");
var storyBox = document.querySelector("#narrative");
var docBox = document.querySelector("#documentary");
console.log(oscarNom);
console.log(topNarrative);
console.log(topDocumentary);

console.log(oscarNom[15].Film_title);



// different fields are: Film_title, Release_year, Director, Cast, Average_rating, Letterboxd URL

function oscarShuffle(){
    document.querySelector("#last-oscar").remove();//removing the last generated film
    let myElement = document.createElement("div");//put new generated film in box so easier to remove
    oscarBox.append(myElement);//appending to the specified DOM element for oscar films
    //console.log("click"); testing function
    let filmRandom = oscarNom[Math.floor(Math.random()*oscarNom.length)];
    //filmTitle variable is the DOM(h2) element
    //filmRandom used to connect all properties, lives in console
    let filmTitle = document.createElement("h2");
    if (filmRandom.Film_title == undefined)return;
    if (filmRandom.Release_year == undefined)return;
    if (filmRandom.Director == undefined)return;
    if (filmRandom.Cast == undefined)return;
        filmTitle.innerText = filmRandom.Film_title;
    //console.log(filmTitle); testing if randomizer is working
    //console.log(oscarNom[15]); testing if JSON is working
    myElement.append(filmTitle);

    let director = document.createElement("h3");
    director.innerText = "Directed by " + filmRandom.Director;
    myElement.append(director);
    
    let releaseYear = document.createElement("p");
    releaseYear.innerText = filmRandom.Release_year;
    myElement.append(releaseYear);

    let averageRating = document.createElement("p");
    averageRating.innerText = "Average Letterboxd User Rating: " + filmRandom.Average_rating;
    myElement.append(averageRating);

    var rawCast = filmRandom.Cast//cast with parentheses and punctuation
    var punctRE = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+\.\/:;<=>?@\[\]^_`{|}~]/g;
    var spaceRE = /\s+/g;
    let finalCast = rawCast.replace(punctRE, '').replace(spaceRE, ' '); //taking out all parenetheses and quotation marks
    let cast = document.createElement("details");//drop down menu
    var comCast = document.createTextNode(finalCast);
    cast.setAttribute("summary", "Cast");
    cast.appendChild(comCast);//placing the no punctuation version into a DOM element
    myElement.append(cast);

    let letterURL = document.createElement("a");
    letterURL.innerHTML = "Letterboxd link";
    letterURL.setAttribute('href',filmRandom["Letterboxd URL"]); //setting source
    letterURL.setAttribute('title',"Letterboxd link"); //text to be displayed with link
    myElement.append(letterURL);

    myElement.id = ("last-oscar"); //applying id to be removed once new one is generated
    
};

function narrativeShuffle(){
    document.querySelector("#last-narr").remove();
    let myElement = document.createElement("div");
    storyBox.append(myElement);
    let filmRandom = topNarrative[Math.floor(Math.random()*topNarrative.length)];
    
    if (filmRandom.Film_title == undefined)return;
    if (filmRandom.Release_year == undefined)return;
    if (filmRandom.Director == undefined)return;
    if (filmRandom.Cast == undefined)return;
    
    let filmTitle = document.createElement("h2");
    filmTitle.innerText = filmRandom.Film_title;
    myElement.append(filmTitle);

    let director = document.createElement("h3");
    director.innerText = "Directed by " + filmRandom.Director;
    myElement.append(director);
    
    let releaseYear = document.createElement("p");
    releaseYear.innerText = filmRandom.Release_year;
    myElement.append(releaseYear);

    let averageRating = document.createElement("p");
    averageRating.innerText = "Average Letterboxd User Rating: " + filmRandom.Average_rating;
    myElement.append(averageRating);

    var rawCast = filmRandom.Cast//cast with parentheses and punctuation
    var punctRE = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+\.\/:;<=>?@\[\]^_`{|}~]/g;
    var spaceRE = /\s+/g;
    let finalCast = rawCast.replace(punctRE, '').replace(spaceRE, ' '); //taking out all parenetheses and quotation marks
    let cast = document.createElement("details");//drop down menu
    var comCast = document.createTextNode(finalCast);
    cast.setAttribute("summary", "Cast");
    cast.appendChild(comCast);//placing the no punctuation version into a DOM element
    myElement.append(cast);

    let letterURL = document.createElement("a");
    letterURL.innerHTML = "Letterboxd link";
    letterURL.setAttribute('href',filmRandom["Letterboxd URL"]);
    letterURL.setAttribute('title',"Letterboxd link");
    myElement.append(letterURL);

    myElement.id = ("last-narr");
};

function docShuffle() {
    document.querySelector("#last-doc").remove();
    let myElement = document.createElement("div");
    docBox.append(myElement);
    let filmRandom = topNarrative[Math.floor(Math.random()*topNarrative.length)];
    
    if (filmRandom.Film_title == undefined)return;
    if (filmRandom.Release_year == undefined)return;
    if (filmRandom.Director == undefined)return;
    if (filmRandom.Cast == undefined)return;
    
    let filmTitle = document.createElement("h2");
    filmTitle.innerText = filmRandom.Film_title;
    myElement.append(filmTitle);

    let director = document.createElement("h3");
    director.innerText = "Directed by " + filmRandom.Director;
    myElement.append(director);
    
    let releaseYear = document.createElement("p");
    releaseYear.innerText = filmRandom.Release_year;
    myElement.append(releaseYear);

    let averageRating = document.createElement("p");
    averageRating.innerText = "Average Letterboxd User Rating: " + filmRandom.Average_rating;
    myElement.append(averageRating);

    var rawCast = filmRandom.Cast//cast with parentheses and punctuation
    var punctRE = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+\.\/:;<=>?@\[\]^_`{|}~]/g;
    var spaceRE = /\s+/g;
    let finalCast = rawCast.replace(punctRE, '').replace(spaceRE, ' '); //taking out all parenetheses and quotation marks
    let cast = document.createElement("details");//drop down menu
    var comCast = document.createTextNode(finalCast);
    cast.setAttribute("summary", "Cast");
    cast.appendChild(comCast);//placing the no punctuation version into a DOM element
    myElement.append(cast);

    let letterURL = document.createElement("a");
    letterURL.innerHTML = "Letterboxd link";
    letterURL.setAttribute('href',filmRandom["Letterboxd URL"]);
    letterURL.setAttribute('title',"Letterboxd link");
    myElement.append(letterURL);

    myElement.id = ("last-doc");
}

//var showMovie = document.querySelector("#test");
//showMovie.addEventListener("click", shuffleMe);
document.querySelector("#test").addEventListener("click", oscarShuffle);
document.querySelector("#showNarrative").addEventListener("click", narrativeShuffle);
document.querySelector("#showDocumentary").addEventListener("click", docShuffle);

let allFilms = [];
//allFilms.push(oscarNom, topNarrative, topDocumentary); created arrays inside of array
//copying each individual element in array and putting them in the bigger array
oscarNom.forEach(element => {
    allFilms.push(element);
});
topNarrative.forEach(element => {
    allFilms.push(element);
});
topDocumentary.forEach(element => {
    allFilms.push(element);
});
console.log(allFilms);
