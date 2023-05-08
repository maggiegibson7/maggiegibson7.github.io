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

const sketch = (p) => {
    p.preload = () => {
        myFont = p.loadFont('font-corgar/CormorantGaramond-Medium.ttf');
    };
    p.setup = () => {
        myCanvas = p.createCanvas(1200,1200);
        p.textFont(myFont);
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
        }


        photoCount = 0;
        
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
            //p.background('black');
            //photoArrangement();
            var randomNumber = Math.floor(Math.random() * photoCount);
            for(i = 0; i < photoCount; i++){
                var currImg = photoArray[i];
                
                //let x = p.floor(p.random(currImg.width));
                //let y = p.floor(p.random(currImg.height));
                
                let black = p.color(0);
                currImg.loadPixels();
                currImg.set(x,y,black);
                currImg.updatePixels();
                
                var xposition = (Math.random()*600)+300;
                var yposition = (Math.random()*600)+150;
                p.image(currImg,xposition, yposition, 100, 100);
            }
        }
        //p.image(capture, 0, 0);
        //console.log(photosTaken);
    };

    function takePhoto(){
        //p.saveFrames(`${photoCount}`, 'png', 1, 1);
        //savedImg = myCanvas.get(0, 0, 600, 600);
        savedObj = capture.get();
        //savedObj.save(`object-${photoCount}`, 'png');
        photoCount++;
        photoArray.push(capture.get());
        //p.print(photoArray);
        //showSaved();

        //let json_str = JSON.stringify(photoArray);
        //setCookie('itemPhotos', photoArray, 1);
        setCookie('photoCount', photoCount, 1);
    }

    function takeLabelPhoto(){
        savedLabel = labelpic.get();
        //savedLabel.save(`label-${photoCount}`, 'png');
        labelArray.push(labelpic.get());

        //let json_string = JSON.stringify(labelArray);
        //setCookie('labelPhotos', labelArray, 1);
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

    function photoArrangement(){

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
console.log(getCookie('photoCount'));
deleteAllCookies();
