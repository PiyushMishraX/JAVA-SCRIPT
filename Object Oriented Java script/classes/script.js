// class - cconstructor function k sajaa ke rakhabna

class CreatePencil{
    constructor(name, company, price , color ){ // first thing to run defalut value se initialize etc samekam jo new keyword se hota hai wo isse bhi
    this.name = name; 
    this.price = price;
    this.color = color;
    this.company = company;
    }

    write(text) {
        let h1 = document.createElement("h1");
        h1.textContent = text;
        h1.style.color = this.color;
        document.body.append(h1);
        
    }
}

let p1 = new CreatePenci("natrah" , "natraj", 10 , "red");
let p2 = new CreatePenci("apsara" , "apsara", 15 , "blue");
