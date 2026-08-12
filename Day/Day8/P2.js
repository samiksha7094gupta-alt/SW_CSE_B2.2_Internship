// JS Variables
// var | let | const

// 1 var
//var x = 10;
//var x = 20;
//console.log(x)
// scope behavior : var is not block-scoped
//if (true) {
  //  var message = "Hello";
//}
  //  console.log(message);

// 2 let
//let name = "Samiksha";
//let name = "samiksha";// not allowed to create with same name
//console.log(name)

//scope behavior : let is block-scoped
//if (true) {
  //  let message = "Hello";
    //console.log(message);
//}

// 3 const
const pi = 3.14159
//pi = 3.14 // reassignment not allowed
console.log(pi)

// // // scope behavior : const is block-scoped
if (true) {
    const pi = 3.14159;
}
console.log(pi) // cannot access the variable outside the block, will give error