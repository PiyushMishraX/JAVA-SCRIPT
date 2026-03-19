// this keyword speacial keyword hai ( special speacial word )
// jaise ki baaki saare keyword ki value ya unka nature same rehta hai this k value ya nature badal jaata hai is baat se ki aap uose kaha use kar rahe ho



// global scope mai this
console.log(this); // window // window baad maine padhenge 
// window hai pradhan mantri - supreme


// function scope mai
// window again
function abcd() {
    console.log(this);
}
abcd();

// method
// let obj = {
//     name: "Piyush",
//     sayName: function(){ // fn in obj cann't be created using arrow , fn keyword se banta hai bas
//          // obj ke andar jo fn ho wo method hai

//          console.log(this); // this changes 
//          console.log(this.name);  

//     },
// };
// obj.sayName();
// // in method this ki value obj hoti hai
// // this = obj 


let obj = {
    name: "Piyush",
      age: 20,
      sayName: function(){
        console.log(this);
        // console.log(this.age);
        // this ki value object method ke andar poore obj ko deenote karta hai
      }    
};
obj.sayName();


// event handler (this)

document.querySelector("h1")
.addEventListener("click", function () {
    // alert();
    console.log(this);// this wahi hoga jisme event listener laga hai and this mai uski poori details aa jayengi jaise function drets mai aa jati hai
    console.log((this.style.color = "red"));
    
});


// in class

class Abcd{
    // first letter capital
    constructor(){
        console.log("heyhey");
        this.a = 12;
    }
}

let val = new Abcd(); // blank object , Abcd chala , uska constructor chala aur jaha jaha this likha hai waha waha blank obj aagaya 
// fir uske andar a ban gaya
// val i s instance of Abcd

// class ke andar this ki value blank obj hoti hai jab new ke ssath call karte ho