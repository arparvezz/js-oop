const Human = require("./Human");

class Developer extends Human {
  constructor(name, email, skills, address) {
    super(name, email);
    this._skills = skills || [];
    this.address = address || null;
  }
  get skills() {
    return this._skills;
  }
  set skills(value) {
    this._skills = value;
  }
  get address() {
    return this._address;
  }
  set address(value) {
    this._address = value;
  }
}

module.exports = Developer;
