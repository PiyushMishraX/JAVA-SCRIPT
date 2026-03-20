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

// fetch("https://randomuser.me/api/")
// .then(rawdata=> { //function (rawdata) { // can use it
//     console.log(rawdata); // raw data gives response , in body their is data as redeable strream can not be readead so use json
// })
// .catch((err)=> {
//     console.log(err);
// });

// ok true and status 200 in response means everything good
// data in body as redeable stream so con't read it 
// raw data hidden coomputed , can't be readed

fetch("https://randomuser.me/api/")
.then((rawdata)=> { 
    return rawdata.json();
})
.then((data)=>{
    // console.log(data);
    // console.log(data.results);
    // console.log(data.results[0].name);
    console.log(data.results[0].name.first);
})
.catch((err)=> {
    console.log(err);
});
