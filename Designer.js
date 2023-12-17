const Human = require("./Human");

class Designer extends Human {
  constructor(name, email, prof, address) {
    super(name, email);
    this._prof = prof;
    this.address = address || null;
  }
  get prof() {
    return this._prof;
  }
  set prof(value) {
    this._prof = value;
  }
  get address() {
    return this._address;
  }
  set address(value) {
    this._address = value;
  }
  toString() {
    return `Hi, I'm designer from designer class.`;
  }
}

module.exports = Designer;
