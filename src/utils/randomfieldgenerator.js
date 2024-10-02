import Ship from "../modules/ship.js";

function randomGenerator(gameboard) {
  let ships = [5, 4, 3, 3, 2, 2, 1, 1, 1];

  ships.forEach(shipLength => {
    let align = getRandomAlign();
    gameboard.placeShip(new Ship(shipLength, getRandomPlace(gameboard, shipLength, align), align));
  })
}

function getRandomPlace(gameboard, shipLength, align) {
  let position;
  let result = false;

  while (!result) {
    position = Math.floor(Math.random() * 100);

    if (!new Ship(shipLength, position, align).coords) continue;
    if (!gameboard.placeShip(new Ship(shipLength, position, align))) continue;
    if (position) result = true;
  }

  return position;
}

function getRandomAlign() {
  return Math.floor(Math.random() * 10) < 5 ? "horizontal" : "vertical";
}

export { randomGenerator };