export default class GameView {
  constructor() {
    console.log("init gameview");
  }

  updateBoard(game) {
    this.updateTurn(game);
    let playerX = '<img src="./images/x.png" alt="">';
    let playerO = '<img src="./images/o.png" alt="">';
    for (let i = 0; i < game.board.length; i++) {
      let tile = document.querySelector(`.board-tile[data-index='${i}']`);

      if (game.board[i] == "X") {
        tile.innerHTML = playerX;
        tile.style.cursor = "not-allowed";
      } else if (game.board[i] == "O") {
        tile.innerHTML = playerO;
        tile.style.cursor = "not-allowed";
      } else {
        tile.textContent = "";
      }
    }
  }

  updateTurn(game) {
    let playerX = document.querySelector(".x-move");
    let playerO = document.querySelector(".o-move");
    if (game.turn == "X") {
      playerX.classList.add("myturn-x");
      playerO.classList.remove("myturn-o");
    } else {
      playerO.classList.add("myturn-o");
      playerX.classList.remove("myturn-x");
    }
  }
}
