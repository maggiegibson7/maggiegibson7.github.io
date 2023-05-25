console.log('hello');
var wrapper = document.querySelector(".wrapper");

function scrolltoTop(){
    console.log('i worked!');
    window.scrollTo(0, 0);
}

const scrollButton = document.querySelector('#scroll-top');
scrollButton.addEventListener('click', scrolltoTop);

var greetingArray = new Array;
greetingArray[0] = "ヽ(*・ω・)ﾉ"
greetingArray[1] = "!。.:☆*:･'(*⌒―⌒*)))"
greetingArray[2] = "\(★ω★)/"
greetingArray[3] = "(〃＾▽＾〃)"
greetingArray[4] = "°˖✧◝(⁰▿⁰)◜✧˖°"

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
    // textDOM.style.color = '#76574B';
    textDOM.style.width = '76vw';
    // textDOM.style.fontSize = '1.4em';
}

setInterval(randomGreeting, 2000);

let slideIndex = [1,1,1,1,1, 1, 1, 1, 1, 1];
let slideId = ["mySlides", "mySlides2", "mySlides3", "mySlides4", "mySlides5", "mySlides6", "mySlides7", "mySlides8", "mySlides9", "mySlides10"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1,2);
showSlides(1,3);
showSlides(1,4);
showSlides(1,5);
showSlides(1,6);
showSlides(1,7);
showSlides(1,8);
showSlides(1,9);

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