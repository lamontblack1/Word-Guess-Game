
const wordToGuess = [
    {word: "beekeeper", hint: "a Profession"},
    {word: "megahertz", hint: "The more the better"}
    {word: "rhubarb", hint: "Good in a pie"}
    {word: "yachtsman", hint: "Dream job"}
    {word: "frazzled", hint: "Don't burn out!"}
    {word: "hyphen", hint: "Not an underscore"}
    {word: "foxglove", hint: "Humble flower"}
    {word: "vaporize", hint: "Knowing there is a z won't help"}
    {word: "thumbscrew", hint: "torture"}
]

// Letters guessed array 
let lettersGuessed = []
// start with 10 guesses 
let guessesRemaining = 10
// to keep score 
let wordsGuessedCorrectly = 0
