async function loadProjects() {
    // Hardcode the data so it works on GitHub Pages without a backend
    const projects = [
        { name: "BOOKITBUDDY", 
        image: ["images/bib.png", "images/bib2.png", "images/bib3.png", "images/bib4.png", "images/bib5.png", "images/bib6.png", "images/bib7.png", "images/bib8.png", "images/bib9.png"],
        description: "A BulSU E-Library Reservation System. Developed using Python and a database, this project allows users to reserve function halls, manage their reservations, and access library resources efficiently."
        },
        { name: "SOLVEIT", 
            image:["images/solveit.png", "images/solveit2.png", "images/solveit3.png", "images/solveit4.png", "images/solveit5.png", "images/solveit6.png"],
            description: "A problem-solving application for numerical methods and algorithms developed using java language"},
        { name: "PEENOISE RACE", 
            image: ["images/peenoise.png", "images/peenoise2.png", "images/peenoise3.png", "images/peenoise4.png", "images/peenoise5.png", "images/peenoise6.png","images/peenoise7.png" ], 
            description: "A fun and engaging type racing game developed using HTML, CSS, and JavaScript."}
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