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

// return- > jaha se aaye ho eahi bhej denge

// function abcd (v){
//     return 12 + v;
// }

// let val = abcd(3);
// console.log(val);
// // console.log(abcd());
// // abcd();

// early return -> learned in control flow
// function early(){
//     return 12;
//     return 13;
// }
// console.log(early());

// First class function -> ( conceptual -> basically ) - >  functions can be treated like vlaues

// jaha values waha function ho sakte hhai
// let abcd = function (){
// }

// function abcd(val) {
//   val();
// }

// arguments mein fucntion de sakte hai -> no name of that function
// abcd(function(){
//  console.log("hey");
// })

// function hey(){
//     console.log("hey");
// }
// abcd(hey()); -> not possible

// heigher order fncs -> ( also conceptual ) hof is a fucntion which returns a function or accepts a fucntion as paramter
// ya to function accept kare or return a function -- read notes to understnd more and revision

// function abcd(val) {
//   val();
// }
// abcd(function () {
  
// });

// or

// function abcd() {
//   return function () {
//     console.log("htllo");
//   }
// }
// // abcd();
// abcd()(); //-> () run the abcd and second () run fucntion 





// pure vs impure functions

// a fnc jo baahr ki vlaue naa badle hai wo hai pure function

// let a =12;
// function abcd() {
//     console.log("hey");
// } // pure


// function plus(){
//     a++;
// } // im,pure

// // aisa function jo bahar ki balue badal de wo impure fnc




// closure -> a function which returns another function and the returned function alwways uses any valriable of parent fnc

// function abcd(){
//     let a =12;
//     return function() {
//         console.log(a);
//     }
// }

// console.log(abcd()());




// Lexical scoping

// function abcd(){
//     let a = 12;
//     function defg(){
//         let b =13;
//         function ghij(){
//             let c = 14; // can't use outside ghij
//         }
//     }
// }



// IIFE - immedietly invoked function expression

// (function() {
//     console.log("hey");
// })();




// hoisting difference in function declaration and expression -

// abcd(); // -- > run
// function abcd() {
//     console.log("hey");
// }

// abcd(); // -- > error
// let  abcd = function() {
//     console.log("hey");
// }






// q1 : difference b/w fucntion decalration and expression in terms of hoisting
// hoist an dnot hoist


// // q2  log of this - ( output )
// greet();
// function greet(){
//     console.log("helo");
// }


// q3 convert to arrow

// function multipy( a,b ){
//     return a*b;
// }

// let multipy = ( a,b )=>{
//     return a*b;
// }; //  do not forget ; in the end


// q4 : identify paramter and arguments

// q 5: how many parameter are in function and how many arguments passed

// // q 6 : predect op
// function sayHi(name = "guest"){
//     console.log("hi",name);
// }
// sayHi();

// q7 what ... mean in parameters
// all arguments ( extra) in ... as array


// q8 : use rest parameter to accept any number of scores and return athe toatl

// function getScore(...scores){
//     // console.log(scores);
//     let total = 0;
//     scores.forEach(function(val){
//         total = total + val;
//     })
//     // console.log(total);
//     return total;
// }
// console.log(getScore(10,12,14,18));




// q 9 fix using early return

// function checkAge(age){
//     if(age<18){
//         console.log("Too young");
//     } else {
//         console.log("Allowed");
//     }           
// }

// function checkAge(age){
//     if(age<18) return ("Too young"); //return "Too young";
//     return ("Allowed");
//     // return "Allowed";
// }           

// console.log(checkAge(19));


// q10 return value of this 
// function f() {
//     return;
// }
// console.log(f()); // -> undefined



//  what doe sit mean when we say "functions are first-class citizens"?
// first class functions

// can you assign a funciton to a variable and the call it  ? show how .

// let a = fucntion () {

// }
// a();


// pass a fucntion into another fucntion and execute it inside .

// function abcd(val) {
//     val();
// }

// abcd(function() {
//     console.log("hey");
// });


// q 14 what is higher order function
// function abcd(){
//     return function() {

//     };
// }

// function abcd(val){
//     val();
// }
// abcd( function(){

// });


// q 15 identify hof
// [1,2,3].map(function(x) {
//     return x*2;
// }); // map-> hof accepting a function

// q16 pure , impure fncs
// let total = 0;
// function addTotal(num) {
//     total += num;
// }


// q 17 covert to pure fn

// let total = 0;
// function addTotal(num){
//     let newTotal =total;
//     newTotal += num;
// }



// q18 closure -> fn returns an fn and use parents variable
// function abcd(){
//     let vla =0 ;
//     return function (){
//         console.log(val);
//     };
// }

// // q 19 - log op
// function outer() {
//     let count = 0;
//     return function() { // -> counter
//         count++;
//         console.log(count);
//     };
// }
// const counter = outer();
// counter();
// counter();
// 1 1 -> no -> counter = function that returned 
// no error it fn scoped
// 1 2


// q20 -> convert this mnormal fucntion to iife
// function init(){
//     console.log("initalized");
// }
// (function init(){
//     console.log("initalized");
// })();


// q 21  what is the use iife? name one real -world use case . -> to create private variable

// let sher = ( function(){
//     let score = 0;
//     return{
//         getScore: function(){
//             console.log(score);
//         },
//         setScore: function(val){
//             score = val;
//         },
//     };
// })();



// q 22 -> output error
// greet();
// // fn expression gives error in var too - but deffierent
// var greet = function() {
//     console.log("Hi");
// };


// q23 -> output
// greet();
// function greet() {
//     console.log("Hi");
// };




//  PRACTICE TASKS

// 1 - write bmi calculator

// function bmi(weight ,  height){
//     // height in meter  , weight in kg
//     // return weight / ( height * height);
//     return weight / ( height ** 2);
// }

// // console.log(bmi(70 , 1.78));
// console.log(bmi(70 , 1.76).toFixed(4));


// // reusable discount calculator
// function discountCalculator(discount){
//     return function( price){
//         return price - (price* (discount/ 100));
//     }
// }

// let ten_disocunter = discountCalculator(10);
// console.log(ten_disocunter(200));

// let twenty_disocunter = discountCalculator(20);
// console.log(twenty_disocunter(200));