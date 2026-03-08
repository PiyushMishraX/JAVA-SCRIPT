// var let const 

var math = ((23*12-89)%45)-122;

var a;
var a=12;
let a;
let a = 12;
// const a; no
const a =12;

//declare and inittialize

var a; // initialization
var a=12; // declarztion
let a; // initialization
let a = 12; // declaration
// const a; no
const a =12;


// var score = 10;
// var score = 20;

// let age = 25;
// age = 30; // ok
// // let age = 40; //  Error (same block)


// const PI = 3.14;
// // PI = 3.14159; // Error

// const student = { name: "Riya" };
// student.name = "Priya"; // OK
// student = {}; // Error

// {
// var x = 5;
// let y = 10;
// const z = 15;
// }
// console.log(x); //  5
// console.log(y); //  ReferenceError
// console.log(z); //  ReferenceError

// // hoisting
// console.log(a); // undefined
// var a = 10;

// console.log(b); // ReferenceError
// let b = 20;

// // type coercion 
// "5" + 1     
// "5" - 1     
// true + 1    
// null + 1    
// // "51"   → number converted to string
// // 4      → string converted to number
// // 2
// // 1
// undefined + 1 // Na


// if ("0") {
// console.log("Runs");  // "0" is a non-empty string = truthy
// }



// typeof "Sheryians"      
// typeof 99               
// typeof true             
// typeof undefined        
// typeof null             
// typeof []               
// typeof {}               
// // "string"
// // "number"
// // "boolean"
// // "undefined"
// // "object" ← known bug
// // "object"
// // "object"
// typeof function(){}     
// // "function"

// console.log(null + 1);      
// console.log("5" + 3);       
// console.log("5" - 3);       
// console.log(true + false);

// console.log(typeof []);
// console.log(typeof null);
// console.log(typeof 123n);

// console.log(Boolean(0));    // falsy    
// console.log(Boolean("0"));   // truthy   
// console.log(Boolean([]));    // truthy
// console.log(Boolean(undefined));// falsy

// console.log(5 == "5");   
// console.log(5 === "5"); 


// let a = 10, b = 3;
// console.log(a + b);   // 13
// console.log(a % b);  // 1
// console.log(2 ** 3);  // 8

         
// = // assigns value
// += // a += b  => a = a + b
// -=// a -= b
// *=, /=, %=


// let score = 5;
// score += 2;     
// // score = 7

// ==    // equal (loose)  
// ===     // equal (strict – value + type)
// !=      // not equal (loose)
// !==     // not equal (strict)
// > < >= <=

// && // AND – both must be true
// || // OR – either one true
// ! // NOT – negates truthiness

// let age = 20, hasID = true;
// if (age >= 18 && hasID) {
//  console.log("Allowed");
// }

// + // tries to convert to number
// - // negates
// ++ // increment
// -- // decrement
// typeof // returns data type

// let x = "5";
// console.log(+x); // 5 (converted to number)

//ternary operator
// let score = 80;
// let grade = score > 50 ? "Pass" : "Fail";

// Tyoe of
// typeof 123 // "number"
// typeof "hi" // "string"
// typeof null // "object" (JS bug)
// typeof [] // "object"
// typeof {} // "object"
// typeof function(){} // "function"


// console.log("10" + 1);
// console.log("10" - 1);
// console.log(true + false);
// console.log(!!"Sheryians");

// let str = "42";
// let num = +str;
// console.log(num);  // 42

// let age = 17;
// let msg = age >= 18 ? "Adult" : "Minor";

// // calculator
// // Using switch + arithmetic operators
// function calc(a, b, operator) {
// // +, -, *, /
// }

// let marks = 82;
// // Print "Excellent", "Good", "Average", or "Fail" based on ranges

// if (condition) {
// // runs if condition is true
// } else if (anotherCondition) {
// // runs if first was false, second is true
// } else {
// // runs if none are true
// }


// let marks = 78;
// if (marks >= 90) {
// console.log("A");
// } else if (marks >= 75) {
// console.log("B");
// } else {
// console.log("C");
// }

// switch (value) {
// case value1:
// // code
// break;
// case value2:
// // code
// break;
// default:
// // fallback
// }

// let fruit = "apple";
// switch (fruit) {
// case "banana":
// console.log("Yellow");
// break;
// case "apple":
// console.log("Red");
// break;
// default:
// console.log("Unknown");
// }


// function checkAge(age) {
//  if (age < 18) return "Denied";
//  return "Allowed";
// }

// for (let i = 0; i < 5; i++) {
//  console.log(i);
// }

// let i = 0;
// while (i < 5) {
//  console.log(i);
//  i++;
// }

// let i = 0;
// do {
//  console.log(i);
//  i++;
// } while (i < 5);

// for (let i = 1; i <= 5; i++) {
//  if (i === 3) continue;
//  console.log(i); // Skips 3
// }


// for (let char of "Sheryians") {
//  console.log(char);
// }

// let nums = [10, 20, 30];
// nums.forEach((num) => {
//  console.log(num);
// });

// let user = { name: "Harsh", age: 26 };
// for (let key in user) {
//  console.log(key, user[key]);
// }

// Loops = data processor.
// Use the right loop for the job:
// for = best for numbers/indexes
// for-of = for array values
// for-in = for object keys
// while = for unpredictable conditions

// function greet() {
//  console.log("Welcome to Sheryians!");
// }
// greet();

// function greet(name) {
//  console.log("Hello " + name);
// }
// greet("Harsh");

// function greet(name) {
//  console.log("Hello " + name);
// }
// greet("Harsh");

// const greet = function () {
//  console.log("Hello!");
// };


// // Arrow Funstion 
// const greet = () => {
//  console.log("Hi!");
// };

// function multiply(a = 1, b = 1) {
//  return a * b;
// }

// function sum(...nums) {
//  return nums.reduce((acc, val) => acc + val, 0);
// }

// let nums = [1, 2, 3];
// console.log(sum(...nums)); // Spread

// function shout(msg) {
//  return msg.toUpperCase();
// }
// function processMessage(fn) {
//  console.log(fn("hello"));
// }
// processMessage(shout);

// function createMultiplier(x) {
//  return function (y) {
//  return x * y;
//  };
// }
// let double = createMultiplier(2);
// console.log(double(5)); // 10



// function outer() {
//  let count = 0;
//  return function () {
//  count++;
//  console.log(count);
//  };
// }
// let counter = outer();
// counter(); // 1
// counter(); // 2


// (function () {
//  console.log("Runs immediately");
// })();

hello(); // works
function hello() {
 console.log("Hi");
}

greet(); // error
const greet = function () {
 console.log("Hi");
};

// Declarations are hoisted
// Expressions are not

let fruits = ["apple", "banana", "mango"];

let fruits = ["apple", "banana", "mango"];