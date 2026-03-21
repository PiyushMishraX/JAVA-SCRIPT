// shallow copy and deep copy

var obj = {
    name: "Piyush ",
    age: 20,
}
var obj2 = obj; // no copy made now obj2 just points the values of obj 

obj2.name = "new ";

console.log(obj)
console.log(obj2)

