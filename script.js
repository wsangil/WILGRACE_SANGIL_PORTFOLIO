async function loadProjects() {
    const projects = [
        { 
            name: "BOOKITBUDDY", 
            tech: "Python, Database", // Added this back so it's not 'undefined'
            image: ["images/bib.png", "images/bib2.png", "images/bib3.png", "images/bib4.png", "images/bib5.png", "images/bib6.png", "images/bib7.png", "images/bib8.png", "images/bib9.png"],
            description: "A BulSU E-Library Reservation System. Developed using Python and a database, this project allows users to reserve function halls, manage their reservations, and access library resources efficiently."
        },
        { 
            name: "SOLVEIT", 
            tech: "Java, Algorithms",
            image: ["images/solveit.png", "images/solveit2.png", "images/solveit3.png", "images/solveit4.png", "images/solveit5.png", "images/solveit6.png"],
            description: "A problem-solving application for numerical methods and algorithms developed using Java language."
        },
        { 
            name: "PEENOISE RACE", 
            tech: "HTML, CSS, JS",
            image: ["images/peenoise.png", "images/peenoise2.png", "images/peenoise3.png", "images/peenoise4.png", "images/peenoise5.png", "images/peenoise6.png","images/peenoise7.png" ], 
            description: "A fun and engaging type racing game developed using HTML, CSS, and JavaScript."
        }
    ];

    const grid = document.querySelector('.project-grid');
    grid.innerHTML = ''; 

    project.image.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.style.width = "100%";
    img.style.marginBottom = "20px"; // Space between screenshots
    img.style.borderRadius = "8px";
    gallery.appendChild(img);
});
}

// FIX 2: Move openModal OUTSIDE loadProjects so it's globally accessible
function openModal(project) {
    const modal = document.getElementById("projectModal");
    document.getElementById("modalTitle").innerText = project.name;
    document.getElementById("modalDesc").innerText = project.description || "Project details coming soon!";
    
    const gallery = document.getElementById("modalGallery");
    gallery.innerHTML = ''; 
    
    // FIX 3: Change 'screenshots' to 'image' to match your data above
    project.image.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.style.width = "100%"; // Basic styling to keep images uniform
        img.style.marginBottom = "10px";
        gallery.appendChild(img);
    });

    modal.style.display = "block";
}

window.onload = loadProjects;

// Close button logic
document.querySelector(".close").onclick = function() {
    document.getElementById("projectModal").style.display = "none";
    // Optional: Reset scroll position to top when closing
    document.querySelector(".modal").scrollTop = 0;
};

// Close when clicking outside the box
window.onclick = function(event) {
    const modal = document.getElementById("projectModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// This ensures the button is found only after the page loads
document.addEventListener('DOMContentLoaded', () => {
    const closeBtn = document.querySelector(".close");
    if(closeBtn) {
        closeBtn.onclick = function() {
            document.getElementById("projectModal").style.display = "none";
            document.body.style.overflow = "auto"; // Re-enable background scrolling
        };
    }
});