// Player 1 vs Player 2
const player1 = prompt("Enter name of player red!");
const player2 = prompt("Enter name of player blue!");
const vsElement = document.getElementById("vs");
vsElement.innerHTML = `${player1} vs. ${player2}`;

// Roll the dice
const dice1Element = document.getElementById("dice1");
const result1Element = document.getElementById("result1");
let rolledDice1 = 0;

dice1Element.addEventListener("click", function() {
  rolledDice1 = Math.floor(Math.random() * 6) + 1;
  result1Element.innerHTML = `${player1} rolled a ${rolledDice1}`;
  checkButtonClicks();
});

const dice2Element = document.getElementById("dice2");
const result2Element = document.getElementById("result2");
let rolledDice2 = 0;

dice2Element.addEventListener("click", function() {
  rolledDice2 = Math.floor(Math.random() * 6) + 1;
  result2Element.innerHTML = `${player2} rolled a ${rolledDice2}`;
  checkButtonClicks();
});

// Winner
const winnerElement = document.getElementById("winner");

const checkButtonClicks = () => {
  if (rolledDice1 !== 0 && rolledDice2 !== 0) {
    findOutWinner();
  }
};

const findOutWinner = () => {
  if (rolledDice1 > rolledDice2) {
    winnerElement.innerHTML = `The winner is ${player1}`;
  } else if (rolledDice1 < rolledDice2) {
    winnerElement.innerHTML = `The winner is ${player2}`;
  } else {
    winnerElement.innerHTML = `It's a tie!`;
  }
};

