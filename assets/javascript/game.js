// GLOBAL variables 

let computerGuessArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let guessesLeft = 10;
let wins = 0;
let losses = 0;
let yourGuessesSoFar = [];

// FUNCTIONS

// computerGuess picks from array (computer guess)
/*let computerGuess = (computerGuessArray) => {
    return computerGuessArray[Math.floor(Math.random() * computerGuessArray.length)];
    
};*/


// Reset function
/*let reset = () => {
    computerGuess(computerGuessArray);
    guessesLeft = 10;
    yourGuessesSoFar = '';
};*/

// user makes guess
document.onkeyup = function(event){
    let userGuess = event.key;

   // yourGuessesSoFar = event.key;
    yourGuessesSoFar.push(userGuess);

    console.log(userGuess); // logging for accuracy

    let computerGuess = (computerGuessArray) => {
        computerGuessArray[Math.floor(Math.random() * computerGuessArray.length)];
        
        console.log(computerGuess);
    };

    // logging for accuracy
   
    let reset = () => {
        computerGuess(computerGuessArray);
        guessesLeft = 10;
        yourGuessesSoFar = [];
    };

    if(userGuess === computerGuess) {     // change in score (wins and losses)
        wins++;
    } else {
        guessesLeft--;
    } if (guessesLeft === 0) {
        losses++;
        reset();
    };
    console.log(wins);                      // logging for accuracy
    console.log(guessesLeft);               // logging for accuracy

    // display choices in document
    let wS = document.getElementById('winScore');
    wS.innerHTML = 'Wins: ' + wins;
    let lS = document.getElementById('lossesScore');
    lS.innerHTML = 'Losses ' + losses;
    let gC = document.getElementById('guessesCounter');
    gC.innerHTML = 'Guesses Remaining ' + guessesLeft;
    let gSF = document.getElementById('guessesSoFar');
    gSF.innerHTML = 'Letters guessed so far ' + yourGuessesSoFar;
};


