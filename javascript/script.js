import { GameBoard } from "./gameboard.js";
import { Player } from "./player.js";

function screenController() {
  const boardDiv = document.querySelector(".board");
  const board = GameBoard();
  const player1 = Player("John", "X");
  const player2 = Player("Sophia", "O");

  function createBoardOnScreen() {
    const theBoard = board.getGameBoard();

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
    board.setGameBoard(buttonID, token);
    const buttonToUpdate = document.getElementById(buttonID);
    buttonToUpdate.textContent = token;
  }

  let currentPlayer = player1;
  const caseButtons = document.querySelectorAll(".case");

  // while (!board.checkVictory()) {
  //   //board.setGameBoard(currentPlayer.playRound(), currentPlayer.token);
  //   updateBoard();
  //   // Change the currentPlayer for each round
  //   currentPlayer === player1
  //     ? (currentPlayer = player2)
  //     : (currentPlayer = player1);
  // }

  caseButtons.forEach((button) => {
    button.addEventListener(
      "click",
      updateBoard(button.id, currentPlayer.token)
    );
  });
}

screenController();

console.log("Game Over");
