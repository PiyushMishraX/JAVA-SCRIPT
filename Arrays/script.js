// let arr = [1,2,3,4];
// let marks = [ 10, 40, 52, 37 , 92];
// // 0th  index
// index(STARTs from 0 to n -1) = poition( startig from 1 to n) - 1

// // marks[0] = 10
// // marks[3] = 37;
// // marks[50] = undefined

// let arr = new Array();


// let arr = [1,2,3,4];
// arr[2] = 12;
// console.log(arr);



// let arr = [1,2,3,4,5];
// arr.push(7000);

// arr.pop();

// arr.shift(); // remove first

// arr.unshift(0);

// arr.splice(2,2);

// let new_arr = arr.slice(0,3);



// arr.reverse();

// arr = [2,4,1,5,3];
// let sr = arr.sort(function(a,b){
// //    return a-b; // ascending
//    return b-a; // descending
// });
// console.log(sr);



// console.log(arr);

// console.log(new_arr);




// let arr = [11,62,3,4,25];


// arr.forEach(function(val){
//     console.log(val);
// });

// arr.forEach(function(val){
//     console.log(val + 5);
// });


// map sirf tab use karna hai jab ek naaya array banana hai pichhle array ke data  ke basis par
// same ammount of size
// ,map dikhte hi saath man mein ek blank array bana lo -> or returned values input karte jao


// let new_arr = arr.map(function(val){
//     // return 12;
//     // no return -> undefined
//     // return;

//     if(val>10) return val;
// });

// console.log(new_arr);

// // jab bhi koi aisa koi case dikh jaaye jaha par ek array se naya array banega and wo naya array kuchh values ko  rakhega tab map lagega


// filter

// let new_arr = arr.filter(function(val){
//     // return true; 
//     if(val > 4) return true;
//     // only return vlaues when true
// });
// console.log(new_arr);

// console.log(new_arr);



// // Reduce

// // reducing array to single value

// let ans = arr.reduce(function(accumulator , val){
//     return accumulator + val;
// }, 0);
// // , 0 ) -> value of accumator -> it remembers its changed value unlike val which changes to array element values
// console.log(ans);



// find

// return val if found ( only first vlaue mostly )

// let va = arr.find(function(val){
//     return val === 11;
// });
// console.log(va);

// let arr1 = [
//     {id: 1 , key: 1},
//     { id:2 , key: 2},
//     { id: 3, key: 1},
// ];

// let va = arr1.find(function(val){
//     return val.key === 1;
// });
// console.log(va);



// find the one that satisfies condition - if any
// let any = arr.some(function(val){
//     return val > 85;
// });
// console.log(any);


// let eve = arr.every(function(val){
//     return val > 1.5;
// });
// console.log(eve);




// destructuring and spread operator


// let [a,b] = arr; // first two are copie din a ,b

//  let [a,b,,c] = arr; // saves 0, 1 ,3

// // it is destructuring


// sppread operator

// let arr = [ 1,2,3,4,5,6,7,8,9];
// // let arr2 = arr ; // not copied  just references passed

// let arr2 = [...arr];
// // spreads all values of arr and [] -> enclose them 
// arr2.pop();



// questions

// 1 - create arr 3 frouits print second

// let fruit = ["apple", "banana", " guava"];
// console.log(fruit[1]);


// 2-

// let fruit = ["apple", "banana", " guava"];
// fruit.push("mango");
// fruit.unshift("pineapple");
// console.log(fruit);

// 3-
// let fruit = ["apple", "banana"];
// fruit.pop();
// fruit.push("kiwi");
// console.log(fruit);




// 4 - difference in .push and .unshift
// unshifft add at start

// 5 - remove the last item from array using a mehtod

// let numbers = [1,2,3];
// numbers.pop();


// insert " red " and " blue " at index 1

// let colors = ["Green", "yellow"];
// colors.splice(1,0);
// colors.splice(1,0,"red", "blue");


// extract only middle 3 from it

// let items = [1,2,3,4,5,6];
// let new_arr = items.slice(1, 4);
// console.log(new_arr);


// sort alphabatically and reverse it

// let names = ["zara", "arjun" , "mira" , "bhaiva"];
// // names.sort();
// names.sort().reverse();



// use .map to square each number

// let arr = [1,2,3,4];
// let new_arr = arr.map(function(val){
//     return val**2;
//     //return val* val;
// })
// console.log(new_arr);


// 10 - use .fileter  to keep numbers  greater than 10

// let arr = [ 5, 12 , 8, 20 ,3];

// let new_arr = arr.filter((val) =>{
//     return val>10;
// });
// console.log(new_arr);


// 11 - reduce for addition of array

// let arr = [ 10,20,30];

// let added = arr.reduce((acc ,val) =>{
//     return acc + val;
// },0);
// console.log(added);




//  .find() to get he first number less than 10


// let arr = [ 12,15,3,8];

// let new_arr = arr.find((val) =>{
//     return val<10;
// });
// console.log(new_arr);


// console.log(( arr.filter((val) =>{ return val<10; })));




// 13 - use .some( ) to check any std scored below 33

// let arr = [ 45, 60, 28 ,90];

// let ans = arr.some(function(val) {
//     return val < 35;
// });
// console.log(ans);




// use .every() to check if all numbers are even :

// let arr = [ 2,4,6,,8,10];

// let ans = arr.every(function(val){
//     return val%2 == 0;
// });
// console.log(ans);


// 15 - destructure to get first and last name

// let fullName = [ "Piyush" , "Mishra"];
// let [ firstName , lastName] = fullName;
// // destructures and saves 


// 16-  merge two arrays usng spread operator

// let a = [ 1,2];
// let b = [3,4];

// let c = [...a, ...b];
// console.log(c);




// 17 - add india in start using spread

// let countries = ["usa", "uk"];
// countries = ["India", ...countries];
// console.log(countries);



// 18 - clone properly without refference
// let arr = [ 1,2,3];
// let arr2 = [ ...arr];




// common confusions 

// splice vs slice
// splice change og array - removes from it
// slice se copy with needed values array created


// ~map vs forEach -> foreach no return ( no new array)  --> map can create new array with returened vallues

// ~big blunder wiht .sort
// [ 100,20,3].sort();  // [ 100,20,3] -> "100", "20" , "3" ( wrong) (.sort covert( nummeric) to string , better for direct string sorting) ->  give compare function 


// [ 100,20,3].sort((a,b)=>  -b);
// arr.sort((a,b)=>  a-b);


// resume -> os , compiler , cloud based project