// shallow copy and deep copy

// var obj = {
//     name: "Piyush ",
//     age: 20,
// }
// var obj2 = obj; // no copy made now obj2 just points the values of obj 

// obj2.name = "new ";

// console.log(obj2); 
// console.log(obj);// ob2 and obj are equals because only refernce is passed no real copy created 
// obj created refernce copy 

// var obj = {
//     a: 1,
// }

// var obj2 = obj;
// obj2.a = 12; // obj2 is not a real thing

// console.log(obj);
// console.log(obj2); 


// real copy 

var obj = {
    name:  "piyush",
    age: 20,
}
var obj2 = {...obj}; // now actual copy created

obj2.name = "new";

console.log(obj);
console.log(obj2); 

