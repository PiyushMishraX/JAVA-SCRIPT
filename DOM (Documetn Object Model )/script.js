// for now - DOM =body 
// everything inside body is  dom 
// DOM manipulation


// dom manulation needs to learn
// selcting html elemts
// changing text
// / changing html
// changing CSS
// changing attribute
// adding event listener

// and full of common sense and use og mind



/// ----  SELECTION -----

// document.querySelector
// document.getElementById
// document.getElementsByClassName

// let abcd = document.getElementById("abcd");
// console.dir(abcd); // opening format
// console.log(abcd); // sometimes opening format aometimes tag

// let ghij = document.getElementsByClassName("ghij");
// console.dir(ghij); 

// these are old methods

// new and standartd method/s -

// let v1 =document.querySelector("h1"); // select first
// console.dir(v1);


// let v1 =document.querySelectorAll("h1"); // select all
// console.dir(v1); // looks like array but is node list



// --- TEXT MANIPULATION
// hey hey kaise ho change

let h1 = document.querySelector("h1");

console.dir(h1);

// changing a value with text

// propetries such as TextContent , inner Html , innerText , OuterText etc - change them 
// check props using console.dir and change them 
// the [properties are in form of key- value pairs like object

// h1.textContent = "hello piyush kaise ho";
// h1.innerHTML = " Piyush is good";
// h1.innerText = "so good";
// h1.outerText = "so good";
// h1.TextContents = " bruh"; XX

// innerText change text , TextContent same as innerText , innerHTML change html

h1.innerHTML = "<i>hey </i>";
// h1.innerText = "<i>hey </i>";

h1.hidden = true;
 
console.dir(h1);