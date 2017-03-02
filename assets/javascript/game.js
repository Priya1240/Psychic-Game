var wins = 0;
var losses = 0;
var guessesLeft = 9;
var yourGuesses = "";
//var yourGuessesArr = [];
var psychicLetter;

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

function startGame() {
    psychicLetter = letters[Math.floor(Math.random() * letters.length)];

}

function resetGame() {
    wins = 0;
    losses = 0;
    guessesLeft = 9;
    yourGuesses = 0;

}


document.onkeyup = function() {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    //yourGuessesArr.push(yourGuesses);
    yourGuesses = userGuess + " " + yourGuesses; 
    startGame()

    //psychicLetter = letters[Math.floor(Math.random() * letters.length)];
    console.log("User Guess: ", userGuess);

    console.log("Computer Guess: ", psychicLetter);


    if (userGuess == psychicLetter) {
        wins++;
    } else {
        guessesLeft--;
    }
    console.log("Wins: ", wins);
    console.log("Guesses Left: ", guessesLeft);

    if (guessesLeft == 0) {
        losses++;
        guessesLeft = 9;
        console.log("Losses: ", losses);


    }

    if (losses == 5) {
        resetGame();
    }

    var html = "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses Left: " + guessesLeft + "</p>" +
        "<p>Your Guesses: " + yourGuesses + "</p>";

    document.querySelector("#game").innerHTML = html;

}
