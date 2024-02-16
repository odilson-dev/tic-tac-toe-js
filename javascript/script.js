import { GameBoard } from "./gameboard.js";
import { Player } from "./player.js";

const board = GameBoard();

board.show_board();

const player1 = Player("John", "X");
const player2 = Player("Sophia", "O");

console.log(board.checkVictory());
