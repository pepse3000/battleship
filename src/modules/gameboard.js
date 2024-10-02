import Ship from "./ship.js";
import { getPos, getRow } from "../utils/getters.js";

export default class Gameboard {
  constructor() {
    this.board = this.generateBoard();
    this.ships = [];
  }

  placeShip(ship) {
    if (this.checkCollisions(ship)) {
      return false;
    } else {
      for (let i = 0; i < ship.length; i++) {
        this.board[ship.getRow(ship.coords[i])][ship.getPos(ship.coords[i])] = ship.id;
      }

      for (let i = 0; i < ship.borders.length; i++) {
        this.board[ship.getRow(ship.borders[i])][ship.getPos(ship.borders[i])] = "x";
      }

      this.ships.push(ship);
      return true;
    }
  }

  checkCollisions(ship) {
    for (let i = 0; i < ship.coords.length; i++) {
      let shipCol = this.board[ship.getRow(ship.coords[i])][ship.getPos(ship.coords[i])];
      if (typeof shipCol === "number" || shipCol == "x") return true;
    }

    for (let i = 0; i < ship.borders.length; i++) {
      let shipCol = this.board[ship.getRow(ship.borders[i])][ship.getPos(ship.borders[i])];
      if (typeof shipCol === "number") return true;
    }
  }

  receiveAttack(coords) {
    if (this.board[getRow(coords)][getPos(coords)] != "O") {
      this.ships.forEach(ship => {
        if (ship.id == this.board[getRow(coords)][getPos(coords)]) {
          ship.hit();
          ship.hitCoords.push(coords);
          if (ship.isSunk()) {
            ship.borders.forEach(border => {
              this.board[getRow(border)][getPos(border)] = "O";
            })
          }
        }
      })
      this.board[getRow(coords)][getPos(coords)] = "O";
      return true;
    } else {
      return false;
    }

  }

  generateBoard() {
    let arr = [];

    for (let i = 0; i < 10; i++) {
      let row = [];
      for (let j = 0; j < 10; j++) {
        row.push("*");
      }
      arr.push(row);
    }

    return arr;
  }

  clear() {
    this.ships = [];
    this.board = this.generateBoard();
  }

  showBoard(arr) {
    for (let row of arr) {
      console.log(row.join(' '));
    }
  }
}

