async function loadProjects() {
    // Hardcode the data so it works on GitHub Pages without a backend
    const projects = [
        { name: "BOOKITBUDDY", tech: "Python, Database", image: "images/bookitbuddy.PNG" },
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