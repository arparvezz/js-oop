const Human = require('./Human')

class Designer extends Human{
  constructor(name, email,prof){
    super(name,email)
    this._prof = prof
  }
  get prof() {
    return this._prof;
  }
  set prof(value) {
    this._prof = value;
  }
  toString(){
    return `Hi, I'm designer from designer class.`
  }
}

module.exports = Designer;
