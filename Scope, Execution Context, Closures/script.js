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





