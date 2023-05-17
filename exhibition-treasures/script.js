var container = document.getElementById('container');
var objectLabel = document.getElementById('object-label');
var labelLabel = document.getElementById('label-label');
var capture;
var labelpic;
let photoCount;
let photoArray = [];
let labelArray = [];
let shutter;
let labelShutter;
let finishPhoto;
var photoGrid;
var labelGrid;
let myFont;
let savedObj;
let savedLabel;
let myCanvas;
let photosTaken = false;
let navyblue;
let gold;
var xposition;
var yposition;
let currentCookie;
let loadedPhotos = [];
let labelCount;
let loadedLabels = [];

if (getCookie('photoCount') == ''){
    console.log('no photos yet');
    photoCount = 0;
} else {
    photoCount = getCookie('photoCount');
    console.log(getCookie('photoCount'));
}

if (getCookie('labelCount')==''){
    console.log('no labels yet');
    labelCount = 0;
} else {
    labelCount = getCookie('labelCount');
    console.log(getCookie('labelCount'));
}


const sketch = (p) => {
    p.preload = () => {
        // myFont = p.loadFont('font-corgar/CormorantGaramond-Medium.ttf');
        if (getCookie('photoCount') == ''){
            console.log('no photos to load');
        } else {
            for(i = 0; i < photoCount; i++){
                var currImg = p.loadImage(`image-zone/object${i}.png`);
                loadedPhotos.push(currImg);
            }
        }
        if (getCookie('labelCount')==''){
            console.log('no labels to load');
        } else {
            for (i = 0; i < labelCount; i++){
                var currImg = p.loadImage(`image-zone/label${i}.png`);
                loadedLabels.push(currImg);
            }
        }
    };
    p.setup = () => {
        myCanvas = p.createCanvas(1200,1200);
        // const ctx = myCanvas.getContext('2d', {willReadFrequently: true});
        // p.textFont(myFont);
        //p.background('black');
        if (photosTaken==false){
            capture = p.createCapture(p.VIDEO);
            capture.size(600,600);
            capture.position(0,0);
            //console.log(capture);
            //capture.hide();
    
            labelpic = p.createCapture(p.VIDEO);
            labelpic.size(600,600);
            labelpic.position(600, 0);
            //labelpic.hide();
    
            shutter = p.createButton('take snapshot');
            shutter.size(120,60);
            shutter.position(240,540);
            shutter.mousePressed(takePhoto);
    
            labelShutter = p.createButton('take snapshot');
            labelShutter.size(120,60);
            labelShutter.position(840,540);
            labelShutter.mousePressed(takeLabelPhoto);
    
            finishPhoto = p.createButton('finish photos');
            finishPhoto.size(120,60);
            finishPhoto.position(540, 540);
            finishPhoto.mousePressed(takeAwayPhoto);

            navyblue = p.color('#14162F');
            gold = p.color('#7A7051');
        }


        // photoCount = 0;
        
        p.rectMode(p.CENTER);

    };
    p.draw = () => {
        if (photosTaken == false){
    
            for (i=0; i<photoArray.length; i++){
                let newRow = p.int(i/6);
                //let col = p.int(i/1);
                let xposition = (i*100)-(600*newRow);
                let yposition = 600 + (100*newRow);
                var imagePhoto = p.image(photoArray[i], xposition, yposition, 100, 100);
                //console.log(xposition, yposition);
                //photoGrid.child(imagePhoto);
            }
    
            for (i=0; i<labelArray.length; i++){
                let newRow = p.int(i/6);
                //let col = p.int(i/1);
                let xposition = 600 + (i*100)-(600*newRow);
                let yposition = 600 + (100*newRow);
                
                var labelPhoto = p.image(labelArray[i], xposition, yposition, 100, 100);
                //console.log(xposition, yposition);
                //labelGrid.child(labelPhoto);
            }
        } else {
            p.background(navyblue);
            //photoArrangement();
            var randomNumber = Math.floor(Math.random() * photoCount);
            
            for(i = 0; i < photoCount; i++){
                // var currImg = photoArray[i];
                var currImg = loadedPhotos[i];
                
                currImg.loadPixels();
                for (let y = 0; y < currImg.height; y++) {
                    for (let x = 0; x < currImg.width; x++){
                        let c = p.color('black');
                        // let transparent = p.tint(255, 0);
                        let transparent = p.color(0, 0, 0, 0);
                        let originalColor = currImg.get(x,y);
                        // console.log(checkRGBinRange(originalColor));
                        if (originalColor[0] < 150 && originalColor[1] < 150 && originalColor[2] < 150){
                            // writeColor(currImg, x, y, 0, 0, 0, 0);
                            // console.log(originalColor[0]);
                            currImg.set(x,y,transparent);
                        } else if (originalColor[0] == 0 || originalColor[1] == 0 || originalColor[2] == 0){
                            // writeColor(currImg, x, y, 0, 0, 0, 0);
                            currImg.set(x,y,transparent);
                        } 
                        // } else if (originalColor[1] < 100){
                        //     writeColor(currImg, x, y, 100, 0, 0, 255);
                        //     // console.log('true');
                        // } else if (originalColor[2] < 100){
                        //     writeColor(currImg, x, y, 100, 0, 0, 255);
                        //     // console.log('true');
                        // }
                        // currImg.set(x, y, c);
                    }
                }
                currImg.updatePixels();
                // var xposition = 600 + (Math.random()*300);
                // var yposition = 600 + (Math.random()*300);
                var posNeg = Math.random()*1;
                if (posNeg > 0.5){
                    xposition = 400 + (Math.random()*400);
                } else {
                    xposition = 400 - (Math.random()*400);
                }
                var posNegTwo = Math.random()*1;
                if (posNegTwo > 0.5){
                    yposition = 200 + (Math.random()*100);
                } else {
                    yposition = 200 - (Math.random()*100);
                }
                p.image(currImg,xposition, yposition, 400, 400);
                p.tint(gold);
                // console.log('got it!');
            }
            p.textSize(200);
            p.textAlign(p.CENTER);
            p.fill('white');
            p.text('TREASURES', 600, 400);

            for (i=0; i<labelCount; i++){
                var currLabel = loadedLabels[i];
                currLabel.loadPixels();
                for (let y = 0; y < currLabel.height; y++) {
                    for (let x = 0; x < currLabel.width; x++){
                        // let c = p.color('black');
                        let transparent = p.color(0, 0, 0, 0);
                        let originalColor = currLabel.get(x,y);
                        if (originalColor[0] < 150 && originalColor[1] < 150 && originalColor[2] < 150){
                            currLabel.set(x,y,transparent);
                        }
                    }
                }
                currLabel.updatePixels();
                let newRow = p.int(i/6);
                //let col = p.int(i/1);
                let xposition = (i*200)-(1200*newRow);
                let yposition = 700 + (200*newRow);
                p.tint(255);
                p.image(currLabel, xposition, yposition, 200, 200);

            }

        }
        //p.image(capture, 0, 0);
        //console.log(photosTaken);
    };

    function takePhoto(){
        photoArray.push(capture.get());
        // p.saveFrames(`${photoCount}`, 'png', 1, 1);
        //savedImg = myCanvas.get(0, 0, 600, 600);
        savedObj = capture.get();
        // let currentCookie = getCookie('photoCount');
        var nomenclature = `object${photoCount}`;
        console.log(currentCookie);
        savedObj.save(nomenclature);
        // p.saveFrames(nomenclature, 'png', 1, 1);
        console.log('working!');
        
        //p.print(photoArray);
        //showSaved();
        increaseCount();
        
        //let json_str = JSON.stringify(photoArray);
        //setCookie('itemPhotos', photoArray, 1);
        
    }
    
    function increaseCount(){
        photoCount++;
        setCookie('photoCount', photoCount, 1);
        console.log(photoCount);
        console.log(getCookie('photoCount'));
    }

    function takeLabelPhoto(){
        savedLabel = labelpic.get();
        // savedLabel.save(`label-${photoCount}`, 'png');
        labelArray.push(labelpic.get());
        var nomenclature = `label${labelCount}.png`;
        savedLabel.save(nomenclature);
        //let json_string = JSON.stringify(labelArray);
        //setCookie('labelPhotos', labelArray, 1);
        increaseLabelCount();
    }

    function increaseLabelCount(){
        labelCount++;
        setCookie('labelCount', labelCount, 1);
        console.log(labelCount);
        console.log(getCookie('labelCount'));
    }

    function takeAwayPhoto(){
        photosTaken = true;
        capture.hide();
        labelpic.hide();
        shutter.hide();
        labelShutter.hide();
        finishPhoto.hide();
        objectLabel.style.display = 'none';
        labelLabel.style.display = 'none';
    }

    
    function checkRGBinRange(R, G, B, A){
        if (R < 100){
            return true;
        } else if (G < 100) {
            return true;
        } else if (B < 100) {
            return true;
        } else {
            return false;
        }
    }

    function writeColor(image, x, y, red, green, blue, alpha) {
        let index = (x + y * p.width) * 4;
        image.pixels[index] = red;
        image.pixels[index + 1] = green;
        image.pixels[index + 2] = blue;
        image.pixels[index + 3] = alpha;
      }

 };
 let myp5 = new p5(sketch, container);

 function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie(cname) {
    if (!getCookie(cname) === undefined) {
        return true;
    } else {
        return false;
    }
}

const deleteAllCookies = () => {
    const cookies = document.cookie.split(";");
  
    for (const cookie of cookies) {
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}
// console.log(getCookie('photoCount'));
// deleteAllCookies();
