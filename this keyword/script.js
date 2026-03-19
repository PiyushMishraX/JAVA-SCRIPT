// this keyword speacial keyword hai ( special speacial word )
// jaise ki baaki saare keyword ki value ya unka nature same rehta hai this k value ya nature badal jaata hai is baat se ki aap uose kaha use kar rahe ho



// global scope mai this
// console.log(this); // window // window baad maine padhenge 
// window hai pradhan mantri - supreme


// function scope mai
// window again
// function abcd() {
//     console.log(this);
// }
// abcd();

// method
// let obj = {
//     name: "Piyush",
//     sayName: function(){ // fn in obj cann't be created using arrow , fn keyword se banta hai bas
//          // obj ke andar jo fn ho wo method hai

//          console.log(this); // this changes 
//          console.log(this.name);  

//     },
// };
// obj.sayName();
// // in method this ki value obj hoti hai
// // this = obj 


// let obj = {
//     name: "Piyush",
//       age: 20,
//       sayName: function(){
//         console.log(this);
//         // console.log(this.age);
//         // this ki value object method ke andar poore obj ko deenote karta hai
//       }    
// };
// obj.sayName();


// event handler (this)

// document.querySelector("h1")
// .addEventListener("click", function () {
//     // alert();
//     console.log(this);// this wahi hoga jisme event listener laga hai and this mai uski poori details aa jayengi jaise function drets mai aa jati hai
//     console.log((this.style.color = "red"));
    
// });


// in class

// class Abcd{
//     // first letter capital
//     constructor(){
//         console.log("heyhey");
//         this.a = 12;
//     }
// }

// let val = new Abcd(); // blank object , Abcd chala , uska constructor chala aur jaha jaha this likha hai waha waha blank obj aagaya 
// fir uske andar a ban gaya
// val i s instance of Abcd

// class ke andar this ki value blank obj hoti hai jab new ke ssath call karte ho


// let obj = {
//     name: "Piyush",
//     sayName: () => { 
//         // arrow se this value loose kar dega 
//         // this window ke barabar ho jayega
//          console.log(this); // window
//          console.log(this.name);   // ye blank ho jayega

//     },
// };
// obj.sayName();
// // es5 ( normal ) function ( old / standard) se obj hi rahega this // arrow es6 ka hai


// this inside the function inside a method
// let obj = {
//     name: "Piyush",
//       age: 20,
//       sayName: function(){
//         console.log(this); // obj
//        function defg() {
//         console.log(this); // method
//        }
//        defg();
//       }    
// };
// obj.sayName();

// prevention
// let obj1 = {
//     name: "Piyush",
//       age: 20,
//       sayName: function(){
//         console.log(this); // obj
//        let defg =() => {
//         console.log(this); // obj
//        }
//         defg();

//       }    
// };
// obj1.sayName();
// andar wale mai hamesha fat arrow function banao

// summary
// global - window
// function = window
// mehtod with es5 fn - object
// method with es6 arrow fn - window
// es5 function inside es5 method - window
// arrow function inside es5 method - object
// event handler - element 
// class - blank object

// reason - arrow fn // arrow function and lexical this
// jaha arrow fn likha hai usase fark padta hai
// arrow fn this ki value parent se lete hai 
// agar method mai arrow k=lagaye to wo obj ki this value let e hai jo ki global mai hai ( window)




// Manual binding - bind , call ,apply

// this call apply and bind - learned as package

// cfujnction ko call kate wakt set kar sakte hai ki uske this ki value kya hogi

// let obj = {
//     name: "Piyush",
//     age: 20,

// };

// function abcd() {
//     console.log(this);
//     console.log(this.age);
// }
// abcd(); // abhi this = window

// setting this 
// abcd.call(obj);// abcd called and obj ko this bana diya
// call function hi hoga obj nahi

// function abcd(a,b,c) {
//     console.log(this,a,b,c);
//     // console.log(this.age);
// }
// abcd.call(obj, 1,2,3);

// abcd.apply(obj,[ 1,2,3]); // only two values send value to se t s this and an array of argumetns

// let fnc  = abcd.bind(obj, 1,2,3); //. call jaisa khud nahi chalta naya fn deta hai// abcd ki nayi copy banata hai and this ki value fnc mai deaflut mai set kar dega
// fnc();