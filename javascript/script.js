import { GameBoard } from "./gameboard.js";
import { Player } from "./player.js";

function screenController() {
  const boardDiv = document.querySelector(".board");
  const board = GameBoard();
  const player1 = Player("John", "X");
  const player2 = Player("Sophia", "O");
  const victoryElement = document.querySelector(".victory");
  const turnElement = document.querySelector(".turn");
  const content = document.querySelector(".content");
  const error = document.querySelector(".error");
  let currentPlayer = player1;

  function createBoardOnScreen() {
    const theBoard = board.getGameBoard();
    turnElement.innerHTML = `Now, it's ${currentPlayer.name}'s turn`;
    for (const key in theBoard) {
      const caseButton = document.createElement("button");
      const value = theBoard[key];

      caseButton.classList.add("case");
      caseButton.id = value;
      boardDiv.appendChild(caseButton);
    }
  }
  createBoardOnScreen();

  function updateBoard(buttonID, token) {
    if (board.setGameBoard(buttonID, token)) {
      error.textContent = "";
      const buttonToUpdate = document.getElementById(buttonID);
      buttonToUpdate.textContent = token;
    } else {
      error.textContent = "You can't play this square";
      content.insertBefore(error, victoryElement);
    }
  }

  const caseButtons = document.querySelectorAll(".case");

  caseButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (board.checkVictory()) {
        victoryElement.innerHTML = `Game Over</br>${currentPlayer.name} wins!`;
      } else {
        updateBoard(button.id, currentPlayer.token);
        currentPlayer === player1
          ? (currentPlayer = player2)
          : (currentPlayer = player1);
        turnElement.innerHTML = `Now, it's ${currentPlayer.name}'s turn`;
      }
    });
  });
}

screenController();

console.log("Game Over");
