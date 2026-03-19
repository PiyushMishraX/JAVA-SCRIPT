// extends and super

class User {
  constructor(name, address, username, email) {
    this.name = name;
    this.address = address;
    this.username = username;
    this.email = email;
    this.role = "User";
  }
  write(text) {
    let h1 = document.createElement("h1");
    h1.textContent = `${this.name} : ${text}`;
    document.body.append(h1);
  }
  checkRole(){
    // console.log(`you are a ${this.role}`);
    return (`you are a ${this.role}`);
  }
}

class Admin extends User {
    constructor(name, address, username, email){
        super(name, address, username, email); // parent ka constructor cchalega fir asmin ka constrcuttot ka work
        this.role = "admin";
    }
    // onlyt admin have remove 
    remove(){
        document.querySelectorAll("h1").forEach(function(elem){
            elem.remove();
        })
    }
}

let u1 = new User("Piyush", "Bhopal" , "asyn123" , "a@a.a" );
let u2 = new User("1", "jbp" , "asyn123" , "a@a.a" );

let a1 = new Admin("A1", "india", "asmin", "ad!ad.a");