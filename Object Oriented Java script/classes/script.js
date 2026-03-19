// class - cconstructor function k sajaa ke rakhabna

class CreatePencil{
    constructor(name, company, price , color ){ // first thing to run defalut value se initialize etc samekam jo new keyword se hota hai wo isse bhi
    this.name = name; 
    this.price = price;
    this.color = color;
    this.company = company;
    }

    erase(){
    //     document.body.querySelectorAll("h1").forEach(function (elem) {
    //         // elem.remove();
    //         console.log(this); // this = undefined or window // this i value parent se lilti hai yaha erase mehtod ke andar es5 fn hai so this window ya undeiene hoga
    //         if(elem.style.color === this.color){
    //             elem.remove();
    //         }
    //     })
    document.body.querySelectorAll("h1").forEach( (elem) => {
            // elem.remove();
            console.log(this); // this = obj
            if(elem.style.color === this.color){
                elem.remove();
            }
        })
    }

    // method 
    write(text) {
        let h1 = document.createElement("h1");
        h1.textContent = text;
        h1.style.color = this.color;
        document.body.append(h1);
        
    }
}

let p1 = new CreatePencil("natrah" , "natraj", 10 , "red");
let p2 = new CreatePencil("apsara" , "apsara", 15 , "blue");

