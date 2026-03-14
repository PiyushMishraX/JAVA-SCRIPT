// data types
// data ka type

// 12 harsh true [] {} () undefined NaN Symbol bigInt

// primitve -> aisi saari values jinko copy katme par tumhe ek real copy mil jaaye
// string , nmber , boolean , null , undefined , symbol , bigInt

// refernce -> inko copy karne par real copy naahi milegi par parent ka refernce mil jayega
// array , object , functions
// []      { }      ( )

// let a = 12;
// let b = a;
// a= a + 2;

// let a = [1,2,3];
// let b = a; // a[i] <=>b[i]




// string , nmber , boolean , null , undefined , symbol , bigInt 

// stringin
// ' ' single quotes
// " " double quotes
// ` ` backtick


// number
// 12 
// 12.3

// boolean , true false
// let a = true;
// let b = false;


// null matlab jaan boojh kar ke koi value nahi di
// let seleststudent = null;
// let selectstudent = "Harsh"

// undeifned
// koi value nahi di to by deafult value jo m=value mili
// let a;
// console.log(a);


// symbol -> uniuqe immutable value 

// future mein hum kooi libraries use karenge ab is case un llibraries mein kai baar kuchh fields hoti hai jinse similar hum bhi banaa dete hai aur galti se humari banaai hui fields us library ki original fields ko change ka dete hai 

// let sjs = {
//     uid: 12,
//     model: " bro"
// }

// sjs.uid = 1; // overrides uid which is wrong 

// symbol
// let u1 = Symbol("uid");
// // u1 holds symbol uid
// let u2 = Symbol("uid");
// // they are unique

// let obj = {
//     uid:1

// }
// let u1 = Symbol("uid");
// obj[u1] = "001";

// // create uniques no override


// bigInt

// let a = Number.MAX_SAFE_INTEGER
// // limit of integers being safe

// let a = 9007199254740991n; <-- bigInt
// // a + 12n





// REFERENCE data type

// let a = [1,2,3];
// let b =  a;


// // object

// let a = {
//     name: "harsh",
// }
// let b = a;

// b.name = "bro";