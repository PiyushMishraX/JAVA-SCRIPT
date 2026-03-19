// koi bhi code js mei lin ebhi line chalega aur ye natural patter bhi hota hai ki code line by line chale, but kabhi kabaar aise cases aate hai real life mein jaha par aapka code wait krta hai and utni der mein agla code chal jaata hai

// ex
// console.log("hey1");
// console.log("hey2");
// setTimeout(() => {
//   console.log("hey3");
// }, 2000);
// console.log("hey4");

// sync // async
// sync vs async

//aisa code jo line by line chale hota hai sync
// aisa code jo jab chalne ke liye ready ho jaye tab chale wo hai async

// callback pattern and call back hell

// function kuchDerBaadChalunga(fnc) {
// //   setTimeout(
// //     () => {
// //       console.log(val);  val =fnc
// //     },
// //     Math.floor(Math.random() * 10) * 1000,
// //   );
//   // math.random = a value bw 0 adn 1 , [0,1)

//   setTimeout(
//     fnc,
//     Math.floor(Math.random() * 10) * 1000,
//   );
// }
// kuchDerBaadChalunga(12);
// kuchDerBaadChalunga(function(){
//     console.log("hey");
// }); // this function is callback

// ek fn ko agar app ek aur fn bhej de raho ho parameter mein , to wo parameter wala fn kehlaata hai callback



// code mei ye library mei likha hota hai apni pass use chalate hai  bas
function profileLekarAao(username, cb){
    setTimeout(() => {
        console.log(`profile petch of ${username}`);
        cb({username, age:20 , email: "a@a.a"}); //callback
    }, 2000);
}



// ham ye chalate hai
profileLekarAao("piyush", function(profileData){
    console.log(profileData);
});

