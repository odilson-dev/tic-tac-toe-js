function GameBoard() {
  const gameBoard = { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9 };
  // Check whether 3 cases have the same value
  const checkRows = (elem1, elem2, elem3) => {
    elem1 === elem2 ? elem2 === elem3 : false;
  };
  // Return true when one row has three cases that have the same value
  const checkVictory = () => {
    // Vertical
    const array = [
      // Vertical
      checkRows(gameBoard[1], gameBoard[2], gameBoard[3]),
      checkRows(gameBoard[4], gameBoard[5], gameBoard[6]),
      checkRows(gameBoard[7], gameBoard[8], gameBoard[9]),
      // Horizontals
      checkRows(gameBoard[1], gameBoard[4], gameBoard[7]),
      checkRows(gameBoard[2], gameBoard[5], gameBoard[8]),
      checkRows(gameBoard[3], gameBoard[6], gameBoard[9]),
      // Diagonal
      checkRows(gameBoard[1], gameBoard[5], gameBoard[9]),
      checkRows(gameBoard[7], gameBoard[5], gameBoard[3]),
    ];
    array.some(true);
  };
  const show_board = () => {
    console.log(`
    ${gameBoard[1]} | ${gameBoard[2]} | ${gameBoard[3]}
    --+---+---
    ${gameBoard[4]} | ${gameBoard[5]} | ${gameBoard[6]}
    --+---+---
    ${gameBoard[7]} | ${gameBoard[8]} | ${gameBoard[9]}`);
  };

  const getGameBoard = () => gameBoard;
  const setGameBoard = (key, token) => (gameBoard[key] = token);

  return { getGameBoard, setGameBoard, show_board };
}

const board = GameBoard();

board.show_board();

// A player has name and a token
function Player(name, token) {
  const playRound = () => {
    const playerCase = prompt(`${name}, it's your turn, choose a case:`);
    return playerCase;
  };
  return { name, token, playRound };
}

const player1 = Player("John", "X");

board.setGameBoard(player1.playRound(), player1.token);
board.show_board();
