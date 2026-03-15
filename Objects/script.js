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



// 