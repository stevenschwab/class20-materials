// *Variables*
// Declare a variable and assign it to a sentance that is a positive affirmation. Print the affirmation to the console multiple times using a method
let positiveAffirmation = "You're a great person!";
console.log(`Again: ${positiveAffirmation.repeat(24)}`);
//Declare a variable, assign it an array of letters, combine the letters into one word, and alert it 
let arrayOfLetters = ['a', 'b', 'c', 'd', 'e'];
alert(arrayOfLetters.join(""));
// *Functions*
// Create a function that returns rock, paper, lizard, spock or scissors as randomly as possible
function returnsRockPaperLizardSpockScissors(){
    let random = Math.random();
    if(random < 0.2){
        return 'rock';
    } else if (random < 0.4){
        return 'paper';
    } else if (random < 0.6){
        return 'lizard';
    } else if (random < 0.8){
        return 'spock';
    } else {
        return 'scissors';
    }
}
console.log(returnsRockPaperLizardSpockScissors());
// *Conditionals*
//Create a function that takes in a choice (rock, paper, scissors, lizard, or spock) and determines if they won a game of rock paper scissors against a bot using the above function
function takesInChoice(choice){
    let botsChoice = returnsRockPaperLizardSpockScissors();
    if(
        (choice === 'rock' && botsChoice === 'scissors') ||
        (choice === 'paper' && botsChoice === 'rock') ||
        (choice === 'scissors' && botsChoice === 'paper') ||
        (choice === 'lizard' && botsChoice !== 'spock') ||
        (choice === 'spock' && botsChoice !== 'lizard')
    ){
        return 'You won';
    } else if (choice === botsChoice){
        return 'You tied';
    } else {
        return 'You lost';
    }
}
console.log(takesInChoice('rock'));