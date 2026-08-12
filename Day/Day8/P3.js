// JS datatypes
// Primitive data types:
// 1. String
// 2. Number
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol
// 7. BigInt
// Non-primitive data types:
// 1. Object
// 2. Array
// 3. Function

// primitive data type
//let name = "Samiksha"; // string
//let age = 20; // number
//let bigIntNum = 12345678901234567890123; // BigInt
//let isStudent = true; // boolean
//let email = undefined; // undefined
//let address = null; // null
//let id = Symbol("id"); // symbol

//console.log(typeof name); // string
//console.log(typeof age); // number
//console.log(typeof bigIntNum); // bigint
//console.log(typeof isStudent); // boolean
//console.log(typeof email); // undefined
//console.log(typeof address); // object
//console.log(typeof id); // symbol

// Non-primitive data types:
// 1. Object
let person = {
    name: "Samiksha",
    age: 20,
    isStudent: true
};
console.log(typeof person); // object
// 2. Array
let colors = ["red", "green", "blue"];
console.log(typeof colors); // object
// 3. Function
let greet = function() {
    console.log("Hello, World!");
};
console.log(typeof greet); // function