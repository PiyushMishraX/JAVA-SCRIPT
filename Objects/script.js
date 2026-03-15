// on=bject -> explain everything abount an objecct

// let obj = {
//     name: "piyush",
//     age: 26,
//     khaana: "daal chawal",
// };


// obj.age;

// obj['age'];
// // obj.aa not work takes literal vlues
// let aa = "name";
// obj[aa];
// obj['name'];

// key vlaue structure key : value
//  . vs bracket notation


// //nesting

// const user = {
//     name : "piyush",
//     address: {
//         city: "Bhaopal",
//         pin: 462001,
//         location: {
//             lat: 23.2, 
//             lng: 77.4,
//         },
//     },
// };

// user.address.location.lng;
// user.address.locatiorn.lng; -> error before lng 

// lat 
// lng

// user.address.locatio0n.lng; -> // it is deep access


// // object structuring;
// user.address.location.lng;
// let {lat,lng} = user.address.location;
// // lat , lng - > new variables -> destructured values


// loops -

// for -in


// let obj = {
//     name: "piyush",
//     age: 26,
//     email: "test@test.com",
// };

// for ( variable key in obj){
//     console.log(key);
// }

// for ( let key in obj){
//     console.log(key);
// }


// for ( let key in obj){
//     // obj.key -> wrong 
//     // obj[key]
//     console.log(key , obj[key]);
// }



// objct keys

// let obj = {
//     name: "piyush",
//     age: 26,
//     email: "test@test.com",
// };

// Object.keys(obj);
// arr of keys of object

// Object.entries(obj);
// (3) [Array(2), Array(2), Array(2)]0: (2) ['name', 'piyush']1: (2) ['age', 26]2: (2) ['email', 'test@test.com']length: 3[[Prototype]]: Array(0)
// array of arrays


// copying object

// let obj = {
//     name: "piyush",
//     age: 26,
//     email: "test@test.com",
// };

// let obj2 = { ...obj}; // spread

// object .assign -> mostly spread is used always it is nearly not used

// let obj2 = Object.assign({} , obj);

// let obj2 = Object.assign({price:Infinity} , obj);



// deep cloning

// let obj = {
//     name: "piyush",
//     age: 26,
//     email: "test@test.com",
//     address: {
//         city: "bhopal",
//     },
// };

// let obj2 = { ...obj};
// obj2.address.city = "Indore"; 
// // onj.city -> indore too 
// // in nested objects only top level values only copied for real
// // the nested objects pass refernces again

// solution deep clone 


// JSON.stringify(obj) // -> obj totally changes to string
// '{"name":"piyush","age":26,"email":"test@test.com","address":{"city":"bhopal"}}'
// JSON.parse('{"name":"piyush","age":26,"email":"test@test.com","address":{"city":"bhopal"}}')
// {name: 'piyush', age: 26, email: 'test@test.com', address: {…}}

// then untring it , the real copy is made


// deep cloning
// let obj2 = JSON.parse(JSON.stringify(obj));
//  obj2.address.city = "Indore";


// Optional chaining , computed properties

// //  Optional chaining
// let obj = {
//     name: "piyush",
//     age: 26,
//     email: "test@test.com",
//     addresses: {
//     // address: {
//         city: "bhopal",
//     },
// };

// // obj.address.city;
// obj?.address?.city; // not give error -> gives undefined



// // Computed properties

// let role = "admin";

// let obj = {
//     name: "piyush",
//     age: 26,
//     email: "test@test.com",
//     addresses: {
//     // address: {
//         city: "bhopal",
//     },
//     [role]: "piyush",
//     // admin: "piyush";
// };


/// QUESTIONS ---

// create object for a student with name , age and is Enrolled.

// let obj = {
//     name: "piyush",
//     age: 26,
//     isEnrolled: true;
// }


// can a objec key can be a number or bollean ? try 

// const obj = {
//     true: "yes",
//     42: "answer",
// };
// console.log(obj[true]);
// console.log(obj[42]);


// Access the value of " first-name" from this object

// const user = {
//     "first-name" : "piyush",
// };
// // user.first-name; -? wrong 
// user["first-name"];


// given a dynamic key let "age " how wil you access user[key] ?
// let key = "age";
// const user = {
//     age: 26,
// };
// user[key];



// from object below, print latiitude

// // can not name location
// let locations = {
    
//         city: "bhopal",
//     coordinates:{
//         lat: 23.2,
//         lng: 77.4,
//     },
// };

// locations.coordinates.lat;




// what will happen if coordinates is issing , how to prevent errors

// // optional chaining
// let locations = {
    
//         city: "bhopal",
//     coordinatess:{
//         lat: 23.2,
//         lng: 77.4,
//     },
// };

// locations?.coordinates?.lat;
// // locations?.coordinates.lat; -> tries to find lat from undefined so error 
// // error Cannot read properties of undefined (reading 'lat') 




//q 7 
// destructure the city and lat from the location object above
// let locations = {
    
//         city: "bhopal",
//     coordinates:{
//         lat: 23.2,
//         lng: 77.4,
//     },
// };

// let {city} = locations;
// let {lat} = locations.coordinates; // coopies from destructuring



// destructure "first-name " as variable called first name 
// const user = {
//     "first-name" : "piyush",
// }

// can't have - in name have to create string or property name
// let {first-name}
// let {{fist-name}}
// let { "first-name" } = user;
// let { "first-name": firstName} = user;
// firstName
// firstName = 'piyush'




// use for-in to log all keys in thsi object:
// const course = {
//     title: "JavaScript",
//     duration: "4 weeks",
// };

// for(let key in course){
//     console.log(key);
// }



// use Object.entried to print all key-value paris as 
// const course = {
//     title: "JavaScript",
//     duration: "4 weeks",
// };

// Object.entries(course).forEach(function (val){
//     // console.log(val);
//     console.log(val[0] + ": " + val[1]);
// });



// copy this object using spread operator
// const original = { a: 1 , b:2};
// const copy = { ...original};



// // problem with this
// const obj1 = { info: { score: 80}};
// // const clone = { ...obj1};
// // clone.info.score = 100;
// // console.log(obj1.info.score);
// // // only refernced passed no deep cloning in above

// // deep cloning --
// const clone1 = JSON.parse(JSON.stringify(obj1));
// clone1.info.score = 200;
// console.log(obj1.info.score);

// const newobj = JSON.parse(JSON.stringify(obj1));
// newobj.info.score = 200;
// console.log(obj1.info.score);



// rewrite safely using optional chaining

// const person = {};
// console.log(person.profile.name); // X

// const person = {};
// console.log(person?.profile?.name); 


// use a variable to dynamically assign a property

// // const key = "roll";
// const key = "role";

// let obj  = {
//     name : "piyush",
//     [key]: "admin",
// };



// object flattening - for now understan as deep copy printing

// const nestedObj = {
//   a: 1,
//   b: {
//     c: 2,
//     d: {
//       e: 3,
//       f: [4, 5]
//     }
//   }
// };

// console.log(flattenObject(nestedObj));
// // Output: { a: 1, 'b.c': 2, 'b.d.e': 3, 'b.d.f.0': 4, 'b.d.f.1': 5 }   




// CONFUSING points

// deep copy vs shallow copy

// const a = { score: 90};
// const b = a;
// b.score = 50;
// console.log(a.score); // changed to 50 which is worng

// const a = { score: 90};
// const b = {...a};
// b.score = 50;
// console.log(a.score);


// but don't work with nestd objects so we use 
// JSON.parse(JSON.stringify(obj))
