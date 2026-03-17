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



