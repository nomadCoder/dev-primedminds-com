function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

//pre-load the monster animation images
if (document.images) {
		var img1 = new Image();
		var img2 = new Image();
		var img3 = new Image();
		var img4 = new Image();
		var img5 = new Image();
		var img6 = new Image();
		var img7 = new Image();
		var img8 = new Image();

		img1.src = "assets/soxmonster/monster01.png";
		img2.src = "assets/soxmonster/monster02.png";
		img3.src = "assets/soxmonster/monster03.png";
		img4.src = "assets/soxmonster/monster04.png";
		img5.src = "assets/soxmonster/monster05.png";
		img6.src = "assets/soxmonster/monster06.png";
		img7.src = "assets/soxmonster/monster07.png";
		img8.src = "assets/soxmonster/monster08.png";
	};

var app = new Vue({
	el: "#app",
	data: {
		colors: 4, //default number of colors is 4
		monsterSrc: "assets/soxmonster/monster01.png", //monster starting image

		MONSTER_IMAGES: [ //holds urls to animate the monster
			"assets/soxmonster/monster01.png",
			"assets/soxmonster/monster02.png",
			"assets/soxmonster/monster03.png",
			"assets/soxmonster/monster04.png",
			"assets/soxmonster/monster05.png",
			"assets/soxmonster/monster06.png",
			"assets/soxmonster/monster07.png",
			"assets/soxmonster/monster08.png"
		],

		SOCK_DATA: [ //holds colors and urls for the socks
			{color: "yellow", source: "assets/soxmonster/s-yellow.png"},
			{color: "blue", source: "assets/soxmonster/s-blue.png"},
			{color: "brown", source: "assets/soxmonster/s-brown.png"},
			{color: "green", source: "assets/soxmonster/s-green.png"},
			{color: "black", source: "assets/soxmonster/s-black.png"},
			{color: "orange", source: "assets/soxmonster/s-orange.png"},
			{color: "gray", source: "assets/soxmonster/s-gray.png"},
			{color: "pink", source: "assets/soxmonster/s-pink.png"},
			{color: "white", source: "assets/soxmonster/s-white.png"},
			{color: "purple", source: "assets/soxmonster/s-purple.png"},
			{color: "red", source: "assets/soxmonster/s-red.png"}
		],

		showingSocks: [], //when a sock is picked, it gets pushed into this array

		//data table starting data
		//3rd item in each array doesn't display, but holds the previous max draws --
		//that way, we can compare the new max with the previous, and only flash
		//the cell if they are not equal
		dataTable: [
			[1,	0,	0], 
			[2,	0,	0], 
			[3,	0,	0], 
			[4,	0,	0], 
			[5,	0,	0], 
			[6,	0,	0], 
			[7,	0,	0], 
			[8,	0,	0], 
			[9,	0,	0], 
			[10,	0,	0], 
			[11,	0,	0] 
		], 

		currentDraws: 0, //"You got a pair! it took X draws."

		step: 1, //used to track steps in the animation

		disabled: false,  //tells the "pick a sock" button whether to be disabled

		flash: 7,
	},

	methods: {
		
		//chooses a random sock and reacts to the sock
		chooseASock: function() {
			//select a random sock and get its data
			var chosenSockNumber = getRandomInt(0, this.colors - 1);
			var currentSock = this.SOCK_DATA[chosenSockNumber];

			//check for a match
			if (this.showingSocks.length > 0) {
				this.showingSocks.forEach(function(sock) {

					//if we have a match
					if (sock["color"] == currentSock.color) {
						this.disabled = true; //disable the "pick a sock" button
						currentSock.match = true; //highlight matching socks
						var numberOfDraws = this.showingSocks.length + 1;
						var currentMax = this.dataTable[this.colors - 1][2]; //get previous max

						//if current draws exceed previous max
						if (numberOfDraws > currentMax) {
							this.dataTable[this.colors - 1][1] = numberOfDraws; //add to the table

							// updated number flashes yellow:
							// we decrement flash from 7 to 1, and when flash is divisible by 2,
							// we add class ".flashing" to the <td>, so it flashes 3 times
							var flashAnim = setInterval(function(){
								this.flash--;
								if (this.flash < 2) {
									clearInterval(flashAnim);
									this.flash = 7;
									this.dataTable[this.colors - 1][2] = numberOfDraws; //update current max
								}
							}.bind(this), 350)
						}

						this.currentDraws = numberOfDraws; //so we can say "It took X draws"				
					}
				}.bind(this))
			};

			//add the sock image to the screen
			this.showingSocks.push(currentSock);
				
		},

		//animates the monster and runs chooseASock
		animateMonster: function() {

			//only run the function if the button is enabled
			//and if the animation is finished
			if (!this.disabled && this.step === 1) {
			
				var monsterAnim = setInterval(function() {
					this.monsterSrc = this.MONSTER_IMAGES[this.step];
					this.step++;

					//stop and reset the animation
					if (this.step > 7) {
						clearInterval(monsterAnim);
						this.step = 1;

						this.chooseASock();

					}
				}.bind(this), 100);
			}
		},

		//clears the socks and re-enables the button
		reset: function() {
			this.showingSocks = [];
			this.SOCK_DATA.forEach(function(sock) {
				sock["match"] = false;
			})
			this.disabled = false;
		}
	}	
})




