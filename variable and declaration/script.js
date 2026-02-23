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


var score = 10;
var score = 20;

let age = 25;
age = 30; // ok
// let age = 40; //  Error (same block)


const PI = 3.14;
// PI = 3.14159; // Error

const student = { name: "Riya" };
student.name = "Priya"; // OK
student = {}; // Error

{
var x = 5;
let y = 10;
const z = 15;
}
console.log(x); //  5
console.log(y); //  ReferenceError
console.log(z); //  ReferenceError

// hoisting
console.log(a); // undefined
var a = 10;

