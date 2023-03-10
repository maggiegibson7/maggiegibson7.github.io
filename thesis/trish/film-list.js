var tvTab = document.querySelector("#tvtab");
var filmTab = document.querySelector("#filmtab");
var musicVideoTab = document.querySelector("#musictab");
var webTab = document.querySelector("#webTab");
var beefTab = document.querySelector("#beef-tab");

console.log(tvTab.open);

function addTV() {
    if (tvTab.open == false){
        document.querySelector("#tv-title").innerHTML = "...❤ (ɔˆз(ˆ⌣ˆc)↓↓↓↓↓";
        document.querySelector("#tv-title").style.textDecoration = "none";
        document.querySelector("#tv-title").classList.add("active");
        document.querySelector("#tv-title").classList.remove("normal");
    } else if (tvTab.open == true) {
        document.querySelector("#tv-title").innerHTML = "Television";
        document.querySelector("#tv-title").style.textDecoration = "underline";
        document.querySelector("#tv-title").classList.remove("active");
        document.querySelector("#tv-title").classList.add("normal");
    }
};

tvTab.addEventListener("click", addTV);

function addFilm() {
    if (filmTab.open == false){
        document.querySelector("#film-title").innerHTML = "☆*:.｡.o(≧▽≦)o.｡.:*☆↓↓↓↓↓";
        document.querySelector("#film-title").style.textDecoration = "none";
        document.querySelector("#film-title").classList.add("active");
        document.querySelector("#film-title").classList.remove("normal");
    } else if (filmTab.open == true) {
        document.querySelector("#film-title").innerHTML = "Filmography";
        document.querySelector("#film-title").style.textDecoration = "underline";
        document.querySelector("#film-title").classList.remove("active");
        document.querySelector("#film-title").classList.add("normal");
    }
};
filmTab.addEventListener("click", addFilm);

function addMv() {
    if (musicVideoTab.open == false){
        document.querySelector("#music-title").innerHTML = "☆⌒.°˖✧◝(⁰▿⁰)◜✧˖°↓↓↓↓↓";
        document.querySelector("#music-title").style.textDecoration = "none";
        document.querySelector("#music-title").classList.add("active");
        document.querySelector("#music-title").classList.remove("normal");
    } else if (musicVideoTab.open == true) {
        document.querySelector("#music-title").innerHTML = "Music Videos";
        document.querySelector("#music-title").style.textDecoration = "underline";
        document.querySelector("#music-title").classList.remove("active");
        document.querySelector("#music-title").classList.add("normal");
    }
};

musicVideoTab.addEventListener("click", addMv);

function addWeb() {
    if (webTab.open == false){
        document.querySelector("#web-title").innerHTML = "☆⌒(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧↓↓↓↓↓";
        document.querySelector("#web-title").style.textDecoration = "none";
        document.querySelector("#web-title").classList.add("active");
        document.querySelector("#web-title").classList.remove("normal");
    } else if (webTab.open == true) {
        document.querySelector("#web-title").innerHTML = "Web Content";
        document.querySelector("#web-title").style.textDecoration = "underline";
        document.querySelector("#web-title").classList.remove("active");
        document.querySelector("#web-title").classList.add("normal");
    }
};

webTab.addEventListener("click", addWeb);

function addBeef() {
    if (beefTab.open == false){
        document.querySelector("#beef-title").innerHTML = ">―(〃°ω°〃)♡→･ﾟ✧↓↓↓";
        document.querySelector("#beef-title").style.textDecoration = "none";
        document.querySelector("#beef-title").classList.add("active");
        document.querySelector("#beef-title").classList.remove("normal");
    } else if (beefTab.open == true) {
        document.querySelector("#beef-title").innerHTML = "Internet Feuds";
        document.querySelector("#beef-title").style.textDecoration = "underline";
        document.querySelector("#beef-title").classList.remove("active");
        document.querySelector("#beef-title").classList.add("normal");
    }
};

beefTab.addEventListener("click", addBeef);

var mainArea = document.querySelector("#non-frame");

mainArea.onscroll = function() {progressBar()};

function progressBar(){
    var winScroll = mainArea.scrollTop || mainArea.scrollTop;
    var height = mainArea.scrollHeight - mainArea.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
};