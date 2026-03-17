// overall progress = 3 seconds
// 30 ms = 1 perent

let count = 0;
let second =3;
let progress = document.querySelector(".progress-fill");
let percentText = document.querySelector("#percentage"); // id = # calss = . don't forget ever

let inrv = setInterval(
  () => {
    if (count <= 99) {
      count++;
      progress.style.width = `${count}%`;
      // document.querySelector("#percentage").textContent =  `${count}%`;
      percentText.textContent = `${count}%`;
    }
    else{
        document.querySelector("#status-text").textContent = "Downloaded.";
        clearInterval(intv);
    }

// }, 30);
// }, 3000/100);
// }, 10000/100);
// }, 10 * 1000/100);
  },
  (second * 1000) / 100,
);
