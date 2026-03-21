// shallow copy and deep copy

// only refernce passed "NO COPY" created 
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

// var obj = {
//     name:  "piyush",
//     age: 20,
// }
// var obj2 = {...obj}; // now actual copy created

// obj2.name = "new";

// console.log(obj);
// console.log(obj2); 




// nested objects  -


// a very deep object
var obj = {
    name:  "piyush",
    age: 20,
    scoial: {
        facebook: {
            ac1: "a@gmail.com",
            ac2: "a@gmail.com",
        },
        twitter: {
            free:{
                 ac1: "a@gmail.com",
            },
            paid: {
                 ac1: "a@gmail.com",
            }
        }
    }
}

var obj2 = {...obj};

console.log(obj);
console.log(obj2); 

obj2.scoial.facebook.ac1 = "changed";

console.log(obj.scoial.facebook.ac1);
console.log(obj2.scoial.facebook.ac1);

obj2.scoial.facebook = "f-changed";

console.log(obj.scoial.facebook);
console.log(obj2.scoial.facebook);

// shallow copy hota hai jab aap kisi object ko copy kare object.assign ke through ya fir spread operator ke through , in dono hi case mein top level properties(props) to copy ho jati hai par kisi bhi nested object ki properties copy hone ki jagah fir se refernce pass kar deti hai 

// nested objected ke andar change hua to main mein change ho jaayega , uuka reference hi paas hota hai 


