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
let score = 80;
let grade = score > 50 ? "Pass" : "Fail";
