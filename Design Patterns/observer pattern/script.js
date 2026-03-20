// observer pattern 

// requirmetn - class 

class YoutubeChannel {
    constructor(){
        this.subscribers = [];
    }

    subscribe(user){
        this.subscribers.push(user);
        user.update(`You have subscribed the channel.`);
    }
    unsubscribe(user){
        this.subscribers.filter(sub=> sub !== user); // jo user hatana hai usme false aana chahiye return mai so job tak user sub ke barabar nahi hai un sabko subscriber mei add kardo job user aaye to false aa jayega 
        user.update(`You have subscribed the channel.`);
    }
    notify(){}
}

class User {
    constructor(name){
        this.name = name;
    }

    update(data){
        console.log(data);
    }

}

let channel = new YoutubeChannel();

let user1 = new User("piyush");

channel.subscribe(user1);