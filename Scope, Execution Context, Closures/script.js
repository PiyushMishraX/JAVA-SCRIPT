// scope hai ki aap apne created variables and functions kaha tak use  kar sakte ho

// line 1 -- variable banaya  , jaha tak uska use kar sakte hai

// function abcd() {
//   var a = 12;
// }

// console.log(a);

// scope - functional scope , global scope and block scope

// fucntion scope -- function ke andar use ho sakti hai
// global scoped -- poore code mai kahi bhi use ho skati hai
// block scope - { } braces mai hi use ho sakti hai


// function abcd() {
//     var a = 12; // var - funhciton scoped 
// }

// var a =12; // global scope

// agar code  kisti { } ke andar nahi hai to code global scoped hai
// dunction + {} => function scoped 
// only { } =>> bloack scoped



//      EXECUTION CONTEXT 
// JS SABSE PEHLE JAISE HI AAPKA FUNCTION DEKHTA HAI JS SABSE PEHLE BANATA HAI EXECUTION     CONTEXT  YE EK PROCESS HAI JOKI DO DIFFERENT PHASES MAI CHALATA HAI
// MEMORY PHASE AND EXECUTION PHASE 


// hypothetcical ( concept ) - code and variables is in a box where it runs
// function abcd(){
//     var a =12;
//     let b = 13;
//     let c =14;

//     // .. code 
    
// }

// thoda abstract hai - dikhta nahi hai - chupa hua ha





// LEXICAL SCOPE & DYNAMIC SCOPE

// lexical scoping - > ki aap kaha par physically available hai ye puri areeke se depend ka=arta hai ki app kya access kar payoge

function abcd(){
    let a = 12; // lexical pos is abced line 55 to 61
    function defg(){
        console.log(a);
    }
}
// js mai lexical scoping follow karte hai 

// Dynamic scoping -> js mai follw nahi karte dynamic scopin g
// kaha se call kar rahe ho uspe depend karega ki kya value milegi

// let a = 12;

// function abcd(){
//     console.log(a);
// }

// function defg(){
//     let a = 13;
//     abcd(); // dynamic mai a = 13 lexical a = 12
//     // kaha se calll kiya depend nahi karta kaha created hai karta hai
// }
// defg();

// closure
// closures definition and how variables are preserved 

// closures hote hai function jo ki kisi parent function ke andar ho aur andar wala function return ho raha ho and returning function use c=kare parent function ka koi variable

// function abcd(){
//     let a = 12;
//     return function (){
//     console.log(a); // closure 
//     }
// }

// fayde nuksaan 
// private variables 
// global pollution stopping 


// how variables are preserved

// function abcd(){
//     let a = 12;
//     return function (){
//     console.log(a); // closure 
//     }
// }
// let fnc = abcd();
// fnc();
// memory sheet mai abcd aaya memory space mai
// a ka space bana 
// ek fn return hua 
// abcd khatam ho gaya 
// a bhi hat gaya 
// par fnc fir bhi print kar gaya kaise null ya undefined hona tha
// par fn khatam to variables bhi khatam


// ye sach hai fn ke khatam hone par apka fn and uske variables khatam ho jata hai par jab bhi closure banata to apke fn aur uske variable ka ek backlink ( kahi save - ek effiicient copy ) banaya jata hai uska naam hota [[environment]]
// uses - private counters , encapsulation



// function countforMe() {
//     let c = 0;
//     return function (params) {
//         c++;
//         console.log(c);
//     };
// }
// let fnc = countforMe(); // closures mai pehli baar chalane par function milte hai
// fnc();// 1
// fnc();
// fnc();

// let fnc2 = countforMe(); // c kki nayi copy new block
// fnc2(); // 1
// fnc2();
// fnc2();
// fnc2();
// fnc2();



// encapsulation

function clickLimiter(){
    let click = 0;
    return function(){
        if(click < 5){

            click ++;
            console.log( `clicked : ${click} times`);
        }
        else{
            // console.log("LIMKIT EXCEEDED, TRY AFTER SOME TIMES");
            console.error("LIMKIT EXCEEDED, TRY AFTER SOME TIMES.");
        }
    }
}

// click = 0; // private variable hai bahar se change nahi hogi  // alah se global variable banega na ki click change hoga

// inner logic hde just acces givrn thorugh - fnc

let fnc  = clickLimiter();
fnc();
fnc();
fnc();
fnc();
fnc();
fnc();