var slideshows = document.querySelectorAll('[data-component="slideshow"]');
slideshows.forEach(initSlideShow);

function initSlideShow(slideshow) {

	var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .image`);

	var index = 0, time = 1000;
	slides[index].classList.add('active');
    console.log("hello");

	setInterval( () => {
		slides[index].classList.remove('active');
		
		index++;
		if (index === slides.length) index = 0;

		slides[index].classList.add('active');

	}, time);
}

var slideshowss = document.querySelectorAll('[data-component="slideshoww"]');
slideshowss.forEach(initSlideShoww);

function initSlideShoww(slideshow) {

	var slidess = document.querySelectorAll(`#${slideshow.id} [role="list"] .imagee`);

	var index = 0, time = 1000;
	slidess[index].classList.add('active');
    console.log("hello");

	setInterval( () => {
		slidess[index].classList.remove('active');
		
		index++;
		if (index === slidess.length) index = 0;

		slidess[index].classList.add('active');

	}, time);
}

var slideshowsss = document.querySelectorAll('[data-component="slideshowww"]');
slideshowsss.forEach(initSlideShowww);

function initSlideShowww(slideshow) {

	var slidess = document.querySelectorAll(`#${slideshow.id} [role="list"] .imageee`);

	var index = 0, time = 1000;
	slidess[index].classList.add('active');
    console.log("hello");

	setInterval( () => {
		slidess[index].classList.remove('active');
		
		index++;
		if (index === slidess.length) index = 0;

		slidess[index].classList.add('active');

	}, time);
}

var slideshowssss = document.querySelectorAll('[data-component="slideshowwww"]');
slideshowssss.forEach(initSlideShowwww);

function initSlideShowwww(slideshow) {

	var slidess = document.querySelectorAll(`#${slideshow.id} [role="list"] .imageeee`);

	var index = 0, time = 1000;
	slidess[index].classList.add('active');
    console.log("hello");

	setInterval( () => {
		slidess[index].classList.remove('active');
		
		index++;
		if (index === slidess.length) index = 0;

		slidess[index].classList.add('active');

	}, time);
}