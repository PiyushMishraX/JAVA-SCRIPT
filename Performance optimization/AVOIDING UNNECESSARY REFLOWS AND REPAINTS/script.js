const ul = document.querySelector("ul");

for(let i = 0; i<100 ; i++){
    const li = document.createElement("li");
    li.textContent = i;
    ul.appendChild(li);
} // bohot slow tarika hai baar bar dom tree refreesh so website slow - in real world scenarios 
// agar 1000 , 10000 etc elements add kar rahe hai ,
//maan lo recommendation ko relaad kiya in social media toh har element / person ka name , image , info , posts etc sab load hua to bohot time and lag generate hoga
