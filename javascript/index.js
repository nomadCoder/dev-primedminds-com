var muted = true; // by default, volume is muted
var video; 
var icon;

// when the page loads
$(document).ready(function () {
    video = document.getElementById("bgvid");
    icon = document.getElementById("vol_icon");
});

function toggleVolume() {
    // toggle volume
    muted = !muted;
    // set volume
    video.muted = muted;  

    // togle volume button image 
    if (muted) {
        icon.src = "assets/index/speaker.png";
    } else {
        icon.src = "assets/index/mute.png";
    }
}