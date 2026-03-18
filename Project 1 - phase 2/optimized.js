const users = [
    {
        name: "amishra rathore",
        pic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60",
        bio: "silent chaos in a loud world"
    },
    {
        name: "Piyush Mishra",
        pic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=60",
        bio: "sapno ka peecha karne wala musafir"
    },
    {
        name: "ishani verma",
        pic: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=60",
        bio: "kalam aur khayalon ki duniya"
    },
    {
        name: "kabir das",
        pic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60",
        bio: "saadgi mein hi asli sundarta hai"
    },
    {
        name: "rohan khanna",
        pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=60",
        bio: "nayi manzilon ki talash jaari hai"
    },
    {
        name: "ananya singh",
        pic: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&auto=format&fit=crop&q=60",
        bio: "chai, kitabein aur thodi si khamoshi"
    },
    {
        name: "aditya mehra",
        pic: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60",
        bio: "waqt ki raftar ke saath chalta rahi"
    },
    {
        name: "aditya malhotra",
        pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=60",
        bio: "zindagi ek haseen khwab hai"
    }
];

const cardsContainer = document.querySelector('#container');
const inp = document.querySelector(".inp");

function showUsers(arr) {
    cardsContainer.innerHTML = ""; 
    
    arr.forEach(user => {
        const card = document.createElement('div');
        card.classList.add('card');

        const img = document.createElement('img');
        img.src = user.pic;
        img.classList.add('bg-img');
        img.alt = user.name;

        const blurredLayer = document.createElement('div');
        blurredLayer.classList.add('blurred-layer');
        blurredLayer.style.backgroundImage = `url(${user.pic})`;

        const content = document.createElement('div');
        content.classList.add('content');

        const h3 = document.createElement('h3');
        h3.textContent = user.name;

        const p = document.createElement('p');
        p.textContent = user.bio;

        content.append(h3, p);
        card.append(img, blurredLayer, content);
        cardsContainer.appendChild(card);
    });
}

inp.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredUsers = users.filter(user => 
        user.name.toLowerCase().startsWith(searchTerm)
    );
    showUsers(filteredUsers);
});

showUsers(users);


// add debounce to impreove overall performance looks like it is reduced nut actually is increased