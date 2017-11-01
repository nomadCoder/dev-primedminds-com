//Monster Handshake 1.0

// function setup() {
  
var project = new Woof({global: false, width: 1099, height: 600})
// }

// fullScreen = false
// project.setBackdropSize(window.innerWidth, window.innerHeight)

//helps determine position of monsters
var ontheright = null;
var ontheleft = null;

//makes sure that you can only drag one monster at a time
var currentlydragging = null;

//makes sure that no monster can shake hands if they don't have a partner
var onlyone = new project.Text({
  project: project,
  text: () => "Hey! There's only one monster here!"
})
onlyone.y = 100;
onlyone.hide();

var onlyonefunction = () => {
  onlyone.show();
  project.after(2, "seconds", () => {
    onlyone.hide();
  })
}

//makes sure that each monster pair can only shake hands once
var done = new project.Text({
  project: project,
  text: () => "Hey! You already shook my hand!"
})
done.y = 100;
done.hide();

var donefunction = () => {
  done.show();
  project.after(2, "seconds", () => {
    done.hide();
  })
}

var blackandbandw = "undone";
var blackandblue = "undone";
var blueandbandw = "undone";
var blackandgreen = "undone";
var bandwandgreen = "undone";
var blueandgreen = "undone";
var blackandorange = "undone";
var bandwandorange = "undone";
var blueandorange = "undone";
var greenandorange = "undone";
var blackandpurple = "undone";
var bandwandpurple = "undone";
var blueandpurple = "undone";
var greenandpurple = "undone";
var orangeandpurple = "undone";
var blackandred = "undone";
var bandwandred = "undone";
var blueandred = "undone";
var greenandred = "undone";
var orangeandred = "undone";
var purpleandred = "undone";

//creation of monsters
var redstanding = new project.Image({
  project: project,
  url: "https://s17.postimg.org/63c0a49in/Red_Monster.png",
  height: 80,
  width: 65,
  y: project.maxY - 60,
  x: 245
})
var redleft = new project.Image({
  project: project,
  url: "https://s17.postimg.org/o7tyjbmb3/Red_L.png",
  height: 100,
  width: 75,
  y: project.maxY - 60,
  x: 245
})
redleft.hide()
var redright = new project.Image({
  project: project,
  url: "https://s22.postimg.org/kpywpf8sx/Red_R.png",
  height: 100,
  width: 75,
  y: project.maxY - 60,
  x: 245
})
redright.hide()
var redru = "https://s32.postimg.org/yb6divtcl/Red_RU.png";
var redrd = "https://s18.postimg.org/o9fm2oybt/Red_RD.png";
var redlu = "https://s27.postimg.org/rvr653idf/Red_LU.png";
var redld = "https://s4.postimg.org/n60gjh76l/Red_LD.png";
var redlefturl = "https://s17.postimg.org/o7tyjbmb3/Red_L.png";
var redrighturl = "https://s22.postimg.org/kpywpf8sx/Red_R.png";
var redhome = new project.Rectangle({
  project: project,
  color: "red",
  width: 70,
  y: project.maxY - 100,
  x: 210
})
redhome.sendToBack()
var redshakes = new project.Text({
  project: project,
  text: () => redshakes,
  x: 210,
  y: project.maxY - 120,
  size: 30
})
redshakes = 0

var purplestanding = new project.Image({
  project: project,
  url: "https://s14.postimg.org/w79o1z0td/Purple_Monster.png",
  height: 80,
  width: 65,
  y: project.maxY - 60,
  x: 175
})
var purpleleft = new project.Image({
  project: project,
  url: "https://s12.postimg.org/v63b1spu5/Purple_L.png",
  height: 100,
  width: 75,
  y: project.maxY - 60,
  x: 175
})
purpleleft.hide()
var purpleright = new project.Image({
  project: project,
  url: "https://s15.postimg.org/92dq1rb97/Purple_R.png",
  height: 100,
  width: 75,
  y: project.maxY - 60,
  x: 175
})
purpleright.hide()
var purpleru = "https://s18.postimg.org/rffxef36h/Purple_RU.png";
var purplerd = "https://s7.postimg.org/nrk3e9thn/Purple_RD.png";
var purplelu = "https://s31.postimg.org/pu97kg657/Purple_LU.png";
var purpleld = "https://s21.postimg.org/qpuxhvfmv/Purple_LD.png";
var purplelefturl = "https://s12.postimg.org/v63b1spu5/Purple_L.png";
var purplerighturl = "https://s15.postimg.org/92dq1rb97/Purple_R.png";
var purplehome = new project.Rectangle({
  project: project,
  color: "purple",
  width: 70,
  y: project.maxY - 100,
  x: 140
})
purplehome.sendToBack();
var purpleshakes = new project.Text({
  project: project,
  text: () => purpleshakes,
  x: 140,
  y: project.maxY - 120,
  size: 30
})
purpleshakes = 0;

var orangestanding = new project.Image({
  project: project,
  url: "https://s4.postimg.org/fxlmvvxp9/Orange_Monster.png",
  height: 80,
  width: 65,
  y: project.maxY - 60,
  x: -175
})
var orangeleft = new project.Image({
  project: project,
  url: "https://s7.postimg.org/g9ryezhyj/Orange_L.png",
  height: 100,
  width: 75,
  y: project.maxY - 60,
  x: -175
})
orangeleft.hide();
var orangeright = new project.Image({
  project: project,
  url: "https://s10.postimg.org/7q094xle1/Orange_R.png",
  height: 100,
  width: 75,
  y: project.maxY - 60,
  x: -175
})
orangeright.hide();
var orangeru = "https://s1.postimg.org/swd4il1q7/Orange_RU.png";
var orangerd = "https://s32.postimg.org/l4sa17iid/Orange_RD.png";
var orangelu = "https://s32.postimg.org/c1e3pi43p/Orange_LU.png";
var orangeld = "https://s16.postimg.org/y524mcz0l/Orange_LD.png";
var orangelefturl = "https://s7.postimg.org/g9ryezhyj/Orange_L.png";
var orangerighturl = "https://s10.postimg.org/7q094xle1/Orange_R.png";
var orangehome = new project.Rectangle({
  project: project,
  color: "orange",
  width: 70,
  y: project.maxY - 100,
  x: -210
})
orangehome.sendToBack();
var orangeshakes = new project.Text({
  project: project,
  text: () => orangeshakes,
  x: -210,
  y: project.maxY - 120,
  size: 30
})
orangeshakes = 0;

var greenstanding = new project.Image({
  project: project,
  url: "https://s21.postimg.org/72l4mqgk7/Green_Monster.png",
  height: 80,
  width: 65,
  y: project.maxY - 60,
  x: -105
})
var greenleft = new project.Image({
  project: project,
  url: "https://s23.postimg.org/uxe1hwk3f/Green_L.png",
  height: 100,
  width: 75,
  y: project.maxY - 60,
  x: -105
})
greenleft.hide();
var greenright = new project.Image({
  project: project,
  url: "https://s12.postimg.org/ir8wowywd/Green_R.png",
  height: 100,
  width: 75,
  y: project.maxY - 60,
  x: -105
})
greenright.hide();
var greenru = "https://s12.postimg.org/dro881agd/Green_RU.png";
var greenrd = "https://s18.postimg.org/5u0k3zyhl/Green_RD.png";
var greenlu = "https://s24.postimg.org/pwgarfy2t/Green_LU.png";
var greenld = "https://s12.postimg.org/wkb28h8v1/Green_LD.png";
var greenlefturl = "https://s23.postimg.org/uxe1hwk3f/Green_L.png";
var greenrighturl = "https://s12.postimg.org/ir8wowywd/Green_R.png";
var greenhome = new project.Rectangle({
  project: project,
  color: "green",
  width: 70,
  y: project.maxY - 100,
  x: -140
})
greenhome.sendToBack()
var greenshakes = new project.Text({
  project: project,
  text: () => greenshakes,
  x: -140,
  y: project.maxY - 120,
  size: 30
})
greenshakes = 0;

var bluestanding = new project.Image({
  project: project,
  url: "https://s23.postimg.org/5ljnq0niz/Blue_Monster.png",
  height: 100,
  width: 80,
  y: project.maxY - 60,
  x: -35
})
var blueleft = new project.Image({
  project: project,
  url: "https://s23.postimg.org/hg8gekp8b/Blue_L.png",
  height: 100,
  width: 75,
  y: project.maxY - 60,
  x: -35
})
blueleft.hide();
var blueright = new project.Image({
  project: project,
  url: "https://s24.postimg.org/ra1gmb9at/Blue_R.png",
  height: 100,
  width: 75,
  y: project.maxY - 60,
  x: -35
})
blueright.hide();
var blueru = "https://s28.postimg.org/3x17q0sod/Blue_RU.png";
var bluerd = "https://s29.postimg.org/afahq3rqv/Blue_RD.png";
var bluelu = "https://s30.postimg.org/76hw4eydd/Blue_LU.png";
var blueld = "https://s30.postimg.org/woqit8moh/Blue_LD.png";
var bluelefturl = "https://s23.postimg.org/hg8gekp8b/Blue_L.png";
var bluerighturl = "https://s24.postimg.org/ra1gmb9at/Blue_R.png";
var bluehome = new project.Rectangle({
  project: project,
  color: "blue",
  width: 70,
  y: project.maxY - 100,
  x: -70
})
bluehome.sendToBack();
var blueshakes = new project.Text({
  project: project,
  text: () => blueshakes,
  x: -70,
  y: project.maxY - 120,
  size: 30
})
blueshakes = 0;

var blackstanding = new project.Image({
  project: project,
  url: "https://s3.postimg.org/91v2lmrjn/Black_Monster.png",
  height: 90,
  width: 75,
  y: project.maxY - 60,
  x: 105
})
var blackleft = new project.Image({
  project: project,
  url: "https://s23.postimg.org/7ui6oe9bv/Black_L.png",
  height: 100,
  width: 75,
  y: project.maxY - 60,
  x: 105
})
blackleft.hide()
var blackright = new project.Image({
  project: project,
  url: "https://s30.postimg.org/5z9lqtrpd/Black_R.png",
  height: 100,
  width: 75,
  y: project.maxY - 60,
  x: 105
})
blackright.hide()
var blackru = "https://s23.postimg.org/4q5s32ky3/Black_RU.png"
var blackrd = "https://s24.postimg.org/lqt8wlp3p/Black_RD.png"
var blacklu = "https://s29.postimg.org/dx3ne3ixz/Black_LU.png"
var blackld = "https://s30.postimg.org/i4zq3z4ap/Black_LD.png"
var blacklefturl = "https://s23.postimg.org/7ui6oe9bv/Black_L.png"
var blackrighturl = "https://s30.postimg.org/5z9lqtrpd/Black_R.png"
var blackhome = new project.Rectangle({
  project: project,
  color: "black",
  width: 70,
  y: project.maxY - 100,
  x: 70
})
blackhome.sendToBack()
var blackshakes = new project.Text({
  project: project,
  text: () => blackshakes,
  x: 70,
  y: project.maxY - 120,
  size: 30
})
blackshakes = 0

var bandwstanding = new project.Image({
  project: project,
  url: "https://s1.postimg.org/wdvck7p9b/Black_White_Monster.png",
  height: 100,
  width: 75,
  y: project.maxY - 60,
  x: 35
})
var bandwleft = new project.Image({
  project: project,
  url: "https://s28.postimg.org/evuzw6r19/Band_WL.png",
  height: 100,
  width: 75,
  y: project.maxY - 60,
  x: 35
})
bandwleft.hide()
var bandwright = new project.Image({
  project: project,
  url: "https://s27.postimg.org/qkdkp3v1v/Band_WR.png",
  height: 100,
  width: 75,
  y: project.maxY - 60,
  x: 35
})
bandwright.hide()
var bandwru = "https://s27.postimg.org/btvufut7n/Band_WRU.png"
var bandwrd = "https://s29.postimg.org/4ruqw4bhj/Band_WRD.png"
var bandwlu = "https://s29.postimg.org/5jsmvcrqf/Band_WLU.png"
var bandwld = "https://s23.postimg.org/9uetsghij/Band_WLD.png"
var bandwlefturl = "https://s28.postimg.org/evuzw6r19/Band_WL.png"
var bandwrighturl = "https://s27.postimg.org/qkdkp3v1v/Band_WR.png"
var bandwhome = new project.Rectangle({
  project: project,
  color: "gray",
  width: 70,
  y: project.maxY - 100,
  x: 0
})
bandwhome.sendToBack()
var bandwshakes = new project.Text({
  project: project,
  text: () => bandwshakes,
  x: 0,
  y: project.maxY - 120,
  size: 30
})
bandwshakes = 0

//creation of pedestals
var leftpedestal = new project.Image({
  project: project,
  url: "https://s27.postimg.org/46cpjfvk3/Empty_L.png",
  height: 100,
  width: 75,
  x: -37,
})
var rightpedestal = new project.Image({
  project: project,
  url: "https://s28.postimg.org/455nwxekt/Empty_R.png",
  height: 100,
  width: 75,
  x: 37
})
leftpedestal.sendToBack()
rightpedestal.sendToBack()

//enables dragging and dropping
var dragto = (input1) => {
  input1.x = project.mouseX
  input1.y = project.mouseY
}
var drop = (input1, input2, input3) => {
  if (input2 === leftpedestal) {
    input1.hide()
    input3.show()
    input3.x = -37
    input3.y = 0
    input1.innerHTML = "ontheleft"
  }
  if (input2 === rightpedestal) {
    input1.hide()
    input3.show()
    input3.x = 37
    input3.innerHTML = "ontheright"
    input3.y = 0
  }
}

//macro drag and drop function
var macrodd = (input1, input2, input3, input4, input5) => {
  //drag function
  if ((input1.mouseOver || input1.distanceTo(project.mouseX, project.mouseY) < 50) && project.mouseDown) {
    dragto(input1)
    currentlydragging = input2
  }
  //drops at right pedestal
  if (input1.distanceTo(rightpedestal) < 40 && !project.mouseDown) {
    drop(input1, rightpedestal, input3)
    ontheright = input2
    currentlydragging = null
  }
  //drops at left pedestal
  if (input1.distanceTo(leftpedestal) < 40 && !project.mouseDown) {
    drop(input1, leftpedestal, input4)
    ontheleft = input2
    currentlydragging = null
  }
  //if not close enough to either pedestal, returns the monster home
  if (input1.distanceTo(rightpedestal) > 40 && (input1.distanceTo(leftpedestal) > 40) && !(input1.touching(input4)) && !(project.mouseDown)) {
    sendhome(input1, input5, input4)
    currentlydragging = null
  }
}

//all of these separate lines of code were necessary to fix a glitch wherein you could drag two monsters simultaneously
project.forever(() => {
  if ((currentlydragging != "bandw") && (currentlydragging != "blue") && (currentlydragging != "green") && (currentlydragging != "orange") && (currentlydragging != "purple") && (currentlydragging != "red")) {
    macrodd(blackstanding, "black", blackright, blackleft, blackhome)
  }
  if ((currentlydragging != "black") && (currentlydragging != "blue") && (currentlydragging != "green") && (currentlydragging != "orange") && (currentlydragging != "purple") && (currentlydragging != "red")) {
    macrodd(bandwstanding, "bandw", bandwright, bandwleft, bandwhome)
  }
  if ((currentlydragging != "black") && (currentlydragging != "bandw") && (currentlydragging != "green") && (currentlydragging != "orange") && (currentlydragging != "purple") && (currentlydragging != "red")) {
    macrodd(bluestanding, "blue", blueright, blueleft, bluehome)
  }
  if ((currentlydragging != "black") && (currentlydragging != "bandw") && (currentlydragging != "blue") && (currentlydragging != "orange") && (currentlydragging != "purple") && (currentlydragging != "red")) {
    macrodd(greenstanding, "green", greenright, greenleft, greenhome)
  }
  if ((currentlydragging != "black") && (currentlydragging != "bandw") && (currentlydragging != "blue") && (currentlydragging != "green") && (currentlydragging != "purple") && (currentlydragging != "red")) {
    macrodd(orangestanding, "orange", orangeright, orangeleft, orangehome)
  }
  if ((currentlydragging != "black") && (currentlydragging != "bandw") && (currentlydragging != "blue") && (currentlydragging != "green") && (currentlydragging != "orange") && (currentlydragging != "red")) {
    macrodd(purplestanding, "purple", purpleright, purpleleft, purplehome)
  }
  if ((currentlydragging != "black") && (currentlydragging != "bandw") && (currentlydragging != "blue") && (currentlydragging != "green") && (currentlydragging != "orange") && (currentlydragging != "purple")) {
    macrodd(redstanding, "red", redright, redleft, redhome)
  }
})

//this is the red button that you click to shake hands
var shakebutton = new project.Rectangle({
  project: project,
  width: 80,
  height: project.height / 30,
  color: "#DC2222",
  y: -75,
  x: 0
})
var shaketext = new project.Text({
  project: project,
  text: () => "shake hands!",
  y: -75,
  color: "white"
})

//this function controls the shaking
var shake = (input1, input2, input3, input4) => {
  project.after(2.5, "seconds", () => {
    input1.setImageURL(input2)
  })
  project.after(2.25, "seconds", () => {
    input1.setImageURL(input3)
  })
  project.after(2, "seconds", () => {
    input1.setImageURL(input2)
  })
  project.after(1.75, "seconds", () => {
    input1.setImageURL(input3)
  })
  project.after(1.5, "seconds", () => {
    input1.setImageURL(input2)
  })
  project.after(1.25, "seconds", () => {
    input1.setImageURL(input3)
  })
  project.after(1, "seconds", () => {
    input1.setImageURL(input2)
  })
  project.after(0.75, "seconds", () => {
    input1.setImageURL(input3)
  })
  project.after(0.5, "seconds", () => {
    input1.setImageURL(input2)
  })
  project.after(0.25, "seconds", () => {
    input1.setImageURL(input3)
  })
  project.after(2.75, "seconds", () => {
    input1.setImageURL(input4)
  })
}

//this is the yellow button that clears the pedestals
var sendbutton = new project.Rectangle({
  project: project,
  color: "#ffe900",
  width: 150,
  height: 20,
  x: 0,
  y: -100
})
var sendtext = new project.Text({
  project: project,
  text: () => "never mind - send us back!",
  x: 0,
  y: -100
})

//this function returns the monsters home
var sendhome = (input1, input2, input3) => {
  input3.hide()
  input1.show()
  input1.x = input2.x - 10
  input1.y = project.maxY - 60
}

//this controls what happens when you click the yellow button
sendbutton.onMouseDown(() => {
  if (ontheleft === "black") {
    sendhome(blackstanding, blackhome, blackleft)
  }
  if (ontheright === "black") {
    sendhome(blackstanding, blackhome, blackright)
  }
  if (ontheleft === "bandw") {
    sendhome(bandwstanding, bandwhome, bandwleft)
  }
  if (ontheright === "bandw") {
    sendhome(bandwstanding, bandwhome, bandwright)
  }
  if (ontheleft === "blue") {
    sendhome(bluestanding, bluehome, blueleft)
  }
  if (ontheright === "blue") {
    sendhome(bluestanding, bluehome, blueright)
  }
  if (ontheright === "green") {
    sendhome(greenstanding, greenhome, greenright)
  }
  if (ontheleft === "green") {
    sendhome(greenstanding, greenhome, greenleft)
  }
  if (ontheright === "orange") {
    sendhome(orangestanding, orangehome, orangeright)
  }
  if (ontheleft === "orange") {
    sendhome(orangestanding, orangehome, orangeleft)
  }
  if (ontheright === "purple") {
    sendhome(purplestanding, purplehome, purpleright)
  }
  if (ontheleft === "purple") {
    sendhome(purplestanding, purplehome, purpleleft)
  }
  if (ontheright === "red") {
    sendhome(redstanding, redhome, redright)
  }
  if (ontheleft === "red") {
    sendhome(redstanding, redhome, redleft)
  }
})

//eliminated a lot of code
var macroshake = (input1, input2, input3, input4, input5, input6) => {
  shake(input1, input2, input3, input4)
  project.after(3.5, "seconds", () => {
    sendhome(input5, input6, input1)
  })
}

shakebutton.onMouseDown(() => {
  //first checks that there are two monsters
  //then checks other variables to make sure that these specific monsters haven't already shaken hands
  //if everything checks out, they shake, and then increase the tally by one before returning home
  if ((ontheleft === null && ontheright != null) || (ontheright === null && ontheleft != null)) {
    onlyonefunction()
  } else {
    if (ontheleft === "black") {
      if ((ontheright === "bandw" && blackandbandw === "done") || (ontheright === "blue" && blackandblue === "done") || (ontheright === "green" && blackandgreen === "done") || (ontheright === "orange" && blackandorange === "done") || (ontheright === "purple" && blackandpurple === "done") || (ontheright === "red" && blackandred === "done")) {
        donefunction()
        sendhome(blackstanding, blackhome, blackleft)
      } else {
        macroshake(blackleft, blackld, blacklu, blacklefturl, blackstanding, blackhome)
        blackshakes += 1
      }
    }
    if (ontheright === "black") {
      if ((ontheleft === "bandw" && blackandbandw === "done") || (ontheleft === "blue" && blackandblue === "done") || (ontheleft === "green" && blackandgreen === "done") || (ontheleft === "orange" && blackandorange === "done") || (ontheleft === "purple" && blackandpurple === "done") || (ontheleft === "red" && blackandred === "done")) {
        donefunction()
        sendhome(blackstanding, blackhome, blackright)
      } else {
        macroshake(blackright, blackrd, blackru, blackrighturl, blackstanding, blackhome)
        blackshakes += 1
      }
    }
    if (ontheleft === "bandw") {
      if ((ontheright === "black" && blackandbandw === "done") || (ontheright === "blue" && blueandbandw === "done") || (ontheright === "green" && bandwandgreen === "done") || (ontheright === "orange" && bandwandorange === "done") || (ontheright === "purple" && bandwandpurple === "done") || (ontheright === "red" && bandwandred === "done")) {
        donefunction()
        sendhome(bandwstanding, bandwhome, bandwleft)
      } else {
        macroshake(bandwleft, bandwld, bandwlu, bandwlefturl, bandwstanding, bandwhome)
        bandwshakes += 1
      }
    }
    if (ontheright === "bandw") {
      if ((ontheleft === "black" && blackandbandw === "done") || (ontheleft === "blue" && blueandbandw === "done") || (ontheleft === "green" && bandwandgreen === "done") || (ontheleft === "orange" && bandwandorange === "done") || (ontheleft === "purple" && bandwandpurple === "done") || (ontheleft === "red" && bandwandred === "done")) {
        donefunction()
        sendhome(bandwstanding, bandwhome, bandwright)
      } else {
        macroshake(bandwright, bandwrd, bandwru, bandwrighturl, bandwstanding, bandwhome)
        bandwshakes += 1
      }
    }
    if (ontheleft === "blue") {
      if ((ontheright === "black" && blackandblue === "done") || (ontheright === "bandw" && blueandbandw === "done") || (ontheright === "green" && blueandgreen === "done") || (ontheright === "orange" && blueandorange === "done") || (ontheright === "purple" && blueandpurple === "done") || (ontheright === "red" && blueandred === "done")) {
        donefunction()
        sendhome(bluestanding, bluehome, blueleft)
      } else {
        macroshake(blueleft, blueld, bluelu, bluelefturl, bluestanding, bluehome)
        blueshakes += 1
      }
    }
    if (ontheright === "blue") {
      if ((ontheleft === "black" && blackandblue === "done") || (ontheleft === "bandw" && blueandbandw === "done") || (ontheleft === "green" && blueandgreen === "done") || (ontheleft === "orange" && blueandorange === "done") || (ontheleft === "purple" && blueandpurple === "done") || (ontheleft === "red" && blackandred === "done")) {
        donefunction()
        sendhome(bluestanding, bluehome, blueright)
      } else {
        macroshake(blueright, bluerd, blueru, bluerighturl, bluestanding, bluehome)
        blueshakes += 1
      }
    }
    if (ontheright === "green") {
      if ((ontheleft === "black" && blackandgreen === "done") || (ontheleft === "bandw" && bandwandgreen === "done") || (ontheleft === "blue" && blueandgreen === "done") || (ontheleft === "orange" && greenandorange === "done") || (ontheleft === "purple" && greenandpurple === "done") || (ontheleft === "red" && greenandred === "done")) {
        donefunction()
        sendhome(greenstanding, greenhome, greenright)
      } else {
        macroshake(greenright, greenrd, greenru, greenrighturl, greenstanding, greenhome)
        greenshakes += 1
      }
    }
    if (ontheleft === "green") {
      if ((ontheright === "black" && blackandgreen === "done") || (ontheright === "bandw" && bandwandgreen === "done") || (ontheright === "blue" && blueandgreen === "done") || (ontheright === "orange" && greenandorange === "done") || (ontheright === "purple" && greenandpurple === "done") || (ontheright === "red" && greenandred === "done")) {
        donefunction()
        sendhome(greenstanding, greenhome, greenleft)
      } else {
        macroshake(greenleft, greenld, greenlu, greenlefturl, greenstanding, greenhome)
        greenshakes += 1
      }
    }
    if (ontheright === "orange") {
      if ((ontheleft === "black" && blackandorange === "done") || (ontheleft === "bandw" && bandwandorange === "done") || (ontheleft === "blue" && blueandorange === "done") || (ontheleft === "green" && greenandorange === "done") || (ontheleft === "purple" && orangeandpurple === "done") || (ontheleft === "red" && orangeandred === "done")) {
        donefunction()
        sendhome(orangestanding, orangehome, orangeright)
      } else {
        macroshake(orangeright, orangerd, orangeru, orangerighturl, orangestanding, orangehome)
        orangeshakes += 1
      }
    }
    if (ontheleft === "orange") {
      if ((ontheright === "black" && blackandorange === "done") || (ontheright === "bandw" && bandwandorange === "done") || (ontheright === "blue" && blueandorange === "done") || (ontheright === "green" && greenandorange === "done") || (ontheright === "purple" && orangeandpurple === "done") || (ontheright === "red" && orangeandred === "done")) {
        donefunction()
        sendhome(orangestanding, orangehome, orangeleft)
      } else {
        macroshake(orangeleft, orangeld, orangelu, orangelefturl, orangestanding, orangehome)
        orangeshakes += 1
      }
    }
    if (ontheright === "purple") {
      if ((ontheleft === "black" && blackandpurple === "done") || (ontheleft === "bandw" && bandwandpurple === "done") || (ontheleft === "blue" && blueandpurple === "done") || (ontheleft === "green" && greenandpurple === "done") || (ontheleft === "orange" && orangeandpurple === "done") || (ontheleft === "red" && purpleandred === "done")) {
        donefunction()
        sendhome(purplestanding, purplehome, purpleright)
      } else {
        macroshake(purpleright, purplerd, purpleru, purplerighturl, purplestanding, purplehome)
        purpleshakes += 1
      }
    }
    if (ontheleft === "purple") {
      if ((ontheright === "black" && blackandpurple === "done") || (ontheright === "bandw" && bandwandpurple === "done") || (ontheright === "blue" && blueandpurple === "done") || (ontheright === "green" && greenandpurple === "done") || (ontheright === "orange" && orangeandpurple === "done") || (ontheright === "red" && purpleandred === "done")) {
        donefunction()
        sendhome(purplestanding, purplehome, purpleleft)
      } else {
        macroshake(purpleleft, purpleld, purplelu, purplelefturl, purplestanding, purplehome)
        purpleshakes += 1
      }
    }
    if (ontheright === "red") {
      if ((ontheleft === "black" && blackandred === "done") || (ontheleft === "bandw" && bandwandred === "done") || (ontheleft === "blue" && blueandred === "done") || (ontheleft === "green" && greenandred === "done") || (ontheleft === "orange" && orangeandred === "done") || (ontheleft === "purple" && purpleandred === "done")) {
        donefunction()
        sendhome(redstanding, redhome, redright)
      } else {
        macroshake(redright, redrd, redru, redrighturl, redstanding, redhome)
        redshakes += 1
      }
    }
    if (ontheleft === "red") {
      if ((ontheright === "black" && blackandred === "done") || (ontheright === "bandw" && bandwandred === "done") || (ontheright === "blue" && blueandred === "done") || (ontheright === "green" && greenandred === "done") || (ontheright === "orange" && orangeandred === "done") || (ontheright === "purple" && purpleandred === "done")) {
        donefunction()
        sendhome(redstanding, redhome, redleft)
      } else {
        macroshake(redleft, redld, redlu, redlefturl, redstanding, redhome)
        redshakes += 1
      }
    }
  }
  project.after(3.6, "seconds", () => {
    setdones()
  })
})

//this is the final step to make sure that two monsters can't shake hands with each other twice
var setdones = () => {
  if ((ontheright === "black" && ontheleft === "bandw") || (ontheright === "bandw" && ontheleft === "black")) {
    blackandbandw = "done"
  }
  if ((ontheright === "black" && ontheleft === "blue") || (ontheright === "blue" && ontheleft === "black")) {
    blackandblue = "done"
  }
  if ((ontheright === "black" && ontheleft === "green") || (ontheright === "green" && ontheleft === "black")) {
    blackandgreen = "done"
  }
  if ((ontheright === "blue" && ontheleft === "bandw") || (ontheright === "bandw" && ontheleft === "blue")) {
    blueandbandw = "done"
  }
  if ((ontheright === "bandw" && ontheleft === "green") || (ontheright === "green" && ontheleft === "bandw")) {
    bandwandgreen = "done"
  }
  if ((ontheright === "blue" && ontheleft === "green") || (ontheright === "blue" && ontheleft === "green")) {
    blueandgreen = "done"
  }
  if ((ontheright === "black" && ontheleft === "orange") || (ontheright === "orange" && ontheleft === "black")) {
    blackandorange = "done"
  }
  if ((ontheright === "bandw" && ontheleft === "orange") || (ontheright === "orange" && ontheleft === "bandw")) {
    bandwandorange = "done"
  }
  if ((ontheright === "blue" && ontheleft === "orange") || (ontheright === "orange" && ontheleft === "blue")) {
    blueandorange = "done"
  }
  if ((ontheright === "green" && ontheleft === "orange") || (ontheright === "orange" && ontheleft === "green")) {
    greenandorange = "done"
  }
  if ((ontheright === "black" && ontheleft === "purple") || (ontheright === "purple" && ontheleft === "black")) {
    blackandpurple = "done"
  }
  if ((ontheright === "bandw" && ontheleft === "purple") || (ontheright === "purple" && ontheleft === "bandw")) {
    bandwandpurple = "done"
  }
  if ((ontheright === "blue" && ontheleft === "purple") || (ontheright === "purple" && ontheleft === "blue")) {
    blueandpurple = "done"
  }
  if ((ontheright === "green" && ontheleft === "purple") || (ontheright === "purple" && ontheleft === "green")) {
    greenandpurple = "done"
  }
  if ((ontheright === "orange" && ontheleft === "purple") || (ontheright === "purple" && ontheleft === "orange")) {
    orangeandpurple = "done"
  }
  if ((ontheright === "black" && ontheleft === "red") || (ontheright === "red" && ontheleft === "black")) {
    blackandred = "done"
  }
  if ((ontheright === "bandw" && ontheleft === "red") || (ontheright === "red" && ontheleft === "bandw")) {
    bandwandred = "done"
  }
  if ((ontheright === "blue" && ontheleft === "red") || (ontheright === "red" && ontheleft === "blue")) {
    blueandred = "done"
  }
  if ((ontheright === "green" && ontheleft === "red") || (ontheright === "red" && ontheleft === "green")) {
    greenandred = "done"
  }
  if ((ontheright === "orange" && ontheleft === "red") || (ontheright === "red" && ontheleft === "orange")) {
    orangeandred = "done"
  }
  if ((ontheright === "purple" && ontheleft === "red") || (ontheright === "red" && ontheleft === "purple")) {
    purpleandred = "done"
  }
  ontheright = null
  ontheleft = null
}
