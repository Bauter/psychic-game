# psychic-game

### What is this repo? ###

The purpose of this repo is to create a basic guessing game.

-The object is to have the computer select a random letter "a-z" and give the user 10 guesses to select the matching letter.

-If the user fails to select the matching letter, a 'losses' counter is applied, an alert pops up informing the player they have lost and asking if they would like to play again. Upon clicking out of the alert window via the 'ok' button, the game is reset, returning 'guesses left to 10', clearing out 'guesses so far', and the computer selects a new random letter. 
  
-If the user matches the computer guess, a "wins" counter is applied, an alert pops up informing the player they have won, displays the computer choice, and asks if they would like to play again. Upon clicking out of the alert window via the 'ok' button, the game is reset, returning 'guesses left to 10', clearing out 'guesses so far', and the computer selects a new random letter. 


Initially this project was designed for my "Web-dev coding boot-camp" as an entry level basic javascript project.

### Link to Live-pages ###

https://bauter.github.io/psychic-game/

### How was this project created? ###

##### Coding #####
-Coding was done using Visual Studio Code ("https://code.visualstudio.com/") a text editor can be downloaded from their website.

##### Layout #####
-The styling for this project was done linking in 'Bootstrap 4' via CDN ("https://getbootstrap.com/"), and making use of the jumbotron element. Slight bootstrap modifications were done to initial html class names. The link above can be used to find the CDN link to copy and paste in between your 'head' tags in your html file. for further explanation on how to use and style, please consult the 'documentation' (found on the nav bar).

##### Styling #####
-Local CSS file created and used to style text and background image. Linked in between 'head' tags and within an opening 'script' tag, the file path relative to the html file, and closed by a closing script tag. 

#### Javascript #####
-Javascript file was created to write the logic for the game. creating functions to:<br>
    1. Log user input via event.key<br>
    2. Generating a random computer choice using [Math.floor(Math.random) * array.length] and indexing into a defined array of strings, each string being a single letter in the alphabet. <br>
    3. Conditional else if statement was used to compare user choice to computer choice, based on the condition either the player wins and a wins counter is scored and reset. Or the player loses a guess counter until guess remaining equals zero, at which point the game is lost and reset.<br>
    4.Reset function created utilizing [Math.floor(Math.random) * array.length] and indexing into the array to select a new random letter, resetting the guesses left to 10, and clearing guesses so far to be empty. <br>
    5. DOM manipulation is then used to write the text strings and scores to the jumbotron container via document.getElementByIds.innerHTML.<br>

### Guidelines for Collaboration ###

-As I am still new to coding, and my initial projects will be used to create a portfolio to show to potential employers, i ask that no modifications are made at this time.

##### !However! #####

 -Any input to improve my coding would be GREATLY appreciated. I am not opposed to the files being pulled for the sake of modifying and using as an example to teach/explain alt. methods, better practice, etc. Again I would ask they not be pushed to the repo to modify the initial document, but instead be sent to me an some alt. way.

 --Thank you for taking the time to look over this 'README' file--