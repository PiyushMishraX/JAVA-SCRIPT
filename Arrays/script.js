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




let arr = [11,62,3,4,25];
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


let eve = arr.every(function(val){
    return val > 1.5;
});
console.log(eve);


