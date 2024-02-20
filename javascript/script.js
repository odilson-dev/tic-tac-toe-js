import { GameBoard } from "./gameboard.js";
import { Player } from "./player.js";

function screenController() {
  const boardDiv = document.querySelector(".board");
  const board = GameBoard();
  const restartDialog = document.getElementById("restart");
  const turnElement = document.querySelector(".turn");
  const btnPlayAgain = document.querySelector(".btn-play-again");
  const btnRestart = document.querySelector(".btn-restart");
  const player1 = Player("Player", "X");
  const player2 = Player("Player", "O");
  const favDialog = document.getElementById("favDialog");
  const inputElements = favDialog.getElementsByTagName("input");
  let currentPlayer = player1;
  const confirmBtn = favDialog.querySelector("#confirmBtn");
  const score = document.querySelector(".score");

  function showScore() {
    score.innerHTML = `${player1.getName()} (${player1.getToken()}): ${player1.getScore()} <br>
    ${player2.getName()} (${player2.getToken()}): ${player2.getScore()}`;
  }

  // Reload the page to restart the game
  btnRestart.addEventListener("click", () => {
    location.reload();
  });
  favDialog.addEventListener("close", (e) => {
    let players_data = favDialog.returnValue
      .split(", ")
      .reduce((acc, currentValue) => {
        const [key, value] = currentValue.split(": ");
        acc[key.trim()] = isNaN(value) ? value : parseInt(value);
        return acc;
      }, {});
    if (!(players_data.player_1 === undefined)) {
      player1.setName(players_data.player_1);
      player2.setName(players_data.player_2);
      showScore();
      turnElement.innerHTML = `${
        currentPlayer.getName() == "Player"
          ? currentPlayer.getToken()
          : currentPlayer.getName()
      }'s turn`;
    }
  });

  function createBoardOnScreen() {
    const theBoard = board.getGameBoard();
    turnElement.innerHTML = `${
      currentPlayer.getName() == "Player"
        ? currentPlayer.getToken()
        : currentPlayer.getName()
    }'s turn`;
    for (const key in theBoard) {
      const caseButton = document.createElement("button");
      const value = theBoard[key];

      caseButton.classList.add("case");
      caseButton.id = value;
      boardDiv.appendChild(caseButton);
    }
  }

  function playGame() {
    board.resetBoard();
    boardDiv.innerHTML = "";
    restartDialog.close();
    createBoardOnScreen();
    addEventListenerOnCases();
  }

  function updateBoard(buttonID, token) {
    if (board.setGameBoard(buttonID, token)) {
      const buttonToUpdate = document.getElementById(buttonID);
      buttonToUpdate.textContent = token;
      return true;
    } else {
      turnElement.innerHTML = "You can't play this square";
      return false;
    }
  }

  function togglePlayers() {
    currentPlayer === player1
      ? (currentPlayer = player2)
      : (currentPlayer = player1);
    turnElement.innerHTML = `${
      currentPlayer.getName() == "Player"
        ? currentPlayer.getToken()
        : currentPlayer.getName()
    }'s turn`;
  }

  btnPlayAgain.addEventListener("click", () => {
    playGame();
  });

  function addEventListenerOnCases() {
    const caseButtons = document.querySelectorAll(".case");
    caseButtons.forEach((button) => {
      button.addEventListener("click", () => {
        // Check if a a player hasn't win yet
        if (!board.checkVictory()) {
          // Update the board if nobody won the last turn
          if (updateBoard(button.id, currentPlayer.getToken())) {
            // Change the currentPlayer if the board has been updated successfully and still nobody won
            if (!board.checkVictory()) {
              togglePlayers();
            }
          }
        }
        if (board.checkVictory()) {
          currentPlayer.increaseScore();
          showScore();
          turnElement.innerHTML = `Game Over!${
            currentPlayer.getName() == "Player"
              ? currentPlayer.getToken()
              : currentPlayer.getName()
          } 
          wins!`;
          restartDialog.firstChild.replaceWith(score.cloneNode(true));
          setTimeout(() => restartDialog.showModal(), 1000);
        } else {
          if (board.isGameBoardFull()) {
            setTimeout(() => restartDialog.showModal(), 1000);
          }
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
  showScore();
  favDialog.showModal();
}

screenController();

console.log("Game Over");
