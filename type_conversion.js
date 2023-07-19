// Program to demonstrate type conversion in JavaScript

let num = 123;
let str = String(num); // Using the String() constructor
console.log(str); // Output: "123"

let bool = true;
let boolStr = bool.toString(); // Using the toString() method
console.log(boolStr); // Output: "true"

let num = 456;
let str = num + ""; // Concatenating with an empty string
console.log(str); // Output: "456"

let str = "789";
let num = Number(str); // Using the Number() constructor
console.log(num); // Output: 789

let str2 = "3.14";
let num2 = +str2; // Using the unary plus operator
console.log(num2); // Output: 3.14

let str = "42";
let num = parseInt(str); // String to integer
console.log(num); // Output: 42

let str2 = "3.14";
let num2 = parseFloat(str2); // String to float
console.log(num2); // Output: 3.14

let num = 0;
let bool = Boolean(num); // Using the Boolean() constructor
console.log(bool); // Output: false

let str = "Hello";
let bool2 = !!str; // Using the double negation operator
console.log(bool2); // Output: true
