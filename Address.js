const _houseNumber = Symbol("houseNumber");
const _road = Symbol("road");
const _area = Symbol("area");
const _district = Symbol("district");
const _country = Symbol("country");

class Address {
  constructor(houseNumber, road, area, district, country) {
    this[_houseNumber] = houseNumber;
    this[_road] = road;
    this[_area] = area;
    this[_district] = district;
    this[_country] = country;
  }
  get houseNumber() {
    return this[_houseNumber];
  }
  set houseNumber(value) {
    this[_houseNumber] = value;
  }
  get road() {
    return this[_road];
  }
  set road(value) {
    this[_road] = value;
  }
  get area() {
    return this[_area];
  }
  set area(value) {
    this[_area] = value;
  }
  get district() {
    return this[_district];
  }
  set district(value) {
    this[_district] = value;
  }
  get country() {
    return this[_country];
  }
  set country(value) {
    this[_country] = value;
  }

  toString() {
    return `
    House No. ${this[_houseNumber]}
    Road No. ${this[_road]}
    Area. ${this[_area]}
    District. ${this[_district]}
    Country: ${this[_country]}
    `;
  }
}


module.exports = Address;