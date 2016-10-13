"use strict";
var loseFlag = null;

window.onload = function() {

	document.getElementById("start").onclick = start;
	document.getElementById("end").onmouseover = end;
	
	var wall = document.querySelectorAll("div#maze div.boundary");
	for(var i = 0; i < wall.length; i++) {
		wall[i].onmouseover = endGame;
	}
	document.body.onmousemove = overBody;
};

function start() {
		document.getElementById("status").innerHTML = "Don't Touch the walls!";
		loseFlag = false;
		var wall = document.querySelectorAll("div#maze div.boundary");
		for(var i = 0; i < wall.length; i++) {
			wall[i].classList.remove("youlose");
		}

}

function end() {
	if(loseFlag === false) {
		document.getElementById("status").innerHTML = "A Winner is You!";
		loseFlag = null;
	}
}


function overBody(event) {
	if(loseFlag === false && event.target == document.body) {
		endGameCheat(event);
	}
}

function endGame(event) {
	if(loseFlag === false) {
		loseFlag = true;
		var lose = document.getElementById("status");
		lose.innerHTML = "You lose!";
		var wall = document.querySelectorAll("div#maze div.boundary");
		for (var i = 0; i < wall.length; i++) {
			wall[i].classList.add("youlose");
		}
	}
}



function endGameCheat(event) {
	if(loseFlag === false) {
		loseFlag = true;
		var lose = document.getElementById("status");
		lose.innerHTML = "CHEEEEEEEEEEEEEEEEEEEEEAAAATER. Don't go outside the box.";
		var wall = document.querySelectorAll("div#maze div.boundary");
		for (var i = 0; i < wall.length; i++) {
			wall[i].classList.add("youlose");
		}
	}
}