// pure vs impure functions - learned
// function programmin gbasics - map , filter ,reduce as pipleine - learned 

// separtion of consernse - also used in react.js 
// dom ka uui ka code and logic ka code alag likhna chahiye
// custom utilitits

// deep clone - 45 mins sheriyans
// how js works in browser


// ADVANCED TOPICS AN DARCHITECTURE THINKING

// sepeartion of conserns - DOM vs Logic

// dom ka code and logic ka code alag rehna chahiye 
// seperation of concerns


// const btn = document.querySelector("button");
// const ul = document.querySelector("ul");

// ye kharab taarika hai yaha logic and dom mixed hai
// btn.addEventListener("click", function(){
//     const num1 = Math.floor(Math.random()*10);
//     const num2 = Math.floor(Math.random()*10);

//     // logic
//     let add = num1 + num2; 

//     // DOM
//     let li = document.createElement("li");
//     li.textContent = add;
//     ul.appendChild(li);

// });


// Spearation
// function add(n1,n2) {
//     // logic
//     return n1 + n2;
// }

// btn.addEventListener("click", function(){
//     const num1 = Math.floor(Math.random()*10);
//     const num2 = Math.floor(Math.random()*10);

//     let finalAdd = add(num1, num2);
//     // DOM
//     let li = document.createElement("li");
//     li.textContent = finalAdd;
//     ul.appendChild(li);

// });

// logic , DOM , api calling etc alag




// CUSTOM UTILITIES - 

// create my own map filter reduce functions etc
// if no map function exists in js we will create our own

// map-> ek array e top pe chalta hai and us array ke sabhi memebr us map function ke andar aate and map funtion ek naya array return karta hai and us naye array mai jo bhi map ne return kiya hoga wahi placed hota hai
// arr.map 

// custom map
const arr = [1,2,3,4,5];
function myMap(arr, callback){
    let newarr = [];
    for (let i = 0; i < arr.length; i++) {
        newarr.push(callback(arr[i], i , arr)); // yaha callback ka anser return hoga // i .,arr  isliy kyuki asli map mai index and arr bhai de sakte hai  
    }

    return newarr;// return map mai zaaruri hai
}

let ans = myMap([1,2,3,4], (num)=> num +3);

let plustwo = myMap(arr, function(val){
    return val + 3;
})