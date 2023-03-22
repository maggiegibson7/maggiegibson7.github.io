let font;
let numArticles;
const options = { 
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '95b5d8ed01msha02b9d913ce6c05p170e68jsn7c8cf00a38c6',
        'X-RapidAPI-Host': 'real-time-news-data.p.rapidapi.com'
    }
};
fetch('https://real-time-news-data.p.rapidapi.com/search?query=%22national%20enquirer%22&country=US&lang=en&time_published=1d', options)
    .then(response => response.json())
    .then(response => {
        console.log(response);
        console.log(response.data.length);
        //dataPoint = response.data.length;
        window.numArticles = 22;
        console.log(numArticles);
        return numArticles;
    
    })
    .catch(err => console.error(err));

function preload(){
    font = loadFont('Oswald-Bold.otf');
    italicFont = loadFont('pressura-italic.otf');
    //new p5.Font;
}

function setup(){
    let myCanvas = createCanvas(800,800);
    myCanvas.parent('myContainer');
    background('white');
    
}
function draw(){
    console.log(window.numArticles);
    //console.log(pointsEShift);

    background(255);
    shearX(PI/10);
    fill(255,0,0);
    strokeWeight(0);
    textSize(50);
    textFont(font);
    s = 'National'
    text(s, 103, 108);
    fillColor = color(255,0,0);
        stroke(255,0,0);
        strokeWeight(1);
        //console.log(numArticles);
        //strokeWeight(numArticles/5);
        alphaTest = 128 + 128 * sin(window.numArticles * .1);
        fillColor.setAlpha(alphaTest);
        fill(fillColor);
        pointsEShift = font.textToPoints('E', 100 , (200 + window.numArticles/2), (100 + window.numArticles), {
            sampleFactor: 1 });
        pointsNShift = font.textToPoints('N',145 + 2*window.numArticles/2, 200 + window.numArticles/3, 100 + window.numArticles, {
                sampleFactor:1
        });
        pointsQShift = font.textToPoints('Q',199 + 3*window.numArticles/2, 200 + window.numArticles/3, 100 + window.numArticles, {
            sampleFactor: 1
        });
        pointsUShift = font.textToPoints('U', 255 + 4*window.numArticles/2, 200 + window.numArticles/3, 100 + window.numArticles, {
            sampleFactor: 1
        });
        pointsIShift = font.textToPoints('I', 312 + 5*window.numArticles/2, 200 + window.numArticles/3, 100 + window.numArticles, {
            sampleFactor: 1
        });
        pointsRShift = font.textToPoints('R', 339 + 6*window.numArticles/2, 200 + window.numArticles/3, 100 + window.numArticles, {
            sampleFactor: 1
        });
        pointsETwoShift = font.textToPoints('E', 398 + 7*window.numArticles/2, 200 + window.numArticles/3, 100 + window.numArticles, {
            sampleFactor: 1
        });
        pointsRTwoShift = font.textToPoints('R', 442 + 8*window.numArticles/2, 200 + window.numArticles/3, 100 + window.numArticles, {
            sampleFactor: 1
        });

        if (window.numArticles>10){
            pointsExShift = font.textToPoints('!', 500 + 9*window.numArticles/2, 200+ window.numArticles/3, 100+window.numArticles, {
                sampleFactor: 0.8
            });
            beginShape();
            for (let i = 0; i < pointsExShift.length; i++) {
                vertex(pointsExShift[i].x, pointsExShift[i].y);
            }
            endShape();
        }

        if (window.numArticles>20){
            pointsExShift = font.textToPoints('!', 500 + 12*window.numArticles/2, 200+ window.numArticles/3, 100+window.numArticles, {
                sampleFactor: 0.8
            });
            beginShape();
            for (let i = 0; i < pointsExShift.length; i++) {
                vertex(pointsExShift[i].x, pointsExShift[i].y);
            }
            endShape();
        }
        
    beginShape();
        
            if (window.numArticles == 0){
                beginShape();
                for (let i = 0; i < pointsEShift.length; i++) {
                vertex(pointsEShift[i].x, pointsEShift[i].y);
                } 
                endShape();

                beginShape();
                for (let i = 0; i < pointsNShift.length; i++) {
                vertex(pointsNShift[i].x, pointsNShift[i].y);
                } 
                endShape();

                beginShape();
                for (let i = 0; i < pointsQShift.length; i++) {
                vertex(pointsQShift[i].x, pointsQShift[i].y);
                } 
                endShape();

                beginShape();
                for (let i = 0; i < pointsUShift.length; i++) {
                vertex(pointsUShift[i].x, pointsUShift[i].y);
                } 
                endShape();

                beginShape();
                for (let i = 0; i < pointsIShift.length; i++) {
                vertex(pointsIShift[i].x, pointsIShift[i].y);
                } 
                endShape();

                beginShape();
                for (let i = 0; i < pointsRShift.length; i++) {
                vertex(pointsRShift[i].x, pointsRShift[i].y);
                } 
                endShape();

                beginShape();
                for (let i = 0; i < pointsETwoShift.length; i++) {
                vertex(pointsETwoShift[i].x, pointsETwoShift[i].y);
                } 
                endShape();

                beginShape();
                for (let i = 0; i < pointsRTwoShift.length; i++) {
                vertex(pointsRTwoShift[i].x, pointsRTwoShift[i].y);
                } 
                endShape();
                return;
            }
            if (window.numArticles <= 10){
                beginShape();
                for (let i = 0; i < pointsEShift.length; i++) {
                vertex(pointsEShift[i].x + cos(window.numArticles + pointsEShift[i].y *0.1)*5, pointsEShift[i].y);
                }
                endShape();
                
                beginShape();
                for (let i = 0; i < pointsNShift.length; i++) {
                    vertex(pointsNShift[i].x + cos(window.numArticles+ pointsNShift[i].y *0.1)*5, pointsNShift[i].y);
                }
                endShape();

                beginShape();
                    for (let i = 0; i < pointsQShift.length; i++) {
                        vertex(pointsQShift[i].x + cos(window.numArticles+ pointsQShift[i].y *0.1)*5, pointsQShift[i].y);
                    }
                endShape();

                beginShape();
                for (let i = 0; i < pointsUShift.length; i++) {
                    vertex(pointsUShift[i].x  + cos(window.numArticles+ pointsUShift[i].y *0.1)*5, pointsUShift[i].y);
                }
                endShape();

                beginShape();
                for (let i = 0; i < pointsIShift.length; i++) {
                    vertex(pointsIShift[i].x + cos(window.numArticles+ pointsIShift[i].y *0.1)*5, pointsIShift[i].y);
                }
                endShape();

                beginShape();
                for (let i = 0; i < pointsRShift.length; i++) {
                    vertex(pointsRShift[i].x + cos(window.numArticles+ pointsRShift[i].y *0.1)*5, pointsRShift[i].y);
                }
                endShape();

                beginShape();
                for (let i = 0; i < pointsETwoShift.length; i++) {
                    vertex(pointsETwoShift[i].x + cos(window.numArticles+ pointsETwoShift[i].y *0.1)*5, pointsETwoShift[i].y);
                }
                endShape();

                beginShape();
                for (let i = 0; i < pointsRTwoShift.length; i++) {
                    vertex(pointsRTwoShift[i].x + cos(window.numArticles+ pointsRTwoShift[i].y *0.1)*5, pointsRTwoShift[i].y);
                }
                endShape();

                return;
            }
            if (window.numArticles <= 20){
                beginShape();
                for (let i = 0; i < pointsEShift.length; i++) {
                vertex(pointsEShift[i].x - sin(window.numArticles * 10 + pointsEShift[i].y *0.1)*5, pointsEShift[i].y);
                }
                endShape();
                
                beginShape();
                for (let i = 0; i < pointsNShift.length; i++) {
                    vertex(pointsNShift[i].x - sin(window.numArticles * 10 + pointsNShift[i].y *0.1)*5, pointsNShift[i].y);
                }
                endShape();

                beginShape();
                    for (let i = 0; i < pointsQShift.length; i++) {
                        vertex(pointsQShift[i].x - sin(window.numArticles * 10 + pointsQShift[i].y *0.1)*5, pointsQShift[i].y);
                    }
                endShape();

                beginShape();
                for (let i = 0; i < pointsUShift.length; i++) {
                    vertex(pointsUShift[i].x - sin(window.numArticles * 10 + pointsUShift[i].y *0.1)*5, pointsUShift[i].y);
                }
                endShape();

                beginShape();
                for (let i = 0; i < pointsIShift.length; i++) {
                    vertex(pointsIShift[i].x - sin(window.numArticles * 10 + pointsIShift[i].y *0.1)*5, pointsIShift[i].y);
                }
                endShape();

                beginShape();
                for (let i = 0; i < pointsRShift.length; i++) {
                    vertex(pointsRShift[i].x- sin(window.numArticles * 10 + pointsRShift[i].y *0.1)*5, pointsRShift[i].y);
                }
                endShape();

                beginShape();
                for (let i = 0; i < pointsETwoShift.length; i++) {
                    vertex(pointsETwoShift[i].x - sin(window.numArticles * 10 + pointsETwoShift[i].y *0.1)*5, pointsETwoShift[i].y);
                }
                endShape();

                beginShape();
                for (let i = 0; i < pointsRTwoShift.length; i++) {
                    vertex(pointsRTwoShift[i].x - sin(window.numArticles * 10 + pointsRTwoShift[i].y *0.1)*5, pointsRTwoShift[i].y);
                }
                endShape();
                return;
            }
            if (window.numArticles >= 20){
                beginShape();
                for (let i = 0; i < pointsEShift.length; i++) {
                vertex(pointsEShift[i].x - sin(window.numArticles * 30 + pointsEShift[i].y *0.2)*5, pointsEShift[i].y);
                }
                endShape();
                
                beginShape();
                for (let i = 0; i < pointsNShift.length; i++) {
                    vertex(pointsNShift[i].x - sin(window.numArticles * 30 + pointsNShift[i].y *0.2)*5, pointsNShift[i].y);
                }
                endShape();

                beginShape();
                    for (let i = 0; i < pointsQShift.length; i++) {
                        vertex(pointsQShift[i].x - sin(window.numArticles * 30 + pointsQShift[i].y *0.2)*5, pointsQShift[i].y);
                    }
                endShape();

                beginShape();
                for (let i = 0; i < pointsUShift.length; i++) {
                    vertex(pointsUShift[i].x - sin(window.numArticles * 30 + pointsUShift[i].y *0.2)*5, pointsUShift[i].y);
                }
                endShape();

                beginShape();
                for (let i = 0; i < pointsIShift.length; i++) {
                    vertex(pointsIShift[i].x - sin(window.numArticles * 30 + pointsIShift[i].y *0.2)*5, pointsIShift[i].y);
                }
                endShape();

                beginShape();
                for (let i = 0; i < pointsRShift.length; i++) {
                    vertex(pointsRShift[i].x- sin(window.numArticles * 30 + pointsRShift[i].y *0.2)*5, pointsRShift[i].y);
                }
                endShape();

                beginShape();
                for (let i = 0; i < pointsETwoShift.length; i++) {
                    vertex(pointsETwoShift[i].x - sin(window.numArticles * 30 + pointsETwoShift[i].y *0.2)*5, pointsETwoShift[i].y);
                }
                endShape();

                beginShape();
                for (let i = 0; i < pointsRTwoShift.length; i++) {
                    vertex(pointsRTwoShift[i].x - sin(window.numArticles * 30 + pointsRTwoShift[i].y *0.2)*5, pointsRTwoShift[i].y);
                }
                endShape();
                return;
            }
        
        //endShape();
        
        
        
        
        
        

    //var newSize = map(numArticles, 0, 25, 0, 50);
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
    
    // fill(255,0,0);
    // beginShape();
    // for (let i = 0; i < pointsE.length; i++) {
    //     vertex(pointsE[i].x, pointsE[i].y);
    // }
    // endShape();
    

    // beginShape();
    // for (let i = 0; i < pointsN.length; i++) {
    //     vertex(pointsN[i].x, pointsN[i].y);
    // }
    // endShape();

    // beginShape();
    // for (let i = 0; i < pointsQ.length; i++) {
    //     vertex(pointsQ[i].x, pointsQ[i].y);
    // }
    // endShape();

    // beginShape();
    // for (let i = 0; i < pointsU.length; i++) {
    //     vertex(pointsU[i].x, pointsU[i].y);
    // }
    // endShape();


    // beginShape();
    // for (let i = 0; i < pointsI.length; i++) {
    //     vertex(pointsI[i].x, pointsI[i].y);
    // }
    // endShape();
    
    // beginShape();
    // for (let i = 0; i < pointsR.length; i++) {
    //     vertex(pointsR[i].x, pointsR[i].y);
    // }
    // endShape();

    // beginShape();
    // for (let i = 0; i < pointsE.length; i++) {
    //     vertex(pointsE[i].x, pointsE[i].y);
    // }
    // endShape();

    // beginShape();
    // for (let i = 0; i < pointsETwo.length; i++) {
    //     vertex(pointsETwo[i].x, pointsETwo[i].y);
    // }
    // endShape();

    // beginShape();
    // for (let i = 0; i < pointsRTwo.length; i++) {
    //     vertex(pointsRTwo[i].x, pointsRTwo[i].y);
    // }
    // endShape();

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

