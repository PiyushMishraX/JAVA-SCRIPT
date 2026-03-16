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

// let h1 = document.querySelector("h1");

// console.dir(h1);

// // changing a value with text

// // propetries such as TextContent , inner Html , innerText , OuterText etc - change them 
// // check props using console.dir and change them 
// // the [properties are in form of key- value pairs like object

// // h1.textContent = "hello piyush kaise ho";
// // h1.innerHTML = " Piyush is good";
// // h1.innerText = "so good";
// // h1.outerText = "so good";
// // h1.TextContents = " bruh"; XX

// // innerText change text , TextContent same as innerText , innerHTML change html

// h1.innerHTML = "<i>hey </i>";
// // h1.innerText = "<i>hey </i>";

// h1.hidden = true;
 
// console.dir(h1);




// ---  Attribute Manipulation --- 

// let a = document.querySelector("a");
// console.dir(a);
// // a.href = "https://google.com";

// a.setAttribute("href","https://google.com"
// );
// console.dir(a);

//  document.getElementById("result").textContent = "The href attribute value is: " + hrefValue;



// let img = document.querySelector("img");
// img.setAttribute(
//         "src",
//         "https://images.unsplash.com/photo-1773539649767-98dc585833fa?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//     );
    
//     let srcval = img.getAttribute('src');
//     console.log(srcval);



//getAttribute

// let a = document.querySelector("a");
// console.log(a.getAttribute("href"));

// remove attribute
// let a = document.querySelector("a");
// a.removeAttribute("href");
// console.log(a.getAttribute("href"));


// Dynamic DOM manipulation 

// let h1 = document.createElement("h1");
// h1.textContent = "hello ji";
// document.body.append(h1); // after script
// document.body.prepend(h1); // before script 



// create element 
// append/ prepend karo jaha bhi element chahiye waha

let h1  = document.createElement("h1"); // blank h1
// console.log(h1);
// h1.textContent = "hello ji kaise ho";
h1.textContent = "go home eat food";
// document.querySelector("body").append(h1);
document.querySelector("body").prepend(h1);