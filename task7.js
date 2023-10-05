var secretNumber = 7;

var guessNumber = +prompt("Please enter a number between 1 and 10 to guess the hidden number");

if(guessNumber == secretNumber){
    document.write("Bingo! Correct Answer");
}

else if(secretNumber == guessNumber+1 || secretNumber== guessNumber-1){
    document.write("Close enough to the correct answer");
}

else{
    document.write("Alas! you could not guessed correct answer")
}