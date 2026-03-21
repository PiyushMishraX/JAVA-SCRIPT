// const ul = document.querySelector("ul");

// for(let i = 0; i<100 ; i++){
//     const li = document.createElement("li");
//     li.textContent = i;
//     ul.appendChild(li);
// } // bohot slow tarika hai baar bar dom tree refreesh so website slow - in real world scenarios 
// agar 1000 , 10000 etc elements add kar rahe hai ,
//maan lo recommendation ko relaad kiya in social media toh har element / person ka name , image , info , posts etc sab load hua to bohot time and lag generate hoga


// create better

// const ul = document.querySelector("ul");
// const space = document.createDocumentFragment();
// // ek space banna dega aur ul ki jagah space mai append karen ge // jo ki dom tree se alag hai

// for(let i = 0; i<100 ; i++){
//     const li = document.createElement("li");
//     li.textContent = i;
//     space.appendChild(li);
// }

// ul.appendChild(space);

// optimaization approches - jitne screen mai dikhe utne hi load kare - fir aage ke ( 10000 mai se 100 -150 tak )
// fir scroll ho to load karo lazy loading jese





// for css if we want to change multiple properties so create a class add them in it and attach the class


// Reflow occurs when the browser recalculates the layout of elements on the page, such as their positions, sizes, or dimensions.  This happens due to changes like modifying width, height, margin, padding, font-size, or adding/removing DOM elements. Reflow is expensive because it may require recalculating the entire layout tree and affects the document flow. 

// Repaint (or redraw) happens when an element’s visual properties change without affecting layout—such as color, background-color, border-color, visibility, box-shadow, or opacity.  Repaint is less costly than reflow but still impacts performance since the browser must redraw affected pixels. 