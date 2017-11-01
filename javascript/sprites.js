//Changing the sprites' animations
//position and transformations: rotation, scale, mirror
//move the mouse and click
//press and hold the up and down keys

var dot, bg, canvas;

$(function() {
    $("body").click(function(e) {
        if (e.target.id == "right_arrow") {
          // current hack
          window.location.href = "flow_video.html?s=PPV2";
        } else if (e.target.id == "left_arrow") {
          window.location.href = "flow_video.html?s=PPV1";
        } else if (e.target.id == "canvas") { 
           draw();
        } else { 
           //alert("Outside div");
        }
    });
})

function setup() {
  canvas = createCanvas(900,540);

  canvas.parent("#main");
  canvas.id("canvas");

  canvas.mousePressed(draw);
  
  //create a sprite and add the 3 animations
  dot = createSprite(100, 100, 5, 10);
  dot.scale = 0.07;
  
  //label, first frame, last frame
  //the addAnimation method returns the added animation
  //that can be store in a temporary variable to change parameters
  var myAnimation = dot.addAnimation("standing", "assets/bridges/WalkingMonster1.png");
  //offX and offY is the distance of animation from the center of the sprite
  //in this case since the animations have different heights i want to adjust
  //the vertical offset to make the transition between floating and moving look better
  // myAnimation.offY = 18;
  console.log('in sprites setup');
  var walking = dot.addAnimation("walking", "assets/bridges/WalkingMonster1.png", "assets/bridges/WalkingMonster2.png");
  
  var drowning = dot.addAnimation("drowning", "assets/bridges/WaterMonster1.png", "assets/bridges/WaterMonster2.png", "assets/bridges/WaterMonster3.png");
  
  // slow down the animation
  walking.frameDelay = 6;
  drowning.frameDelay = 12;

  bg = loadImage("assets/bridges/KonigMap.jpg"); 
}

// holds polygon variables that represent bridge locations
var water = [];

// bridge 1
var bridge1 = [];
bridge1.push({x: 0.25, y: 0.21667});
bridge1.push({x: 0.346, y: 0.20267}); 
bridge1.push({x: 0.447, y:0.236}); 
bridge1.push({x: 0.43, y: 0.37933});
bridge1.push({x: 0.358, y: 0.356});
bridge1.push({x: 0.283, y: 0.35267});

// bridge 2
var bridge2 = [];
bridge2.push({x: 0.536, y: 0.25799});
bridge2.push({x: 0.623, y: 0.296}); 
bridge2.push({x: 0.7256, y: 0.24833}); 
bridge2.push({x: 0.7896, y: 0.37267});
bridge2.push({x: 0.7316, y: 0.402667});
bridge2.push({x: 0.6796, y: 0.48433});
bridge2.push({x: 0.604, y: 0.486});
bridge2.push({x: 0.566, y: 0.42267});
bridge2.push({x: 0.508, y: 0.39933});

water.push(bridge1);
water.push(bridge2);

var time = -1; 
var last_x = -1;
var last_y = -1;
var x_direction, y_direction;

var path = [];

var on = true; 

function draw() {
  background(bg);

  if (on) {
    for(var i=0; i<water.length; i++) {
      fill('red');
      stroke('red');
      beginShape();
      var shape = water[i];
      for (var j=0; j<shape.length; j++) {
        vertex(shape[j].x, shape[j].y);
      }
      endShape(CLOSE);
    }
    on = false;
  }

  // the adjusted y position to give the position at the bottom of the feet
  var adjusted_y = dot.position.y + 50;

  // debug purposes - press space bar
  if (keyIsDown(32)) {
    console.log(dot.position.x/width, (adjusted_y)/height);
    console.log("path length", path.length);
  }

  // check if dot hit water 
  // positions are adjusted so that it checks the dot's *foot* position
  if ( isInWater(dot.position.x, adjusted_y) ) {
    // if just hit water, save the frameCount at which the water was hit 
    // also save the x and y at which you hit the water, and which direction you were walking
    if (time == -1) { 
      time = frameCount; 
      last_x = dot.position.x;
      last_y = dot.position.y;
      // save direction you were walking
      if (dot.velocity.x > 0) { x_direction = -1; } else { x_direction = 1; }
      if (dot.velocity.y > 0) { y_direction = -1; } else { y_direction = 1; }

      // if walked down into the water, adjust the position so it looks like drowning over water
      if (y_direction == -1) {
        dot.position.y += 70;
      }
    }

    // stop from moving 
    dot.velocity.x = 0; dot.velocity.y = 0;

    // change animation to drowning 
    dot.changeAnimation("drowning");

    // x frameCounts after hitting water initally, revert to position next to water, standing
    if ( (time+60) == frameCount) {
      dot.position.x = last_x + 10*x_direction;
      dot.position.y = last_y + 10*y_direction;
      time = -1; 
      dot.changeAnimation("standing");
    }

  } else if ( dot.position.x > width - 9 ) {
    // stop the dot from moving off the screen to the right side 
    dot.velocity.x = 0; 
    dot.position.x = width - 10;

  } else if ( dot.position.y > height - 9 ) {
    // stop the dot from moving off the screen to the bottom
    dot.velocity.y = 0;
    dot.position.y = height - 10;

  } else if ( dot.position.x < 9) {
    // stop the dot from moving off the screen to the left side
    dot.velocity.x = 0; 
    dot.position.x = 10;

  } else if ( dot.position.y < 9) {
    // stop the dot from moving off the screen to the top
    dot.velocity.y = 0; 
    dot.position.y = 10;

  } else {
    // if the mouse is pressed, move dot to that position
    if (mouseIsPressed) {
      dot.velocity.x = (mouseX - dot.position.x - 10);
      dot.velocity.y = (mouseY - dot.position.y - 10);
    } else {
      // up,down, left, and right arrow keys can also be used to move the dot
      // the keys are only used if dragging is not currently happening
      if(keyIsDown(UP_ARROW)) {
        dot.velocity.y = -5;
      } else if(keyIsDown(DOWN_ARROW)) {
        dot.velocity.y = 5;
      } else {
        dot.velocity.y = 0;
      }

      if(keyIsDown(LEFT_ARROW)) {
        dot.velocity.x = -5;
      } else if(keyIsDown(RIGHT_ARROW)) {
        dot.velocity.x = 5;
      } else {
        dot.velocity.x = 0;
      }
    }

    // add animations for walking 
    if ( dot.velocity.x < 0) {
      // flip to walk the other way
      dot.mirrorX(-1); 
    } else if ( dot.velocity.x > 0) {
      // flip back
      dot.mirrorX(1); 
    } 

    if (dot.velocity.x != 0 || dot.velocity.y != 0) {
      dot.changeAnimation("walking");
      // add the current position to the path
      // positions are adjusted down so that path is at feet
      path.push({x: dot.position.x, y: dot.position.y + 50});
    } else {
      dot.changeAnimation("standing");
    }
  }

  //draw the sprite
  drawSprites();

  // draw the path
  drawPath();
}

// draws the dot's path
function drawPath() {
  for (var i=1; i<path.length; i++) {
    smooth();
    strokeJoin(ROUND);
    strokeWeight(6);
    stroke('red');
    // if (i%5 > 0 && i%5 < 5) {
      line(path[i-1].x, path[i-1].y, path[i].x, path[i].y);
    // }
  }
}

// function that checks if dot walked into a water spot 
function isInWater(x, y) {
  var isInWater = false;

  for(k=0; k<water.length; k++){
    polygon = water[k];

    var j = polygon.length - 1;
    for(var i = 0; i < polygon.length; i++) {
      if (polygon[i].y * height < y && polygon[j].y * height >= y || polygon[j].y * height < y && polygon[i].y * height >= y ) {
        if (polygon[i].x * width + (y - polygon[i].y * height) / (polygon[j].y * height - polygon[i].y * height * polygon[j].x * width - polygon[i].x * width) < x ) {
          isInWater = !isInWater;
        }
      }
      j = i;
    }

    if (isInWater) {
      return true;
    }
  }

  // if reached here, not in water
  return false; 
}