// // Practce 1 --- 

// let inp = document.querySelector("input");
// let span = document.querySelector("span");

// inp.addEventListener("input", function(){
//     // console.log("input hua");
//     // console.log(inp.value.length);
//     // span.textContent = inp.value.length;
//     // span.textContent = 20 - inp.value.length;
//     let left = 20 - inp.value.length;
//     span.textContent = left;

//     if(left<0){
//         // span.textContent = left;
//         span.style.color = "red";
//     }
//     else{
//         // span.textContent = left;
//         span.style.color = "white";
//     }
// });


// // deligated todo lst already created line-through in taks

// let form = document.querySelector("form");
// let ul = document.querySelector("ul");
// let inp = document.querySelector("input");

// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     let li = document.createElement("li");
//     li.textContent = inp.value;
//     ul.appendChild(li);
//     inp.value ='';
//     console.dir(ul);
// });

// ul.addEventListener("click", function(dets){
//     dets.target.classList.toggle("lt");
//     // console.log(dets);
//     console.dir(dets);
//     if(this.children.length >= 5){
//         // ul.remove(dets.target);
//         dets.target.remove();
//     }
// });
