"use strict";

setBackdropColor("#F5F5F5");

// draws a button at (minX + 100, y), with textString as the button text
// returns and object where object.button is the main Rectangle of the button, and object.text is the Text object
function createButton(y, textString) {
	var shadowCircle1 = new Circle({
		radius: 25,
		color: "#BBB",
		x: minX + 35,
		y: y - 4
	});

	var shadowCircle2 = new Circle({
		radius: 25,
		color: "#BBB",
		x: minX + 166,
		y: y - 4
	});

	var shadowBox = new Rectangle({
		width: 125,
		height: 50,
		x: minX + 100,
		y: y - 4,
		color: "#BBB"
	});

	var buttonCircle1 = new Circle({
		radius: 25,
		color: "#f44336",
		x: minX + 35,
		y: y
	});

	var buttonCircle2 = new Circle({
		radius: 25,
		color: "#f44336",
		x: minX + 166,
		y: y
	});

	var button = new Rectangle({
		width: 125,
		height: 50,
		x: minX + 100,
		y: y,
		color: "#f44336"
	});

	var text = new Text({
		text: textString,
		x: button.x,
		y: y,
		size: 20,
		color: "white"
	});

	return { button: button, text: text, buttonCircle1: buttonCircle1, buttonCircle2: buttonCircle2, shadowBox: shadowBox, shadowCircle1: shadowCircle1, shadowCircle2: shadowCircle2 };
}

// create reset and remove buttons
var RESET = createButton(maxY - 100, "Reset");
var ADD = createButton(maxY - 200, "Add Domino");
var REMOVE = createButton(maxY - 300, "Remove Domino");
var mode = "resetting";

// rectangle to hold the chess board
var BOARD_HOLDER = new Rectangle({
	width: 600,
	height: 600,
	x: 50,
	color: "#F5F5F5"
});

// define the four sides of the board
var TOP_SIDE = BOARD_HOLDER.y + 300;
var BOTTOM_SIDE = BOARD_HOLDER.y - 300;
var LEFT_SIDE = BOARD_HOLDER.x - 300;
var RIGHT_SIDE = BOARD_HOLDER.x + 300;

// divide the width by 8 to find the width/height of each square on the board
var sqSide = BOARD_HOLDER.width / 8;
var halfSqSide = sqSide / 2;

// the two colors for the chessboard
var black = "#FFE900";
var white = "#DC2222";

// initialize square color, x, and y
var sqColor = black;
var sqX = BOARD_HOLDER.x - 300 + halfSqSide;
var sqY = BOARD_HOLDER.y + 300 - halfSqSide;

// create array to hold rows of board
var chessBoard = [[], [], [], [], [], [], [], []];

// fill in the chess board with squares
for (var i = 0; i < 8; i++) {
	for (var j = 0; j < 8; j++) {
		var sq = new Rectangle({
			color: sqColor,
			width: sqSide,
			height: sqSide,
			x: sqX,
			y: sqY
		});
		sq.originalColor = sq.color;
		chessBoard[i].push(sq);
		sqColor = sqColor == black ? white : black;
		sqX += sqSide;
	}
	sqX = BOARD_HOLDER.x - 300 + halfSqSide;
	sqY -= sqSide;
	sqColor = sqColor == black ? white : black;
}

// identify and color the deactivated corners
var CORNER1 = chessBoard[0][0];
var CORNER2 = chessBoard[7][7];
CORNER1.color = "#F5F5F5";
CORNER2.color = "#F5F5F5";

// identify the squares on the edges
chessBoard[0].forEach(function (square) {
	square.topEdge = true;
});
chessBoard[7].forEach(function (square) {
	square.bottomEdge = true;
});
chessBoard.forEach(function (row) {
	row[0].leftEdge = true;
	row[7].rightEdge = true;
});

// draw the borders on the chessboard
// top and bottom edges are offset by 1 so they dont get cut off by the edge of the canvas
var TOP_EDGE = new Line({
	x: LEFT_SIDE + sqSide,
	y: TOP_SIDE - 1,
	x1: RIGHT_SIDE,
	y1: TOP_SIDE - 1
});
var BOTTOM_EDGE = new Line({
	x: LEFT_SIDE,
	y: BOTTOM_SIDE + 1,
	x1: RIGHT_SIDE - sqSide,
	y1: BOTTOM_SIDE + 1
});
var LEFT_EDGE = new Line({
	x: LEFT_SIDE,
	y: TOP_SIDE - sqSide,
	x1: LEFT_SIDE,
	y1: BOTTOM_SIDE
});
var RIGHT_EDGE = new Line({
	x: RIGHT_SIDE,
	y: TOP_SIDE,
	x1: RIGHT_SIDE,
	y1: BOTTOM_SIDE + sqSide
});

// draw the borders for the deactivated squares
CORNER1.bottomEdge = new Line({
	x: CORNER1.x - halfSqSide,
	y: CORNER1.y - halfSqSide,
	x1: CORNER1.x + halfSqSide,
	y1: CORNER1.y - halfSqSide
});
CORNER1.rightEdge = new Line({
	x: CORNER1.x + halfSqSide,
	y: CORNER1.y + halfSqSide,
	x1: CORNER1.x + halfSqSide,
	y1: CORNER1.y - halfSqSide
});
CORNER2.topEdge = new Line({
	x: CORNER2.x - halfSqSide,
	y: CORNER2.y + halfSqSide,
	x1: CORNER2.x + halfSqSide,
	y1: CORNER2.y + halfSqSide
});
CORNER2.leftEdge = new Line({
	x: CORNER2.x - halfSqSide,
	y: CORNER2.y + halfSqSide,
	x1: CORNER2.x - halfSqSide,
	y1: CORNER2.y - halfSqSide
});

// draw the domino
var domino = new Image({
	url: "./assets/chessboard/domino.png",
	width: sqSide * 2 - 2,
	height: sqSide - 2,
	brightness: 80
});

// this rectangle appears superimposed over the domino to make it look disabled when you can't place it
var disabledDomino = new Rectangle({
	width: sqSide * 2 - 2,
	height: sqSide - 2,
	brightness: 50,
	color: "black",
	showing: false
});

// make the disabled domino always be in the same position as the main domino
forever(function () {
	disabledDomino.x = domino.x;
	disabledDomino.y = domino.y;
	disabledDomino.angle = domino.angle;
});

// create an array to hold the dominoes on the board
var lainDominoes = [];

// mouse movement handler
onMouseMove(function () {
	// if you mouseover the chessboard
	if (BOARD_HOLDER.mouseOver) {
		// in adding mode, move the ghost domino around, and line it up with the grid
		if (mode === "adding") {
			document.body.style.cursor = "cell";
			chessBoard.forEach(function (row, i) {
				row.forEach(function (square, j) {
					if (square.mouseOver) {
						// hovering over top section of square => vertical angle upwards
						if (mouseY >= square.y + square.height / 4 && !square.topEdge) {
							domino.angle = UP;
							domino.x = square.x;
							domino.y = square.y + halfSqSide;
						}
						// hovering over bottom section of square => vertical angle downwards
						else if (mouseY <= square.y - square.height / 4 && !square.bottomEdge) {
							domino.angle = DOWN;
							domino.x = square.x;
							domino.y = square.y - halfSqSide;
						}
						// horizontal angle
						else {
							// hovering over right section of square => horizontal angle right
							if (mouseX >= square.x && !square.rightEdge) {
								domino.angle = RIGHT;
								domino.x = square.x + halfSqSide;
								domino.y = square.y;
							}
							// hovering over left section of square => horizontal angle left
							else if (mouseX < square.x && !square.leftEdge) {
								domino.angle = LEFT;
								domino.x = square.x - halfSqSide;
								domino.y = square.y;
							}
						}
						// disable if touching another domino or one of the deactivated corners
						if (lainDominoes.some(function (thing) {
							return thing.touching(domino);
						}) || domino.touching(CORNER1) || domino.touching(CORNER2)) {
							disabledDomino.sendToFront();
							disabledDomino.show();
						} else {
							disabledDomino.hide();
						}
					}
				});
			});
		}
		// in other modes change the cursor
		else if (mode === "removing") {
			if (lainDominoes.length > 0)
				document.body.style.cursor = "url('./assets/chessboard/minus.png'), auto";
			else
				document.body.style.cursor = "default";
		} else if (mode === "resetting") {
			document.body.style.cursor = "default";
		}
	} else {
		if (RESET.button.mouseOver || REMOVE.button.mouseOver || ADD.button.mouseOver) document.body.style.cursor = "pointer";else document.body.style.cursor = "default";
	}
});

// click event handler to lay dominoes
// lay a full-opacity domino and create a new ghost domino
onMouseDown(function () {
	if (mode === "adding" && BOARD_HOLDER.mouseOver && !disabledDomino.showing) {
		var setDomino = domino;
		setDomino.brightness = 100;
		domino = new Image({
			url: "./assets/chessboard/domino.png",
			width: setDomino.width,
			height: setDomino.height,
			x: setDomino.x,
			y: setDomino.y,
			brightness: 80
		});
		domino.angle = setDomino.angle;
		lainDominoes.push(setDomino);
		setDomino.onMouseDown(function () {
			if (mode === "removing") {
				lainDominoes.remove(setDomino);
				setDomino.delete();
			}
		});
	}
});

// button behavior:

RESET.button.onMouseDown(function () {
	changeColor(RESET, [ADD, REMOVE]);
	mode = "resetting";
	lainDominoes.forEach(function (domino) {
		domino.delete();
	});
	lainDominoes = [];
});

ADD.button.onMouseDown(function () {
	changeColor(ADD, [RESET, REMOVE]);
	mode = "adding";
});

REMOVE.button.onMouseDown(function () {
	changeColor(REMOVE, [ADD, RESET]);
	mode = "removing";
});

// hide the ghost domino when removing
forever(function () {
	if (BOARD_HOLDER.mouseOver) {
		if (mode === "removing" || mode === "resetting") {
			domino.hide();
			disabledDomino.hide();
		} else domino.show();
	} else {
		domino.hide();
		disabledDomino.hide();
	}
});

forever(function () {
	// 'remove' domino button only shows if there are any dominoes to remove
	if (lainDominoes.length < 1) {
		for (var part in REMOVE) {
			REMOVE[part].hide();
		}
	} else {
		for (var part in REMOVE) {
			REMOVE[part].show();
		}
	}
});

// helper function to change the color of a clicked button to yellow, and all other buttons to red
function changeColor(button, otherButtons) {
	button.button.color = "#FFE900";
	button.buttonCircle1.color = "#FFE900";
	button.buttonCircle2.color = "#FFE900";
	button.text.color = "black";
	otherButtons.forEach(function (item) {
		item.button.color = "#f44336";
		item.buttonCircle1.color = "#f44336";
		item.buttonCircle2.color = "#f44336";
		item.text.color = "white";
	});
}
