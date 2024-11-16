// Constants and variables
const WORDS = ["javascript", "programming", "hangman", "developer", "code"];
const MAX_ATTEMPTS = 6;
let chosenWord = WORDS[Math.floor(Math.random() * WORDS.length)];
let hiddenWord = Array(chosenWord.length).fill("_");
let attemptsLeft = MAX_ATTEMPTS;
let guessedLetters = [];

// Start of the game
alert("Welcome to Hangman! Guess the letters of the word to save yourself. You have " + MAX_ATTEMPTS + " attempts.");

// Main game loop
while (attemptsLeft > 0 && hiddenWord.includes("_")) {
    alert(`Word: ${hiddenWord.join(" ")}\nAttempts left: ${attemptsLeft}\nGuessed letters: ${guessedLetters.join(", ")}`);

    let guess = prompt("Enter a letter (or click 'Cancel' to exit):");

    if (guess === null) {
        alert("Game cancelled. Thanks for playing!");
        break;
    }

    guess = guess.toLowerCase();
    if (guess.length !== 1 || !guess.match(/[a-z]/)) {
        alert("Invalid input. Please enter a single letter.");
        continue;
    }

    if (guessedLetters.includes(guess)) {
        alert("You've already guessed that letter. Try a different one.");
        continue;
    }

    guessedLetters.push(guess);

    // Check if the guessed letter is in the chosen word
    if (chosenWord.includes(guess)) {
        
        for (let i = 0; i < chosenWord.length; i++) {
            if (chosenWord[i] === guess) {
                hiddenWord[i] = guess;
            }
        }
        alert("Good job! The letter is in the word.");
    } else {
        attemptsLeft--;
        alert("Wrong guess! Attempts left: " + attemptsLeft);
    }
}

// End of game message
if (!hiddenWord.includes("_")) {
    alert("Congratulations! You have guessed the word: " + chosenWord);
} else if (attemptsLeft === 0) {
    alert("You're out of attempts! You lost. The word was: " + chosenWord);
}

