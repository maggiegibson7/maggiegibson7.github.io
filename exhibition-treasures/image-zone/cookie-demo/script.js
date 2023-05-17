let bitesContainer = document.getElementById("bites");

let nommieCount = 0;
let nommiePositions = [];

nommieCount = getCookie("nommies");

if (getCookie("nommiePositions") == ''){
    console.log("no nommies have been made")
} else {
    nommiePositions = JSON.parse(getCookie("nommiePositions"));
    console.log(nommiePositions)
}


for (let i=0;i<nommieCount;i++){
    let newBite = document.createElement("DIV");
    newBite.innerHTML = '<img src="https://static.thenounproject.com/png/4371616-200.png">'

    newBite.style.left = nommiePositions[i][0] + "vh";
    newBite.style.top = nommiePositions[i][1] + "vw";

    newBite.classList.add("bite");
    bitesContainer.appendChild(newBite);
}


document.addEventListener("mousedown", function(){
    let newBite = document.createElement("DIV");
    let topVal = Math.random()*100;
    let leftVal = Math.random()*100;
    let arr = [leftVal, topVal];

    newBite.innerHTML = '<img src="https://static.thenounproject.com/png/4371616-200.png">'
    newBite.style.left = topVal + "vh";
    newBite.style.top = leftVal + "vw";
    newBite.classList.add("bite");
    bitesContainer.appendChild(newBite);

    nommieCount++;
    nommiePositions.push(arr);

    let json_str = JSON.stringify(nommiePositions);

    setCookie("nommies", nommieCount, 1);
    setCookie("nommiePositions", json_str, 1);

})





// ignore me

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

function checkCookie(cname) {
    if (!getCookie(cname) === undefined) {
        return true;
    } else {
        return false;
    }
}

// deleteAllCookies();