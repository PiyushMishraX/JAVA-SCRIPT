// observer pattern 

// requirmetn - class 

class YoutubeChannel {
    constructor(){
        this.subscribers = [];
        // this.subscribers = [{naem: 'piyush', update}];
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

channel.notify("we are closing the channel its april 1st");


// youtubr channel - " subject "
// user - "observer"

// Jab ek object (Subject) ka state change hota hai, toh woh apne saare linked objects (Observers) ko automatically notify kar deta hai.

// Seedhi baat ye hai ki "tu mujhe subscribe kar le, jab bhi naya maal aayega main tujhe khud message bhej dunga."


// Jab ek object ki state change hoti hai, toh usse jude saare dependent objects ko automatically update mil jata hai. Ye one-to-many relationship maintain karta hai taaki saare objects hamesha synchronized rahein.