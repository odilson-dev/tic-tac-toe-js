export function GameBoard() {
  const gameBoard = { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9 };
  // Check whether 3 cases have the same value
  const checkRows = (elem1, elem2, elem3) => {
    return elem1 === elem2 ? elem2 === elem3 : false;
  };
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
    console.log(array);
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
  const setGameBoard = (key, token) => (gameBoard[key] = token);

  return { getGameBoard, setGameBoard, show_board, checkVictory };
}
