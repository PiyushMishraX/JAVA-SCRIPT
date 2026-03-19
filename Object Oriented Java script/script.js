// function CreateBiscuits(){
//     this.name = "ParleG"
//     this.price = 5;
//     this.qty = 8;
//     this.company = "parle";
//     this.company = "regular";
// }
// let biscit1 = new CreateBiscuits();  // creates object

// function CreateBiscuits(name, price ,qty, company , category){
//     this.name = name;
//     this.price = price;
//     this.qty = qty;
//     this.company = company;
//     this.company = category;
// }

// let biscuit1 = new CreateBiscuits("oreo", 10, 1 , "cadbury", "Chocolate biscuits");
// let biscuit2 = new CreateBiscuits("Fantsy", 20, 3 , "Parle", "Chocolate filed biscuits");

// humein sikhana hai factories banana , matlab ki aap ek baar blueprint bana do ki object kaisa dikhega aur ham log naye naye object with different values bana paayenge , yahi upar upar se pura kam hai oops mein

function CreatePencil(name, price , color , company){
    this.name = name; // new laga hai fn ke andar this ki value blank obj hogi
    this.price = price;
    this.color = color;
    this.company = company;

    this.write = function (text) {
        let h1 = document.createElement("h1");
        // h1.textContent = "hey how are you ";
        h1.textContent = text;
        h1.style.color = color;
        document.body.append(h1);
        
    }
}

let pencil1 = new CreatePencil("Natraj", 10 , "black" , "natraj");// new se blank obj baneg or this usi blank obj ko denote karega 
let pencil2 = new CreatePencil("doms", 10 , "red" , "doms");

pencil1.write("kaise ho bhai") // black
pencil2.write("badhiya")// red