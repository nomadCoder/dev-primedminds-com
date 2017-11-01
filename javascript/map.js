var isvideoopen = "no"
var arewedisplaying = "no"

function sethm(a, b) {
  hover = document.getElementById(a);
  message = document.getElementById(b);
  if (arewedisplaying === "no") {
    display()
  }
}

function display() {
  if (isvideoopen === "no") {
    message.style.visibility = "visible";
    arewedisplaying = "yes"
  }
}

function hide() {
  arewedisplaying = "no"
  message.style.visibility = "hidden";
}
var toopen = []
function openvideo(a) {
  toopen = document.getElementById(a);
  toopen.style.display = "block"
  isvideoopen = "yes"
}
var toclose = []
function closevideo(a) {
  toclose = document.getElementById(a);
  toclose.style.display = "none"
  isvideoopen = "no"
}
