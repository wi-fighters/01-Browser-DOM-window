(() => {
    const promptForGuesses = number => {
        // initialize attempts to 0 // 3
        // initialize the prompt message "Guess a number between 1 and 10"
    
        // while (attempts < 3) {
            // prompt the user with the prompt message
            // increment the number of attempts
    
            // if (the user guesses a correct number)
                // print success message and number of attempts
                // stop the loop (TODO: break? return?)
    
            // else 
                // update prompt message: "Nope, sorry, try again"
        // }
    
        // assuming we didn't return before
        // print fail message: "Sorry, you failed to guess the number in three attempts. The number was 2!"
    };
    
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    
    promptForGuesses(randomNumber);    
})();