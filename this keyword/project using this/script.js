let form = document.querySelector("form");
let username = document.querySelector("#name");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");
let photo = document.querySelector("#photo");

const userManager = {
    users: [], // users 
    init: function(){
        // alert();
        // form.addEventListener("submit" , function(e){
        //     e.preventDefault();
        //     console.log(this);
        //     // we don't want this elemtent ho we want this obj ho
        // })

        form.addEventListener("submit" , this.submitForm.bind(this)); //this ki value yaha pe obj hai // kyuki ye this submitForm method mai jaaye to this obj ho jaayega // first his = form 
    

    },
    // submitForm: function(e){
    //     e.preventDefault();
    //     // console.log(this); // ab submit form mai this ki value hamesha obj hogi
    //     // console.log("form submitted");
    //     // ab thi se submit form mai values push kar sakte hai object mai
    //     this.users.push({
    //         // name:name,
    //         // role: role,
    //         // bio,
    //         // same ho to ek baar bas likh do 
    //         username: username.value,
    //         role: role.value,
    //         bio: bio.value,
    //         photo: photo.value,
    //     });
    //     form.reset();
    // },

    submitForm: function(e){
        e.preventDefault();
        this.addUser();
    },
    addUser: function(){
        this.users.push({
            role: role.value,
            bio: bio.value,
            photo: photo.value,
        });
        form.reset();
    },
    removeUser: function(){},
};

userManager.init();

// notes copy me likho usko padh padh ke code likho do tin baar approach sikh jaoge