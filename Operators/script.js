// Arithmetic , comparison , logical , assignment ,unary , ternary

// + - * / % **
// = == ===
// < >  <= >= 1 ! != !== !!
// && ||
// ?:


//Arithmatic
// + - * / % **

// 1+2 = 3
// "ha" + "rsh" = "harsh"

// 12 -2, 12*2 , 12/6

// modulus 12%2 = 0 , 12%5 = 2
// power 2**3 = 8 exponentiation



// comparaison
// =
// ==  not strict
// ===  strict
// !=   not strict
// !==  strict
// >=
// <=
// <
// ></>

// = assignment operator, value dalana
// 12 == 13 , //false
// 12 == "12" // true
// == not check type only value

// 12 === "12" // false - check type also

// 12 != 13 // true

//  12 != "12" // flase
// 12 !== "12" // true


// 12 > 13 , 22<22, 22<=22 , 13>=12




// assignmentn operators
// =
// +=
// -=
// *=
// /=
// %=


// let a = 12;
// a+=3; // -> a = a+3   15
// a-=11; // 4
// a*=2 ; // 8
// a/=2; // 4
// a%=3; // a = a% 3 -> 1


// logical
// && || !

// true && true -> true
// false && true -> true
// true && false -> false
// false && flase -> false

// 12>13 && 13>10 -> false && true -> false

// ||
// 12>13 || 13>10 -> false && true -> true

// !
// !false -> true

// !!12 -> !flase -> true // ! not nature of value // !! real nature of value



// Unary operatos
// + - ! typeof ++ --
// +"5" -> 5
// +"Harsh" -> NaN


// -a = -a

// !12 -> value/ type of truthy falsy inverted

// typeof 12 -> 'number'

// let a =12;
// ++a = 14;  increase/ perform operation than print// pre increment
// a++ = 12(print); a=14  print than increase/ perform operation .. post increment

// let a = 12;
// --a = 10(print);
// a-- = 12(print ) a = 10


// TERNARY operator

// ?:
// condition ? true hui ka code : false hui ka code

// 12>13 ? console.log("true") : console.log("false");



// typeof and instanceof

// typeof value

// wrong value -
// typeof null -> 'object'
// typeof [] -> 'object'
// typeof NaN -> 'number'

// let a = [];
// typeof a -> 'object' // wrong , quirk , issue

// a instanceof Array -> true

// let b = {};
// b instanceof {}; -> true
// b instanceof Array;  -> false


// variable instanceof ___  -> check if variable is born from ___

// let a =12;
// a instanceof Number -> flase
// instanceof works with reference values better ot with  primitive vlaues 
// [] {} ()
// typeof works with primitve values better used with them mostly  



// and questions

// let x = 10;
// let y = 20;

// if(x >5 && y , 25 ){
    //     console.log("A");
    // } else {
        //     console.log("B");
        // }
        
        // let isAdmin = true;
        // let isLoggedIn = false;
        
        // if(isAdmin || isLoggedIn){
            //     console.log("Access Granted");
            // } else {
                //     console.log("Access denied");
                // }
                
                
                // let temp =35;
                // if(!(temp<30)){
                    //     console.log("Hot");
                    // } else{
                        //     console.log("Pleasant");
                        // }
                        
                        
                        // let a = 0;
                        // if(a){
                            //     console.log("Truthy");
                            // } else{
                                //     console.log("Falsy");
                                // }
                                
                                
                                
                                // ----- VERY VERY IMP ------
                                // let score = 78;
                                
                                // let grade = score >= 90 ? "A" : score >= 75 ? "B" : score>= 60 ? "C" : Fail;
                                
                                // console.log(grade);
                                
                                
                                // let points = 120;
                                // let status = points > 100 ? "Gold" : points > 50 ? "Silver" : "Bronze";

                                // console.log(status)
                                
                                
                                
                                // let loggedIn = true;
                                // let hasToken = false;
                                
                                // let access = loggedIn && hasToken ? "Allow" : "Deny";
                                
                                // console.log(access);
                                
                                
                                
                                
                                
                                // incremetn decrement
                                
                                
                                //  let a =5;
                                // console.log(a++);
                                // console.log(a);
                                
                                
                                //  let b =7;
                                // console.log(++b);
                                // console.log(b);
                                
                                
                                // let x =3;
                                // let y = x++;
                                // console.log(x,y);
                                
                                // let p =4;
                                // let q = p++;
                                // console.log(p,q);
                                
                                // let m =10;
                                // console.log(m--);
// console.log(m);

// let n = 5;
// let result = n++ + ++n;
// console.log(result);


// let likes = 100;
// function likePost() {
    //     return ++likes;
    // }
    
    // console.log(likepost());
    // console.log(likes);
    
    // let count = 5;
    // if (count-- ===  5){
        //     console.log("Matched");
        // } else {
            //     console.log("Not matched");
            // }
            
            
            
            
            
            
