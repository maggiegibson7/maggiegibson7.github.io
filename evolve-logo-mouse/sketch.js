let font;
var numArticles;
function preload(){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '95b5d8ed01msha02b9d913ce6c05p170e68jsn7c8cf00a38c6',
            'X-RapidAPI-Host': 'real-time-news-data.p.rapidapi.com'
        }
    };
    font = loadFont('Oswald-Bold.otf');
    italicFont = loadFont('pressura-italic.otf');
    //new p5.Font;
}

function setup(){
    let myCanvas = createCanvas(800,800);
    myCanvas.parent('myContainer');
    background('white');
    strokeWeight(0.5);
    stroke('black');
    rect(0,0,800,800);
}
function draw(){
    //console.log(numArticles);
    let x1 = 100;
    let y1 = 200;
    let x2 = mouseX;
    let y2 = mouseY;
    let d = dist(x1, y1, x2, y2);
    let numArticles = map(mouseX, d, 0, 0, 25);
    background(255);
    //var newSize = map(numArticles, 0, 25, 0, 50);
    //console.log(newSize);
    fill(102,0,0);
    pointsE = font.textToPoints('E', 100, 200, 100, {
        sampleFactor: 0.8
    });
    
    pointsN = font.textToPoints('N',145, 200, 100, {
        sampleFactor: 0.8
    });
    pointsQ = font.textToPoints('Q', 199,200, 100, {
        sampleFactor: 0.8
    });
    pointsU = font.textToPoints('U', 255, 200, 100, {
        sampleFactor: 0.8
    });
    pointsI = font.textToPoints('I', 312, 200, 100, {
        sampleFactor: 0.8
    });
    pointsR = font.textToPoints('R', 339, 200, 100, {
        sampleFactor: 0.8
    });
    pointsETwo = font.textToPoints('E', 398, 200, 100, {
        sampleFactor: 0.8
    });
    pointsRTwo = font.textToPoints('R', 442, 200, 100, {
        sampleFactor: 0.8
    });
    shearX(PI/10);
    if (numArticles > 10){
        pointsExOne = font.textToPoints('!', 500, 200, 100, {
            sampleFactor: 0.8
        })
        beginShape();
        fill(102,0,0);
        for (let i = 0; i < pointsExOne.length; i++) {
            vertex(pointsExOne[i].x, pointsExOne[i].y);
        }
        endShape();
    }
    //console.log(pointsN);
    var pointsArray = pointsE, pointsN, pointsQ, pointsU, pointsI, pointsR, pointsETwo, pointsRTwo;
    //rect(0,0,500,500);
    //stroke(51);
    //strokeWeight(3);
    fill(170,0,0);
    //console.log(tXVal);
    //bbox = font.textBounds(t, tXVal, 100);
    //noFill();
    stroke(170, 0, 0);
    strokeWeight(1);
    //translate(width/10, height/10);
    
    pointsArray.forEach(element => {
        for (i=0; i<element.length; i++){
            fill('black');
            ellipse(element[i].x, element[i].y, 2,2);
        }
    })
    beginShape();
    for (let i = 0; i < pointsE.length; i++) {
        vertex(pointsE[i].x, pointsE[i].y);
    }
    endShape();
    

    beginShape();
    for (let i = 0; i < pointsN.length; i++) {
        vertex(pointsN[i].x, pointsN[i].y);
    }
    endShape();

    beginShape();
    for (let i = 0; i < pointsQ.length; i++) {
        vertex(pointsQ[i].x, pointsQ[i].y);
    }
    endShape();

    beginShape();
    for (let i = 0; i < pointsU.length; i++) {
        vertex(pointsU[i].x, pointsU[i].y);
    }
    endShape();


    beginShape();
    for (let i = 0; i < pointsI.length; i++) {
        vertex(pointsI[i].x, pointsI[i].y);
    }
    endShape();
    
    beginShape();
    for (let i = 0; i < pointsR.length; i++) {
        vertex(pointsR[i].x, pointsR[i].y);
    }
    endShape();

    beginShape();
    for (let i = 0; i < pointsE.length; i++) {
        vertex(pointsE[i].x, pointsE[i].y);
    }
    endShape();

    beginShape();
    for (let i = 0; i < pointsETwo.length; i++) {
        vertex(pointsETwo[i].x, pointsETwo[i].y);
    }
    endShape();

    beginShape();
    for (let i = 0; i < pointsRTwo.length; i++) {
        vertex(pointsRTwo[i].x, pointsRTwo[i].y);
    }
    endShape();

    fillColor = color(255,0,0);
    stroke('white');
    strokeWeight(0);
    for (let i = 1; i < numArticles; i++){
        strokeWeight(i/10);
        alphaTest = 128 + 128 * sin(i * 500);
        fillColor.setAlpha(alphaTest);
        fill(fillColor);
        pointsEShift = font.textToPoints('E', 100 + 2*i/2, (200 + i / 0.5), 100 + i, {
            sampleFactor: 0.8 });
        pointsNShift = font.textToPoints('N',145 + 3*i/2, 200 + i/0.5, 100 + i, {
                sampleFactor: 0.8
        });
        pointsQShift = font.textToPoints('Q',199 + 4*i/2, 200 + i/0.5, 100 + i, {
            sampleFactor: 0.8
        });
        pointsUShift = font.textToPoints('U', 255 + 5*i/2, 200 + i/0.5, 100 + i, {
            sampleFactor: 0.8
        });
        pointsIShift = font.textToPoints('I', 312 + 6*i/2, 200 + i/0.5, 100 + i, {
            sampleFactor: 0.8
        });
        pointsRShift = font.textToPoints('R', 339 + 7*i/2, 200 + i/0.5, 100 + i, {
            sampleFactor: 0.8
        });
        pointsETwoShift = font.textToPoints('E', 398 + 8*i/2, 200 + i/0.5, 100 + i, {
            sampleFactor: 0.8
        });
        pointsRTwoShift = font.textToPoints('R', 442 + 9*i/2, 200 + i/0.5, 100 + i, {
            sampleFactor: 0.8
        });

        if (i>10){
            pointsExShift = font.textToPoints('!', 500 + 10*i/2, 200+ i/0.5, 100+i, {
                sampleFactor: 0.8
            });
            beginShape();
            for (let i = 0; i < pointsExShift.length; i++) {
                vertex(pointsExShift[i].x, pointsExShift[i].y);
            }
            endShape();
        }

        beginShape();
        for (let i = 0; i < pointsEShift.length; i++) {
            vertex(pointsEShift[i].x - cos(numArticles*0.5 + pointsEShift[i].y *0.1)*7, pointsEShift[i].y);
        }
        endShape();
        beginShape();
        for (let i = 0; i < pointsNShift.length; i++) {
            vertex(pointsNShift[i].x + cos(numArticles*0.4 + pointsNShift[i].y *0.1)*6, pointsNShift[i].y);
        }
        endShape();
        beginShape();
        for (let i = 0; i < pointsQShift.length; i++) {
            vertex(pointsQShift[i].x + cos(numArticles*0.3 + pointsQShift[i].y *0.1)*5, pointsQShift[i].y);
        }
        endShape();
        beginShape();
        for (let i = 0; i < pointsUShift.length; i++) {
            vertex(pointsUShift[i].x + cos(numArticles*0.2 + pointsUShift[i].y *0.1)*4, pointsUShift[i].y);
        }
        endShape();
        beginShape();
        for (let i = 0; i < pointsIShift.length; i++) {
            vertex(pointsIShift[i].x - cos(numArticles*0.2 + pointsIShift[i].y *0.1)*4, pointsIShift[i].y);
        }
        endShape();
        beginShape();
        for (let i = 0; i < pointsRShift.length; i++) {
            vertex(pointsRShift[i].x- cos(numArticles*0.3 + pointsRShift[i].y *0.1)*5, pointsRShift[i].y);
        }
        endShape();
        beginShape();
        for (let i = 0; i < pointsETwoShift.length; i++) {
            vertex(pointsETwoShift[i].x - cos(numArticles*0.4 + pointsETwoShift[i].y *0.1)*6, pointsETwoShift[i].y);
        }
        endShape();
        beginShape();
        for (let i = 0; i < pointsRTwoShift.length; i++) {
            vertex(pointsRTwoShift[i].x - cos(numArticles*0.5 + pointsRTwoShift[i].y *0.1)*7, pointsRTwoShift[i].y);
        }
        endShape();
    }
    fill(170,0,0);
    strokeWeight(0);
    textSize(50);
    textFont(font);
    s = 'National'
    text(s, 103, 108);
}


function mouseMoved(){
    //let d = dist(0, width, 227, 100);
    //let newPercent = map(mouseX, 0, d, 0, 20);
    //console.log(d);
    //console.log(newPercent);
    //noFill();
    //stroke(0);
    //strokeWeight(1);

}

