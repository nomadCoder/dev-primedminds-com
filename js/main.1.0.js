var muted = true; // by default, volume is muted
var video; 
var icon;

// when the page loads
/* Removed as now in page code
$(document).ready(function () {
    video = document.getElementById("homeVideo");
    icon = document.getElementById("volume");
});
*/

function toggleVolume(videoID,buttonID) {
    // set video and icon elements passed to function
    video = document.getElementById(videoID);
    icon = document.getElementById(buttonID);  
    
    // toggle volume
    muted = !muted;
    // set volume
    video.muted = muted; 

    // togle volume button image 
    if (muted) {
        icon.innerHTML = '<i class="fa fa-volume-off" aria-hidden="true"></i>';
    } else {
        icon.innerHTML = '<i class="fa fa-volume-up" aria-hidden="true"></i>';
    }
}