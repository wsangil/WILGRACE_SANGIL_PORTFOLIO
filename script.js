async function loadProjects() {
    // Hardcode the data so it works on GitHub Pages without a backend
    const projects = [
        { name: "BOOKITBUDDY", 
        image: ["images/bib.png", "images/bib2.png", "images/bib3.png", "images/bib4.png", "images/bib5.png", "images/bib6.png", "images/bib7.png", "images/bib8.png", "images/bib9.png"],
        description: "A BulSU E-Library Reservation System. Developed using Python and a database, this project allows users to reserve function halls, manage their reservations, and access library resources efficiently."
        },
        { name: "SOLVEIT", tech: "java, numerical methods", image: "images/solveit.png" },
        { name: "PEENOISE RACE", tech: "html, css, js", image: "images/peenoise.png" }
    ];

    const grid = document.querySelector('.project-grid');
    grid.innerHTML = ''; 

    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-img">
                <img src="${project.image}" alt="${project.name}">
            </div>
            <div class="card-info">
                <h3>${project.name}</h3>
                <p>${project.tech}</p>
            </div>
        `;
        grid.appendChild(card);
    });
}
window.onload = loadProjects;