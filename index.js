const Developer = require("./Developer");
const Designer = require("./Designer");
const Elephant = require("./Elephant");
const Address = require('./Address')


const rockysAddress = new Address(148,6,'Rupnagar','Dhaka','Bangladesh')
const Rocky = new Developer("Rocky Jack", "rocky.contact@gmail.com", [
  "Java",
  "JavaScript",
  "C#",
],rockysAddress);

// for(let skill of Rocky.skills){
//   console.log(`#. ${skill}`);
// }

let php = new Elephant("PHP", 29, "Indigo");
let laravel = new Elephant("PHP", 29, "Indigo");

// console.log(JSON.stringify(php) == JSON.stringify(laravel));
// console.log(php.color);
// php.color = 'Yellow'
// console.log(php.color);

let Zahid = new Designer("Zahid Hasan", "zahid@example.com", [
  "Figma",
  "XD",
  "Sketch",
]);
// console.log(Zahid.toString());

// console.log(Zahid.prof.join(', '));

// Zahid.prof = ["Photoshop", "Illustrator", "InDesign"];
// console.log(Zahid.prof.join(', '));

// Map and set practice
// let map = new Map();
// map.set("Brand", "A4Tech");
// map.set("Color", "Black");
// map.set("Quality", "Awesome");

// console.log(map);

// map.forEach( (value,key) => {
//   console.log(`${key}: ${value}`);
// })

// let set = new Set();
// set.add("Liquid");
// set.add("JSON");
// set.add("JavaScript");
// set.add("Vue");
// console.log(set);
// set.forEach((v) => console.log(v));
// console.log(set.has('JSON'));


console.log(Rocky.address);