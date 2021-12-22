let restart = document.querySelector(".reset");

export let scores = {
  X: 0,
  O: 0,
  draws: 0,
};

export default class Game {
  constructor(Turn) {
    this.turn = Turn;
    this.board = Array(9).fill("");
  }

  nextTurn() {
    if (this.turn == "X") {
      this.turn = "O";
    } else if ((this.turn == "O")) {
      this.turn = "X";
    } else {
      ("");
    }
    return this.turn;
  }
  makeMove(i) {
    if (this.board[i]) {
      return;
    }

    if (!this.board[i]) {
      this.board[i] = this.turn;
      let winner = this.findWinningCombos();
      if (!winner) {
        this.nextTurn();
      } else {
        restart.classList.add("pulse");
        return;
      }
    }
  }

  endGame() {
    let winner = this.findWinningCombos();
    if (winner) {
      return true;
    } else {
      return false;
    }
  }

  findWinningCombos() {
    let wins = false;
    if (wins == false && this.board.every((x) => x.length > 0)) {
      scores.draws++;
      restart.classList.add("pulse");
      newGame();
    }

    const winCombos = [
      // Straight
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      // Across
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      // Diagonal
      [6, 4, 2],
      [0, 4, 8],
    ];
    for (const combination of winCombos) {
      const [a, b, c] = combination;

      if (
        this.board[a] &&
        this.board[a] === this.board[b] &&
        this.board[a] === this.board[c]
      ) {
        wins = true;
        if (wins) {
          scores[this.board[a]]++;
        }

        this.showWinner(a, c);

        return true;
      }
    }
    return null;
  }

  showWinner(a, c) {
    let winLine = document.querySelector(".winning-line-wrap");
    winLine.classList.add(`winning-line-wrap-${a}-${c}`);
    winLine.style.display = "block";

    setTimeout(() => {
      winLine.style.display = "none";
      winLine.classList.remove(`winning-line-wrap-${a}-${c}`);
      newGame();
    }, 1500);
    return this.a;
  }
}

import { newGame } from "./index.js";
