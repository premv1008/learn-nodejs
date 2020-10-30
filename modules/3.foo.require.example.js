/*
The code below has two simple methods
greet with name param
helloWorld
*/

//import 2.bar.js to run that module.
require('./2.bar');

function greet(name) {
  return `Hello,${name}`;
}
function helloWorld(name) {
  return 'Hello,world!';
}

console.log(greet('prem'));
console.log(helloWorld());

// purposefully called in a wrong way, 
// js doesn't throw error like static typed languages.
console.log(helloWorld('prem'));
