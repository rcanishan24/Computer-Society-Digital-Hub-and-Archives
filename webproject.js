document.addEventListener("DOMContentLoaded", () => {
    const profiles = [

        { name: "John Doe", img: "https://via.placeholder.com/200", description: "John Doe Pogi" },
        { name: "Jane Smith", img: "https://via.placeholder.com/200", description: "Jane Smith Ganda" },
        { name: "Mark Johnson", img: "https://via.placeholder.com/200", description: "Mark Johnson Pangit" }


        { name: "John Doe", img: "https://via.placeholder.com/200", description: "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC" },
        { name: "Jane Smith", img: "https://via.placeholder.com/200", description: "BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB" },
        { name: "Mark Johnson", img: "https://via.placeholder.com/200", description: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA." },

        { name: "John Doe", img: "https://via.placeholder.com/200", description: "John Doe Pogi" },
        { name: "Jane Smith", img: "https://via.placeholder.com/200", description: "Jane Smith Ganda" },
        { name: "Mark Johnson", img: "https://via.placeholder.com/200", description: "Mark Johnson Pangit" }


    ];

    const profileContainer = document.getElementById("profiles");

    profiles.forEach(profile => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${profile.img}" alt="${profile.name}">
            <h3>${profile.name}</h3>
            <p>${profile.description}</p>
        `;
        profileContainer.appendChild(card);
    });
});
