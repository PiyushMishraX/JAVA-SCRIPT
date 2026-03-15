// on=bject -> explain everything abount an objecct

// let obj = {
//     name: "harsh",
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
//     name : "Harsh",
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
//     name: "harsh",
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
//     name: "harsh",
//     age: 26,
//     email: "test@test.com",
// };

// Object.keys(obj);
// arr of keys of object

// Object.entries(obj);
// (3) [Array(2), Array(2), Array(2)]0: (2) ['name', 'harsh']1: (2) ['age', 26]2: (2) ['email', 'test@test.com']length: 3[[Prototype]]: Array(0)
// array of arrays


// copying object

// let obj = {
//     name: "harsh",
//     age: 26,
//     email: "test@test.com",
// };

// let obj2 = { ...obj}; // spread

// object .assign -> mostly spread is used always it is nearly not used

// let obj2 = Object.assign({} , obj);

// let obj2 = Object.assign({price:Infinity} , obj);



// deep cloning

// let obj = {
//     name: "harsh",
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
// '{"name":"harsh","age":26,"email":"test@test.com","address":{"city":"bhopal"}}'
// JSON.parse('{"name":"harsh","age":26,"email":"test@test.com","address":{"city":"bhopal"}}')
// {name: 'harsh', age: 26, email: 'test@test.com', address: {…}}

// then untring it , the real copy is made


// deep cloning
// let obj2 = JSON.parse(JSON.stringify(obj));
//  obj2.address.city = "Indore";


// Optional chaining , computed properties

// //  Optional chaining
// let obj = {
//     name: "harsh",
//     age: 26,
//     email: "test@test.com",
//     addresses: {
//     // address: {
//         city: "bhopal",
//     },
// };

// // obj.address.city;
// obj?.address?.city; // not give error -> gives undefined



// Computed properties

let role = "admin";

let obj = {
    name: "harsh",
    age: 26,
    email: "test@test.com",
    addresses: {
    // address: {
        city: "bhopal",
    },
    [role]: "harsh",
    // admin: "harsh";
};