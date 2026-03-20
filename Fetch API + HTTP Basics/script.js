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

// fetch("https://randomuser.me/api/")
// .then((rawdata)=> { 
//     return rawdata.json();
// })
// .then((data)=>{
//     // console.log(data);
//     // console.log(data.results);
//     // console.log(data.results[0].name);
//     console.log(data.results[0].name.first);
// })
// .catch((err)=> {
//     console.log(err);
// });

// using implicit  return
// fetch("https://randomuser.me/api/")
// .then((raw)=>  raw.json()) // implicit return
// .then((data)=> console.log(data.results[0].name.first));


// not like that
// fetch("https://randomuser.me/api/")
// .then((rawdata)=> { 
//     console.log(rawdata.json()); // nonot like that 
// })
// .catch((err)=> {
//     console.log(err);
// });


// multiple user 
// fetch("https://randomuser.me/api/?results=5")
// .then((raw)=>  raw.json()) // implicit return
// .then((data)=> console.log(data));

// get ,  post abhi sikh nahi sakte - kyuki backend mei heavily dependent hai
// headers also back related hai

// status codes -
// 1 Informational responses (100 – 199)
// 2 Successful responses (200 – 299) // suucess data bhejna ya retrive mei
// 3 Redirection messages (300 – 399)
// 4 Client error responses (400 – 499)
// 5 Server error responses (500 – 599)

// sttus codes - data propely aaya ki nahi kya status hai 

// json parsing
// raw.json()


// form submission via fetch // form manually submit karana
 let form = document.querySelector("form");

 form.addEventListener("click" , function(evt){
    evt.preventDefault(); // ab submit nahi hoga

    // fetch se manually send ho jaayega
    fetch("url", {
        method: "POST",
        // data sending use body only in json format
        body: JSON.stringify()
    });
 })