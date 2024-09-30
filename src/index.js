import Gameboard from "../modules/gameboard.js";
import Ship from "../modules/ship.js";

let gameboard = new Gameboard();

let ship1 = new Ship(1, 77);
let ship2 = new Ship(5, 24);
let ship3 = new Ship(3, 44);
let ship4 = new Ship(3, 22);
let ship5 = new Ship(1, 20);
let ship6 = new Ship(1, 58);

ship1.changeDirection();
ship4.changeDirection();
console.log(ship5);

gameboard.placeShip(ship1);
gameboard.placeShip(ship2);
gameboard.placeShip(ship3);
gameboard.placeShip(ship4);
gameboard.placeShip(ship5);
gameboard.placeShip(ship6);
gameboard.showBoard(gameboard.board);
