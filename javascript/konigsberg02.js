// preload sprite images for better animation performance
if (document.images) {
  var walking1 = document.createElement("img");
  var walking2 = document.createElement("img");
  var water1 = document.createElement("img");
  var water2 = document.createElement("img");
  var water3 = document.createElement("img");

  var build1 = document.createElement("img");
  var build2 = document.createElement("img");
  var build3 = document.createElement("img");
  var build4 = document.createElement("img");
  var build5 = document.createElement("img");

  var bust1 = document.createElement("img");
  var bust2 = document.createElement("img");
  var bust3 = document.createElement("img");
  var bust4 = document.createElement("img");

  var cobblestones = document.createElement("img");
  var dynamite = document.createElement("img");

  walking1.src = "./assets/bridges/WalkingMonster1.png";
  walking2.src = "./assets/bridges/WalkingMonster2.png";
  water1.src = "./assets/bridges/WaterMonster1.png";
  water2.src = "./assets/bridges/WaterMonster2.png";
  water3.src = "./assets/bridges/WaterMonster3.png";

  build1.src = "./assets/bridges/build-bridge-01n.png";
  build2.src = "./assets/bridges/build-bridge-02n.png";
  build3.src = "./assets/bridges/build-bridge-03n.png";
  build4.src = "./assets/bridges/build-bridge-04n.png";
  build5.src = "./assets/bridges/build-bridge-05-n.png";

  bust1.src = "./assets/bridges/busted-bridge-01.png";
  bust2.src = "./assets/bridges/busted-bridge-02.png";
  bust3.src = "./assets/bridges/busted-bridge-03.png";
  bust4.src = "./assets/bridges/busted-bridge-04.png";

  cobblestones.src = "./assets/bridges/cobblestones.png";
  dynamite.src = "./assets/bridges/dynamite.png";
}

setBackdropURL("./assets/bridges/KonigMapGreen.jpg");

// monster sprite
var monster = new Image({
  url: "./assets/bridges/WalkingMonster1.png",
  height: 120,
  width: 100,
  x: minX + 75,
  y: maxY - 100
});

// walking animation frames
monster.walking = [
  "./assets/bridges/WalkingMonster1.png",
  "./assets/bridges/WalkingMonster2.png"
];

// drowning animation frames
monster.water = [
  "./assets/bridges/WaterMonster1.png",
  "./assets/bridges/WaterMonster2.png",
  "./assets/bridges/WaterMonster3.png"
];

var splash = new Audio("./assets/bridges/splash.mp3");
var scream = new Audio("./assets/bridges/scream.mp3");
var explosion = new Audio("./assets/bridges/explosion.mp3");

var tryAgain = createButton(0, -0.45 * height, "Try Again");

var bustBridge = {
  button: new Image({
    url: "./assets/bridges/dynamite.png",
    x: -150,
    y: -0.45 * height
  }),
};
bustBridge.highlight = new Rectangle({
  x: bustBridge.button.x,
  y: bustBridge.button.y,
  width: bustBridge.button.height,
  height: bustBridge.button.height,
  color: "yellow",
  brightness: 50,
  showing: false,
});

var buildBridge = {
  button: new Image({
    url: "./assets/bridges/cobblestones.png",
    x: 150,
    y: -0.45 * height
  }),
};
buildBridge.highlight = new Rectangle({
  x: buildBridge.button.x,
  y: buildBridge.button.y,
  width: bustBridge.button.height,
  height: bustBridge.button.height,
  color: "yellow",
  brightness: 50,
  showing: false
});

// holds polygon coordinates that represent water locations
// the x and y values are ratios relative to the width/height of the canvas
// so x = -0.5 is the left edge, x = 0.5 is the right edge etc.
// multiplying the coordinates by height and width give you the exact coords
var water = [
  // leftmost forked segment
  [
    { "x": -0.5, "y": 0.18 },
    { "x": -0.45, "y": 0.18 },
    { "x": -0.33, "y": 0.24 },
    { "x": -0.313, "y": 0.2 },
    { "x": -0.317, "y": 0.14 },
    { "x": -0.36, "y": 0.08 },
    { "x": -0.375, "y": 0 },
    { "x": -0.347, "y": -0.05 },
    { "x": -0.313, "y": -0.09 },
    { "x": -0.341, "y": -0.18 },
    { "x": -0.43, "y": -0.12 },
    { "x": -0.5, "y": -0.09 }
  ],
  // top segment second from the left
  [
    { "x": -0.25, "y": 0.28333 },
    { "x": -0.154, "y": 0.29733 },
    { "x": -0.053, "y": 0.264 },
    { "x": -0.08, "y": 0.14 },
    { "x": -0.142, "y": 0.165 },
    { "x": -0.217, "y": 0.16 }
  ],
  // top segment second from the right
  [
    { "x": 0.03, "y": 0.225 },
    { "x": 0.123, "y": 0.204 },
    { "x": 0.2256, "y": 0.25167 },
    { "x": 0.235, "y": 0.245 },
    { "x": 0.265, "y": 0.2 },
    { "x": 0.28, "y": 0.13 },
    { "x": 0.23, "y": 0.11 },
    { "x": 0.2, "y": 0.09 },
    { "x": 0.1796, "y": 0.03 },
    { "x": 0.104, "y": 0.03 },
    { "x": 0.066, "y": 0.1 },
    { "x": 0.008, "y": 0.11 }
  ],
  // rightmost top segment
  [
    { "x": 0.31, "y": 0.29 },
    { "x": 0.4, "y": 0.33 },
    { "x": 0.5, "y": 0.35 },
    { "x": 0.5, "y": 0.23 },
    { "x": 0.45, "y": 0.225 },
    { "x": 0.36, "y": 0.17 },
    { "x": 0.325, "y": 0.23 }
  ],
  // rightmost bottom segment
  [
    { "x": 0.345, "y": -0.18 },
    { "x": 0.5, "y": -0.15 },
    { "x": 0.5, "y": -0.3 },
    { "x": 0.4, "y": -0.285 },
    { "x": 0.32, "y": -0.29 }
  ],
  // bottom segment second from the right
  [
    { "x": -0.02, "y": -0.16 },
    { "x": 0.09, "y": -0.085 },
    { "x": 0.097, "y": -0.055 },
    { "x": 0.19, "y": -0.05 },
    { "x": 0.22, "y": -0.11 },
    { "x": 0.27, "y": -0.15 },
    { "x": 0.26, "y": -0.2 },
    { "x": 0.23, "y": -0.24 },
    { "x": 0.19, "y": -0.22 },
    { "x": 0.1, "y": -0.21 },
    { "x": -0.02, "y": -0.25 }
  ],
  // bottom segment second from the left
  [
    { "x": -0.228, "y": -0.13 },
    { "x": -0.1, "y": -0.145 },
    { "x": -0.12, "y": -0.25 },
    { "x": -0.25, "y": -0.225 }
  ]
];

// debugging purposes:
// uncomment the below code to display the above polygons on the screen
// water.forEach(function(section) {
//   section.forEach(function(segment, index) {
//     if (index !== section.length - 1) {
//       new Line({
//         color: "red",
//         width: 5,
//         x: segment.x * width,
//         y: segment.y * height,
//         x1: section[index + 1].x * width ,
//         y1: section[index + 1].y * height
//       });
//     }
//     else {
//       new Line({
//         color: "red",
//         width: 5,
//         x: segment.x * width,
//         y: segment.y * height,
//         x1: section[0].x * width,
//         y1: section[0].y * height
//       });
//     }
//   });
// });

// x and y coordinates for where the monster drowns and splashes in above water segments
var drowningPositions = [
  // leftmost forked segment
  [
    {x: -0.44, y: 0.05},
    {x: -0.33, y: -0.12}
  ],
  // first top segment
  [
    {x: -0.21, y: 0.24},
    {x: -0.1, y: 0.2}
  ],
  // second top segment
  [
    {x: 0.0325, y: 0.15},
    {x: 0.123, y: 0.15},
    {x: 0.25, y: 0.17}
  ],
  // rightmost top segment
  [
    {x: 0.36, y: 0.24},
    {x: 0.47, y: 0.27}
  ],
  // rightmost bottom segment
  [
    {x: 0.355, y: -0.23},
    {x: 0.47, y: -0.23}
  ],
  // 2nd from the right bottom segment
  [
    {x: 0.25, y: -0.18},
    {x: 0.123, y: -0.13},
    {x: 0, y: -0.2}
  ],

  // 3rd from the right bottom segment
  [
    {x: -0.12, y: -0.195},
    {x: -0.22, y: -0.195}
  ]
];

var bridges = [
  new Rectangle({
    x: -0.2746 * width,
    y: 0.2 * height,
    width: 0.0862 * width,
    height: 0.1394 * height,
    angle: 195
  }),
  new Rectangle({
    x: -0.0238 * width,
    y: 0.1895 * height,
    width: 0.09 * width,
    height: 0.1395 * height,
    angle: 165
  }),
  new Rectangle({
    x: 0.2919 * width,
    y: 0.2211 * height,
    width: 0.0731 * width,
    height: 0.1184 * height,
    angle: 210
  }),
  new Rectangle({
    x: 0.2919 * width,
    y: -0.2211 * height,
    width: 0.0769 * width,
    height: 0.1184 * height,
    angle: 160
  }),
  new Rectangle({
    x: -0.066 * width,
    y: -0.2 * height,
    width: 0.0846 * width,
    height: 0.1184 * height,
    angle: 170
  }),
  new Rectangle({
    x: -0.2814 * width,
    y: -0.1527 * height,
    width: 0.0923 * width,
    height: 0.1184 * height,
    angle: 160
  }),
  new Rectangle({
    x: 0.1462 * width,
    y: -0.0077 * height,
    width: 0.0923 * width,
    height: 0.0815 * height,
    angle: 180
  })
];

var bridgeFrames = {
  build: [
    "./assets/bridges/build-bridge-01n.png",
    "./assets/bridges/build-bridge-02n.png",
    "./assets/bridges/build-bridge-03n.png",
    "./assets/bridges/build-bridge-04n.png",
  ],
  bust: [
    "./assets/bridges/busted-bridge-01.png",
    "./assets/bridges/busted-bridge-02.png",
    "./assets/bridges/busted-bridge-03.png",
    "./assets/bridges/busted-bridge-04.png",
  ]
};

var bridgeImages = [
  new Image({
    x: -0.27 * width,
    y: 0.2 * height,
    url: bridgeFrames.bust[0],
    width: 0.18 * width,
    height: 0.2634 * height,
    angle: 190,
    showing: false
  }),
  new Image({
    x: -0.0193 * width,
    y: 0.1895 * height,
    url: bridgeFrames.bust[0],
    width: 0.18 * width,
    height: 0.2634 * height,
    angle: 160,
    showing: false
  }),
  new Image({
    x: 0.301 * width,
    y: 0.2137 * height,
    url: bridgeFrames.bust[0],
    width: 0.1619 * width,
    height: 0.2634 * height,
    angle: 201,
    showing: false
  }),
  new Image({
    x: 0.29 * width,
    y: -0.22 * height,
    url: bridgeFrames.bust[0],
    width: 0.18 * width,
    height: 0.2634 * height,
    angle: -20,
    showing: false
  }),
  new Image({
    x: -0.068 * width,
    y: -0.1895 * height,
    url: bridgeFrames.bust[0],
    width: 0.18 * width,
    height: 0.2634 * height,
    angle: -365,
    showing: false
  }),
  new Image({
    x: -0.2724 * width,
    y: -0.1527 * height,
    url: bridgeFrames.bust[0],
    width: 0.2053 * width,
    height: 0.2634 * height,
    angle: 155,
    showing: false
  }),
  new Image({
    x: 0.1417 * width,
    y: -0.013 * height,
    url: bridgeFrames.bust[0],
    width: 0.1 * width,
    height: 0.2266 * height,
    angle: 90,
    showing: false
  })
];

var blankBridge = "./assets/bridges/build-bridge-05-n.png";

// these are the new bridges that the player can add
var extraBridges = [
  // in the water segment second from the left on the top
  new Image({
    url: blankBridge,
    width: 0.1 * width,
    height: 0.19 * height,
    x: -0.1531 * width,
    y: 0.2274 * height,
    angle: -5
  }),
  // left half of the water segment second from the right on the top
  new Image({
    url: blankBridge,
    width: 0.08 * width,
    height: 0.19 * height,
    x: 0.077 * width,
    y: 0.1531 * height,
    angle: -20
  }),
  // right half of the water segment second from the right on the top
  new Image({
    url: blankBridge,
    width: 0.08 * width,
    height: 0.22 * height,
    x: 0.2 * width,
    y: 0.1642 * height,
    angle: 25
  }),
  // in the rightmost top segment
  new Image({
    url: blankBridge,
    width: 0.1 * width,
    height: 0.19 * height,
    x: 0.4154 * width,
    y: 0.2695 * height,
    angle: 15
  }),
  // in the rightmost bottom segment
  new Image({
    url: blankBridge,
    width: 0.1 * width,
    height: 0.18 * height,
    x: 0.4154 * width,
    y: -0.23 * height,
  }),
  // right half of the water segment second from the right on the bottom
  new Image({
    url: blankBridge,
    width: 0.08 * width,
    height: 0.22 * height,
    x: 0.2 * width,
    y: -0.17 * height,
    angle: -30
  }),
  // left half of the water segment second from the right on the bottom
  new Image({
    url: blankBridge,
    width: 0.1 * width,
    height: 0.18 * height,
    x: 0.05 * width,
    y: -0.175 * height,
    angle: 10
  }),
  // in the segment second from the left on the bottom
  new Image({
    url: blankBridge,
    width: 0.08 * width,
    height: 0.18 * height,
    x: -0.17 * width,
    y: -0.2 * height,
    angle: -10
  }),
  new Image({
    url: blankBridge,
    width: 0.08 * width,
    height: 0.23 * height,
    x: -0.3691 * width,
    y: -0.0841 * height,
    angle: -40
  }),
];

bridges.forEach(function(bridge, index) {
  bridge.touched = false;
  bridge.active = true;
  bridge.brightness = 0;
  bridge.onMouseDown(function() {
    if (bridge.active) {
      if (destroying && !bridge.destroyed) {
        runDestroyAnimation(bridgeImages[index]);
        bridge.destroyed = true;
      }
      else if (building && bridge.destroyed) {
        runRebuildAnimation(bridgeImages[index]);
        bridge.destroyed = false;
      }
    }
  });
});

var extraBridgeImages = extraBridges.map(function(bridge) {
  return new Image({
    x: bridge.x,
    y: bridge.y,
    url: bridgeFrames.bust[0],
    width: bridge.width * 1.9,
    height: bridge.height * 1.4,
    angle: bridge.angle,
    showing: false
  });
});

var extraBridgeBoundaries = extraBridgeImages.map(function(bridge) {
  return new Rectangle({
    x: bridge.x,
    y: bridge.y,
    width: bridge.width * 0.35,
    height: bridge.height * 0.75,
    brightness: 0,
    angle: bridge.angle
  });
});

extraBridges.forEach(function(bridge, index) {
  bridge.active = true;
  bridge.built = false;
  bridge.brightness = 0;
  bridge.destroyed = false;
  bridge.touched = false;

  bridge.onMouseDown(function() {
    if (bridge.active) {
      if (building && !bridge.built) {
        runBuildAnimation(extraBridgeImages[index], bridge);
        bridge.built = true;
        bridge.destroyed = false;
        bridges.push(bridge);
      }
      else if (destroying && bridge.built) {
        runDestroyAnimation(extraBridgeImages[index]);
        bridge.built = false;
        bridge.destroyed = true;
      }
    }
  });
});

function runDestroyAnimation(bridgeImage) {
  bridgeImage.setImageURL(bridgeFrames.bust[0]);
  bridgeImage.show();
  explosion.play();
  after(0.4, "seconds", function() {
    bridgeImage.setImageURL(bridgeFrames.bust[1]);
    after(0.4, "seconds", function() {
      bridgeImage.setImageURL(bridgeFrames.bust[2]);
      after(0.4, "seconds", function() {
        bridgeImage.setImageURL(bridgeFrames.bust[3]);
      });
    });
  });
}

function runRebuildAnimation(bridgeImage) {
  bridgeImage.hide();
  bridgeImage.setImageURL(bridgeFrames.build[0]);
  bridgeImage.show();
  after(0.4, "seconds", function() {
    bridgeImage.setImageURL(bridgeFrames.build[1]);
    after(0.4, "seconds", function() {
      bridgeImage.setImageURL(bridgeFrames.build[2]);
      after(0.4, "seconds", function() {
        bridgeImage.setImageURL(bridgeFrames.build[3]);
        after(0.4, "seconds", function() {
          bridgeImage.hide();
        });
      });
    });
  });
}

function runBuildAnimation(bridgeImage, bridge) {
  bridgeImage.hide();
  bridgeImage.setImageURL(bridgeFrames.build[0]);
  bridgeImage.show();
  after(0.4, "seconds", function() {
    bridgeImage.setImageURL(bridgeFrames.build[1]);
    after(0.4, "seconds", function() {
      bridgeImage.setImageURL(bridgeFrames.build[2]);
      after(0.4, "seconds", function() {
        bridgeImage.setImageURL(bridgeFrames.build[3]);
        after(0.4, "seconds", function() {
          bridgeImage.hide();
          bridge.brightness = 100;
        });
      });
    });
  });
}


// invisible sprite for detecting what the monster's feet are touching, and drawing the path
var monsterFeet = new Rectangle({
  width: 10,
  height: 5,
  x: monster.x,
  y: monster.y - 40,
  brightness: 0
});

monsterFeet.penColor = "red";
monsterFeet.penWidth = "5";

// records the full history of monsterFeet locations so the pen can draw them
var fullHistory = [];

// this hack makes it possible for the pen to appear over some sprites but below other sprites
// for example, the pen drawing is always under the monster, but it's above the extra bridges
ready(function() {
  var proj = monster.project;
  var spCtx = proj._spriteContext;

  function renderSprite(sprite) {
    sprite._render(spCtx);
  }

  proj._renderSprites = function() {
    spCtx.clearRect(0, 0, proj.width, proj.height);
    bridgeImages.forEach(renderSprite);
    extraBridges.forEach(renderSprite);
    extraBridgeImages.forEach(renderSprite);
    extraBridgeBoundaries.forEach(renderSprite);
    if (!replace) {
      var lastCoords = coordHistory[historyCount % 3];
      var lastX = lastCoords.x;
      var lastY = lastCoords.y - 40;
      spCtx.beginPath();
      spCtx.moveTo(...proj.translateToCanvas(fullHistory[0].x, fullHistory[0].y));
      fullHistory.forEach(function(coord) {
        spCtx.lineTo(...proj.translateToCanvas(coord.x, coord.y));
      });
      spCtx.lineCap = "round";
      spCtx.strokeStyle = monsterFeet.penColor;
      spCtx.lineWidth = monsterFeet.penWidth;
      spCtx.stroke();
    }
    monster._render(spCtx);
    monsterFeet._render(spCtx);
    for (var part in tryAgain) {
      tryAgain[part]._render(spCtx);
    }
    for (part in bustBridge) {
      bustBridge[part]._render(spCtx);
    }
    for (part in buildBridge) {
      buildBridge[part]._render(spCtx);
    }
  };
});

var canMove = true;
var drowning = false;
var monsterMouseDown = false;
// remember the three most recent monster positions - this is useful for sending him backwards etc.
var coordHistory = [
  {},
  {},
  {}
];
var historyCount = 0;

monster.onMouseDown(function() {
  if (replace) {
    fullHistory = [];
    replace = false;
  }
  monsterMouseDown = true;
  // monsterFeet.pen = true;
});

monster.onMouseUp(function() {
  monsterMouseDown = false;
});


// monster movement
forever(function() {
  monster.sendToFront();
  monsterFeet.sendToFront();

  // keep the feet always at the feet
  monsterFeet.x = monster.x;
  monsterFeet.y = monster.y - 40;

  // don't let him go off screen
  if (monster.x > maxX) monster.x = maxX;
  if (monster.x < minX) monster.x = minX;
  if (monster.y > maxY) monster.y = maxY;
  if (monster.y < minY) monster.y = minY;

  // allow movement if not drowning and not trying to cross a deactivated bridge
  if (!drowning && canMove) {
    if (keysDown.includes("up")) {
      monster.y += 3;
    }
    if (keysDown.includes("right")) {
      monster.x += 3;
    }
    if (keysDown.includes("down")) {
      monster.y -= 3;
    }
    if (keysDown.includes("left")) {
      monster.x -= 3;
    }

    // turning pen on and off with keys or mouse
    if ( keysDown.includes("up")
      || keysDown.includes("right")
      || keysDown.includes("down")
      || keysDown.includes("left")
    ){
      // monsterFeet.pen = true;
    }
    else if (monsterMouseDown) {
      monster.x = mouseX;
      monster.y = mouseY;
      // monsterFeet.pen = true;
    }

    // if the monster isn't in the water, keep track of the three most recent 'safe' positions
    // sometimes the most recent 'safe' position isn't actually safe, so if we can go back
    // two positions, it's more sure to be out of the water
    if (!isInWater(monsterFeet.x, monsterFeet.y)) {
      trackHistory();
    }
    // if the monster is touching the water, make him 'drown' (unless replacing him)
    else if (!replace) {
      drown();
    }
  }
});

function trackHistory() {
  fullHistory.push({x: monsterFeet.x, y: monsterFeet.y});
  historyCount++;
  coordHistory[historyCount % 3].x = monster.x;
  coordHistory[historyCount % 3].y = monster.y;
}

// deactivate bridges when you go over them
forever(function() {
  bridges.forEach(function(bridge, index) {
    if (!drowning && !replace) {
      if (monsterFeet.touching(bridge)) {
        // if the bridge is active, remember the entry point and mark it 'touched'
        if (bridge.active && !bridge.destroyed) {
          if (!bridge.touched) {
            bridge.entry = {x: monsterFeet.x, y: monsterFeet.y};
          }
          bridge.touched = true;
        }
        // if it's not active, don't let the monster cross
        else {
          // monsterFeet.pen = false;
          monster.x = coordHistory[(historyCount - 2) % 3].x;
          monster.y = coordHistory[(historyCount - 2) % 3].y;
          canMove = false;
          monsterMouseDown = false;
          after(0.1, "seconds", function() { canMove = true; });
        }
      }
      // if he's not touching the bridge, but the bridge is marked 'touched', this means he has just
      // been touching the bridge, so check to see if he exited on the same side as he entered
      else if (bridge.touched) {
        bridge.touched = false;
        // all but the middle bridge are oriented vertically,
        // so check the y value of the entry point against the current y value
        if (index !== 6) {
          // entry: top; exit: bottom
          if (bridge.entry.y > bridge.y && monsterFeet.y < bridge.y) {
            bridge.active = false;
          }
          // entry: bottom; exit: top
          else if (bridge.entry.y < bridge.y && monsterFeet.y > bridge.y) {
            bridge.active = false;
          }
        }
        // middle bridge is oriented horizontally, so check the x values
        else {
          // entry: right; exit: left
          if (bridge.entry.x > bridge.x && monsterFeet.x < bridge.x) {
            bridge.active = false;
          }
          // entry: left; exit: right
          else if (bridge.entry.x < bridge.x && monsterFeet.x > bridge.x) {
            bridge.active = false;
          }
        }
      }
    }
  });
});

// walking animation
var costume = 0;
every(0.1, "seconds", function() {
  if (!drowning && (monsterMouseDown || keysDown.length > 0)) {
    monster.setImageURL(monster.walking[costume % 2]);
    costume++;
  }
});

// when "try again" is clicked, you can re-place the monster anywhere on the screen
var replace = false;
forever(function() {
  if (replace) {
    monster.x = mouseX;
    monster.y = mouseY;
  }
});

// 'try again' button behavior
tryAgain.button.onMouseDown(function() {
  document.body.style.cursor = "default";
  fullHistory = [];
  bridges.forEach(function(bridge) {
    if (!bridge.destroyed) {
      bridge.active = true;
    }
  });
  extraBridges.forEach(function(bridge) {
    if (bridge.built && !bridge.destroyed) {
      bridge.active = true;
    }
  });
  replace = true;
});



var destroying = false;
bustBridge.button.onMouseDown(function() {
  destroying = !destroying;
  building = false;
  buildBridge.highlight.hide();
  if (destroying) {
    document.body.style.cursor = "url('./assets/bridges/dynamite.png') 20 20, auto";
    bustBridge.highlight.show();
  }
  else {
    document.body.style.cursor = "default";
    bustBridge.highlight.hide();
  }
});

var building = false;
buildBridge.button.onMouseDown(function() {
  building = !building;
  destroying = false;
  bustBridge.highlight.hide();
  if (building) {
    document.body.style.cursor = "url('./assets/bridges/cobblestones.png') 20 20, auto";
    buildBridge.highlight.show();
  }
  else {
    document.body.style.cursor = "default";
    buildBridge.highlight.hide();
  }
});

// function that checks if the monster is in the water
function isInWater(x, y) {
  if (extraBridges.some(builtAndTouching)) return false;
  return water.some(function(polygon) {
    return inside({x: x / width, y: y / height}, polygon);
  });
}

function builtAndTouching(bridge, index) {
  return extraBridgeBoundaries[index].touching(monsterFeet) && bridge.built;
}

// function to determine if a point is inside a polygon. Source:
// https://github.com/substack/point-in-polygon
function inside(point, vs) {
  var x = point.x, y = point.y;

  var inside = false;
  for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
    var xi = vs[i].x, yi = vs[i].y;
    var xj = vs[j].x, yj = vs[j].y;

    var intersect = ((yi > y) != (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
    if (intersect) inside = !inside;
  }
  return inside;
}

function drown() {
  monsterMouseDown = false;
  drowning = true;
  // monsterFeet.pen = false;

  // get width/height ratios for the monster's position
  var x = monsterFeet.x / width;
  var y = monsterFeet.y / height;

  // make the monster drown at the appropriate water segment
  // rightmost forked
  if (x < -0.3) {
    if (monster.y > 0 && monster.x > -0.4 * width) {
      monster.x = drowningPositions[0][0].x * width;
      monster.y = drowningPositions[0][0].y * height;
    }
    else {
      monster.x = drowningPositions[0][1].x * width;
      monster.y = drowningPositions[0][1].y * height;
    }
    
  }
  else if (x < -0.03) {
    // top left
    if (y > 0) {
      if (monster.x < extraBridges[0].x) {
        monster.x = drowningPositions[1][0].x * width;
        monster.y = drowningPositions[1][0].y * height;
      }
      else {
        monster.x = drowningPositions[1][1].x * width;
        monster.y = drowningPositions[1][1].y * height;
      }
      
    }
    // bottom left
    else {
      if (monster.x > extraBridges[7].x) {
        monster.x = drowningPositions[6][0].x * width;
        monster.y = drowningPositions[6][0].y * height;
      }
      else {
        monster.x = drowningPositions[6][1].x * width;
        monster.y = drowningPositions[6][1].y * height;
      }
    }
  }
  else if (x < 0.29) {
    // top second from right
    if (y > -0.05) {
      if (monster.x < extraBridges[1].x) {
        monster.x = drowningPositions[2][0].x * width;
        monster.y = drowningPositions[2][0].y * height;
      }
      else if (monster.x > extraBridges[1].x && monster.x < extraBridges[2].x) {
        monster.x = drowningPositions[2][1].x * width;
        monster.y = drowningPositions[2][1].y * height;
      }
      else {
        monster.x = drowningPositions[2][2].x * width;
        monster.y = drowningPositions[2][2].y * height;
      }
    }
    // bottom second from right
    else {
      if (monster.x > extraBridges[5].x) {
        monster.x = drowningPositions[5][0].x * width;
        monster.y = drowningPositions[5][0].y * height;
      }
      else if (monster.x < extraBridges[5].x && monster.x > extraBridges[6].x) {
        monster.x = drowningPositions[5][1].x * width;
        monster.y = drowningPositions[5][1].y * height;
      }
      else {
        monster.x = drowningPositions[5][2].x * width;
        monster.y = drowningPositions[5][2].y * height;
      }
    }
  }
  else {
    // top right
    if (y > 0) {
      if (monster.x < extraBridges[3].x) {
        monster.x = drowningPositions[3][0].x * width;
        monster.y = drowningPositions[3][0].y * height;
      }
      else {
        monster.x = drowningPositions[3][1].x * width;
        monster.y = drowningPositions[3][1].y * height;
      }
      
    }
    // bottom right
    else {
      if (monster.x < extraBridges[4].x) {
        monster.x = drowningPositions[4][0].x * width;
        monster.y = drowningPositions[4][0].y * height;
      }
      else {
        monster.x = drowningPositions[4][1].x * width;
        monster.y = drowningPositions[4][1].y * height;
      }
      
    }
  }
  
  // play splash sound 
  splash.play();
  scream.play();

  // drowning animation
  var count = 0;
  var costume = 0;
  repeat(100, function() {
    if (count % 10 === 0) {
      monster.setImageURL(monster.water[costume % 3]);
      costume++;
    }
    count++;
    // after drowning, go back to the safest point from the coordinate history
  }, function() {
    drowning = false;
    monster.x = coordHistory[(historyCount - 2) % 3].x;
    monster.y = coordHistory[(historyCount - 2) % 3].y;
    monster.setImageURL(monster.walking[0]);
  });
}

// creates a red button in alignment with primed minds style guide
// returns an object of sprites that make up parts of the button
function createButton(x, y, textString) {
  return {
    shadowCircle1: new Circle({
      radius: 25,
      color: "#4fb13e",
      x: x - 65,
      y: y - 4
    }),
    shadowCircle2: new Circle({
      radius: 25,
      color: "#4fb13e",
      x: x + 66,
      y: y - 4
    }),
    shadowBox: new Rectangle({
      width: 125,
      height: 50,
      x: x,
      y: y - 4,
      color: "#4fb13e",
    }),
    buttonCircle1: new Circle({
      radius: 25,
      color: "#f44336",
      x: x - 65,
      y: y
    }),
    buttonCircle2: new Circle({
      radius: 25,
      color: "#f44336",
      x: x + 66,
      y: y
    }),
    button: new Rectangle({
      width: 125,
      height: 50,
      x: x,
      y: y,
      color: "#f44336"
    }),
    text: new Text({
      text: textString,
      x: x,
      y: y,
      size: 20,
      color: "white"
    })
  };
}
