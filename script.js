console.log('hello');
var wrapper = document.querySelector(".wrapper");
var scrollIntro = document.querySelector("#instructions");
//const check = scrollIntro.getBoundingClientRect();
//console.log(check);

function removeScroll(){
    console.log('im running!');
    //console.log(window.pageYOffset);
    if(window.pageYOffset > 4){
        scrollIntro.style.display = "none";
        //wrapper.style.top = "60vh";
        //console.log(check.top);
        wrapper.classList.add('scoot');
    } else {
        scrollIntro.style.display = "block";
        //wrapper.style.top = '100vh';
        wrapper.classList.remove('scoot');
    }
}

window.addEventListener("scroll", removeScroll);

var graphicButton = document.querySelector("#graph-button");
var webButton = document.querySelector("#web-button");
var illButton = document.querySelector('#ill-button');
const fun = document.querySelector("#fun");
const intro = document.querySelector('#intro');
const graphBank = document.querySelector("#graphic-image-bank");

var removeGraphButton = document.querySelector('#remove-graph');
removeGraphButton.style.display = 'none';


var myDiv = document.createElement('div');
myDiv.style.display = 'none';
document.body.appendChild(myDiv);

//let showingGraphic = 0;
function showGraphic(){
        myDiv.style.display = 'block';
        //myDiv.appendChild(fun);
        fun.style.display = 'none';
        wrapper.style.display = 'none';
        intro.style.display = 'none';
        var newFun = document.createElement('p');
        newFun.innerHTML = "(´｡• ω •｡`) ♡ graphic design sampling";
        newFun.id = 'new-fun';
        newFun.style.display = 'block';
        myDiv.appendChild(newFun);
        scrollIntro.style.display = 'none';
        myDiv.appendChild(graphBank);
        graphBank.style.display = 'flex';
        removeGraphButton.style.display = 'block';
        myDiv.appendChild(removeGraphButton);
};
graphicButton.addEventListener('click', showGraphic);

function removeGraphic(){
    //wrapper.appendChild(fun);
    //fun.innerHTML = "(´｡• ω •｡`) ♡";
    fun.style.display = 'block';
    myDiv.style.display = 'none';
    wrapper.style.display = 'block';
    intro.style.display = 'block';
    scrollIntro.style.display = 'block';
    graphBank.style.display = 'none';
    removeGraphButton.style.display = 'none';  
};

removeGraphButton.addEventListener('click', removeGraphic);
