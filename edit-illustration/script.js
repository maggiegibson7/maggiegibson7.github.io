console.log("hello");

let imgArray = new Array();
imgArray[0] = document.querySelector("#fingie-1");
imgArray[1] = document.querySelector("#fingie-2");
imgArray[2] = document.querySelector("#fingie-3");
imgArray[3] = document.querySelector("#fingie-4");
imgArray[4] = document.querySelector("#fingie-5");
imgArray[5] = document.querySelector("#fingie-10");
imgArray[6] = document.querySelector("#fingie-11");
imgArray[7] = document.querySelector("#fingie-12");
imgArray[8] = document.querySelector("#fingie-13");
imgArray[9] = document.querySelector("#fingie-14");
console.log(imgArray);
console.log(imgArray[0].src);
console.log(imgArray[0])

let secondHand = new Array();
secondHand[0] = document.querySelector("#fingie-6");
secondHand[1] = document.querySelector("#fingie-7");
secondHand[2] = document.querySelector("#fingie-8");
secondHand[3] = document.querySelector("#fingie-9");
secondHand[4] = document.querySelector("#fingie-15");
secondHand[5] = document.querySelector("#fingie-16");
secondHand[6] = document.querySelector("#fingie-17");
secondHand[7] = document.querySelector("#fingie-18");

function showSix(){
    var chances = Math.random(0,1);
    if (chances > 0.5){
        imgArray[5].style.display = "block";
    } else {
        imgArray[5].style.display = "none";
    } console.log(chances);
};
setInterval(showSix, 3000);

function showSeven(){
    var chances = Math.random(0,2);
    if (chances > 1.5){
        imgArray[6].style.display = "block";
    } else {
        imgArray[6].style.display = "none";
    } console.log(chances);
};
setInterval(showSeven, 3000);

function showEight(){
    var chances = Math.random(0,3);
    if (chances > 2){
        imgArray[7].style.display = "block";
    } else {
        imgArray[7].style.display = "none";
    } console.log(chances);
};
setInterval(showEight, 3000);

function showNine(){
    var chances = Math.random(0,3);
    if (chances > 2.5){
        imgArray[8].style.display = "block";
    } else {
        imgArray[8].style.display = "none";
    } console.log(chances);
};
setInterval(showNine, 3000);

function showTen(){
    var chances = Math.random(0,4);
    if (chances > 3.5){
        imgArray[9].style.display = "block";
    } else {
        imgArray[9].style.display = "none";
    } console.log(chances);
};
setInterval(showTen, 3000);

function showFiveTwo(){
    var chances = Math.random(0,1);
    if (chances > 0.5){
        secondHand[4].style.display = "block";
    } else {
        secondHand[4].style.display = "none";
    } console.log(chances);
};
setInterval(showFiveTwo, 2000);

function showSixTwo(){
    var chances = Math.random(0,3);
    if (chances > 2){
        secondHand[5].style.display = "block";
    } else {
        secondHand[5].style.display = "none";
    } console.log(chances);
};
setInterval(showSixTwo, 2000);

function showSevenTwo(){
    var chances = Math.random(0,4);
    if (chances > 2.5){
        secondHand[6].style.display = "block";
    } else {
        secondHand[6].style.display = "none";
    } console.log(chances);
};
setInterval(showSevenTwo, 2000);

function showEightTwo(){
    var chances = Math.random(0,4);
    if (chances > 3){
        secondHand[7].style.display = "block";
    } else {
        secondHand[7].style.display = "none";
    } console.log(chances);
};
setInterval(showEightTwo, 2000);

function getRandomFinger(original) {
    var num = Math.floor(Math.random() * imgArray.length);
    var imgStr = imgArray[num];
    imgArray[original].src = imgStr.src;
    console.log(imgArray[original]);
};

function runAll() {
    for (i = 0; i < imgArray.length - 1; i++){
    getRandomFinger(i);
}};

function otherRandomFinger(holder) {
    var num = Math.floor(Math.random() * secondHand.length);
    var imgStr = secondHand[num];
    secondHand[holder].src = imgStr.src;
};

function runSecondHand() {
    for (i = 0; i < secondHand.length - 1; i++){
        otherRandomFinger(i);
}};


setInterval(runAll,3000);
setInterval(runSecondHand, 2000);
