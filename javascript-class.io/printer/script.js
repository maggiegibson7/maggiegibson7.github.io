var imgFlip = new Array();

imgFlip[0] = new Image();
imgFlip[0].src = 'images/zeroflip.png';

imgFlip[1] = new Image();
imgFlip[1].src = 'images/oneflip.png';

imgFlip[2] = new Image();
imgFlip[2].src = 'images/twoflip.png';

imgFlip[3] = new Image();
imgFlip[3].src = 'images/threeflip.png';

var slideIndex = 0;
showSlides();

var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'images/zero.png';

imgArray[1] = new Image();
imgArray[1].src = 'images/one.png';

imgArray[2] = new Image();
imgArray[2].src = 'images/two.png';

imgArray[3] = new Image();
imgArray[3].src = 'images/three.png';


var imgArrayy = document.querySelectorAll("image");

function showSlides() {
    var i;
    var dots = document.querySelector('.dot');
    for (i = 0; i < imgArrayy.length; i++) {
      imgArrayy[i].style.display = 'none';  
    }
    slideIndex++;
    if (slideIndex > imgArrayy.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    imgArrayy[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000);
}




