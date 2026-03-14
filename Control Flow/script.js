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
//     if(val<50) return 'C';
//     if(val <75) return 'B';
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
//     if(score >= 80 && score <=89) return "B";
//     if(score >= 70 && score <=79) return "C";
//     if(score >= 60 && score <=69) return "D";
//     if(score >= 33 && score <=59) return "E";
//     if(score >= 0 && score <=32) return "Fail";
//     return "invalid marks";
// }
// console.log(getGrade(75));


// function getGrade(score){
//     if(score >= 90 && score <=100) return "A";
//     if(score >= 80 && score <90) return "B";
//     if(score >= 70 && score <80) return "C";
//     if(score >= 60 && score <70) return "D";
//     if(score >= 33 && score <60) return "E";
//     if(score >= 0 && score <33) return "Fail";
//     return "invalid marks";
// }
// console.log(getGrade(75));




//  ROCK-PAPER-SCISSORS LOGIC

// function rps(user,computer){
//     if(user == computer ) return "draw";

//     if(user === "rock" && computer === "scissor") return "user";
//     if(user === "scissor" && computer === "rock") return "computer";
    
//     if(user === "paper" && computer === "rock") return "user";
//     if(user === "rock" && computer === "paper") return "computer";
    
//     if(user === "scissor" && computer === "paper") return "user";
//     if(user === "paper" && computer === "scissor") return "computer";
// }


// console.log(rps("rock", "scissor"));




// function rps(user,computer){
//     if(user == computer ) return "draw";

//     if(user === "rock" && computer === "scissor") return "user";
//     if(user === "paper" && computer === "rock") return "user";
//     if(user === "scissor" && computer === "paper") return "user";
//     return "computer";
// }


// console.log(rps("rock", "scissor"));