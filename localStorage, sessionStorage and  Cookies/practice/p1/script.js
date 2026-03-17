// prompt - how to get the os display mode dark or light in js just property no code

// window.matchMedia()
//  window.matchMedia('(prefers-color-scheme: dark)')
// matches
//  true drk false light mode

// if(window.matchMedia('(prefers-color-scheme: dark)').matches){
//     document.body.classList.add("dark");
// }
// else{
//     document.body.classList.add("light");
// }

function setDarkOrLight() {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else {
    document.body.classList.add("light");
    // remove dark
    document.body.classList.remove("dark");
  }
}

// setDarkOrLight();

// setTimeout(() => {
//     setDarkOrLight();
// }, 3000);

if (localStorage.getItem("theme")) {
  // document.body.classList.add(localStorage.getItem("theme"));
  document.body.classList.add(
    localStorage.getItem("theme"),
  );
} else {
  setDarkOrLight();
}

// chanigng on the go

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", function () {
    if (!localStorage.getItem("theme")) {
      setDarkOrLight();
    }
  });

// toogle chage

let btn = document.querySelector("button");
btn.addEventListener("click", function () {
  // prompt - i want to checl in document.classList dark class exists or not
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
    document.body.classList.add("light");

    localStorage.setItem("theme", "light");
  } else {
    document.body.classList.remove("light");
    document.body.classList.add("dark");

    localStorage.setItem("theme", "dark");
  }
});

// now store changes in localStorage so the prvious theme is resumed
