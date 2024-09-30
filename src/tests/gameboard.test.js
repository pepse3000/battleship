import Gameboard from "../modules/gameboard.js";
import Ship from "../modules/ship.js";

let gameboard = new Gameboard();

describe("Ships testing", () => {
  test("ship1 borders", () => {
    expect(new Ship(1, 90).borders).toEqual(expect.arrayContaining([80, 81, 91]));
    expect(new Ship(1, 90).borders).toHaveLength(3);
  });

  test("ship2 borders", () => {
    expect(new Ship(1, 99).borders).toEqual(expect.arrayContaining([88, 89, 98]));
    expect(new Ship(1, 99).borders).toHaveLength(3);
  })
})
