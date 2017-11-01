// Slideshow script // 

// How fast the slides change (in ms)
var SLIDE_SPEED = 3000;
// Current slide #
var slideIndex = 0;
// Handles slide timeout
var timeoutHandle;

setup(); 
// Begin carousel of slideshow
carousel();

// Does the setup
function setup() {
    var left_arrow = document.getElementsByClassName("left-arrows");
    var right_arrow = document.getElementsByClassName("right-arrows");
    var slides = document.getElementById("slider");
    
    // left_arrow.style.left =
}

// Cycle through slides automatically 
function carousel() {
    var slides = document.getElementsByClassName("slides");
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    timeoutHandle = window.setTimeout(carousel, SLIDE_SPEED); // Change image every x ms
}
// Called when forward or back is pressed. 
// Navigate to slide_current + n 
function plusDivs(n) {
    // Display next slide
    showDivs(slideIndex += n);
    // Reset timer so timeout count starts at beginning
    window.clearTimeout(timeoutHandle);
    timeoutHandle = window.setTimeout(carousel, SLIDE_SPEED);
}
// Show div #n 
function showDivs(n) {
    var slides = document.getElementsByClassName("slides");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}