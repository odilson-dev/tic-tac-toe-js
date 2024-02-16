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
