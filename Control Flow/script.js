// if else else-if
// switch case
// early return pattern


// if(condition -> true or false value)

// if(65){

// } else{

// }


// if(loggedin && admin){

// } else if(loggedin){

// }else {

// }

// can have infinite else if blocks


// SWITCH CASE

// switch(1){
//     case 1:
//         console.log("bruh");
//         // break;
//     case 2:
//         break;
//     case 3:
//         console.log("hey");
//         break;
//     default:
// }




// early return pattern

// function getVal(val){
//     if(val<100) return 'A';
//     else if(val<75) return 'B';
//     else if(val <50) return 'C';
//     else return 'D';
// }
// console.log(getVal(55)); problem always returns A

// function getVal(val){
//     if(val<25) return 'D';
//     else if(val<50) return 'C';
//     else if(val <75) return 'B';
//     else return 'A';
// }
// console.log(getVal(12));


// confusing topics ---


// function getGrade(score){
//     if(score >= 90 && score <=100){
//         return "A";

//     } 
//     else if(score >= 80 && score <=89)
//     {
//         return "B";
//     }
//     else if(score >= 70 && score <=79)
//     {
//         return "C";
//     }
//     else if(score >= 60 && score <=69)
//     {
//         return "D";
//     }
//     else if(score >= 33 && score <=59)
//     {
//         return "E";
//     }
//    else if(score >= 0 && score <=32)
//     {
//         return "Fail";
//     }
//     else{
//         return "invalid marks";
//     }
// }

// console.log(getGrade(75));




// function getGrade(score){
//     if(score >= 90 && score <=100) return "A";
//     else if(score >= 80 && score <=89) return "B";
//     else if(score >= 70 && score <=79) return "C";
//     else if(score >= 60 && score <=69) return "D";
//     else if(score >= 33 && score <=59) return "E";
//     else if(score >= 0 && score <=32) return "Fail";
//     else return "invalid marks";
// }
// console.log(getGrade(75));


// function getGrade(score){
//     if(score >= 90 && score <=100) return "A";
//     else if(score >= 80 && score <90) return "B";
//     else if(score >= 70 && score <80) return "C";
//     else if(score >= 60 && score <70) return "D";
//     else if(score >= 33 && score <60) return "E";
//     else if(score >= 0 && score <33) return "Fail";
//     else return "invalid marks";
// }
// console.log(getGrade(75));






