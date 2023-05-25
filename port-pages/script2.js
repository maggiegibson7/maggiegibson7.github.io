console.log('hello!');
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