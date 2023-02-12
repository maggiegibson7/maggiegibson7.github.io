//const hoverOne = document.getElementById(erika);
//const hoverTwo = document.getElementById(trish);
//const hoverThree = document.getElementById(chaya);
//const test = document.querySelectorAll(".sparkle-text");
const grab = document.querySelectorAll("p.xy");
const hover = document.querySelectorAll(".sparkle-text");
const sparkle = grab[0].innerText;
const sparkleTwo = grab[1].innerText;
const sparkleThree = grab[2].innerText;
console.log("is this on");
console.log(sparkle);
//console.log(hoverOne);
console.log(grab);
console.log(hover);
console.log(grab[0].innerText);

var characters = sparkle.split('');
var charactersTwo = sparkleTwo.split('');
var charactersThree = sparkleThree.split('');
console.log(characters);


function rotateOne() {
    console.log("hey");
    grab[0].style.transform = "rotate(7deg)";
    grab[0].style.transform = "scaleX(10%)";
};

function undoOne() {
    grab[0].style.transform = "rotate(-7deg)";
    grab[0].style.transform = "scaleX(-10)";
}

function rotateTwo() {
    console.log("hey");
    grab[1].style.transform = "rotate(30deg)";
};

function rotateThree() {
    console.log("hey");
    grab[2].style.transform = "rotate(30deg)";
};

hover[0].addEventListener("onmouseover", rotateOne());
hover[1].addEventListener("onmouseover", rotateTwo());
hover[2].addEventListener("onmouseover", rotateThree());

hover[0].addEventListener("onmouseleave",undoOne());