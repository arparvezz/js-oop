const Animal = require("./Animal");
class Elephant extends Animal {
  constructor(name, age, color) {
    super(name, age);
    this._color = color;
  }
  get color() {
    return this._color;
  }
  set color(value) {
    this._color = value;
  }
}
module.exports = Elephant;