var numSquares = 6;//default squares are six
var colors = genrateRandomColors(numSquares);//random colors for each square
var squares = document.querySelectorAll(".square");//list of squares
var pickedcolor = pickColor();//pick one of teh random color to display 
var colorDisplay = document.getElementById("colorDisplay");//location to display pickedcolor
var messageDisplay = document.getElementById("message");//location to display message
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

var modeButtons=document.querySelectorAll(".mode");//list of button with class mode

for(var i=0; i < modeButtons.length; i++){//right now there are only two buttons
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");//y
		this.classList.add("selected");//y
		this.textContent === "Easy" ? numSquares = 3: numSquares =6;//y
		reset();//y
	});//y
}//y

function reset(){
	colors = genrateRandomColors(numSquares);
	pickedcolor = pickColor();
	colorDisplay.textContent = pickedcolor+".";
	resetButton.textContent="New Colors";
	messageDisplay.textContent="";
	for (var i=0; i < squares.length; i++){//there are six squares
		if(colors[i]){	//if there is no color for a square, display will be none
			//if previous selection was three squares rest of three were reset to display = none.
			//squares display need to set back to block 
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
				squares[i].style.display ="none";
				//these squares with none display need to be reset to 'block'
		}
	}
	h1.style.background = "teal";
}//y
console.log(resetButton);
resetButton.addEventListener("click", function(){
	reset();
});

colorDisplay.textContent = pickedcolor +".";

for( i = 0; i < squares.length; i++){
	//give each square a color from color[].
	squares[i].style.backgroundColor = colors[i];
	//add click listners to squares and give call back function
	
	squares[i].addEventListener("click", function(){
	var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedcolor){
		//console.log("correct color");
		messageDisplay.textContent = "Congratualtions!";
		resetButton.textContent="Play Again";
		changeColors(clickedColor);
		h1.style.background=clickedColor;
			} else {
				this.style.backgroundColor = "teal" ;
				messageDisplay.textContent= "Try harder.";
	}
	});
}

function changeColors(color){
	//loop thorugh all colors and give all same color
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;	
	}
}

function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}


function genrateRandomColors(num){
var arr=[];
	for (var i =0; i<num; i++){
		arr.push(randomColor());
		}
	return arr ;
}

function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return ( "rgb(" +r+ ", "+g+ ", "+b+ ")");
}
