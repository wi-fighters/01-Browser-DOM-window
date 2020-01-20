(() => {
    const promptForGuesses = number => {
        let attempts = 0;
        let message = "Guess a number between 1 and 10";
        let currentGuess = '';
    
        while (attempts < 3) {
            currentGuess = parseInt(prompt(message), 10);
            console.log('currentGuess', currentGuess);
            attempts += 1;
    
            if (currentGuess === number) {
                return `Success! The number was ${number}! Attempts: ${attempts}`;
            } else {
                message = 'Nope, sorry! Try again!'
            }
        }
    
        return `Sorry, you failed to guess the number in three attempts. The number was ${number}!`;
    };
    
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    
    const outcome = promptForGuesses(randomNumber);
    console.log(outcome);    
})();