// ********************
// vanilla js variables

let viewGalleryBtn = document.getElementById("viewGalleryBtn");
let gallery = document.getElementById("gallery");


// *********
// p5 stuffs

let savedImageCounter = 0;

function setup(){
    let myCanvas = createCanvas(600,600);
    myCanvas.mousePressed(mySaveImageFunction)
    background('pink');
    noStroke();
}

function draw(){
    fill(frameCount%255)
    ellipse(mouseX, mouseY, 50, 50);
}

function mySaveImageFunction(){
    let imgSrc = `mySketch${savedImageCounter}.jpg`;

    saveCanvas(imgSrc);
    savedImageCounter++;

    // vanilla js !
    let newGalleryImage = document.createElement("IMG");
    newGalleryImage.classList.add("galleryImage")
    newGalleryImage.src = `/saved-sketches/${imgSrc}`;
    gallery.appendChild(newGalleryImage);
}



// ********************
// vanilla js stuffs

viewGalleryBtn.addEventListener("click", function(){
    gallery.classList.toggle("visible")
})