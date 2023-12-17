const Human = require("./Human");

class Developer extends Human {
  constructor(name, email, skills) {
    super(name, email);
    this._skills = skills || [];
  }
  get skills() {
    return this._skills;
  }
  set skills(value) {
    this._skills = value;
  }
}

module.exports = Developer;
