// Scoring tafel
let playerScore = 0;
let computerScore = 0;

// calling the class on the html file
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorButton = document.querySelector('#scissor');
const outcomeDiv = document.querySelector('.outseen');
const playerBoardScore = document.querySelector('.playerBoardScore');
const computerBoardScore = document.querySelector('.computerBoardScore');

// get a random computer choice
function getComputerChoice() {
  let computerRandomChoices = ['rock', 'paper', 'scissor'];
  let randomPick = Math.floor(Math.random() * computerRandomChoices.length);
  return computerRandomChoices[randomPick];
}

// play a round of rock paper scissor
const playRound = (playerSelection, computerSelection) => {
  const roundResult = document.createElement('p');

  if (
    playerSelection === 'rock'.toLowerCase() &&
    computerSelection === 'rock'
  ) {
    roundResult.innerText = `tied`;
    //
    //
    //
  } else if (
    playerSelection === 'rock'.toLowerCase() &&
    computerSelection === 'scissor'
  ) {
    playerScore++;

    roundResult.innerText = `you win, rock beats scissor, it's ${playerScore} to ${computerScore}`;
    //
    //
    //
  } else if (
    playerSelection === 'rock'.toLowerCase() &&
    computerSelection === 'paper'
  ) {
    computerScore++;

    roundResult.innerText = `you loose, paper beats rock, it's ${playerScore} to ${computerScore}`;
    //
    //
    //
  } else if (
    playerSelection === 'scissor'.toLowerCase() &&
    computerSelection === 'scissor'
  ) {
    roundResult.innerText = 'Tied';
    //
    //
    //
  } else if (
    playerSelection === 'scissor'.toLowerCase() &&
    computerSelection === 'paper'
  ) {
    playerScore++;

    roundResult.innerText = `you win, scissor beats paper, it's ${playerScore} to ${computerScore}`;
    //
    //
    //
  } else if (
    playerSelection === 'scissor'.toLowerCase() &&
    computerSelection === 'rock'
  ) {
    computerScore++;

    roundResult.innerText = `you loose, rock beats scissor, it's ${playerScore} to ${computerScore}`;
    //
    //
    //
  } else if (
    playerSelection === 'paper'.toLowerCase() &&
    computerSelection === 'paper'
  ) {
    roundResult.innerText = 'Tied';
    //
    //
    //
  } else if (
    playerSelection === 'paper'.toLowerCase() &&
    computerSelection === 'rock'
  ) {
    playerScore++;

    roundResult.innerText = `you win, paper beats rock, it's ${playerScore} to ${computerScore}`;
    //
    //
    //
  } else if (
    playerSelection === 'paper'.toLowerCase() &&
    computerSelection === 'scissor'
  ) {
    computerScore++;

    roundResult.innerText = `you loose, scissor beats paper it's ${playerScore} to ${computerScore}`;
    //
    //
    //
  } else if (playerSelection != 'paper' || 'scissor' || 'rock') {
    roundResult.innerText = 'écris bien zebi';
  }

  outcomeDiv.appendChild(roundResult);
};

// check if there is a winner, someone who has 5 points

const checkWinner = (playerScore, computerScore) => {
  if (playerScore === 5) {
    const gameResult = document.createElement('h2');
    gameResult.classList.add('player-won');
    gameResult.innerText = `You won ${playerScore} to ${computerScore} you'll get bitches soon`;
    outcomeDiv.appendChild(gameResult);
  }
  if (computerScore === 5) {
    const gameResult = document.createElement('h2');
    gameResult.classList.add('computer-won');
    gameResult.innerText = `You lost ${playerScore} to ${computerScore}, noob`;
    outcomeDiv.appendChild(gameResult);
  }
  if (playerScore > 5 || computerScore > 5) {
    const stopGame = document.createElement('h1');
    stopGame.innerText = `Tu peux plus jouer zbi`;
    outcomeDiv.appendChild(stopGame);
  }
};

// const stopGame = () => {
//   if (playerScore === 5 || computerScore === 5) {
//     const alertStopGame = document.createElement('h3');
//     alertStopGame.innerText = `You can't play anymore`;
//     outcomeDiv.appendChild(alertStopGame);
//   }
// };
// buton Rock
rockButton.addEventListener('click', () => {
  const computerSelection = getComputerChoice();
  const playerSelection = 'rock';

  console.log(playRound(playerSelection, computerSelection));
  checkWinner(playerScore, computerScore);
  playerBoardScore.innerText = `Player score: ${playerScore}`;
  computerBoardScore.innerText = `Computer score: ${computerScore}`;
});

// button paper
paperButton.addEventListener('click', () => {
  const computerSelection = getComputerChoice();
  const playerSelection = 'paper';

  console.log(playRound(playerSelection, computerSelection));

  checkWinner(playerScore, computerScore);
  playerBoardScore.innerText = `Player score: ${playerScore}`;
  computerBoardScore.innerText = `Computer score: ${computerScore}`;
});

// button scissor
scissorButton.addEventListener('click', () => {
  const computerSelection = getComputerChoice();
  const playerSelection = 'scissor';

  console.log(playRound(playerSelection, computerSelection));

  checkWinner(playerScore, computerScore);
  playerBoardScore.innerText = `Player score: ${playerScore}`;
  computerBoardScore.innerText = `Computer score: ${computerScore}`;
});

// const playerSelection = 'paper'.toLowerCase();

// const game = () => {
//   // for (let i = 0; i < 5; i++) {
//   //   //   const playerSelection = prompt(
//   //   //     'Choose',
//   //   //     'rock / paper / scissor?'
//   //   //   ).toLowerCase();
//   //   //   const computerSelection = getComputerChoice();
//   //   playRound(playerSelection, computerSelection);
//   // }
// };

// console.log(game());

/* 


function blabla( ){
  switch(playerSelection) {
    case 'rock':
      if(computerSelection === 'rock') {
        tied
      }
      break;
      case 'paper': 
  }
}

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
