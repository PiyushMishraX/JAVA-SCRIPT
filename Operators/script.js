// Arithmetic , comparison , logical , assignment ,unary , ternary

// + - * / % **
// = == ===
// < >  <= >= 1 ! != !== !!
// && ||
// ?:


//Arithmatic
// + - * / % **

// 1+2 = 3
// "ha" + "rsh" = "harsh"

// 12 -2, 12*2 , 12/6

// modulus 12%2 = 0 , 12%5 = 2
// power 2**3 = 8 exponentiation



// comparaison
// =
// ==  not strict
// ===  strict
// !=   not strict
// !==  strict
// >=
// <=
// <
// ></>

// = assignment operator, value dalana
// 12 == 13 , //false
// 12 == "12" // true
// == not check type only value

// 12 === "12" // false - check type also

// 12 != 13 // true

//  12 != "12" // flase
// 12 !== "12" // true


// 12 > 13 , 22<22, 22<=22 , 13>=12




// assignmentn operators
// =
// +=
// -=
// *=
// /=
// %=


// let a = 12;
// a+=3; // -> a = a+3   15
// a-=11; // 4
// a*=2 ; // 8
// a/=2; // 4
// a%=3; // a = a% 3 -> 1


// logical
// && || !

// true && true -> true
// false && true -> true
// true && false -> false
// false && flase -> false

// 12>13 && 13>10 -> false && true -> false

// ||
// 12>13 || 13>10 -> false && true -> true

// !
// !false -> true

// !!12 -> !flase -> true // ! not nature of value // !! real nature of value



// Unary operatos
// + - ! typeof ++ --
// +"5" -> 5
// +"Harsh" -> NaN


// -a = -a

// !12 -> value/ type of truthy falsy inverted

// typeof 12 -> 'number'

// let a =12;
// ++a = 14;  increase/ perform operation than print// pre increment
// a++ = 12(print); a=14  print than increase/ perform operation .. post increment

// let a = 12;
// --a = 10(print);
// a-- = 12(print ) a = 10


// TERNARY operator

// ?:
// condition ? true hui ka code : false hui ka code

// 12>13 ? console.log("true") : console.log("false");



// typeof and instanceof

// typeof value

// wrong value -
// typeof null -> 'object'
// typeof [] -> 'object'
// typeof NaN -> 'number'

// let a = [];
// typeof a -> 'object' // wrong , quirk , issue

// a instanceof Array -> true

// let b = {};
// b instanceof {}; -> true
// b instanceof Array;  -> false


// variable instanceof ___  -> check if variable is born from ___

// let a =12;
// a instanceof Number -> flase
// instanceof works with reference values better ot with  primitive vlaues 
// [] {} ()
// typeof works with primitve values better used with them mostly  

