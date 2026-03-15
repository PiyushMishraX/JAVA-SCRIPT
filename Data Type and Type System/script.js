// data types
// data ka type

// 12 piyush true [] {} () undefined NaN Symbol bigInt

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
// let selectstudent = "Piyush"

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
//     name: "piyush",
// }
// let b = a;

// b.name = "bro";




// DYNAMIC TYPING - js mai statc typing ( dats types) nahi hai and yaha par dynamic typing hai jiska matlab hai dat ko change kr skte ho, yuki yaha par dynamic data types hai


// int a = 12; // can't change to other type such as string etc

// let a =12;
// a = "hello";
// a = [];
// a = true;
// a = null;
// a = undefined;
// // static typing is better mostly 
// dynamic is good for learning than switch to type script for type protection 

// typeof quirks ( e.g, typeof null === 'object)

// typeof 12
// 'number'
// typeof "piyush"
// 'string'
// typeof null
// 'object'
// typeof NaN
// 'number'
// quirks 
// NaN === NaN
// false
// 0.1+0.2
// 0.30000000000000004
// [] +[]
// ''
// 1 + "1"
// '11'
// '' +""
// ''
// 1 == "1"
// true
// 1 === "1"
// false


// typeof NaN;
// console.log(typeof NaN);



// Type coercion ( == vs === )
// Type coercion -> consept jismein ael type automatically convert hojaayega

// "5" + 1 // 1 -> "1"
// '51' // concate
// // + -> ad or concatination
// // if any operand string hoaya to concate hoga

// "5" - 1 // "5" -> 5
// 4 
// // - -> sirf minus bus karta hai 



// Truthy and falsy values
// If(12){}

// flasy (FALSE vlaues) --
// 0 false "" null  undefined NaN document.all
// check true false ( use !! ) -- !!0 --> flase


// baki saary values true mai  covert hongi
// inncluding - "0" 
 
// "false" [] {} function(){}




// practice 

// predict results --

// true + false = 1 +0 = 1
// because of + operation 
// true is coerced to 1
// false is coerced to 0 
// So, true + false becomes 1 + 0, which evaluates to 1 — a number, not a boolean.


// null + 1 = 0 + 1 
// 5 + "5" = '55'
// !!undefined = false 



// why 
// typeof NaN === 'number' // true  
// 5 * "piyush" = NaN  //falied number operation so type is number


// undefined vs null
// undefined is by deafult 
// null is assigned by use for no vlaue
// let x;
// console.log(x);
// let y= null;
// console.log(y);



// '5' + 1 = '51'
// in js for opeartion + , number coverts to string
// '5' - 1 = 4 
// for any operator other than + the js conerts string to number
