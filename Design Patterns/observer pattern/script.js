// observer pattern 

// requirmetn - class 

class YoutubeChannel {
    constructor(){
        this.subscribers = [];
    }

    subscribe(user){
        this.subscribers.push(user);
        user.update(`${user.name}, have subscribed the channel.`);
    }
    unsubscribe(user){
        this.subscribers = this.subscribers.filter(sub=> sub !== user); // jo user hatana hai usme false aana chahiye return mai so job tak user sub ke barabar nahi hai un sabko subscriber mei add kardo job user aaye to false aa jayega 
        user.update(`${user.name}, have un-subscribed the channel.`);
    }
    notify(message){
        this.subscribers.forEach(sub => sub.update(message));
    }
}

class User {
    constructor(name){
        this.name = name;
    }

    update(data){
        console.log(`${this.name}, ${data}`);
    }

}

let channel = new YoutubeChannel();

let user1 = new User("piyush");
channel.subscribe(user1);

let user2 = new User("Amit");
channel.subscribe(user2);

// channel.unsubscribe(user1);

channel.notify("new video is live on the channel...");