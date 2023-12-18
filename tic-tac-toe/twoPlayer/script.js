//Javascript for 2 player Tic Tac Toe Game
console.log("Two Player Tic Tac Toe Game");
let gameBoard;
const player1 = "O";
const player2 = "X";
let currentPlayer = player1;

//all possible winning combinations
const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
];

const cells = document.querySelectorAll(".cell");
startGame();

function startGame() {
  //popup for replay of game
  document.querySelector(".endgame").style.display = "none";

  //initializing origin board with index numbers
  gameBoard = Array.from(Array(9).keys());

  for (var i = 0; i < cells.length; i++) {
    cells[i].innerText = "";
    cells[i].style.removeProperty("background-color");
    cells[i].addEventListener("click", playerClick, false);
  }
}

//User Click event function
function playerClick(square) {
  if (typeof gameBoard[square.target.id] === "number") {
    turn(square.target.id, currentPlayer);
  }
}

//to make square crossed or circle
function turn(squareId, player) {
  //put value
  gameBoard[squareId] = player;
  document.getElementById(squareId).innerText = player;

  let winner = checkWin(gameBoard, player);
  console.log(winner);
  if (winner) {
    gameOver(winner);
  } else {
    checkTie();
    togglePlayer();
  }
}

function togglePlayer() {
  currentPlayer = currentPlayer === player1 ? player2 : player1;
}

//function to checkWin or checkTie
function checkWin(gameBoard, player) {
  // It initializes an empty array called plays to store the indices of the cells on the board that the specified
  //  player has marked. This is done using the reduce function to iterate through the board array.
  // For each element "currentCell" and its index "index" in the board array, it checks if currentCell is equal to the specified player.
  // If it is, it appends the index to the plays array. This effectively creates an array of the indices of cells marked by the specified player.
  let plays = gameBoard.reduce((arr, currentCell, index) => {
    if (currentCell === player) {
      return arr.concat(index);
    } else {
      return arr;
    }
  }, []);

  console.log(`plays ${plays}`);

  let gameWon = null;
  for (let [index, win] of winCombos.entries()) {
    //condition checks if player has entered anything or not
    if (win.every((elem) => plays.indexOf(elem) > -1)) {
      gameWon = { index: index, player: player };
      break;
    }
  }
  return gameWon;
}

function gameOver(winner) {
  for (let index of winCombos[winner.index]) {
    document.getElementById(index).style.backgroundColor =
      winner.player === player1 ? "blue" : "red";
  }
  for (var i = 0; i < cells.length; i++) {
    cells[i].removeEventListener("click", playerClick, false);
  }
  declareWinner(
    winner.player === player1 ? "Player 1 wins!" : "Player 2 wins!"
  );
}

function declareWinner(who) {
  document.querySelector(".endgame").style.display = "block";
  document.querySelector(".endgame .text").innerText = who;
}

function emptySquares() {
  return gameBoard.filter((s) => typeof s == "number");
}

function checkTie() {
  if (emptySquares().length === 0) {
    for (var i = 0; i < cells.length; i++) {
      cells[i].style.backgroundColor = "green";
      cells[i].removeEventListener("click", playerClick, false);
    }
    declareWinner("Tie Game!");
    return true;
  }
  return false;
}
