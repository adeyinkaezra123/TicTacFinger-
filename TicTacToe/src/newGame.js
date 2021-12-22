import Game from "./Game.js";
let game = new Game("X");
import GameView from "./GameView.js";

function myTurn() {
  console.log(`initial move is; ${game.turn}`);
  return game.nextTurn();
}

export function newGame() {
  console.log("New game");
  let newGame = new Game(myTurn());
  game.board = Array(9).fill("");
  let gameView = new GameView();
  restart.classList.remove("pulse");
  gameView.updateBoard(newGame);
}
