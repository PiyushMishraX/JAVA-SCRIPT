// const ul = document.querySelector("ul");

// for(let i = 0; i<100 ; i++){
//     const li = document.createElement("li");
//     li.textContent = i;
//     ul.appendChild(li);
// } // bohot slow tarika hai baar bar dom tree refreesh so website slow - in real world scenarios 
// agar 1000 , 10000 etc elements add kar rahe hai ,
//maan lo recommendation ko relaad kiya in social media toh har element / person ka name , image , info , posts etc sab load hua to bohot time and lag generate hoga


// create better

const ul = document.querySelector("ul");
const space = document.createDocumentFragment();
// ek space banna dega aur ul ki jagah space mai append karen ge // jo ki dom tree se alag hai

for(let i = 0; i<100 ; i++){
    const li = document.createElement("li");
    li.textContent = i;
    space.appendChild(li);
}

ul.appendChild(space);

// optimaization approches - jitne screen mai dikhe utne hi load kare - fir aage ke ( 10000 mai se 100 -150 tak )
// fir scroll ho to load karo lazy loading jese


