console.log('hello');

function playSound() {
	if (isPlaying == 1) { //if the first audio is playing
		audio.pause(); //pause the first audio
		audio2.play(); //play the second
		isPlaying = 2; //second click
		document.querySelector('.sound-waves').removeAttribute("hidden"); //show circles
	} // if statement syntax: if(condition_expression){//true}else{false}
	else if (isPlaying == 0) { //if no audio is playing
		audio.play(); //play the first audio
		audio2.pause(); //keep the second one paused
		isPlaying = 1;//first click
		document.querySelector('.sound-waves').removeAttribute("hidden"); //show circles
	}//first click will play, second will pause

	else if (isPlaying == 2) { //if the second audio is playing
		audio.pause(); //pause both audios
		audio2.pause();
		isPlaying = 0; //return to silence
		document.querySelector('.sound-waves').setAttribute("hidden", true); //hide circles
	}
}

document.querySelector('.leaf').addEventListener('click', playSound);//attaching the function to the leaf element

var audio = document.createElement('audio'); //attaching the first audio in console
audio.style.display = "none";
audio.src = "sound/bubbles_1.mp3"; 

var audio2 = document.createElement('audio'); //attaching the second audio in console
audio2.style.display = "none";
audio2.src = "sound/rumble1.mp3";

var isPlaying = 0; //sound won't play when user is first on page
//if isPlaying = true, audio is playing (defined in lines 4-6)

document.querySelector('.sound-waves').setAttribute("hidden", true);//hiding sound waves at when audio is not playing