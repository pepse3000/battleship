import { getPos, getRow } from "../utils/getters.js";
import Game from "./gamehandler.js";
import Gameboard from "./gameboard.js";

export default class DomManager {
  constructor() { }

  createInitBoard(gameboard, person) {
    let symbol;
    let documentGameboard = document.querySelector(".player-gameboard");

    if (person == "computer") {
      documentGameboard = document.querySelector(".player-2-gameboard");
      symbol = "c";
    }

    if (person == "player") {
      symbol = "f";
    }

    for (let i = 0; i < 10; i++) {
      let row = document.createElement("div");
      row.classList.add("row");
      row.id = `row${i}`;
      for (let j = 0; j < 10; j++) {
        let field = document.createElement("div");
        field.classList.add("field");
        field.id = `${symbol}${i}${j}`;
        row.appendChild(field);
      }
      documentGameboard.appendChild(row);
    }
  }

  updateBoard(gameboard, person) {
    let symbol;

    if (person == "computer") symbol = "c";
    if (person == "player") symbol = "f";

    this.clear(gameboard, person);
    gameboard.board.forEach(row => {
      for (let i = 0; i < row.length; i++) {
        let documentField = document.querySelector(`#${symbol}${gameboard.board.indexOf(row)}${i}`);
        if (row[i] == "O") documentField.classList.add("miss");
        if (person == "player") {
          if (typeof row[i] === "number") documentField.classList.add("ship");
        }
      }
    })

    gameboard.ships.forEach(ship => {
      if (!ship.hitCoords) {
        return;
      } else {
        ship.hitCoords.forEach(coord => {
          let documentField = document.querySelector(`#${symbol}${getRow(coord)}${getPos(coord)}`);

          documentField.classList.add("hit");
          if (documentField.classList.contains("miss")) documentField.classList.remove("miss");
        })
      }
    })
  }

  clear(gameboard, person) {
    let symbol;

    if (person == "computer") symbol = "c";
    if (person == "player") symbol = "f";

    gameboard.board.forEach(row => {
      for (let i = 0; i < row.length; i++) {
        let documentField = document.querySelector(`#${symbol}${gameboard.board.indexOf(row)}${i}`);
        if (documentField.classList.contains("ship")) documentField.classList.remove("ship");
        if (documentField.classList.contains("hit")) documentField.classList.remove("hit");
        if (documentField.classList.contains("miss")) documentField.classList.remove("miss");
      }
    })
  }
}