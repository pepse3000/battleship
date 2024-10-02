import DomManager from "./dommanager.js";
import { getPos, getRow } from "../utils/getters.js";
import { randomGenerator } from "../utils/randomfieldgenerator.js";

export default class Game {
  constructor() { }

  playRound(player1, computer, event) {
    let dommanager = new DomManager();
    let playerCount = 0;
    let computerCount = 0;

    if (computer.gameboard.board[getRow(+event.target.id.slice(1))][getPos(+event.target.id.slice(1))] == "O") {
      return;
    }

    computer.gameboard.receiveAttack(+event.target.id.slice(1))
    dommanager.updateBoard(computer.gameboard, "computer");

    computer.randomAttack(player1.gameboard);
    dommanager.updateBoard(player1.gameboard, "player");

    computer.gameboard.ships.forEach(ship => {
      if (ship.isSunk()) computerCount++;
    })

    player1.gameboard.ships.forEach(ship => {
      if (ship.isSunk()) playerCount++;
    })

    if (playerCount == player1.gameboard.ships.length) return false;
    if (computerCount == computer.gameboard.ships.length) return true;
  }

  stopGame(gameboard, computerBoard, dommanager) {
    gameboard.clear();
    randomGenerator(gameboard);
    dommanager.updateBoard(gameboard, "player");

    computerBoard.clear();
    randomGenerator(computerBoard);
    dommanager.updateBoard(computerBoard, "computer");
    location.reload();
  }
}