//MAGIC 8 BALL RESPONSE SCRIPT

//Create an ARRAY of possible responses. Separate each 'string' with a comma.
//arrays only work with strings or numbers
//counting in any computer language, 0 counts as a number, 0-19 is 20 items


//document.querySelector("after").setAttribute("hidden", true);
var butt = document.getElementById("showanswer");
butt.addEventListener("click", showLoading);

var booty = document.getElementById("showfinalanswer");
booty.addEventListener("click", showAnswer);

var x = document.getElementById("before");
var y = document.getElementById("between");
var z = document.getElementById("after");

x.style.display ="grid";


function showLoading() {
    if (x.style.display == "grid") {
        x.style.display = "none";
        y.style.display = "grid";
    } else if (x.style.display == "none") {
        x.style.display = "none"
        y.style.display = "none";
    }
}

function showAnswer() {
    if (y.style.display == "grid") {
        y.style.display = "none";
        z.style.display = "grid";
    }
}





//function finalAnswer() {
    //var x = document.getElementById("after");
    //if (x.style.display === "none") {
       //x.style.display = "grid";
    //}
//}
//var catplay = document.getElementById("loading").src="speech-bubble.png";
//catplay = setTimeout(finalAnswer, 3000);

//let key = 1;
//switch (key) {
    //case 1:
        //showAnswer();

   //case 2:
        //loadingScreen();
    //case 3:
        //finalAnswer();
//}




//document.querySelector("showanswer").addEventListener('click', showAnswer);



var responses = [
    'Maybe not on a Monday.',
    'I will answer if you give me lasagna.',
    'Without the assistance of lasagna, I cannot answer.',
    'Maybe if Jon stops eating meatloaf.',
    'You are a waste of space if you do not give me food.',
    'Nothing will ever change.',
    'Love me, feed me, never leave me.',
    'Not answering until you tell me where you got that lasagna.',
    'Not answering that. I am not known for my compassion.',
    'Good times are ahead! Or behind. Because they sure aren’t here.',
    'I am hungry. Therefore I am. No more questions.',
    'Trust me, you do not want to know.',
    'I have something more important to do than answering this',
    'The meek shall inherit squat. No more questions.',
    'I am going to take a nap. Do not contact me further.',
    'Stupid question. Leave me alone.',
    'If you are patient…and wait long enough…Nothing will happen!',
    'Deep fry it.',
    'If you want to look thinner, hang around people fatter than you.',
    'I hate Mondays. Do not ask again.'
]

//Create a variable that randomly selects a positive whole between 0 and the number of total responses.
var randomResponse = responses[Math.floor(Math.random() * responses.length)];

//Select the HTML element with the id '#display' and replace its contents with the result of the randomResponse equation
document.querySelector('#display').innerHTML = randomResponse;
