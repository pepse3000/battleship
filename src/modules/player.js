import { getPos, getRow } from "../utils/getters.js";

export default class Player {
  constructor(gameboard) {
    this.gameboard = gameboard;
    this.attackQueue = [];
  }

  randomAttack(opponentBoard) {
    if (this.attackQueue.length != 0 && this.attackQueue) {
      opponentBoard.receiveAttack(this.attackQueue.shift());
      return;
    }

    let position;
    let touch = "O";

    while (touch == "O") {
      position = Math.round(Math.random() * 100);
      if (opponentBoard.board[getRow(position)][getPos(position)] != "O") {

        if (typeof opponentBoard.board[getRow(position)][getPos(position)] === "number") {
          this.attackQueue = this.checkNextAttacks(opponentBoard, position);
          touch == "x";
          break;
        }

        touch == "x";
        break;
      }
    }

    opponentBoard.receiveAttack(position);
  }

  checkNextAttacks(gameboard, position, visited = {}, possibleAttacks = []) {
    if (typeof position !== 'number' || position < 0 || position >= 100) {
      return;
    }

    if (visited[position]) {
      return;
    }

    visited[position] = true;

    const cellValue = gameboard.board[getRow(position)][getPos(position)];
    if (cellValue == "x" || cellValue == "O") {
      return;
    }

    if (typeof cellValue === 'number') {
      possibleAttacks.push(position);
    }

    if (position % 10 !== 9) {
      this.checkNextAttacks(gameboard, position + 1, visited, possibleAttacks);
    }

    if (position % 10 !== 0) {
      this.checkNextAttacks(gameboard, position - 1, visited, possibleAttacks);
    }

    if (position - 10 >= 0) {
      this.checkNextAttacks(gameboard, position - 10, visited, possibleAttacks);
    }

    if (position + 10 < 100) {
      this.checkNextAttacks(gameboard, position + 10, visited, possibleAttacks);
    }

    return possibleAttacks;
  }
}