// big level pe mantanable , scalabele abd modular code

// module patter (IIFE) revealing module, factory function and observer ( basic pub sub ) pattern

// module pattern

// module pattern ek design ( code likhne ka taarika ) pattern hai jisme hum apna code ek self executing function (IIFE) ke andar likhte hain, taki variables aur functions private rahen.

// iske andar se hum ssirf wahi cheesein return karte hain jo bahar use karni hain.

// is pattern ka main fayda hai data hiding ( encapsultion ) aur clean structure , taaki code secure , reusable aur managebe ban sake.

// imideatly invloke function expression -- no need to call it it runs
// let fnc = (function () {
//   // return 12;
//   let bankbalance = 12000; // canot be excessed directly private variablE
// })();

// let Bank = (function () {
//   let bankbalance = 12000; // bahar kuch access nahi hoga

//   function checkBalance(val) {
//     console.log(bankbalance);
//   }

//   function setBalanace(val) {
//     bankbalance = val;
//   }

//   function withdraw(val) {
//     if (val <= bankbalance) {
//       bankbalance -= val;
//       console.log(bankbalance);
//     }
//   }

//   //   return 12;
//   return { // jo bahar se access karan ha bas usse bahar bhejo
//     checkBalance, // bholo mat fn bhi value jais e use ho sakta hai
//     setBalanace,
//     withdraw,
//   };
// })();

// // Bank.checkBalance(); // cann't read when not returned 

// Bank.checkBalance();
// Bank.withdraw(11000);
// Bank.setBalanace(10000);
// Bank.checkBalance();

// moodule pattern mai jop bhi banayege iife ke andar banayenge wo private ho jaayega aur iife ke andar se object return karana hota hai 



// Revealing module pattern

// let Bank = (function () {
//   let bankbalance = 12000; 

//   function checkBalance(val) {
//     console.log(bankbalance);
//   }

//   function setBalanace(val) {
//     bankbalance = val;
//   }

//   function withdraw(val) {
//     if (val <= bankbalance) {
//       bankbalance -= val;
//       console.log(bankbalance);
//     }
//   }

//   return { 
//     check: checkBalance,
//     set: setBalanace,
//     draw: withdraw,
//   };
// })();

// Bank.check();

// revealing module pattern mai naam bhi change kardete hai ki jo return karke bheja hai uska naam bhi set karlo


// Factory function pattern 
// Ek function banate ho jo objects create karta hai ( factory = object banane ki machine)

// Factory funstion ek pattern aisa design pattern hai jisme hum ek simple function likhte hain jo naye objects banakar return karta hai, bina class ya new keyword use kiya.

// is pattern ka main idea hai -> object creation ko ek function ke through control karna .

// Har baar jab tum factory cfunction call kate ho , tumhe ek naya object milta hai jisme apne methods aur ( agar chaho to) private data ho sakta hai.

// Yeh pattern specially useful hai jab tumhe ek hi type ke bohot saare objects chahiye, jaise users , products , tasks , etc.


function createproduct(nam ,price) {
    let stock =10;

    // bina classes or contructor ke object 
    return{
        name,
        price,
        checkStock(){
            console.log(`${stock}`);
        },
        buy(qty){
            if(qty <= stock){
                stock -= qty;
                console.log(`booked - ${stock} pieces left.`);
            }else{
                // console.error(" WE don't have this many pieces ");
                console.error(`We only have ${stock} pieces left`);
            }
        },
        refill(qty){
            stock += qty;
            console.log(`refilled - ${stock} pieces now.`);
        },
    }
}

let iphone = createproduct("iphone", 70000); // ye object ban gaya return se

iphone.buy(10);
iphone.checkStock();
// fucntion ek facotry jaise kaam karta hai naye naye objects banane ke liye

let kitkat = createproduct("kitkat" , 10);

kitkat.buy(5);

iphone.checkStock();