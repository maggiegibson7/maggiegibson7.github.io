

let sheetID = "1LG4md6k0mXuYIBDVLey_88RTFFUs3O8kwlTfSTof4Ho";
let tabName = 'Sheet1';
let opensheet_uri = `https://opensheet.elk.sh/${sheetID}/${tabName}`;

fetch(opensheet_uri)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        //console.log(data);
		var babyToys = data;
        babyToys.length = 20;
        console.log(babyToys);
        babyToys.forEach((element, i)=> {
            var tagDiv = document.createElement('div');
            tagDiv.classList.add('container');
            var bgImage = document.createElement('img');
            if (element.Soft == 0){
                if (element.entertain == 1 || element.entertain == 2){
                    if (element.Bitable == 0){
                        bgImage.src = 'hard/level1.svg';
                    } else if (element.Bitable == 1){
                        bgImage.src = 'hard/bite-level1.svg';
                    };
                } else if (element.entertain == 3 || element.entertain == 4){
                    if (element.Bitable == 0){
                        bgImage.src = 'hard/level2.svg';
                    } else if (element.Bitable == 1){
                        bgImage.src = 'hard/bite-level2.svg';
                    }
                } else if (element.entertain == 5 || element.entertain == 6){
                    if (element.Bitable == 0){
                        bgImage.src = 'hard/level3.svg';
                    } else if (element.Bitable == 1){
                        bgImage.src = 'hard/bite-level3.svg';
                    }
                }
            } else if (element.Soft == 1){
                if (element.entertain == 1 || element.entertain == 2){
                    if (element.Bitable == 0){
                        bgImage.src = 'middle/level1.svg';
                    } else if (element.Bitable == 1){
                        bgImage.src = 'middle/bite-level1.svg';
                    };
                } else if (element.entertain == 3 || element.entertain == 4){
                    if (element.Bitable == 0){
                        bgImage.src = 'middle/level2.svg';
                    } else if (element.Bitable == 1){
                        bgImage.src = 'middle/bite-level2.svg';
                    }
                } else if (element.entertain == 5 || element.entertain == 6){
                    if (element.Bitable == 0){
                        bgImage.src = 'middle/level3.svg';
                    } else if (element.Bitable == 1){
                        bgImage.src = 'middle/bite-level3.svg';
                    }
                }
            } else if (element.Soft == 2){
                //tagDiv.style.width = '29vw';
                if (element.entertain == 1 || element.entertain == 2){
                    if (element.Bitable == 0){
                        var randomGuess = Math.random();
                        if (randomGuess > 0.5){
                            bgImage.src = 'soft/ver1-level1.svg';
                        } else if (randomGuess < 0.5){
                            bgImage.src = 'soft/ver2-level1.svg';
                        };
                        
                    } else if (element.Bitable == 1){
                        var randomGuess = Math.random();
                        if (randomGuess > 0.5){
                            bgImage.src = 'soft/ver1-bite-level1.svg';
                        } else if (randomGuess < 0.5){
                            bgImage.src = 'soft/ver2-bite-level1.svg';
                        };
                    };
                } else if (element.entertain == 3 || element.entertain == 4){
                    if (element.Bitable == 0){
                        var randomGuess = Math.random();
                        if (randomGuess > 0.5){
                            bgImage.src = 'soft/ver1-level2.svg';
                        } else if (randomGuess < 0.5){
                            bgImage.src = 'soft/ver2-level2.svg';
                        };
                    } else if (element.Bitable == 1){
                        if (randomGuess > 0.5){
                            bgImage.src = 'soft/ver1-bite-level2.svg';
                        } else if (randomGuess < 0.5){
                            bgImage.src = 'soft/ver2-bite-level2.svg';
                        };
                    }
                } else if (element.entertain == 5 || element.entertain == 6){
                    if (element.Bitable == 0){
                        if (randomGuess > 0.5){
                            bgImage.src = 'soft/ver1-level3.svg';
                        } else if (randomGuess < 0.5){
                            bgImage.src = 'soft/ver2-level3.svg';
                        };
                    } else if (element.Bitable == 1){
                        if (randomGuess > 0.5){
                            bgImage.src = 'soft/ver1-bite-level3.svg';
                        } else if (randomGuess < 0.5){
                            bgImage.src = 'soft/ver2-bite-level3.svg';
                        };
                    }
                };
            };
            bgImage.classList.add('tag');
            tagDiv.appendChild(bgImage);

            var toyName = document.createElement('h1');
            toyName.innerHTML = element.Name;
            toyName.classList.add('toy-name');
            tagDiv.append(toyName);
            const myDivOne = document.querySelector("#pile-one");
            const myDivTwo = document.querySelector("#pile-two");

            myDivOne.appendChild(tagDiv);

            var openButton = document.createElement('button');
            openButton.innerText = 'open me!';
            openButton.classList.add('open-button');
            tagDiv.appendChild(openButton);

            //console.log(i);
            if (i <= 9){
                var leftDist = i * 6 + 20;
                tagDiv.style.marginLeft = `${leftDist}vw`;
            } else if (i > 9){
                tagDiv.style.marginTop = "50vh";
                var secondRowLeft = (i -9)* 6 + 20;
                tagDiv.style.marginLeft = `${secondRowLeft}vw`;
            };
            
            tagDiv.classList.add('not-active');
            function showTag(){
                if (tagDiv.classList.contains('not-active')){
                    tagDiv.style.zIndex = '1000';
                    console.log('running!');
                    tagDiv.classList.remove('not-active');
                    tagDiv.classList.add('active');
                    openButton.innerText = 'close me!';
                } else if (tagDiv.classList.contains('active')){
                    tagDiv.style.zIndex = 'auto';
                    tagDiv.classList.remove('active');
                    tagDiv.classList.add('not-active');
                    openButton.innerText = 'open me!';
                };
                
            };

            openButton.addEventListener('click', showTag);
        });
    })
    .catch(function (err) {
        console.log("Something went wrong!", err);
    });

    function map(value, low1, high1, low2, high2) {
        return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
    }






