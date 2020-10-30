/*
The code below has two simple methods
add 
subtract
*/

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}

//Option1
module.exports.add = add;
module.exports.subtract = subtract;

/*
Option2 by exports
shortcut provided to just use exports
comment below lines to try, this basically node doing module.exports = exports internally
*/

// exports.add = add;
// exports.subtract = subtract;

/*
//Option3 by object assignment.
you can also use an object to assign all properties of a module you want to export
comment below lines to try, this doesn't work with exports
*/


//  module.exports = {
//     add: add,
//     subtract: subtract
// }