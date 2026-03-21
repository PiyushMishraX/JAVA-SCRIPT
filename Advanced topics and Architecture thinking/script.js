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
// const arr = [1,2,3,4,5];
// function myMap(arr, callback){
//     let newarr = [];
//     for (let i = 0; i < arr.length; i++) {
//         newarr.push(callback(arr[i], i , arr)); // yaha callback ka anser return hoga // i .,arr  isliy kyuki asli map mai index and arr bhai de sakte hai  
//     }

//     return newarr;// return map mai zaaruri hai
// }

// let ans = myMap([1,2,3,4], (num)=> num +3);

// let plustwo = myMap(arr, function(val){
//     return val + 3;
// })


// DEEP CLONE -- 45 mins sher video deep copy and shallow copy 



// How JS works in browser ( Event Loop , Web API , Call Stack)


// Call stack (Execution stack )

// JS single threaded hai -> ek time par ek hi kaam karta hai. // Synchronusly chalti hai 
// Jab tum function call karte ho-> wo stack ke top pe chala jata hai.  // funtion calling iside a fucntion // function composition
// Function complete hone ke baad stack se nikal jata hai ( pop ho jata hai ).


// function a() {
//     console.log("a");
//     // c()  - RangeError: Maximum call stack size exceeded
// }
// function b() {
//     a();
//     console.log("b");
// }
// function c() {
//     b();
//     console.log("c");
// }
// c();

// // c-> b -> a-> print a ->b-> print b -> c -> print c
// // sab functions call stack mai jaate jaate fir jab top wala return hota hai ya call end hoti he to wo pop hota he fir niche wala end hoke stack se pop hote jata hai , jab tak call stack en dnahi  ho jata


// WEB APIs

// console setTimeout setInterval alert prompt 
// js ka part nahi hoti hai ( this are webs apis)

// js mai x features hai and browser ke khud ke y features hai , to user ke pass total x+y feature honge
// x features js ka part hai
// y features brwoser(chrome ) ke part hai - that are called web apis

// alert();


// in nodejs these web apis don't work even console don't work ( they have custom things)


// demo write window an dconsole to see them
// alert cachews , clearTIme out , interval etc




// js have two ypes of taks in js - synchronus and asynchronus jo jis order mai complete ho chala dena 
// setTimeout(function(){
//     console.log("hey1 ");
// }, 1000);
// setTimeout(function(){
//     console.log("hey2 ");
// }, 1200)
// setTimeout(function(){
//     console.log("hey3 ");
// }, 400);
// setTimeout(function(){
//     console.log("hey4 ");
// }, 4000)

// set ITme out -> web apis ke thorugh aata hai 
// web sapis ke through jo chizze chalti, wo jab bhi complete hoti hai , hum unhe callback queue (task queue) mai dalte hai 

// jo call stack mai hota hai  usse chalate hai

// set timeout directly call stack mai nahi jata kyuki wo asynchronus hai
// wo jaata hai call back queue mai and wait karta hai , jab mein stack khali ( totally ) ho jaayega tab wo jaaayega mein stack mein fir exectre hoga

// agar 5 sec ka timeout bana to pehle wo chalega behind the scenes fir task queue mei jaayega

// Event loop
// the component checking if call stack is empty or not is event loop ( it takes one element from task queue input it in call stack execute it and empty it out from call stack and then take the next queue element )

// setTimeout(function(){
//     console.log("hey1 ");
// }, 1000);
// setTimeout(function(){
//     console.log("hey2 ");
// }, 1200)
// setTimeout(function(){
//     console.log("hey3 ");
// }, 400);
// setTimeout(function(){
//     console.log("hey4 ");
// }, 4000)

// function a() {
//     setTimeout(() => {
//         console.log("a1");    // it will enter the call back queue too and without running this code the function returns to b - because in terms of synchronus work the callin gis complete because thsi timeout enters the queue
//     }, 5000);
//     console.log("a2");
// }
// function b() {
//     a();
//     console.log("b");
// }
// function c() {
//     b();
//     console.log("c");
// }
// c();


// revise this - so the hold on concept  won't get weak 
