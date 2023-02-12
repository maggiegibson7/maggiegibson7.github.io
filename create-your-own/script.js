console.log ("hi!");

var image = document.querySelectorAll("img");



image.forEach(function (picture){
  picture.style.left = `calc(${Math.random()} * (100% - 7.5rem))`;
  picture.style.top = `calc(${Math.random()} * (100% - 7.5rem))`;

  dragElement(picture);
}); 

function dragElement(elmnt) {
	var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0; //baseline positions before drag
	elmnt.onmousedown = dragMouseDown;
	elmnt.ontouchstart = dragMouseDown; //function for moving within DIV
	console.log("hi");


	function dragMouseDown(e) { //e stands for event // function within function access pos1-4
	pos3 = e.clientX;
	pos4 = e.clientY; //getting cursor position when clicking on element
	//click is when mouse comes down and up, mousedown is holding down just listening for half
	document.onmouseup = closeDragElement; //when letting go the function stops
	document.onmousemove = elementDrag; 
	document.ontouchend = closeDragElement;
	document.ontouchmove = elementDrag;//moving element with the cursor
	console.log("on");
	}

	function elementDrag(e) {
		//calcuating new cursor position when moving mouse
		pos1 = pos3 - e.clientX; //how much this the mouse moved
		//pos 3 is the position saved when we clicked on it
		pos2 = pos4 - e.clientY; //how much the y axis has changed
		pos3 = e.clientX;
		pos4 = e.clientY; //saving new position/baseline for when mouse moves again
		elmnt.style.top = (elmnt.offsetTop - pos2) + "px"; //taking difference previously calculated and setting position
		elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
		//console.log("on2");
	}

	function closeDragElement() {
		//releases the element and lets it stay in it new position
		document.onmouseup = null;
		document.ontouchend = null;
		//no longer checking the mouse to see if it moves since it's been let go
		document.onmousemove = null;
		document.ontouchmove = null;
	}
}

document.querySelector('.screenshot').addEventListener('click', () => {
  let screenshotElement = document.querySelector('#my-element');
  takeScreenshot(screenshotElement);
});
