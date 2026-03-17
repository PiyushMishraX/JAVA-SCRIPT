// locaStorage -> aapke browser ke andar data store karna jo ki browser band hone par bhi delete nahi hoga 9 browser ka data base)
// sessionStorage -> ye apka daa temporarily store karta hai matlab ki tab band hua aur data gaya 

// cookies ->  ye bhi data store karta hai and aapka data browser ke cookies naam ki   property mein save hota hai  and ye cookie concept kam data ya light data ke liye hota hai  ( small data )


// local Storage -> browser ke data base se baat
// store kese kare - setItem
// data fetch kaise kare - gettem
// remove kaise kare - removeItem
// update kaise kar

// store
// localStorage.setItem("name" , "piyush"); // name naam , piyush value

//fetch
// let val = localStorage.getItem("name");

// remove
// localStorage.removeItem("name");

// Update item - set item hi updata karta hai
// localStorage.setItem("name" , "piyush mishra");

// localStorage.clear();
//  remove all key-value pairs stored in the browser's 
// instead one by one  using .remove it removes all 



// setssion storage -> deletes when tab closed or new tab opened  in console, unlike local storage which works even after tab is closed and reopened ( but not after browser closed or don't know)
// the saves propeertiedso flocal storage transcend to other tabs but of session storage doesn't 

// sessionStorage.setItem("name", "piyush"); // write in console not here to test them 

// let v1 = sessionStorage.getItem("name");
// sessionStorage.removeItem("name");
// sessionStorage.setItem("name", "piyush mishra");




// Cookies --
// browser mein chota data store karne ke liye cookies ka istemall hota hai

// ~4kb 
// local and session storage - ~5Mb

// cookies mein jo bhi data store karoge wo data page reload par autmatically server par jaayega -- ex. language preernces color theme etc
// document.cookie = "email = piyush@test.com" 
// deleting cookie cookies and data  it is thorugh browser featur 
// see cookies thorugh extensions

// document.cookie = "age=26";

// document.cookie; // to see cookies




// local storage stores only strings and convert others to string too
// localStorage.setItem("friends", ["akash" , "sumit" , "amit"]);
// localStorage.setItem("friends", {one :"akash" ,two: "sumit" });


// storing the othres in localStorage
// using JSON.stringify
// localStorage.setItem("friends", JSON.stringify(["akash" , "sumit" , "amit"])); // stringify the array


// JSON.parse('["akash","sumit","amit"]');

// JSON.parse(localStorage.getItem("friends"))








// COnfusions
// why only strings stored in localStorage 
//  the developer that developed localStorage api created it store only strings
// arrays and objects can be saved using json . stringify and josn.parse gives to originals



// understanding cookies 
// sving data of login  tokens etc in local storage of user which do not delete unless user deletes it 
// / it make sure user stay logged in
// cookie can be expired after some times too
// temporary cookie


// temp cookie

// 1
// // Sets a cookie named "session" valid for 3600 seconds (1 hour)
// document.cookie = "session=active; max-age=3600; path=/";

// 2 - Clean Utility Functions

// // Set cookie: name, value, minutes
// const setCookie = (name, val, mins) => {
//   document.cookie = `${name}=${val}; max-age=${mins * 60}; path=/`;
// };

// // Get cookie by name
// const getCookie = (name) => {
//   const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
//   return match ? match[2] : null;
// };

// // Usage: Set a 'theme' cookie for 30 minutes
// setCookie('theme', 'dark', 30);
// // max-age is in seconds convert nimns to secs usign mins * secs