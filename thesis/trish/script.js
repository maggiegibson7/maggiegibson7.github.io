var beginButton = document.querySelector("#begin-button");
var trollButton = document.querySelector("#troll-button");
var controButton = document.querySelector("#contro-button");
var dawsonButton = document.querySelector("#dawson-button");
var currentButton = document.querySelector("#current-button");

function showDevil(){
    var trishaDevil = document.querySelector("#demon-trish");
    var testMe = window.getComputedStyle(trishaDevil, null);
    //console.log(testMe);
    if (testMe.getPropertyValue("display")=='none') {
        trishaDevil.style.display = 'block';
    } else if (testMe.getPropertyValue("display")=='block') {
        trishaDevil.style.display = 'none';
    }
    //console.log('hi!');
};

setInterval(showDevil, 3000);

const mainArea = document.querySelector("#main-area");
const beginInfo = document.querySelector("#begin");
const trollInfo = document.querySelector("#trolling");

function beginTab() {
    mainArea.append(beginInfo);
    document.querySelector("#summary").style.display = "none";
    beginInfo.style.display = "grid";
    trollInfo.style.display = "none";
};

function trollTab() {
    mainArea.append(trollInfo);
    document.querySelector("#summary").style.display = "none";
    trollInfo.style.display = "block";
    beginInfo.style.display = "none";
    familyContent.style.display = "none";
    stripperContent.style.display = "none";
    youtubeContent.style.display = "none";
    religionContent.style.display = "none";
    filmContent.style.display = "none";
};

beginButton.addEventListener("click", beginTab);
trollButton.addEventListener("click", trollTab);

const moveText = document.querySelectorAll('.animated-text');

document.addEventListener("mousemove", function(e){
  
    let distance = dist(e.clientX, e.clientY, window.innerWidth/2, window.innerHeight/2);
    let hypotenuse = dist(0, 0, window.innerWidth/2, window.innerHeight/2);
    let newColor = map(distance, 0, hypotenuse, 170, 360);
    moveText[0].style.color = "hsl(" + newColor + ", 57%, 85%)";
    moveText[1].style.color = "hsl(" + newColor + ", 57%, 85%)";
});

function map(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
};

function dist(x1, y1, x2, y2){
  let a = x1 - x2;
  let b = y1 - y2;
  return Math.sqrt( a*a + b*b );
};

var familyIcon = document.querySelector("#family-icon");
var religionIcon = document.querySelector("#religion-icon");
var stripperIcon = document.querySelector("#stripper-icon");
var youtubeIcon = document.querySelector("#youtube-icon");
var filmIcon = document.querySelector("#film-icon");

var familyContent = document.querySelector("#family-his-content-card");
var stripperContent = document.querySelector("#stripper-content-card");
var youtubeContent = document.querySelector("#youtube-content-card");
var religionContent = document.querySelector("#religion-content-card");
var filmContent = document.querySelector("#film-content-card");

var rightSide = document.querySelector("#right-sidebar");

function showFamily() {
    rightSide.append(familyContent);
    familyContent.style.display = "block";
    stripperContent.style.display = "none";
    youtubeContent.style.display = "none";
    religionContent.style.display = "none";
    filmContent.style.display = "none";
}

familyIcon.addEventListener("click", showFamily);

function showStripper() {
    rightSide.append(stripperContent);
    stripperContent.style.display = "block";
    familyContent.style.display = "none";
    youtubeContent.style.display = "none";
    religionContent.style.display = "none";
    filmContent.style.display = "none";
}

stripperIcon.addEventListener("click", showStripper);

function showYoutube() {
    rightSide.append(youtubeContent);
    youtubeContent.style.display = "block";
    familyContent.style.display = "none";
    stripperContent.style.display = "none";
    religionContent.style.display = "none";
    filmContent.style.display = "none";
}

youtubeIcon.addEventListener("click", showYoutube);

function showReligion() {
    rightSide.append(religionContent);
    religionContent.style.display = "block";
    familyContent.style.display = "none";
    stripperContent.style.display = "none";
    youtubeContent.style.display = "none";
    filmContent.style.display = "none";
}

religionIcon.addEventListener("click", showReligion);

function showFilm() {
    rightSide.append(filmContent);
    filmContent.style.display = "block";
    familyContent.style.display = "none";
    stripperContent.style.display = "none";
    youtubeContent.style.display = "none";
    religionContent.style.display = "none";
}

filmIcon.addEventListener("click", showFilm);

var attentionTag = document.querySelector("#attention-tag");
var mentalHealthTag = document.querySelector("#mental-health-tag");
var controversyTag = document.querySelector("#controversy-tag");
var bodyImgTag = document.querySelector("#body-image-tag");


var attentionContent = document.querySelector("#attention-content-card");
var mentalHealthContent = document.querySelector("#mental-health-content-card");
var controversyContent = document.querySelector("#controversy-content-card");
var bodyImgContent = document.querySelector("#body-img-content-card");


function showAttention() {
    rightSide.append(attentionContent);
    attentionContent.style.display = "block";
    mentalHealthContent.style.display = "none";
    controversyContent.style.display = "none";
    bodyImgContent.style.display = "none";
}

attentionTag.addEventListener("click", showAttention);

function showMentalHealth() {
    rightSide.append(mentalHealthContent);
    mentalHealthContent.style.display = "block";
    attentionContent.style.display = "none";
    controversyContent.style.display = "none";
    bodyImgContent.style.display = "none";
}

mentalHealthTag.addEventListener("click", showMentalHealth);

function showControversy() {
    rightSide.append(controversyContent);
    controversyContent.style.display = "block";
    mentalHealthContent.style.display = "none";
    attentionContent.style.display = "none";
    bodyImgContent.style.display = "none";
}

controversyTag.addEventListener("click", showControversy);

function showBodyImg() {
    rightSide.append(bodyImgContent);
    bodyImgContent.style.display = "block";
    mentalHealthContent.style.display = "none";
    controversyContent.style.display = "none";
    attentionContent.style.display = "none";
}

bodyImgTag.addEventListener("click", showBodyImg);