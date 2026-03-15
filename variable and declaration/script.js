// var let const

//var username = "username";

// a = 12;

// var a;
// var a = 12;

// let a;
// let a = 12;

// const a = 12;
// // no const a;

// declaration and initalization


// var window mai add karta hai 
// function scoped hota
// ise firse declare kar sakte hai 

// var a = 12;
// var a = 13;


// let b = 12;
// let b =13 ;


// let dula = "harm";
// let dulb = "harmy";

// const dula = "harm";
// const dulb = "harmy";


// var a = 12;



//   -------- SCOPE ---------
// global , block { } , function

// {
//     // block
// }


// reassignment and redeclaration


// var a = 12;
// a = 32;

// var a = 233;

// let b = 12;
// b =32;

// let b = 233;v


// hosting -> intilalization moves to top while declatation remains 
// var -> undefined 
// let -> X
// const -> X

//                      var a = undefined ;
// console.log(a);      console.log(a);
// var a =12;           a = 12;


// Q1
// console.group(nm);
// var nm = "Piyush";

// q2
// console.log(age);
// let age = 20;


// q3

// var x = 1; // global
// {
//     var x = 2; // functtion scoped so global too -- overwrite x to 2
// }
// console.log(x);


// let a = 10; // block scoped  // global
// {
//     let a =20;  // block scoped 
//     console.log("Inside", a);
// }
// console.log("Outside:",a);

// if(true){
//     var a =1 ; // function     
//     let b = 2; //{ } curly braces
// }
// console.log(a);
// console.log(b);

// const person = { name : "Piyush"};
// person.name = "mishra"; // update kar sakte hai -- object property can be  changed 
// person = {}; // reassign nahi kat sakte hai 

// Object.freeze
// Object.freeze()
// Object.freeze(obj)

// const prevents the variable from being reassigned to a different value or object, but it does not make the object's contents immutable.
// Object.freeze() makes the contents of the object immutable but does not prevent the variable holding the object from being reassigned (unless the variable was declared with const)