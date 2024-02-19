import { GameBoard } from "./gameboard.js";
import { Player } from "./player.js";

function screenController() {
  const boardDiv = document.querySelector(".board");
  const showButton = document.getElementById("showDialog");
  const board = GameBoard();

  const victoryElement = document.querySelector(".victory");
  const turnElement = document.querySelector(".turn");
  const content = document.querySelector(".content");
  const error = document.querySelector(".error");
  const restart = document.querySelector(".btn-restart");
  const player1 = Player("Player X", "X");
  const player2 = Player("Player O", "O");
  const favDialog = document.getElementById("favDialog");
  const inputElements = favDialog.getElementsByTagName("input");
  let currentPlayer = player1;
  const confirmBtn = favDialog.querySelector("#confirmBtn");

  // "Show the dialog" button opens the <dialog> modally
  showButton.addEventListener("click", () => {
    favDialog.showModal();
  });
  favDialog.addEventListener("close", (e) => {
    let players_data = favDialog.returnValue
      .split(", ")
      .reduce((acc, currentValue) => {
        const [key, value] = currentValue.split(": ");
        acc[key.trim()] = isNaN(value) ? value : parseInt(value);
        return acc;
      }, {});
    player1.setName(players_data.player_1);
    player2.setName(players_data.player_2);
  });

  function createBoardOnScreen() {
    const theBoard = board.getGameBoard();
    turnElement.innerHTML = `Now, it's ${currentPlayer.getName()}'s turn`;
    for (const key in theBoard) {
      const caseButton = document.createElement("button");
      const value = theBoard[key];

      caseButton.classList.add("case");
      caseButton.id = value;
      boardDiv.appendChild(caseButton);
    }
  }

  function restartGame() {
    board.resetBoard();
    boardDiv.innerHTML = "";
    victoryElement.innerHTML = "";
    createBoardOnScreen();
    dd.GameBoard;
    addEventListenerOnCases();
  }

  function updateBoard(buttonID, token) {
    if (board.setGameBoard(buttonID, token)) {
      error.textContent = "";
      const buttonToUpdate = document.getElementById(buttonID);
      buttonToUpdate.textContent = token;
      return true;
    } else {
      error.textContent = "You can't play this square";
      content.insertBefore(error, victoryElement);
      return false;
    }
  }

  function togglePlayers() {
    currentPlayer === player1
      ? (currentPlayer = player2)
      : (currentPlayer = player1);
    turnElement.innerHTML = `Now, it's ${currentPlayer.getName()}'s turn`;
  }

  restart.addEventListener("click", () => {
    restartGame();
  });

  function addEventListenerOnCases() {
    const caseButtons = document.querySelectorAll(".case");
    caseButtons.forEach((button) => {
      button.addEventListener("click", () => {
        if (!board.checkVictory()) {
          if (updateBoard(button.id, currentPlayer.getToken())) {
            togglePlayers();
          }
        }

        if (board.checkVictory()) {
          turnElement.innerHTML = "";
          victoryElement.innerHTML = `Game Over</br>${currentPlayer.getName()} wins!`;
        } else {
          victoryElement.innerHTML = "";
        }
      });
    });
  }

  confirmBtn.addEventListener("click", (event) => {
    event.preventDefault(); // We don't want to submit this fake form

    let data = [];
    for (const element of inputElements) {
      data.push(`${element.name}: ${element.value}`);
    }

    favDialog.close(data.join(", "));
  });

  createBoardOnScreen();
  addEventListenerOnCases();
}

screenController();

console.log("Game Over");
