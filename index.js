const Developer = require("./Developer");
const Elephant = require("./Elephant");
const Rocky = new Developer("Rocky Jack", "rocky.contact@gmail.com", [
  "Java",
  "JavaScript",
  "C#",
]);

// for(let skill of Rocky.skills){
//   console.log(`#. ${skill}`);
// }

let php = new Elephant("PHP", 29, "Indigo");
let laravel = new Elephant("PHP", 29, "Indigo");

// console.log(JSON.stringify(php) == JSON.stringify(laravel));
console.log(php.color);
php.color = 'Yellow'
console.log(php.color);
