console.log ("hi!");

var image = document.querySelectorAll("#images");



image.forEach(function (picture){
  image.style.left = `calc(${Math.random()} * (100% - 7.5rem))`;
  image.style.top = `calc(${Math.random()} * (100% - 7.5rem))`;
});
