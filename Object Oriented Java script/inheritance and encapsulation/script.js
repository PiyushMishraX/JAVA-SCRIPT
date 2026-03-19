// classical inheritance - java cpp
// js - class and extend
// class banana and unhe extend krdena

// inheritance - class -> class property lena

// prototypal inheritance - object -> object ( se inherit )

let coffee = {
    color: "dark",
    drink: function () {
        console.log("drinked it");
    },
};

let arabiataCoffee = Object.create(coffee);
// Object.create passed obj ke protype ko other object ke prototype se jood deta hai 
console.log(arabiataCoffee);
arabiataCoffee.drink();

arabiataCoffee.taste = "bitter";
arabiataCoffee.color = "bitter"; // create an other color sepearate from the color in prototype instead of reassigning 
console.log(arabiataCoffee);

// ek object hai aap chaho to uski saari props/methods ko inherit kara dete ho doosre object mein

let a = {};
let b1 = Object.create(a); // shareed memory baani

