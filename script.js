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

