import { GameBoard } from "./gameboard.js";

function screenController() {
  const boardDiv = document.querySelector(".board");
  const board = GameBoard();

  const theBoard = board.getGameBoard();
  console.log(theBoard);
  for (const key in theBoard) {
    const value = theBoard[key];
    const caseButton = document.createElement("button");
    caseButton.textContent = value;
    caseButton.classList.add("case");
    boardDiv.appendChild(caseButton);
  }

  for (const element of theBoard) {
  }
}

screenController();

// board.show_board();

// const player1 = Player("John", "X");
// const player2 = Player("Sophia", "O");

// let currentPlayer = player1;
// while (!board.checkVictory()) {
//   board.setGameBoard(currentPlayer.playRound(), currentPlayer.token);
//   board.show_board();
//   // Change the currentPlayer for each round
//   currentPlayer === player1
//     ? (currentPlayer = player2)
//     : (currentPlayer = player1);
// }
// console.log("Game Over");
