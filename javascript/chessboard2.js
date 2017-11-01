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

	return { button: button, text: text, buttonCircle1: buttonCircle1, buttonCircle2: buttonCircle2, shadowCircle1: shadowCircle1, shadowCircle2: shadowCircle2, shadowBox: shadowBox };
};

// create reset, remove, and delete buttons
var RESET = createButton(maxY - 35, "Reset");
var ADD_DOMINO = createButton(maxY - 210, "Add");
var REMOVE_DOMINO = createButton(maxY - 285, "Remove");
var REMOVE_SQUARE = createButton(maxY - 475, "Remove");
var REPLACE_SQUARE = createButton(maxY - 550, "Replace");

// section headings
var dominoES_TEXT = new Text({
	text: "Dominoes",
	size: 30,
	x: minX + 100,
	y: maxY - 150
});

var SQUARES_TEXT = new Text({
	text: "Squares",
	size: 30,
	x: minX + 100,
	y: maxY - 415
});

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
var SQ_SIDE = BOARD_HOLDER.width / 8;
var HALF_SQ_SIDE = SQ_SIDE / 2;

// the two colors for the chessboard
var YELLOW = "#FFE900";
var RED = "#DC2222";

// initialize square color, x, and y
var sqColor = YELLOW;
var sqX = BOARD_HOLDER.x - 300 + HALF_SQ_SIDE;
var sqY = BOARD_HOLDER.y + 300 - HALF_SQ_SIDE;

// create array to hold rows of board
var chessBoard = [[], [], [], [], [], [], [], []];

// fill in the chess board with squares
for (var i = 0; i < 8; i++) {
	for (var j = 0; j < 8; j++) {
		var sq = new Rectangle({
			color: sqColor,
			width: SQ_SIDE,
			height: SQ_SIDE,
			x: sqX,
			y: sqY
		});
		sq.originalColor = sq.color;
		chessBoard[i].push(sq);
		sqColor = sqColor == YELLOW ? RED : YELLOW;
		sqX += SQ_SIDE;
	}
	sqX = BOARD_HOLDER.x - 300 + HALF_SQ_SIDE;
	sqY -= SQ_SIDE;
	sqColor = sqColor == YELLOW ? RED : YELLOW;
}

var deactivatedSquares = [];

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
// each edge has one coordinate offset by 1 so they don't overlap with each other
var TOP_EDGE = new Line({
	x: LEFT_SIDE + 1,
	y: TOP_SIDE - 1,
	x1: RIGHT_SIDE,
	y1: TOP_SIDE - 1
});
var BOTTOM_EDGE = new Line({
	x: LEFT_SIDE,
	y: BOTTOM_SIDE + 1,
	x1: RIGHT_SIDE - 1,
	y1: BOTTOM_SIDE + 1
});
var LEFT_EDGE = new Line({
	x: LEFT_SIDE,
	y: TOP_SIDE,
	x1: LEFT_SIDE,
	y1: BOTTOM_SIDE + 1
});
var RIGHT_EDGE = new Line({
	x: RIGHT_SIDE,
	y: TOP_SIDE - 1,
	x1: RIGHT_SIDE,
	y1: BOTTOM_SIDE
});

// array to store the 'X's on deleted squares
var xs = [];

// assign mouseDown handler to all the squares, so that they can be deleted when clicked after 'delete square' is clicked
chessBoard.forEach(function (row) {
	row.forEach(function (sq) {
		sq.onMouseDown(function () {
			// only delete it in 'deleting' mode, if there are more than 2 squares left, and if the square hasn't already been deleted
			if (mode === "deleting" && deactivatedSquares.length < 62 && !deactivatedSquares.includes(sq) && !lainDominoes.some(function (domino) {
				return domino.touching(sq);
			})) {
				deactivatedSquares.push(sq);
				sq.bigX = new Text({
					text: "X",
					size: 90,
					x: sq.x,
					y: sq.y + 4
				});
				xs.push(sq.bigX);
			}
			// if in replacing mode, and the square is deactivated, replace it
			else if (mode === "replacing" && deactivatedSquares.includes(sq)) {
				sq.bigX.delete();
				xs.remove(sq.bigX);
				deactivatedSquares.remove(sq);
			}
		});
	});
});

// draw the domino
var domino = new Image({
	url: "./assets/chessboard/domino.png",
	width: SQ_SIDE * 2 - 2,
	height: SQ_SIDE - 2,
	brightness: 80
});

// this rectangle appears superimposed over the domino to make it look disabled when you can't place it
var disabledDomino = new Rectangle({
	width: SQ_SIDE * 2 - 2,
	height: SQ_SIDE - 2,
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
							domino.y = square.y + HALF_SQ_SIDE;
						}
						// hovering over bottom section of square => vertical angle downwards
						else if (mouseY <= square.y - square.height / 4 && !square.bottomEdge) {
							domino.angle = DOWN;
							domino.x = square.x;
							domino.y = square.y - HALF_SQ_SIDE;
						}
						// horizontal angle
						else {
							// hovering over right section of square => horizontal angle right
							if (mouseX >= square.x && !square.rightEdge) {
								domino.angle = RIGHT;
								domino.x = square.x + HALF_SQ_SIDE;
								domino.y = square.y;
							}
							// hovering over left section of square => horizontal angle left
							else if (mouseX < square.x && !square.leftEdge) {
								domino.angle = LEFT;
								domino.x = square.x - HALF_SQ_SIDE;
								domino.y = square.y;
							}
						}
						// turn grey if touching another domino or one of the deactivated squares
						if (lainDominoes.some(function (thing) { return thing.touching(domino); }) 
							|| deactivatedSquares.some(function (square) { return square.touching(domino); })) {
							disabledDomino.sendToFront();
							disabledDomino.show();
						} else {
							disabledDomino.hide();
						}
					}
				});
			});
		}
		// change cursor in other modes
		else if (mode === "removing") {
			if (lainDominoes.length > 0)
				document.body.style.cursor = "url('./assets/chessboard/minus.png'), auto";
			else
				document.body.style.cursor = "default";
		} else if (mode === "deleting") {
			document.body.style.cursor = "url('./assets/chessboard/minus.png'), auto";
		} else if (mode === "replacing") {
			if (deactivatedSquares.length > 0) document.body.style.cursor = "cell";else document.body.style.cursor = "default";
		}
	} else {
		if (RESET.button.mouseOver || ADD_DOMINO.button.mouseOver || REMOVE_DOMINO.button.mouseOver || REMOVE_SQUARE.button.mouseOver || REPLACE_SQUARE.button.mouseOver) document.body.style.cursor = "pointer";else document.body.style.cursor = "default";
	}
});

// click event handler to lay dominoes
// lay a full-opacity domino and create a new ghost domino
onMouseDown(function () {
	// place a domino on mousedown
	if (!disabledDomino.showing && BOARD_HOLDER.mouseOver) {
		if (mode === "adding") {
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
	}
});

// remove all dominoes when "reset" clicked
RESET.button.onMouseDown(function () {
	changeColor(RESET, [ADD_DOMINO, REMOVE_DOMINO, REMOVE_SQUARE, REPLACE_SQUARE]);
	mode = "resetting";
	lainDominoes.forEach(function (domino) {
		domino.delete();
	});
	lainDominoes = [];
	deactivatedSquares.forEach(function (sq) {
		sq.color = sq.originalColor;
	});
	xs.forEach(function (x) {
		x.delete();
	});
	xs = [];
	deactivatedSquares = [];
});

// button behavior

ADD_DOMINO.button.onMouseDown(function () {
	changeColor(ADD_DOMINO, [RESET, REMOVE_DOMINO, REMOVE_SQUARE, REPLACE_SQUARE]);
	mode = "adding";
});

// change button color when "remove" clicked; enter removing mode
REMOVE_DOMINO.button.onMouseDown(function () {
	changeColor(REMOVE_DOMINO, [RESET, ADD_DOMINO, REMOVE_SQUARE, REPLACE_SQUARE]);
	mode = "removing";
});

REMOVE_SQUARE.button.onMouseDown(function () {
	changeColor(REMOVE_SQUARE, [RESET, ADD_DOMINO, REMOVE_DOMINO, REPLACE_SQUARE]);
	mode = "deleting";
});

REPLACE_SQUARE.button.onMouseDown(function () {
	changeColor(REPLACE_SQUARE, [RESET, ADD_DOMINO, REMOVE_DOMINO, REMOVE_SQUARE]);
	mode = "replacing";
});

// hide the ghost domino when removing or deleting
forever(function () {
	if (BOARD_HOLDER.mouseOver) {
		if (mode !== "adding") {
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
		for (var part in REMOVE_DOMINO) {
			REMOVE_DOMINO[part].hide();
		}
	} else {
		for (var _part in REMOVE_DOMINO) {
			REMOVE_DOMINO[_part].show();
		}
	}
	// 'replace' square button only shows if there are any squares to replace
	if (deactivatedSquares.length < 1) {
		for (var _part2 in REPLACE_SQUARE) {
			REPLACE_SQUARE[_part2].hide();
		}
	} else {
		for (var _part3 in REPLACE_SQUARE) {
			REPLACE_SQUARE[_part3].show();
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
