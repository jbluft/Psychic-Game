var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guesses = 9;
var userGuesses;
var guessesSoFar = [];


var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	console.log(computerGuess);

	var reset = function() {	
  		guesses = 9;
  		guessesSoFar = [];
		}

	function initGame() {
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        console.log(computerGuess);
    }

document.onkeyup = function(event) {

	var userGuess = event.key;
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	
/*	console.log(userGuess);*/
	guessesSoFar.push(userGuess)
/*	console.log(guessesSoFar);*/

	if ((userGuess === computerGuess)) {
			wins++;
			reset();
			initGame();
		}

		else {
			guesses--;
		}

		if (guesses === 0) {
			losses++;
			reset();

	}

	var html = 
		"<p><h3>Guess what letter I\'m thinking of</h4></p>" + 
		"<p><h3>Wins: " + wins + "</h4></p>" + 
		"<p><h3>Losses: " + losses + "</h4></p>" + 
		"<p><h3>Guesses Left: " + guesses + "</h4></p>" + 
		"<p><h3>Guesses made so far: " + guessesSoFar + "</h4></p>";


	document.querySelector("#game").innerHTML = html;

}
