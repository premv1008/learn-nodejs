/*
The code below has two simple methods
greet with name param
helloWorld
*/

//import 2.bar.js to run that module.
var barObj = require('./4.bar.export');

function greet(name) {
  return `Hello,${name}`;
}
function helloWorld(name) {
  return 'Hello,world!';
}

console.log(barObj.add(2,3));
console.log(barObj.subtract(2,3));
