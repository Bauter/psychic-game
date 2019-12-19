// GLOBAL variables 

let computerGuessArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let guessesLeft = 10;
let wins = 0;
let losses = 0;
let yourGuessesSoFar = [];

// used to generate a random number and assign to 'computerGuess', that number is then used to index the array and choose the string with the matching index number.
let computerGuess = [Math.floor(Math.random(computerGuessArray) * computerGuessArray.length)];
let computerPick = computerGuessArray[computerGuess];
console.log(computerPick);          // logging for accuracy


// FUNCTIONS

// user makes guess
document.onkeyup = function(event){
    let userGuess = event.key;

   // userGuess.toLowerCase;                //attempt to change keys to lower case
    
    yourGuessesSoFar.push(userGuess);

    console.log(userGuess);         // logging for accuracy

    
   // function used to reset variables, then generate a new random number, that is then used to index to the array and assign a new 'string' (letter).
    function reset() {
        guessesLeft = 10;
        yourGuessesSoFar = [];
        computerGuess = [Math.floor(Math.random(computerGuessArray) * computerGuessArray.length)];
        computerPick = computerGuessArray[computerGuess];
        console.log(computerPick);          // logging for accuracy
    };
    

    //Conditional statement used to score the game, user choice is compared to random computer choice, if equal the game is won, if unequal one guess is removed from 'guessesLeft'.
    //When guesses left = 0, one increment will be added to 'losses'. reset function invoked and game reset.
    if (userGuess === computerPick) {   
        wins++;
        alert('You WON! The letter was: ' +  computerPick + '. Play again?')
        reset();
    } else if (guessesLeft === 0) {
        losses++;
        alert('GAME OVER! ' + 'You lost: ' + losses + ' time(s), try again?');
        reset();
    } else {
        guessesLeft--;
    };

    console.log(wins);                      // logging for accuracy
    console.log(guessesLeft);               // logging for accuracy

    // manipulate the DOM by using 'wS', 'ls", 'gC', and 'gSF' variables to associate with specified <div> id's on HTML file. innerHTML method used to input text from string and global variable
    let wS = document.getElementById('winScore');
    wS.innerHTML = 'Wins: ' + wins;
    let lS = document.getElementById('lossesScore');
    lS.innerHTML = 'Losses: ' + losses;
    let gC = document.getElementById('guessesCounter');
    gC.innerHTML = 'Guesses Remaining: ' + guessesLeft;
    let gSF = document.getElementById('guessesSoFar');
    gSF.innerHTML = 'Letters guessed: ' + yourGuessesSoFar;
   
};


