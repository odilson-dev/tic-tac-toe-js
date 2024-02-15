function GameBoard() {
  const gameBoard = { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9 };
  const show_board = () => {
    console.log(`
    ${gameBoard[1]} | ${gameBoard[2]} | ${gameBoard[3]}
    --+---+---
    ${gameBoard[4]} | ${gameBoard[5]} | ${gameBoard[6]}
    --+---+---
    ${gameBoard[7]} | ${gameBoard[8]} | ${gameBoard[9]}`);
  };

  const getGameBoard = () => gameBoard;
  return { getGameBoard, show_board };
}

const board = GameBoard();

board.show_board();
