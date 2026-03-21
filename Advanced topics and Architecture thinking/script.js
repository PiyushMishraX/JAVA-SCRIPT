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

