// task 1
// slect the heading of a page by ID and change its text to "Welcome to sheriyans! ".


// let page_title = document.querySelector("#page-title");
// page_title.textCOntent = "Welcome to sheriyans! ";


// let head = document.querySelector("#heading");
// head.textContent = "Welcome to sheriyans !";



// select all <li> elemetns and print their text using a loop

// let li = document.querySelector("li");
// console.dir(li.innerText);

// let ul = document.querySelector("ul");
// console.dir(ul.innerText);



// let lis = document.querySelectorAll("li");
// console.dir(lis);

// // lis.forEach(function(val){
// //     console.log(val.textContent);
// //     // li -> text
// // });

// for(let i =0 ; i<lis.length ; i ++){
//     console.log(lis[i].textContent);
// }


// li.onbeforematch(())





// task 3
// select a paragraph and replac eits content with:
// /*<b>Updated</b> by JavaScript */


// let para = document.querySelector("p");
// para.innerHTML = "<b>Updated</b> by JavaScript";




// task 4

// select a link and update href

// let a = document.querySelector("a");
// a.href = "https://facebook.com";




// Dynamic DOM

// task 7
// create a new list item <li>New task</li> and add it to the end of a <ul>

// let ul = document.querySelector("ul");
// let li = document.createElement("li");
// li.textContent = "New Task";
// // ul.append(li);
// // ul.appendChild(li);



// task 8
// create a new image element with a placeholder soucrce and add it at the top of a div

// let img = document.createElement("img");
// img.setAttribute("src", "https://images.unsplash.com/photo-1773558058275-13aa691252e0?q=80&w=832&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
// img.classList.add("placeholder");
// document.querySelector("div").prepend(img);



// task 9
// slect the first item in list and delete it from dom

// let ul = document.querySelector("ul");
// let li = document.querySelector("li");

// ul.removeChild(li);
// // ul.remove(li);




// task 10
// add a highlight  class to every even item in a list

// document.querySelectorAll("ul li:nth-child(2"); // only second

// let li = document.querySelectorAll("ul li:nth-child(2n"); // every second

// console.log(li);

// li.forEach(function(elem /* val */){
//     // val.classList.add("highlight")
//     elem.classList.add("highlight")
// });

// console.log(li);




// task 11

// toggle a class active on a button when clicked ( hint use classList.toggle())
// click part is in event listener


//task 12
// set the font size all p to 18px using .style

// let p1 = document.querySelector("p");
// let p = document.querySelectorAll("p");

// p.forEach(function(elem){
//     elem.style.fontSize = "18px"
// })


