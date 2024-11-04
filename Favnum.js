let favoritenumber = 10;
let guess = null;
while(guess !== favnum){
    guess = parseInt(promt("Guess the favnum:"), 10);
    if(guess === favoratenumber){
        console.log("Correct!You've guessed the favorite number.");
         if (guess > favoritenumber){
            console.log("Too high!Try again.");
            else if (guess < favoritenumber){
                console.log("Too low! Try again.")
            }
        }
    }
}