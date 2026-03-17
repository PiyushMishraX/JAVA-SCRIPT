// eents handling - browser mein page par koi bhi harkat karo event trace ho jayega
// kuch screen par ho aur aapko reaction dena h to apko event handle karte aana chahiya
// event matlab kuch action hua
// even listener matlab koi action ka reaction diya


// let h1 = document.querySelector("h1");

// // h1.addEventListener(event , function)
// h1.addEventListener("click" , function(){
//     h1.style.color = "red";
// });


// select the paragraph first 
// then relaize wha twill happen to eat ( color change etc)
// let p = document.querySelector("p");

// p.addEventListener("click", function(){
//     p.style.color = "green";
// })


// p.addEventListener("dblclick" , function(){
//     p.style.color = "yellow";
// })


// element.addEventListener("event name", function(){

// })






// remove event listener

// let p = document.querySelector("p");

// // we have to use same function so give it a name 

// function dblclick(){
//     p.style.color = "yellow";
// }

// p.addEventListener("dblclick", dblclick );

// // same as added one
// p.removeEventListener("dblclick", dblclick);



// events

// let p = document.querySelector("p");
//  p.addEventListener("click", function(){
//     p.style.color = "red";
// });


// let inp = document.querySelector("input");
// // inp.addEventListener("input", function(data){
// //     // console.log("typed");
// //     console.log(data);
// // });

// inp.addEventListener("input", function(evt){ // evt = deatils
//     // console.log("typed");
//     console.log(evt.data);
// });


// let inp = document.querySelector("input");
// inp.addEventListener("input", function(dets){
//     // console.log("typed");
//     if(dets.data !== null){
//         console.log(dets.data);
//     }
//     // console.log(dts.data);
//  });   



// chagne event tab chalta hai jab koi input select ya textarea me koi change ho jaye


// let sel = document.querySelector("select");

// let  device = document.querySelector("#device");

// sel.addEventListener("change" , function(dets){
//     // console.log(dets);/// details 
//     console.log(dets.target.value);// returns target value
//     device.textContent = `${dets.target.value} Device selecteed`; // css - text tramsform = capitalize
// });



// whatever typed  come in screen

// window event listner

// let h1 = document.querySelector("h1");

// window.addEventListener("keydown", function(dets){
//     console.log(dets.key);
//     // h1.textContent = "dets.key";
//     // if(dets.key !== "Control"  && dets.key !=="Backspace" && dets.key !== "Shift" && dets.key !== "CapsLock" &&  dets.key !== "Tab" )
//     if(dets.key === " "){
//         h1.textContent = "SPC";
//     }
//     else{
//         h1.textContent = `${dets.key}`;
//     }
// });




// let btn  = document.querySelector("#btn");
// let fileinp = document.querySelector("#fileinp")

// btn.addEventListener("click", function(){
//     fileinp.click();
//     // filoeinp pe click paa ardiya agar btn mai click kiya to

// });

// fileinp.addEventListener("change", function(dets){
//     // console.log(dets.target.files[0].name);
//     // btn.textContent = `${dets.target.files[0].name}`;
//     // optional channing for when an input cancelled so no error occur
//     // if(dets.target.files){
//     //     btn.textContent = `${dets.target.files[0].name}`;
//     // }

//     // btn.textContent = `${dets.target?.files[0]?.name}`;

//     const file = dets.target.files[0];
//     // console.log(file);
//     if(file){
//     btn.textContent = file.name;
//     }
// });








// // creating card from form

// let form = document.querySelector("form");

// let inputs = document.querySelectorAll("input");

// let main = document.querySelector("#main"); // # for id
 

// form.addEventListener("submit", function(dets){
//     dets.preventDefault(); // stop submission stops

//     // console.log(
//     //     inputs[0].value,
//     //     inputs[1].value,
//     //     inputs[2].value,
//     //     inputs[2].value
//     // );

//     let card = document.createElement("div");
//     card.classList.add("card");
    
//     let profile = document.createElement("div");
//     profile.classList.add("profile");

//     // card.appendChild(profile);
//     // console.log(card);

//     let img = document.createElement("img");
//     // img.classList.add("");
//     img.setAttribute(
//         "src" , 
//         inputs[0].value
//     );

//     let h3 = document.createElement("h3");
//     h3.textContent = inputs[1].value;
//     let h5 = document.createElement("h5");
//     h5.textContent = inputs[2].value;
//     let p = document.createElement("p");
//     p.textContent = inputs[3].value;


//     profile.appendChild(img);
//     card.appendChild(profile);

//     card.appendChild(h3);
//     card.appendChild(h5);
//     card.appendChild(p);


//      main.appendChild(card);

//     inputs.forEach(function(inp){
//         if(inp.type !== "submit")
//         inp.value = "";
//     });
// });







 
// mouse over and mose move 

// // mouseover and mouseout
// let abcd1 = document.querySelector("#abcd1");

// abcd1.addEventListener("mouseover", function(){
//     abcd1.style.backgroundColor =  "yellow";
// });
// abcd1.addEventListener("mouseout", function(){
//     abcd1.style.backgroundColor =  "red";
// });



// mouse move

// window.addEventListener("mouseover", function(event){
//     console.log(event);
// })


// block move

// let abcd = document.querySelector("#abcd"); // # for id do not forget 
// window.addEventListener("mousemove",function(event){
//     // console.log(event.clientX,event.clientY);

//     // abcd.style.top = event.clientY + "px"; // + cahnges all to string value
//     // abcd.style.top = " 20 px"; // + cahnges all to string value
//     abcd.style.top = event.clientY + "px";
//     abcd.style.left = event.clientX + "px";

// });




// key up - works when key released unlink keydown working when key is pressed

// document.addEventListener('keydown', (event) => {
//   console.log(`Key pressed: ${event.key}`);
// });

// document.addEventListener('keyup', (event) => {
//   console.log(`Key released: ${event.key}`);
// });

// window.addEventListener('keydown', (event) => {
//   console.log(`Key pressed: ${event.key}`);
// });

// window.addEventListener('keyup', (event) => {
//   console.log(`Key released: ${event.key}`);
// });




// EVENT  OBJECT - target , type , preventDeafult

// what is event object -
// let abcd = document.querySelector("#abcd");

// abcd.addEventListener("click" ,function(dets){ // dets = event object which have all details
//     console.log(dets);
// });






// let form = document.querySelector("form");
// let inputs = document.querySelectorAll("input");

// form.addEventListener("submit", function(dets){
//     // form.preventdefault(); not htis but --
//     dets.preventDefault(); // method to prevent reloading - dafault of  form submission

// // type
// //    inputs.forEach(function(inp){
// //         // if(inp.type !== "submit")
// //         // inp.value = "";
// //         console.log(inp);
// //     });

// });




// Event Bubbling and Capturing

// Event Bubbling

// jispe event aayega agar usapr listener nahi hai to , hamaara event uske parent par listener dhundega , aur aisa karte karte upar ki taraf move karega

// main div 
//     nav div 
//         links
//         buttons
// no event listener on button , but clicked on it it then the event checked on parent
// checked until found


// let nav = document.querySelector("#nav");
// nav.addEventListener("click" , function(){
//     alert("clicked");
// });
// // button ( no) -> #nav(yes) -> alert



// line through
// let ul = document.querySelector("ul");

// ul.addEventListener("click", function(dets){
//     // console.log(dets.target);
//     // alert("clicked");
//     // dets.target.style.textDecoration = "line-through";
//     // dets.target.classList.add("lt");
//     dets.target.classList.toggle("lt");
// });


// bubbling mai event ho ya na ho sab ka listener chalega  kahi rukta nahi hai sab ka event chalta hai

//  Event Capturing
// event capturing is opposite of bubbling
// pattern upar se niche jayega

let a = document.querySelector("#a");
let b = document.querySelector("#b");
let c = document.querySelector("#c");
let btn = document.querySelector("button");


//bubbling other more tag-> body -> html sab ka chalega event
btn.addEventListener("click" , function(){
    console.log("button clicked");
});

b.addEventListener("click" , function(){
    console.log("b clicked");
});
c.addEventListener("click" , function(){
    console.log("c clicked");
});
a.addEventListener("click" , function(){
    console.log("a clicked");
});







