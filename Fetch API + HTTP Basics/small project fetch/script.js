function getUsers() {
    fetch("https://randomuser.me/api/?results=5")
    .then((raw) => raw.json())
    .then((data) => {
        //   console.log(data.results);

        document.querySelector(".users").innerHTML = ""; // remove after full data is retrived not before so it won't look odd
      data.results.forEach(function (user) {
        // console.log(user.name);

        const card = document.createElement("div");
        card.className =
          "bg-gray-800 rounded-lg shadow-lg p-6 max-w-sm w-full border border-gray-700 overflow-hidden";

        const flexWrapper = document.createElement("div");
        flexWrapper.className = "flex items-center space-x-4 min-w-0";

        const img = document.createElement("img");
        img.className =
          "w-16 h-16 flex-shrink-0 rounded-full object-cover border border-gray-600";
        img.src = user.picture.large;
        img.alt = "User avatar";

        const contentDiv = document.createElement("div");
        contentDiv.className = "min-w-0";

        const name = document.createElement("h2");
        name.className = "text-xl font-semibold text-white truncate";
        name.textContent = user.name.first + " " + user.name.last;

        const email = document.createElement("p");
        email.className = "text-gray-400 text-sm truncate";
        email.textContent = user.email;

        const badge = document.createElement("span");
        badge.className =
          "inline-block mt-2 px-3 py-1 bg-gray-700 text-gray-300 text-xs font-medium rounded-full";
        badge.textContent = "Active";

        contentDiv.appendChild(name);
        contentDiv.appendChild(email);
        contentDiv.appendChild(badge);

        flexWrapper.appendChild(img);
        flexWrapper.appendChild(contentDiv);

        card.appendChild(flexWrapper);

        document.querySelector(".users").appendChild(card);
      });
    });
}
getUsers();
document.querySelector("#refreshBtn").addEventListener("click", function () {
  getUsers();
});
