let path = "list/category=beach/country=IT/orderby=popularity,desc/limit=20";
let apiKey = "OOipk9CmCa7GNtejDL5wDhR3i23ySODz"
let myUrl = `https://api.windy.com/api/webcams/v2/${path}/x-windy-key:${apiKey}`

fetch(myUrl)
    .then(function (response) {
        return response;
    })
    .then(function (data) {
        console.log(data);

    })
    .catch(function (err) {
        console.log("Something went wrong!", err);
    });



const leftCircle = document.querySelector("#left-eyeball");
const rightCircle = document.querySelector("#right-eyeball");

const nationalWord = document.querySelector("#national-2");
const enquirerWord = document.querySelector("enquirer-2");

document.addEventListener("mousemove", function(e){
    let leftXPosition = map(e.clientX, 0, window.innerWidth, 25, 39);
    leftCircle.style.marginLeft = `${leftXPosition}%`;
    let leftYPosition = map(e.clientY, 0, window.innerHeight, 19, 32);
    leftCircle.style.marginTop = `${leftYPosition}%`;

    let rightXPosition = map(e.clientX, 0, window.innerWidth, 56, 70);
    rightCircle.style.marginLeft = `${rightXPosition}%`;
    rightCircle.style.marginTop = `${leftYPosition}%`;

    let nationalWordWidth = map(e.clientX, 0, window.innerWidth, 10, 50);
    nationalWord.style.width = `${nationalWordWidth}%`
});



function map(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
};
