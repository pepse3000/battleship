import Ship from "./ship.js";

export default class Gameboard {
  constructor() {
    this.board = this.generateBoard();
  }

  placeShip(ship) {
    if (this.checkCollisions(ship)) {
      throw new Error("collision with other ship");
    } else {
      for (let i = 0; i < ship.length; i++) {
        this.board[ship.getRow(ship.coords[i])][ship.getPos(ship.coords[i])] = ship.id;
      }

      for (let i = 0; i < ship.borders.length; i++) {
        this.board[ship.getRow(ship.borders[i])][ship.getPos(ship.borders[i])] = "x";
      }
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

  showBoard(arr) {
    for (let row of arr) {
      console.log(row.join(' '));
    }
  }
}

