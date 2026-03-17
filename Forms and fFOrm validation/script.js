// Js validation ( small )
// let nm = document.querySelector("#name");
// let form = document.querySelector("form");


// form.addEventListener("submit" , function(dets){
//     dets.preventDefault();

//     if(nm.value.length <= 2){
//         document.querySelector("#hide").style.display = "initial";
//     }else{
//         document.querySelector("#hide").style.display = "none";
//     }
// });

// showing error meassages occasionally is n=the bove 


// pattern attribute
// rearely used
// in html attribute
//  pattern="[a-z]{3,8}"



// regex - it is a different language - is it code of patterns use chat gpt for wring it in start or use internet to find the industry used ones

// regex

let nm = document.querySelector("#name");
let form = document.querySelector("form");


// form.addEventListener("submit" , function(dets){
//     dets.preventDefault();
//     // let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// //    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     // let ans = regex.test("harsh@test.com");

//     let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//    let ans = regex.test("a@a.a");
//    console.log(ans);
// });


form.addEventListener("submit" , function(dets){
    dets.preventDefault();
    let usernameRegex = /^[a-zA-Z0-9_]{3,15}$/;

    let ans = usernameRegex.test("a.a");
    console.log(ans);
});
