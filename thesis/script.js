var erikaHeart = document.querySelectorAll(".heart-frame");

function showDevil(){
    var erikaDevil = document.querySelector("#erika-devil");
    var chayaDevil = document.querySelector("#chaya-devil");
    var trishaDevil = document.querySelector("#trisha-devil");
    var testMe = window.getComputedStyle(erikaDevil, null);
    //console.log(testMe);
    if (testMe.getPropertyValue("display")=='none') {
        erikaDevil.style.display = 'block';
        chayaDevil.style.display = 'block';
        trishaDevil.style.display = 'block';
    } else if (testMe.getPropertyValue("display")=='block') {
        erikaDevil.style.display = 'none';
        chayaDevil.style.display = 'none';
        trishaDevil.style.display = 'none';
    }
    //console.log('hi!');
};

setInterval(showDevil, 3000);

const moveText = document.querySelector('.animated-text');

document.addEventListener("mousemove", function(e){
  
    let distance = dist(e.clientX, e.clientY, window.innerWidth/2, window.innerHeight/2);
    let hypotenuse = dist(0, 0, window.innerWidth/2, window.innerHeight/2);
    let newColor = map(distance, 0, hypotenuse, 170, 360);
    moveText.style.color = "hsl(" + newColor + ", 57%, 85%)";
});

function map(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
};

function dist(x1, y1, x2, y2){
  let a = x1 - x2;
  let b = y1 - y2;
  return Math.sqrt( a*a + b*b );
};