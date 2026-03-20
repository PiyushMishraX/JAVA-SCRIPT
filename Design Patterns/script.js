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

let Bank = (function () {
  let bankbalance = 12000; 

  function checkBalance(val) {
    console.log(bankbalance);
  }

  function setBalanace(val) {
    bankbalance = val;
  }

  function withdraw(val) {
    if (val <= bankbalance) {
      bankbalance -= val;
      console.log(bankbalance);
    }
  }

  return { 
    check: checkBalance,
    set: setBalanace,
    draw: withdraw,
  };
})();

Bank.check();

// revealing module pattern mai naam bhi change kardete hai ki jo return karke bheja hai uska naam bhi set karlo