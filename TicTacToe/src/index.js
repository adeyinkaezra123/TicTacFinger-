import { scores } from "./Game.js";
import Game from "./Game.js";
import GameView from "./GameView.js";

let game = new Game("X");
let gameview = new GameView();
let restart = document.querySelector(".reset");
let xCounter = document.querySelector(".x-counter");
let oCounter = document.querySelector(".o-counter");
let drawCounter = document.querySelector(".draw-counter");
let tiles = document.querySelectorAll(".board-tile");
let boardWrap = document.querySelector('.board-wrap');

window.onload = () =>{
  console.log('Loading comlete')
  boardWrap.classList.add('zoom-in')
}

tiles.forEach((tile) => {
  tile.addEventListener("click", () => {
    onTileClick(tile.dataset.index);
  });
});

function onTileClick(index) {
  game.makeMove(index);
  updateScores();
  gameview.updateBoard(game);
}

function myTurn() {
  return game.nextTurn();
}

restart.addEventListener("click", newGame);

function updateScores() {
  let { X, O, draws } = scores;
  xCounter.innerHTML = `${X} ${X > 1 ? "wins" : "win"}`;
  oCounter.innerHTML = `${O} ${O > 1 ? "wins" : "win"}`;
  drawCounter.innerHTML = `${draws} ${draws > 1 ? "draws" : "draw"}`;

  if(X > O){
    xCounter.classList.add('gradient-text')
  }
  else if (O > X){
    oCounter.classList.add('gradient-text')
  }
  else{
    xCounter.classList.contains('gradient-text')? xCounter.classList.remove('gradient-text') : '';
    oCounter.classList.contains('gradient-text')? oCounter.classList.remove('gradient-text') : '';
    xCounter.style.color = '#9a9a9a';
    oCounter.style.color = '#9a9a9a';
  }
}

export function newGame() {
  let newGame = new Game(myTurn());
  game.board = Array(9).fill("");
  let gameView = new GameView();
  restart.classList.remove("pulse");
  gameView.updateBoard(newGame);
}
