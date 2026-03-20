// performance optimization

// debouncing and throttling

// jab koi specific event occur ho to jo  kisi specific interval ke baad chale wo de bouncing and jab koi code har kuch der mai chale to wo throttling - agar ek specific evetn chal raha hai tab tak har kuch der mai

// deboucing - koi action kar rahe and aap ye nahi chahate har action pe kuchh h , jab bhi mere actons ke bech mein koi specific gap aa jaye to fir action ka reaction perform ho

// document.querySelector("input")
// .addEventListener("input", function(){
//     console.log("hey"); // har input pe reaction ,mila
// });

// jab ruk jaau to reaction perform ho ( thoda thime gap ho jaaye)

// debounce ki jagah kuch aur name bhi rakh sakte hai
// function debounce(fnc, delay) {
//   // code ek search mei mil jaayega , learning bas karo
//   let timer;
//   return function (...args) {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       fnc(...args);
//     }, delay);
//   };
// }

// let input = document.querySelector("input");

// input.addEventListener(
//   "input",
//   debounce(function () { // give fn to run and delay
//     console.log("hey");
//   }, 1000),
// );
// acction  ke beech mai jab 1000 delay aayega to debounce ka code chalega

// let input = document.querySelector("input");

// function debounce(fnc, delay) {
//   //  console.log("debouce shuru mai chala gaya reading ke time hi  problem"); //  ewebsite load hone par hi chal gaya

//   // isse bachane ke liye andar ek aur fn laga diya return mai

//   let timer;
//   return function (...args) {
//     clearTimeout(timer);  // 1 sec se less mei old timer clear hojayega 
//     timer = setTimeout(() => {
//       fnc(...args);
//     }, delay);

//     //  console.log("retuned chala")
//   }; // debouce ki jagah ye fn aa jayega input event listener
//   // jab bhi future mai input karenge to ye fn chalega
// }

// input.addEventListener(
//   "input",
//   debounce(function (dets ) {
//     // console.log(dets);
//     console.log("hey");
//   }, 1000),
// ); // ye incorrect hai kyuki fn() ke aage () lagane par code turant chal jaata hai so bina input ke debounce chal gaya

// input.addEventListener(
//   "input",
//   function (dets) {   } // args = sets
// );



// debounce -> ek dealy baataoge  tum utna delay jab bhi aayega action ka reaction milega
// throttle -> interval par chalunga, action agar hota raha and aapne ek interval batyaa tio utne invertal me aapka event chaalega