export default class Ship {
  static instanceCount = 0;

  constructor(length, position) {
    this.id = ++Ship.instanceCount;
    this.align = "horizontal";
    this.length = length;
    this.hits = 0;
    this.coords = this.getCoords(position);
    this.borders = this.getBorders(this.coords);
  };

  getCoords(position) {
    if (this.length == 1) return [position];
    if (!this._checkLengthHorizontal(position)) return null;

    let arr = [];

    for (let i = 0; i < this.length; i++) {
      arr.push(position + i);
    }

    return arr;
  }

  changeDirection() {
    if (this.coords[0] + 1 == this.coords[1]) {
      if (!this._checkLengthVertical(this.coords[0])) return null;
      let arr = [];
      let position = this.coords[0];
      this.coords = [];
      arr.push(position)

      for (let i = 1; i < this.length; i++) {
        arr.push(position + i * 10);
      }

      this.coords = arr;
      this.align = "vertical";
      this.borders = this.getBorders(this.coords);

    } else {
      if (!this._checkLengthHorizontal(this.coords[0])) return null;
      let position = this.coords[0];
      this.align = "horizontal";
      this.coords = this.getCoords(position);
      this.borders = this.getBorders(this.coords);
    }

  }

  getRow(position) {
    if (position < 10 && position >= 0) {
      return 0;
    }

    if (position >= 10) {
      return +String(position)[0];
    }

    return false;
  }

  getPos(position) {
    if (position < 10) {
      return position;
    } else {
      return +String(position)[1];
    }
  }

  getBorders(arr) {
    let borders = [];

    if (arr[0] == arr[1] - 1 || arr.length == 1) {
      for (let i = 0; i < arr.length; i++) {
        borders.push(arr[i] - 10);
        borders.push(arr[i] + 10);
      }

      this.getRow(arr[0] - 1) == this.getRow(arr[0]) ? borders.push(arr[0] - 1) : null;
      this.getRow(arr[0] - 1 - 10) == this.getRow(arr[0] - 10) && this.getRow(arr[0] - 1 - 10) != 0 ? borders.push(arr[0] - 1 - 10) : null;
      this.getRow(arr[0] - 1 + 10) == this.getRow(arr[0] + 10) ? borders.push(arr[0] - 1 + 10) : null;

      this.getRow(arr[arr.length - 1] + 1) == this.getRow(arr[arr.length - 1]) ? borders.push(arr[arr.length - 1] + 1) : null;
      this.getRow(arr[arr.length - 1] + 1 + 10) == this.getRow(arr[arr.length - 1] + 10) ? borders.push(arr[arr.length - 1] + 1 + 10) : null;
      this.getRow(arr[arr.length - 1] + 1 - 10) == this.getRow(arr[arr.length - 1] - 10) ? borders.push(arr[arr.length - 1] + 1 - 10) : null;

      return borders.filter(a => a >= 0 && a < 100);
    } else {
      for (let i = 0; i < arr.length; i++) {
        this.getRow(arr[i] - 1) == this.getRow(arr[i]) ? borders.push(arr[i] - 1) : null;
        this.getRow(arr[i] + 1) == this.getRow(arr[i]) ? borders.push(arr[i] + 1) : null;
      }

      this.getRow(arr[0] - 10 - 1) == this.getRow(arr[0] - 10) ? borders.push(arr[0] - 10 - 1) : null;
      borders.push(arr[0] - 10);
      this.getRow(arr[0] - 10 + 1) == this.getRow(arr[0] - 10) ? borders.push(arr[0] - 10 + 1) : null;

      this.getRow(arr[arr.length - 1] + 10 - 1) == this.getRow(arr[arr.length - 1] + 10) ? borders.push(arr[arr.length - 1] + 10 - 1) : null;
      borders.push(arr[arr.length - 1] + 10);
      this.getRow(arr[arr.length - 1] + 10 + 1) == this.getRow(arr[arr.length - 1] + 10) ? borders.push(arr[arr.length - 1] + 10 + 1) : null;

      return borders.filter(a => a >= 0 && a < 100);
    }

  }

  hit() {
    this.hits += 1;
  }

  isSunk() {
    return this.length == this.hits;
  }

  _checkLengthHorizontal(position) {
    if (this.position == "vertical") return this._checkLengthVertical;
    if (position % 10 == 0 || this.length == 1) return true;

    if (position + this.length > this.getRow(position) * 10 + 10) {
      throw new Error("length > available space");
    } else {
      return true;
    }
  }

  _checkLengthVertical(position) {
    if (this.position == "horizontal") return this._checkLengthHorizontal;
    if (position % 10 == 0 || this.length == 1) return true;

    if (this.getRow(position) + this.length > 10) {
      throw new Error("length > available space");
    } else {
      return true;
    }
  }
}