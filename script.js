console.log('hello');
var wrapper = document.querySelector(".wrapper");

var graphicButton = document.querySelector("#graph-button");
var webButton = document.querySelector("#web-button");
var illButton = document.querySelector('#ill-button');
const fun = document.querySelector("#fun");
const intro = document.querySelector('#intro');
const graphBank = document.querySelector("#graphic-image-bank");

var removeGraphButton = document.querySelector('#remove-graph');
removeGraphButton.style.display = 'none';

var removeIllusButton = document.querySelector('#remove-illustration');
removeIllusButton.style.display = 'none';

var removeWebButton = document.querySelector('#remove-web');
removeWebButton.style.display = 'none';


var myDiv = document.createElement('div');
myDiv.style.display = 'none';
document.body.appendChild(myDiv);
var newFun = document.createElement('h2');
newFun.classList.add('new-fun');
myDiv.appendChild(newFun);

//let showingGraphic = 0;
function showGraphic(){
        myDiv.style.display = 'block';
        //myDiv.appendChild(fun);
        // fun.style.display = 'none';
        wrapper.style.display = 'none';
        intro.style.display = 'none';
        newFun.innerHTML = "(´｡• ω •｡`) ♡ graphic design sampling";
        // scrollIntro.style.display = 'none';
        myDiv.appendChild(graphBank);
        graphBank.style.display = 'flex';
        removeGraphButton.style.display = 'block';
        myDiv.appendChild(removeGraphButton);
        illusBank.style.display = 'none';
        removeIllusButton.style.display = 'none';
        webBank.style.display = 'none';
        removeWebButton.style.display = 'none';
};
graphicButton.addEventListener('click', showGraphic);


const illusBank = document.querySelector("#illustration-bank");

function showIllus(){
    myDiv.style.display = 'block';
    //myDiv.appendChild(fun);
    // fun.style.display = 'none';
    wrapper.style.display = 'none';
    intro.style.display = 'none';
    newFun.innerHTML = "(´｡• ω •｡`) ♡ illustration sampling";
    newFun.style.display = 'block';
    //myDiv.appendChild(newFunOne);
    // scrollIntro.style.display = 'none';
    myDiv.appendChild(illusBank);
    illusBank.style.display = 'flex';
    removeIllusButton.style.display = 'block';
    myDiv.appendChild(removeIllusButton);
    graphBank.style.display = 'none';
    removeGraphButton.style.display = 'none';
    webBank.style.display = 'none';
    removeWebButton.style.display = 'none';
};
illButton.addEventListener('click', showIllus);

const webBank = document.querySelector("#web-bank");

function showWeb(){
    myDiv.style.display = 'block';
    //myDiv.appendChild(fun);
    // fun.style.display = 'none';
    wrapper.style.display = 'none';
    intro.style.display = 'none';
    newFun.innerHTML = "(´｡• ω •｡`) ♡ web design sampling";
    newFun.style.display = 'block';
    //myDiv.appendChild(newFunOne);
    // scrollIntro.style.display = 'none';
    myDiv.appendChild(webBank);
    webBank.style.display = 'flex';
    removeWebButton.style.display = 'block';
    myDiv.appendChild(removeWebButton);
    graphBank.style.display = 'none';
    removeGraphButton.style.display = 'none';
    illusBank.style.display = 'none';
    removeIllusButton.style.display = 'none';
};
webButton.addEventListener('click', showWeb);

function removeAll(){
    //wrapper.appendChild(fun);
    //fun.innerHTML = "(´｡• ω •｡`) ♡";
    fun.style.display = 'block';
    myDiv.style.display = 'none';
    wrapper.style.display = 'block';
    intro.style.display = 'block';
    scrollIntro.style.display = 'block';
    graphBank.style.display = 'none';
    removeGraphButton.style.display = 'none';
    illusBank.style.display = 'none';
    removeIllusButton.style.display = 'none';
    webBank.style.display = 'none';
    removeWebButton.style.display = 'none';
    //newFun.remove();
    //newFunOne.remove();
};

removeGraphButton.addEventListener('click', removeAll);
removeIllusButton.addEventListener('click', removeAll);
removeWebButton.addEventListener('click', removeAll);

const aboutButton = document.querySelector('#about-button');
const aboutDiv = document.querySelector('#about');

function showAbout(){
    aboutDiv.style.display = 'block';
    wrapper.style.display = 'none';
    intro.style.display = 'none';
    graphBank.style.display = 'none';
    removeGraphButton.style.display = 'none';
    illusBank.style.display = 'none';
    removeIllusButton.style.display = 'none';
    webBank.style.display = 'none';
    removeWebButton.style.display = 'none';
}

const aboutHomeButton = document.querySelector('#home-about');
aboutButton.addEventListener('click', showAbout);

function removeAbout(){
    aboutDiv.style.display = 'none';
    wrapper.style.display = 'block';
    intro.style.display = 'block';
    scrollIntro.style.display = 'block';
}

aboutHomeButton.addEventListener('click', removeAbout);

function scrolltoTop(){
    console.log('i worked!');
    window.scrollTo(0, 0);
}

const scrollButton = document.querySelector('#scroll-top');
scrollButton.addEventListener('click', scrolltoTop);

var greetingArray = new Array;
greetingArray[0] = "hello! i'm maggie gibson ヽ(*・ω・)ﾉ"
greetingArray[1] = "hi hi! i'm maggie gibson。.:☆*:･'(*⌒―⌒*)))"
greetingArray[2] = "hey!! i'm maggie gibson\(★ω★)/"
greetingArray[3] = "it's nice to meet you! i'm maggie gibson (〃＾▽＾〃)"
greetingArray[4] = "how's it going? i'm maggie gibson °˖✧◝(⁰▿⁰)◜✧˖°"

const randomDiv = document.querySelector('#random-stuff')
const randomGreet = document.querySelector('#random-greeting');
var textDOM = document.createElement('h2');

function randomGreeting(){
    var newNumber = Math.floor(Math.random()*greetingArray.length);
    textDOM.innerHTML = greetingArray[newNumber];
    randomDiv.appendChild(textDOM);
    // var newTopPosition = (Math.random() * 73) + (26);
    // textDOM.style.left = `${newTopPosition}vw`;
    textDOM.style.position = 'absolute';
    textDOM.style.color = '#76574B';
    textDOM.style.width = '76vw';
    // textDOM.style.fontSize = '1.4em';
}

setInterval(randomGreeting, 2000);

let slideIndex = [1,1,1,1,1, 1, 1, 1];
let slideId = ["mySlides", "mySlides2", "mySlides3", "mySlides4", "mySlides5", "mySlides6", "mySlides7", "mySlides8"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1,2);
showSlides(1,3);
showSlides(1,4);
showSlides(1,5);
showSlides(1,6);
showSlides(1,7);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}