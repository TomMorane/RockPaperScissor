function getComputerChoice() {
  let computerRandomChoices = ["rock", "paper", "scissors"];
  let getRandomChoices = Math.floor(
    Math.random() * computerRandomChoices.length
  );

  return computerRandomChoices[getRandomChoices];
}

console.log(getComputerChoice());
