// const users = [
//     {
//         name: "amishra rathore",
//         pic: "",
//         bio: "silent chaos in a loud world "
//     },
// ];


const users = [
    {
        name: "amishra rathore",
        pic: "https://images.ctfassets.net/2pyx8rwuvz6x/15EcpSoNUcZXYlxlBRhJ5l/83c9a07ac571bc3cfb71d8e6dc3c3ccf/PIN_Company_Leadership-Ready.jpg?fm=webp&q=85",
        bio: "silent chaos in a loud world "
    },
    {
        name: "aryan sharma",
        pic: "https://images.ctfassets.net/2pyx8rwuvz6x/2GkY2VRLuiS7UxCtK2Y96z/e8baa6a47f8a58298809db606c498424/PIN_Company_Leadership-LeeBrown.jpg?fm=webp&q=85",
        bio: "sapno ka peecha karne wala musafir"
    },
    {
        name: "ishani verma",
        pic: "https://images.ctfassets.net/2pyx8rwuvz6x/53XckSVBfgqULxmFYCZJRV/d900d3ca6dd9bb29286104efe8a4f960/PIN_Company_Leadership-ClaudineCheever.jpg?fm=webp&q=85",
        bio: "kalam aur khayalon ki duniya"
    },
    {
        name: "kabir das",
        pic: "https://images.ctfassets.net/2pyx8rwuvz6x/1g8hEtbWzsGMWO4cVOhBe0/8368fc6d467d9dc0a9e3568a1dbf01c1/PIN_Company_Leadership-Donnelly.jpg?fm=webp&q=85",
        bio: "saadgi mein hi asli sundarta hai"
    },
    {
        name: "rohan khanna",
        pic: "https://images.ctfassets.net/2pyx8rwuvz6x/4xMOPpudD5u4jAgzhsFFVN/4012f778265cd2255bd98f34fb4fa6ec/PIN_Company_Leadership-Ducard.jpg?fm=webp&q=85",
        bio: "nayi manzilon ki talash jaari hai"
    },
    {
        name: "ananya singh",
        pic: "https://images.ctfassets.net/2pyx8rwuvz6x/57Ogmr48PBu2YeR8tjGyb9/c853103ea799dce1595e05b377ec1dc1/PIN_Company_Leadership-Wallcott.jpg?fm=webp&q=85",
        bio: "chai, kitabein aur thodi si khamoshi"
    },
    {
        name: "aditya mehra",
        pic: "https://images.ctfassets.net/2pyx8rwuvz6x/3JzjPPONFvED4OZaiBoKPN/f798da61a3aa3c9a468d80b202db7b7e/PIN_Leadership_Detail-Donnelly.png?fm=webp&q=85",
        bio: "waqt ki raftar ke saath chalta rahi"
    },
    {
        name: "srishti kapoor",
        pic: "https://images.ctfassets.net/2pyx8rwuvz6x/3ZV37PIQ6Yy4tPcGMRUnvv/9549ce9a2ddde3d1befd0cd4063fa772/PIN_Leadership_Detail-Sutton.png?fm=webp&q=85",
        bio: "sitaron ki tarah chamakne ki khwahish"
    },
    {
        name: "vihaan malhotra",
        pic: "https://images.ctfassets.net/2pyx8rwuvz6x/15EcpSoNUcZXYlxlBRhJ5l/83c9a07ac571bc3cfb71d8e6dc3c3ccf/PIN_Company_Leadership-Ready.jpg?fm=webp&q=85",
        bio: "zindagi ek haseen khwab hai"
    }
];


// saare users show karana
// filter karna har bar input karne pe
// show karna filtered uses


const container = document.querySelector('#container'); // Make sure you have a container in your HTML

function showUsers(arr){
    // not writing users because it wil show everthing even when filtrs use
    arr.forEach(function(user){
        // 1. Create the main card div
    const card = document.createElement('div');
    card.classList.add('card');

    // 2. Create the background image
    const img = document.createElement('img');
    img.src = user.pic;
    img.classList.add('bg-img');
    img.alt = user.name;

    // 3. Create the blurred layer
    const blurredLayer = document.createElement('div');
    blurredLayer.classList.add('blurred-layer');

    // 4. Create the content wrapper
    const content = document.createElement('div');
    content.classList.add('content');

    // 5. Create and set the Name (h3)
    const h3 = document.createElement('h3');
    h3.textContent = user.name;

    // 6. Create and set the Bio (p)
    const p = document.createElement('p');
    p.textContent = user.bio;

    // --- Assembly ---
    content.appendChild(h3);
    content.appendChild(p);

    card.appendChild(img);
    card.appendChild(blurredLayer);
    card.appendChild(content);

    // Add the finished card to your page
    container.appendChild(card);
    });
}

showUsers(users);
// showUsers("piyush")