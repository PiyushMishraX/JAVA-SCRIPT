// what  why how
// what function

// agar code likh diyta to wo turant chal jaata hai

// console.log("hey");
// //  


// console.log("dance");
// console.log("dance");
// console.log("dance");
// console.log("dance");
// console.log("dance");
// console.log("dance");

// function dance() {
//     console.log("dance");
// console.log("dance");
// console.log("dance");
// console.log("dance");
// console.log("dance");
// console.log("dance");
// }

// dance();
// dance();
// dance();
// dance();
// dance();

// use case 1 of fn - to not run code immideatiely


// dance();
// dance();
// dance();
// dance();
// dance();

// case 2 to - to reuse code an drerun code








// CREATE function
// method 1 - function declaration
// function fn(){
//     console.log("happy new year");
// }
// fn();

// method 2 - function expression
// let fnc = function() {
//     console.log("hey hey");
// }
// fnc();


// fat arrow function
// let fnc = () =>{
//     console.log("hello");
// };
// fnc();



// parameter and arguments

// function dance(v1){
//     // console.log(" horse dancw");
//     console.log(`${v1} dances`);
// }

// dance("Horse");
// dance("brain");
// dance("bro");


// function add(v1,v2)// parameters
// {
//     console.log(v1+v2);
// }

// add(1,2); // 1,2 arguments


// default , rest and spread parameters

// function add (v1,v2){
//     console.log(v1,v2);
//     // deafult value undefined , undefined
// }

// add();


// function add (v1,v2){
//     console.log(v1 + v2);
//     // undefined + undefined = NaN (adding two non nummbers )
// }
// add();

// function add1 (v1 ,v2 ){
//     console.log(v1 + v2);
//     // defalut 0 , 3
// }
// add1();

// function add1 (v1 = 0,v2 = 3){
//     console.log(v1 + v2);
//     // defalut 0 , 3
// }
// add1();

// // gives deafult vlaues to top too or the fn(); searches best possible function declaration



// REST ( AND SPREAD)  parameter

// function abcd (...val) {
//  console.log(val);
// }
// abcd(1,2,3,4,5,6,7); // -> (7) [1, 2, 3, 4, 5, 6, 7]

// jab arguments kai saare ho to humein utne hi parameter banane padenge , issey bachne ke liye , hum rest ka use karte hai ...
// ... -> yahi rest yahi spread
// agar ... function ke parameter  space me lage t wo rest operator hai and agar wo arrays and objects mein lage to wo spread opearor hai



// function abcd (a,b,c,...val) {
//  console.log(val);
//  console.log(a,b,c,val)
// }
// // ABCD(1,2,3,4,5,6,7); // 
// abcd(1,2,3,4,5,6,7); // -> (4) [4, 5, 6, 7]
