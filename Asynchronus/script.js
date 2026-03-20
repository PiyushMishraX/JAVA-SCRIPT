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
// function profileLekarAao(username, cb){
//     console.log("Fetching profile data ...");
//     setTimeout(() => {
//         console.log(`profile petch of ${username}`);
//         cb({_id:12122, username, age:20 , email: "a@a.a"}); //callback
//     }, 2000);
// }

// function saarePostLeakarAao(id, cb){
//     console.log("Fetching all posts ...");
//     setTimeout(() => {
//         cb({_id: id , posts: [ "hey", "hello", "good morning"]})
//     }, 3000);
// }
// function savedPostsNIkaalo(id , cb){
//     console.log("Fetching saved posts ...")
//     setTimeout(() => {
//        cb({_id: id , saved: [1,2,3,3,4,45,4,323]})     
//     }, 3000
// );
// }


// ham ye chalate hai // jaise axios.get mai axios kisi library ka fn hai aur ham use use karte hai call back se
// profileLekarAao("piyush", function(profileData){
//     console.log(profileData);
// });

// this nested calback is called callback hell , ek callabck ke andar aur callback 
// it is not written now or in real we use async and await it can be legacy codes

// profileLekarAao("piyush", function(data){
//     console.log(data);
//     saarePostLeakarAao(data._id, function(posts){
//         console.log(posts);
//         savedPostsNIkaalo(data._id, function(saved){ 
//             console.log(saved);
//         })
//     });
// });



// promises - improve callback hell

// prommises

// aap ek promies banate hai jo ki do states mei se ek state mei ja sakta ha and ya to woo resolve hoga ya to wo reject hoga , ab wo kya hoga ye to waqt b atayega par humein dono ke liye code likhana pata hai

// let pr = new Promise(function (res,rej) { // function (resolve,reject) {
//     setTimeout(() => {
//         // res("Piyush");
//         let rn = Math.floor(Math.random()*10);
//         // if(rn > 5) res("resolved with " ,  rn); // comma nahi + kyuki ye console nahi hai
//         if(rn > 5) res("resolved with " +  rn); // then ke fun mei rn jayega
//         else rej("rejected with "+ rn); // value caatch mei jayegi  
//     }, 3000); // 3 sec tak pending state fir resolve
// });

// pr
// .then(function (val) {
//     console.log(val);
// }) //agar resolve
// .catch(function(val){
//     console.log(val);
// }) // reolve reject

// pr states - pending fullfilled with    resolve, with reject  rejected




// async / await syntax , error handling with try-catch



// async / await save .then .catch syntaxx writing

let pr = new Promise(function (res,rej) {
    setTimeout(() => {
        let rn = Math.floor(Math.random()*10);
        if(rn > 5) res("resolved with " +  rn);
        else rej("rejected with "+ rn); 
    }, 3000); 
});

// better way to handle resolve reject

async function abcd(){ // function ke same async likho  fir await likho resolve hua to val try mai aaya await mai issue aaya to rej ka code catch mai aaya aur chala
    // let val = await pr; // await matlab wait karo jabtak uska res rej ka pura result nahi aata

    try{
        let val = await pr;  // resolve mai bas ye chala
        console.log(val);
    } catch (err){ // rejected err mai aayega 
        console.log(err);
    }
}

abcd(); // async await se jab tak result nahi aata tab tak fn rukta hai fir resolve value agar ho to ry mai jaati angar error aaye to wo catcah mai jata hai , cach mai reject value jaati and chalati hai ( only when try do not work )

