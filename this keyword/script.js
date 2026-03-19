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

// method
let obj = {
    name: "harsh",
    sayName: function(){ // fn in obj cann't be created using arrow , fn keyword se banta hai bas
        console.log(this); // obj ke andar jo fn ho wo method hai
    },
};

