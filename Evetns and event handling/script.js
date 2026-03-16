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

let p = document.querySelector("p");

// we have to use same function so give it a name 

function dblclick(){
    p.style.color = "yellow";
}

p.addEventListener("dblclick", dblclick );

// same as added one
p.removeEventListener("dblclick", dblclick);