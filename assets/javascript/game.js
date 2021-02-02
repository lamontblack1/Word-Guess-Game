
const wordList = [
    {word: "beekeeper", hint: "A Sweet Profession"},
    {word: "megahertz", hint: "The more the better"},
    {word: "rhubarb", hint: "Good in a pie"},
    {word: "yachtsman", hint: "Dream job"},
    {word: "frazzled", hint: "Burned Out!"},
    {word: "hyphen", hint: "NOT an underscore"},
    {word: "foxglove", hint: "Humble flower"},
    {word: "vaporize", hint: "Knowing there is a z won't help you figure this one out!"},
    {word: "thumbscrew", hint: "For torture"}
];

// Letters guessed array 
let lettersGuessedWrong = [];
// start with 10 incorrect guesses 
let guessesRemaining = 0;
// to keep score 
let wordsGuessedCorrectly = 0;
// initialize for use during play
let currentWord = "";
let currentGuess = "";
let currentDisplay = "";
let wordListCounter = 0
//got one letter right switch
let letterInWord = false
// grab image div 
let imageDiv = document.getElementById("image-div")



startNewWord();

// *************************EVENT ACTIONS 
document.onkeyup = function(event) {
    //no functionality if game is over
    if (wordListCounter > wordList.length) {
        alert("You have used all the of the words! Game Over!");
        return 0;
    }
    console.log(wordListCounter)
    var x = event.keyCode;
    // Make sure it is a letter 
    if ((x > 64) && (x < 91)) {
        
        let letter = event.key.toUpperCase();

        let leftSlice, rightSlice = "";

        for (let i = 0; i < currentWord.length; i++) {
            leftSlice = currentGuess.slice(0,i);
            rightSlice = currentGuess.slice(i+1,currentGuess.length);
            // console.log(leftSlice + "      " + rightSlice);
            // loop through all letters and replace underscore with letter in currentGuess
            if (currentWord.charAt(i) === letter) {
                letterInWord = true
                currentGuess = leftSlice + letter + rightSlice;
                // do something with letter gif and then display word
                displayCurrentGuess();
                imageDiv.innerHTML = "<img id='letterGif' src='./assets/images/" + letter + ".webp' style='position: absolute; top: 30%; width: 80%; z-index: 5;' />";
                for (let i = 1; i < 101; i++) {
                    setTimeout(function timer() {
                    document.getElementById("letterGif").style.width = (100-i) + "%";
                    }, i * 20);
                                      
                }
                
            }
            
        }; // This is where the for ends 

        // display incorrect guesses
         // otherwise it is wrong, add it to incorrect guess array and display it, if no guesses left lose
         if (letterInWord === false) {
            lettersGuessedWrong.push(letter);
            guessesRemaining--;
            displayCurrentGuess();
            if (guessesRemaining === 0) {
               alert("You Lose!");
               startNewWord();
            }
            
         }
       //reset letterinword switch for next keyup event
       letterInWord = false
        // If no more underscores then WIN, call winning then reset function
        if (currentGuess.indexOf("_") === -1) {
            wordsGuessedCorrectly++
            document.getElementById("scoreDisplay").textContent = wordsGuessedCorrectly;
            alert("you win");
           
            // **** add something cool here

            // Reset word
            window.setTimeout(startNewWord(),5000)
        }    
        
        

    }; //This is where if ends
}; //This is where function ends

// ***************************FUNCTIONS
// Creates initial variables for guesses and underscores
function startNewWord() {
    //make sure there are new words to use,  If you have used all the words the game ends
    if (wordListCounter === wordList.length) {
        wordListCounter++
        alert("You have used all the of the words! Game Over!");
        return 0;
    }
    lettersGuessedWrong = [];
    guessesRemaining = 7;
    currentGuess = "";
    currentWord = wordList[wordListCounter].word;
    currentWord = currentWord.toUpperCase();
    currentDisplay = "";
    for (let i = 0; i < currentWord.length; i++) {
        currentGuess = currentGuess + "_";
    }
    displayCurrentGuess();
    document.getElementById("hintDisplay").textContent = wordList[wordListCounter].hint;
    document.getElementById("scoreDisplay").textContent = wordsGuessedCorrectly;
    document.getElementById("incorrectGuesses").textContent = "";
    wordListCounter++;
    
};

// Displays the currently formatted guess with spaces
function displayCurrentGuess() {
    currentDisplay = ""
    for (let i = 0; i < currentGuess.length; i++) {
        currentDisplay = currentDisplay + currentGuess.charAt(i) + " ";
        
    }
    currentDisplay.trim();
    document.getElementById("displayedWord").textContent = currentDisplay;
    document.getElementById("guessesRemainingDisplay").textContent = guessesRemaining;
    document.getElementById("incorrectGuesses").textContent = lettersGuessedWrong;

};

