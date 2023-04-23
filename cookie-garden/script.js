var myDiv = document.querySelector("#container");

let numPetals = getCookie("numPetals");
console.log(document.cookie);

function makeFlower(){
    var petal = document.createElement('div');
    petal.classList.add('petal');
    
    numPetals++;
    console.log('im runnign!');
    

    let newTop = numPetals*5;
    let newLeft = numPetals*5;
    petal.style.top = `${newTop}px`;
    petal.style.left = `${newLeft}px`;
    

    myDiv.appendChild(petal);
    setCookie("numPetals", numPetals, 1);
}



window.addEventListener('click', makeFlower);
console.log(getCookie("numPetals"));

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

const deleteAllCookies = () => {
    const cookies = document.cookie.split(";");
  
    for (const cookie of cookies) {
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

deleteAllCookies();