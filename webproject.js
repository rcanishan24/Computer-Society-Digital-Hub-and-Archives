document.addEventListener("DOMContentLoaded", () => {
    const profiles = [
        { name: "John Doe", img: "https://via.placeholder.com/200", description: "Cybersecurity expert and digital advocate." },
        { name: "Jane Smith", img: "https://via.placeholder.com/200", description: "AI researcher pushing the boundaries of technology." },
        { name: "Mark Johnson", img: "https://via.placeholder.com/200", description: "Software engineer revolutionizing cloud computing." }
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
