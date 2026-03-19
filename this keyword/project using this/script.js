let form = document.querySelector("form");
let username = document.querySelector("#name");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");
let photo = document.querySelector("#photo");

const userManager = {
  users: [], // users
  init: function () {
    // alert();
    // form.addEventListener("submit" , function(e){
    //     e.preventDefault();
    //     console.log(this);
    //     // we don't want this elemtent ho we want this obj ho
    // })

    form.addEventListener("submit", this.submitForm.bind(this)); //this ki value yaha pe obj hai // kyuki ye this submitForm method mai jaaye to this obj ho jaayega // first his = form
  },
  // submitForm: function(e){
  //     e.preventDefault();
  //     // console.log(this); // ab submit form mai this ki value hamesha obj hogi
  //     // console.log("form submitted");
  //     // ab thi se submit form mai values push kar sakte hai object mai
  //     this.users.push({
  //         // name:name,
  //         // role: role,
  //         // bio,
  //         // same ho to ek baar bas likh do
  //         username: username.value,
  //         role: role.value,
  //         bio: bio.value,
  //         photo: photo.value,
  //     });
  //     form.reset();
  // },

  submitForm: function (e) {
    e.preventDefault();
    this.addUser();
  },
  addUser: function () {
    this.users.push({
      role: role.value,
      bio: bio.value,
      photo: photo.value,
    });
    form.reset();
    this.renderUi();
  },
  renderUi: function () {
    this.users.forEach(function (user) {
      // 1. Create the main container
      const card = document.createElement("div");
      card.className =
        "bg-zinc-900 border border-zinc-800 p-6 rounded-2xl flex flex-col items-center text-center";

      // 2. Create the Profile Image
      const img = document.createElement("img");
      img.src =
        user.photo;
      img.alt = user.username;
      img.className =
        "w-24 h-24 rounded-full object-cover border-4 border-zinc-700 mb-4";

      // 3. Create the Name (Heading)
      const name = document.createElement("h3");
      name.className = "text-xl font-bold";
      name.textContent = user.username;

      // 4. Create the Job Title
      const title = document.createElement("p");
      title.className = "text-zinc-400 text-sm mb-2";
      title.textContent = user.role;

      // 5. Create the Bio/Description
      const bio = document.createElement("p");
      bio.className = "text-zinc-500 text-sm leading-relaxed";
      bio.textContent =
        user.bio;

      // 6. Assembly: Append children to the main container
      card.appendChild(img);
      card.appendChild(name);
      card.appendChild(title);
      card.appendChild(bio);

      // 7. Append the final card to the body (or a specific container)
      document.querySelector("#userGrid").appendChild(card);
    });
  },
  removeUser: function () {},
};

userManager.init();

// notes copy me likho usko padh padh ke code likho do tin baar approach sikh jaoge
