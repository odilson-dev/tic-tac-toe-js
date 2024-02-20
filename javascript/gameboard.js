export function GameBoard() {
  let gameBoard = { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9 };
  // Check whether 3 cases have the same value
  const checkRows = (elem1, elem2, elem3) => {
    return elem1 === elem2 ? elem2 === elem3 : false;
  };
  // Check if the value is a number
  function isNumber(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
  }
  function resetBoard() {
    gameBoard = { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9 };
  }
  // Check if the gameboard is full with either 'X' or 'O', meaning the game is over without a winner
  function isGameBoardFull() {
    for (const [key, value] of Object.entries(gameBoard)) {
      if (isNumber(value)) {
        return false;
      }
    }
    return true;
  }
  // Return true when one row has three cases that have the same value
  const checkVictory = () => {
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
    return array.some((element) => {
      return element === true;
    });
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
  const setGameBoard = (key, token) => {
    if (isNumber(gameBoard[key])) {
      gameBoard[key] = token;
      return true;
    } else {
      return false;
    }
  };

  return {
    getGameBoard,
    setGameBoard,
    show_board,
    checkVictory,
    resetBoard,
    isGameBoardFull,
  };
}
