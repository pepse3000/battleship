import Gameboard from "./modules/gameboard.js";
import Game from "./modules/gamehandler.js";
import Ship from "./modules/ship.js";
import Player from "./modules/player.js";
import DomManager from "./modules/dommanager.js";
import { randomGenerator } from "./utils/randomfieldgenerator.js";
import "./styles.css";

let dommanager = new DomManager();
let game = new Game();
let gameboard = new Gameboard();
let computerBoard = new Gameboard();
let player = new Player(gameboard);
let computer = new Player(computerBoard);

let randomizeBtn = document.querySelector("#random");
let resetBtn = document.querySelector("#reset");
let startBtn = document.querySelector("#start");

randomizeBtn.addEventListener("click", () => {
  gameboard.clear();
  randomGenerator(gameboard);
  dommanager.updateBoard(gameboard, "player");
})

resetBtn.addEventListener("click", () => {
  game.stopGame(gameboard, computerBoard, dommanager);
})

startBtn.addEventListener("click", () => {
  let computerDOMBoard = document.querySelector(".player-2-gameboard");

  function removeAllListeners() {
    computerDOMBoard.childNodes.forEach(node => {
      node.childNodes.forEach(field => {
        field.removeEventListener("click", handleClick);
      });
    });
  }

  function handleClick(e) {
    let winner = document.querySelector(".winner");
    let result = game.playRound(player, computer, e);

    if (result == false) {
      winner.textContent = "Computer win! Reset?";
      removeAllListeners();
    }

    if (result == true) {
      winner.textContent = "Player win! Reset?";
      removeAllListeners();
    }
  }

  computerDOMBoard.childNodes.forEach(node => {
    node.childNodes.forEach(field => {
      field.addEventListener("click", handleClick);
    });
  });

  startBtn.disabled = true;
  randomizeBtn.disabled = true;
  resetBtn.disabled = false;
});

randomGenerator(computerBoard);
randomGenerator(gameboard);

dommanager.createInitBoard(gameboard, "player");
dommanager.createInitBoard(computerBoard, "computer");
dommanager.updateBoard(gameboard, "player");
dommanager.updateBoard(computerBoard, "computer");
