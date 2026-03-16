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

// let h1  = document.createElement("h1"); // blank h1
// // console.log(h1);
// // h1.textContent = "hello ji kaise ho";
// h1.textContent = "go home eat food";
// // document.querySelector("body").append(h1);
// document.querySelector("body").prepend(h1);


// use google to know more propetires use ai etc


// let h1 = document.querySelector("h1");
// h1.remove();

// let h1 = document.createElement("h1");
// h1.textContent = "i come form outside";

// // document.querySelector("div").appendChild(h1);
// // document.querySelector("div").append(h1);
// document.querySelector("div").prepend(h1);





// ---- ---- STYLE UPDATE --- ----

// via .style and classList ( add , remove , toggle )

// js se css change

// let h1  = document.querySelector("h1");

//  console.dir(h1);
// //  h1.style.color = "red";
// //  h1.style.backgroundColor = "yellow";
// // h1.style.fontFamily="'Gilroy', sans-serif";
// // h1.style.textTransform = "Capitalize";

//  console.dir(h1);



// classList

// let h1  = document.querySelector("h1");

//  console.dir(h1);


//  // add classList add method

// //  h1.classList.add("hu"); // instead of writing all properties in js create calss in css and add it to element

// // remve class

// // h1.classList.remove("abcd");


// // toggle class
// h1.classList.toggle("abcd"); // if present them remove , if not present then add





// QUESTION

// what is  DOM ? how does it represen the HTML structure 
// as tree and node



// name the tyes of nodes in dom tree - elemnt text comment  nodes


// 3-  differencnce in element and text node
//  <p>dfgdgfg </p>
// content == text tag = elemtn 
// element can have children nodes 
// text can't have childs


// inspect html in browser and identify each node
    //  <div>
    //     Hello <span>World</span>
    //  </div>


    // differnece in     getElementbyId and .queryselectur
    // only id , but id , tag class attribute universal
    // 
    // document.getElementById("id");
    // document.querySelector("#id"); // need # . etc


    /// what does getelementsby classname return? is it array
// it returns a HTMLCollection list which looks like array but is not
// let cl = document.getElementsByClassName("color");
// console.dir(cl);






// use quesry selector all to select all buttons with class ".buy-now".

// let buynow = document.querySelectorAll(".buy-now");
// console.dir(buynow);





// difference between innerText, textCOntent and innerHTML?
// nearly same changes text of html tag innerText, textCOntent
// print tags instead of workinh


// inner HTML in  it tags work and we srtie html in it



// when should you use textCOntent instead of innerTeaxt
// text content is new anad fast - it can change hidden content too  
// irrespective of display none
// <li> <span display none > hidden  </spane> </li>

// innerText only work for visible content




/// how do you get src of an image using java script


// let img = document.querySelector("img");
// console.log(img.src);
// console.log(img.getAttribute("src"));





// what doe sset attribute do 
// document.querySelector("img").setAttribute("src", "https://images.unsplash.com/photo-1773558058275-13aa691252e0?q=80&w=832&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");










