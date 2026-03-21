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
// var obj = {
//     name:  "piyush",
//     age: 20,
//     scoial: {
//         facebook: {
//             ac1: "a@gmail.com",
//             ac2: "a@gmail.com",
//         },
//         twitter: {
//             free:{
//                  ac1: "a@gmail.com",
//             },
//             paid: {
//                  ac1: "a@gmail.com",
//             }
//         }
//     }
// }

// var obj2 = {...obj};

// console.log(obj);
// console.log(obj2); 

// obj2.scoial.facebook.ac1 = "changed";

// console.log(obj.scoial.facebook.ac1);
// console.log(obj2.scoial.facebook.ac1);

// obj2.scoial.facebook = "f-changed";

// console.log(obj.scoial.facebook);
// console.log(obj2.scoial.facebook);

// shallow copy hota hai jab aap kisi object ko copy kare object.assign ke through ya fir spread operator ke through , in dono hi case mein top level properties(props) to copy ho jati hai par kisi bhi nested object ki properties copy hone ki jagah fir se refernce pass kar deti hai 

// nested objected ke andar change hua to main mein change ho jaayega , uuka reference hi paas hota hai 



// Deep Copy - exact copy ( even if nested proper duplicate is created)


// var obj = {
//     name:  "piyush",
//     age: 20,
//     scoial: {
//         facebook: {
//             ac1: "a@gmail.com",
//             ac2: "a@gmail.com",
//         },
//         twitter: {
//             free:{
//                 ac1: "a@gmail.com",
//             },
//             paid: {
//                 ac1: "a@gmail.com",
//             }
//         }
//     }
// }

// // no logic - method one line code , interviewrs genrally rejecty it or ask the real proper method - 

// // {a: 1, b:2 } pass refernce
// // '{a: 1, b:2 }' - can be copied to make proper copy

// // JSON.stringify({a: 1, b:2 })


// var obj2 = JSON.parse(JSON.stringify(obj)); // real deep copy created  // beacause obj converted to string , primitive data type instead of refernce data type

// console.log(obj);
// console.log(obj2); 

// obj2.scoial.facebook.ac1 = "changed";

// console.log(obj.scoial.facebook.ac1);
// console.log(obj2.scoial.facebook.ac1);

// deep_copy = JSON.parse(JSON.stringify(object))


// ------------------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------------------- //



// STANDARD LOGICAL WAY - good old recursion



// {a: 1, b: 2,c: { }}
// function deepcopy (obj){}


// if we found a value other than ,arr/ obj return it such as 12 ( num )
// if array recived than at than case w duplicae array
// start with blank array and add elemetns
// if object send then we create blank object and copy them 



// recursion part -
// function deepcopy(obj){
    // part 1. check arr/obj if not return 
    // Part 2. part to create balck array or blank oject
    // part 3. recursive call
    // deepcopy() // we don't know what is in an elemetn  ssuch as a we just recursive call with a
// }



// Program -- 

// var obj = {
//     name:  "piyush",
//     age: 20,
//     scoial: {
//         facebook: {
//             ac1: "a@gmail.com",
//             ac2: "a@gmail.com",
//         },
//         twitter: {
//             free:{
//                 ac1: "a@gmail.com",
//             },
//             paid: {
//                 ac1: "a@gmail.com",
//             }
//         },
//         fun(){
//             console.log("funny");
//         }
//     }

// }




// deep copy function

// typeof null is object too
// can check for it specially null === nul true

// typeof {} = object
// typeof [] = object

// Array.isArray([]) ->true
// Array.isArray({}) ->false

function makeDeepCopy(obj){ // this obj is just a parameter not same as the global variable 

    if(typeof obj !== 'object' || obj === null ){
        return obj;
    }

    var copiedval = Array.isArray(obj) ? [] : {}; // blank array and blank object

    // Object.keys(arr) -> give indexes in an array
    // Object.keys(obj) -> give naem of properties in an array

    var keys = Object.keys(obj); // object or indexs according to condition // keys is an array

    // legth of keys (1 to n)
    for(var i=0; i<keys.length; i++){
        // obj[keys[i]] for i =0 -> obj[keys[0]] -> obj[name] -> 'piyush'
        // copiedval[keys[0]] -> copiedval['name] ->  anem create hua aur vale set hui
        copiedval[keys[i]] = makeDeepCopy(obj[keys[i]]); 
    }

    return copiedval; // return after completion

}

// [1,2,3,4]
// makeDeepCopy(null);
// var copy = makeDeepCopy({name: 'piyush', age: 20});
// console.log(copy);



var userinfo = {
    name:  "piyush",
    age: 20,
    social: {
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
        },
        fun(){
            console.log("funny");
        }
    }

}


var copy = makeDeepCopy(userinfo);
console.log(copy);

copy.social.facebook.ac1 = "changed";

console.log(userinfo.social.facebook.ac1);
console.log(copy.social.facebook.ac1);