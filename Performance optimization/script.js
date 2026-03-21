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


// let input = document.querySelector("input");

// function debounce(fnc, delay) {
//   let timer;
//   return function (...args) {
//     clearTimeout(timer); 
//     timer = setTimeout(() => {
//       fnc(...args);
//     }, delay);
//   }; 
// }

// function throttle(fnc, delay){
//     let timer = 0; // time
//     return function(...args){
//         let now = Date.now();
//         if(now - timer >= delay){
//             timer = now;
//             fnc(...args);
//         }
//     };
// }

// input.addEventListener(
//   "input",
//   throttle(function (dets ) {
//     console.log("ran");
//   }, 1000),
// ); 


// throttle first ime readin gmai chal gaya , fir returened function niche aaya 






// Lazy loading images -- jitna area dikhana hai view mai utni load karo aur fir jab scroll ho tab unhe load karo bas
// intersection observer ke madad se lazy loading 
// agar koi eleement scrren ke niche hai usko observe kar rahe ki jaise hi wo screen ke andar aaye , tab koi action perform kare


/// images dekhna ki wo viewport ke andar aa rahi hai

// document.querySelectorAll("img").forEach(entry => {
//     entry.classList.add("loaded");
//     entry.src = entry.dataset.src;
// });



// let img = document.querySelectorAll("img");

// observer using api  of instersection observer
// const observer0 = new IntersectionObserver(function(entries, obserer){
//    entries.forEach(function(entry){
//     if(entry.isIntersecting){
//         const img = entry.target;
//         img.classList.add("loaded");
//         img.src = img.dataset.src;
//     }
//    });
// }, {
//     root: null, // view port ko manega
//     threshold: 0.1, // 10 percent 
// })



// let imgs = document.querySelectorAll("img");

// // observer passed to to itself so we can unobserve
// const observer = new IntersectionObserver(function(entries , observer){
//     // entries are elements more than one or one that might intersect and we observe them
//     entries.forEach(function(entry){
//         if(entry.isIntersecting){
//             const img = entry.target; // entry mai target field img hai abhi
//             img.src= img.dataset.src ; // dataset -> valuye starting with data-
//             img.classList.add("loaded");
//             observer.unobserve(entry);
//         }
//     })
// }, { // function ke just badd ye
//     root: null, // can be set to a specific div or a section null means -> full screen
//     threshold: 0.1, // choote hi jab 10 percent image andar aayegi tab

// })

// imgs.forEach(function (img) {
//     // create observer
//     observer.observe(img);
// })





// Code spliting (intro level )

// code splitting by dynamic import

// jitna code user ko jaruri hai utan abass loade karna
// 2000 line ->heavy ( js )
// split in 100 200 500 ... lines and load them when needed 


// const btn = document.querySelector("button");

// btn.addEventListener("click", async function(){
//     // import() // asynchronus hota hai load hota tab bas chalte only ye lkhne se baad ko cod ephele chal jata hai await se ispe code ruk jaayega loading tak
//     // await se pehle ye line chalegi fir aageka chalega
//     let heavy = await import("./heavy.js"); // heavy object hai jisme data aaya not the function but whole with all exports from heavy.js
//     heavy.veryHeavy();
// });




//  AVOIDING UNNECESSARY REFLOWS AND REPAINTS
// baar baar screen mai dom change naho   - slow loading hoti hai




// MEMORY LEAKS: TIMERS AND EVENT LISTNERS

// meory leaks with timers
// SET INTERVAL LEAK

// let count =0;
// const int = setInterval(() => {
//     if(count < 10){
//         count++;
//         console.log(count);
//     }else{
//         console.log("still chal raha hai");
//     }

// }, 300); // abhi bhi timer lagataar chal raha hai /

// let count =0;
// const int = setInterval(() => {
//     if(count < 10){
//         count++;
//         console.log(count);
//     }else{
//         clearInterval(int); // timer cleared just his interation runs then end
//         console.log("finished");
//     }

// }, 300);



// meomory leaks event listenrer 

// // Problem: Adding an event listener without removing it causes a memory leak.
// const button = document.createElement('button');
// button.textContent = 'Click me';
// document.body.appendChild(button);

// // Add a listener using an anonymous function
// button.addEventListener('click', () => {
//   console.log('Button clicked');
// });

// // Remove the button from the DOM, but the listener remains
// button.remove();

// // The listener still holds a reference to the button, preventing garbage collection.
// // Over time, repeated additions/removals without cleanup lead to memory bloat.   

// const button = document.createElement('button');
// button.textContent = 'Click me';
// document.body.appendChild(button);

// // Solution: Store a reference and remove the listener
// const handleClick = () => {
//   console.log('Button clicked');
// };

// button.addEventListener('click', handleClick);
// button.remove();
// button.removeEventListener('click', handleClick); // Now eligible for garbage collection   


// // why passing refence instead of function directly
// // This creates "Function A"
// button.addEventListener('click', () => { console.log('hi'); });

// // This creates "Function B" (a brand new object)
// button.removeEventListener('click', () => { console.log('hi'); });

// The browser looks at the second line and says: "I don't have a listener for 'Function B' to remove." It stays looking for "Function A," which is now trapped in memory because you have no way to reference it anymore. It’s like locking a door and immediately throwing the key into the ocean.