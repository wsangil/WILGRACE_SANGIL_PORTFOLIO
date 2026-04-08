async function loadProjects() {
    try {
        const response = await fetch('/api/projects');
        const projects = await response.json();
        
        const grid = document.querySelector('.project-grid');
        grid.innerHTML = ''; // Clear the "loading" text

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
    } catch (error) {
        console.error("Error loading projects:", error);
    }
}

// Run the function when the page loads
window.onload = loadProjects;