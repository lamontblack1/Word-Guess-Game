
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
        console.log(currentWord);
        let letter = event.key.toUpperCase();
        let leftSlice, rightSlice = "";
        for (let i = 0; i < currentWord.length; i++) {
            leftSlice = currentGuess.slice(0,i);
            rightSlice = currentGuess.slice(i+1,currentGuess.length);
            console.log(leftSlice + "      " + rightSlice);
            // loop through all letters and replace underscore with letter in currentGuess
            if (currentWord.charAt(i) === letter) {
                currentGuess = leftSlice + letter + rightSlice;
                // do something with letter gif and then display word
                displayCurrentGuess()
                // If no more underscores then WIN, call winning then reset function
            }

            // otherwise it is wrong, add it to incorrect guess array and display it
            else {

            };
            
        }; // This is where the for ends 
    }; //This is where if ends
}; //This is where function ends

// ***************************FUNCTIONS
// Creates initial variables for guesses and underscores
function startNewWord() {
    lettersGuessed = [];
    guessesRemaining = 10;
    currentGuess = "";
    currentWord = wordList[wordListCounter].word;
    currentWord = currentWord.toUpperCase();
    currentDisplay = "";
    for (let i = 0; i < currentWord.length; i++) {
        currentGuess = currentGuess + "_";
    }
    if (wordListCounter < wordList.length - 1) {
        wordListCounter++
    }
    else {
        alert("You have used all the of the words! Game Over!");
    }
        
    displayCurrentGuess();
    
};

// Displays the currently formatted guess with spaces
function displayCurrentGuess() {
    currentDisplay = ""
    for (let i = 0; i < currentGuess.length; i++) {
        currentDisplay = currentDisplay + currentGuess.charAt(i) + " ";
        
    }
    currentDisplay.trim();
    document.getElementById("displayed-word").textContent = currentDisplay;
};

