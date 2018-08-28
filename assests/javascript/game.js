// Declare global variables
var newGuess;
var guessesArr = [];
var wins = 0;
var loses = 0;
var remaining = 9;
var computerChoices = ['a','b','c','d','e','f','g','h','i','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

// Get a random computer guess
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// Next, we give JavaScript a function to execute when onkeyup event fires.
document.onkeyup = function(event) {
    // assign new guess a variable
    newGuess = event.key; 
    // add the new guess to the array
    guessesArr.push(newGuess);

    if (computerGuess !== newGuess){
        remaining--;
        document.querySelector('#left').innerHTML = remaining;
        document.getElementById("guesses").innerHTML = guessesArr;  // print out the whole array
    }

    if (computerGuess === newGuess) {
        wins++;
        remaining = 9;
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]; // generates new computer guess
        // update the page content
        document.querySelector('#wins').innerHTML = wins;
        guessesArr.length = 0;                              // clears the guesses array
        document.querySelector('#left').innerHTML = remaining;
        document.querySelector('#guesses').innerHTML = guessesArr;
    }

    if ((remaining <= 0) || (guessesArr.length >= 9)) {
        loses++;
        document.querySelector('#loses').innerHTML = loses;
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        remaining = 9;
        guessesArr.length = 0;
        document.querySelector('#left').innerHTML = remaining;
        document.querySelector('#guesses').innerHTML = guessesArr;
    }
}