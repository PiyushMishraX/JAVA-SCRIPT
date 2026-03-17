// console.log("hello");

// after time
// setTimeout(() => {
//   console.log("hello");
// }, 5000); // 5000 = 5s or 5000 milli second

// setInterval(()=>{
//    console.log("kutti");   
// },1000);


// let tm =setTimeout(function(){
//     console.log("hey");
// },1000);
// clearTimeout(tm);
// no output after 3 seconds

// let tmi = setInterval(()=>{
//    console.log("kutti");   
// },1000);
// clearInterval(tmi);



// create counter 10 to 0

let count = 10;

let interval = setInterval( function(){
    if(count >= 1 ){
        count--;
        console.log(count);
    }
    else{
        clearInterval(interval);
    }
},1000);
