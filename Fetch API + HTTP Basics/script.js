// Fetch API , Get Post basic

/// JSON format - java script object notion othings in object format 
// {
//     "name" : "piyush";
// }

// https://randomuser.me/api/
// use jsonview extension to see it properly and formattted


// Fetch API -- 
// fetch is inbult fn in js - it goes to url and retrive data

// fetch promise based hai - so two types to write code then catcch adn async await 

fetch("https://randomuser.me/api/")
.then(rawdata=> { //function (rawdata) { // can use it
    console.log(rawdata);
})
.catch((err)=> {
    console.log(err);
});

// ok true and status 200 in response means everything good