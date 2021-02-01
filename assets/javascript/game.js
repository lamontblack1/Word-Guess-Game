
const wordList = [
    {word: "beekeeper", hint: "A Profession"},
    {word: "megahertz", hint: "The more the better"},
    {word: "rhubarb", hint: "Good in a pie"},
    {word: "yachtsman", hint: "Dream job"},
    {word: "frazzled", hint: "Don't burn out!"},
    {word: "hyphen", hint: "Not an underscore"},
    {word: "foxglove", hint: "Humble flower"},
    {word: "vaporize", hint: "Knowing there is a z won't help"},
    {word: "thumbscrew", hint: "For torture"}
];

// Letters guessed array 
let lettersGuessed = [];
// start with 10 incorrect guesses 
let guessesRemaining = 10;
// to keep score 
let wordsGuessedCorrectly = 0;
// initialize for use during play
let currentWord = "";
let currentGuess = "";
let currentDisplay = "";
let wordListCounter = 0



startNewWord();

// *************************EVENT ACTIONS 
document.onkeyup = function(event) {
    var x = event.keyCode;
    // Make sure it is a letter 
    if ((x > 64) && (x < 91)) {
        
        for (let i = 0; i < array.currentWord; i++) {
            // loop through all letters and replace underscore with letter in currentGuess
            if (currentWord.charCodeAt(i) === event.key) {
            // do something with letter gif and display word
            }    
            // otherwise it is wrong, add it to incorrect guess array and display it
            else {

            }
            
    // This is where the first IF ends 
    }
  };

// ***************************FUNCTIONS
// Creates initial variables for guesses and underscores
function startNewWord() {
    lettersGuessed = [];
    guessesRemaining = 10;

    currentWord = wordList[wordListCounter].word
    currentWord = currentWord.toUpperCase()
    currentDisplay = ""
    for (let i = 0; i < currentWord.length; i++) {
        currentGuess = currentGuess + "_";
    }
    if (wordListCounter < wordList.length - 1) {
        wordListCounter++
    }
    else {
        alert("You have used all the of the words! Game Over!")
    }
        
    displayCurrentGuess(currentGuess)
    
};

// Displays the currently formatted guess with spaces
function displayCurrentGuess(parWord) {
    for (let i = 0; i < parWord.length; i++) {
        currentDisplay = currentDisplay + parWord.charAt(i) + " ";
    }
    currentDisplay.trim();
    document.getElementById("displayed-word").textContent = currentDisplay;
}

