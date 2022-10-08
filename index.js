let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let computerRandomChoices = ['rock', 'paper', 'scissor'];
  let randomPick = Math.floor(Math.random() * computerRandomChoices.length);

  return computerRandomChoices[randomPick];
}

const playRound = (playerSelection, computerSelection) => {
  if (
    playerSelection === 'rock'.toLowerCase() &&
    computerSelection === 'rock'
  ) {
    return 'Tied';
  } else if (
    playerSelection === 'rock'.toLowerCase() &&
    computerSelection === 'scissor'
  ) {
    playerScore++;
    return 'you win, rock beats scissor';
  } else if (
    playerSelection === 'rock'.toLowerCase() &&
    computerSelection === 'paper'
  ) {
    computerScore++;
    return 'you loose, paper beats rock';
  } else if (
    playerSelection === 'scissor'.toLowerCase() &&
    computerSelection === 'scissor'
  ) {
    return 'Tied';
  } else if (
    playerSelection === 'scissor'.toLowerCase() &&
    computerSelection === 'paper'
  ) {
    playerScore++;
    return 'you win, scissor beats paper';
  } else if (
    playerSelection === 'scissor'.toLowerCase() &&
    computerSelection === 'rock'
  ) {
    computerScore++;
    return 'you loose, rock beats scissor';
  } else if (
    playerSelection === 'paper'.toLowerCase() &&
    computerSelection === 'paper'
  ) {
    return 'Tied';
  } else if (
    playerSelection === 'paper'.toLowerCase() &&
    computerSelection === 'rock'
  ) {
    playerScore++;
    return 'you win, paper beats rock';
  } else if (
    playerSelection === 'paper'.toLowerCase() &&
    computerSelection === 'scissor'
  ) {
    computerScore++;
    return 'you loose, scissor beats paper';
  } else if (playerSelection != 'paper' || 'scissor' || 'rock') {
    return 'écris bien zebi';
  }
};

/* const playerSelection = "paper".toLowerCase(); */

const game = () => {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt(
      'Choose',
      'rock / paper / scissor?'
    ).toLowerCase();
    const computerSelection = getComputerChoice();

    console.log(playRound(playerSelection, computerSelection));
  }

  if (playerScore > computerScore) {
    return "You won, you'll get bitches soon";
  } else if (playerScore < computerScore) {
    return 'You lost Dumbass';
  } else {
    return 'You tied, too a chier';
  }
};

console.log(game());

/* 


STEPS : 


1 : Be sure JS runs correctly 
2 : function that randomize  Rock paper scissor 
2.5 : creating function which choose 
2.7 : creating the function that does the operation (math floor)
2.8 : return the answer --> []
3 : function that plays a round 
3.1 : creating the function playRound with the player selection and computer selection
3.2 : Put every possibilities with if and else if ( && and return)
4 : debug and test it by creating a fake const playerSelection = "un choix"
5 : creating a function computerSelection = au random (getComputerChoice)
6 : debug and test it by console.log(playRound(playerSelection, computerSelection))
7 : count score so creating playerScore and computerScore
8 : creating the game usiing the odin project function 
9 : don't forget to change place the computerSelection inside the game sinon info don't change
10 : console log inside the game too to see the 5 rounds
11 : use a prompt inside the game to let the gamer choose + DONT FORGET delete the test 
12 : make a if statement when playerscore ><= computer score
13 : DONT FORGET call the game()
14 : Rock, ROCK, ROck, etc... Use tolowerCase to fix it












1: 
for (let i = 0; i < 5; i++) {
  // your code here!
}

Write a NEW function called game(). 
Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.

At this point you should be using console.log() to display the results of each round and the winner at the end.
Use prompt() to get input from the user.

Write a function that plays a single round 
of Rock Paper Scissors. 
The function should take two parameters 
- the playerSelection and computerSelection 
- and then return a string that declares 
the winner of the round like so: "You Lose! Paper beats Rock" 


*/
