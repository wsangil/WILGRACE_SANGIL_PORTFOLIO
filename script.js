// 1. Data moved back to frontend because GitHub Pages doesn't run Node.js servers
const projects = [
    { 
        name: "BOOKITBUDDY", 
        tech: "Python, Database", 
        image: ["images/bib.png", "images/bib2.png", "images/bib3.png", "images/bib4.png", "images/bib5.png", "images/bib6.png", "images/bib7.png", "images/bib8.png", "images/bib9.png"],
        description: "A BulSU E-Library Reservation System. Developed using Python and a database, this project allows users to reserve function halls, manage their reservations, and access library resources efficiently."
    },
    { 
        name: "SOLVEIT", 
        tech: "Java, Data Structures and Algorithms",
        image: ["images/solveit.png", "images/solveit2.png", "images/solveit3.png", "images/solveit4.png", "images/solveit5.png", "images/solveit6.png"],
        description: "A problem-solving application for numerical methods and algorithms developed using Java language."
    },
    { 
        name: "PEENOISE RACE", 
        tech: "HTML, CSS, JS",
        image: ["images/peenoise.png", "images/peenoise2.png", "images/peenoise3.png", "images/peenoise4.png", "images/peenoise5.png", "images/peenoise6.png","images/peenoise7.png" ], 
        description: "A fun and engaging type racing game developed using HTML, CSS, and JavaScript."
    },
    { 
        name: "DRAWMANCE", 
        tech: "HTML, CSS, JS, PHP, XAMPP",
        image: ["images/drawmance.png", "images/drawmance2.png", "images/drawmance3.png"], 
        description: "A web-based drawing application developed using HTML, CSS, JavaScript, PHP, and XAMPP. It allows users to create and draw on a canvas at the same time, fostering creativity and collaboration. Users can also save their drawings as jpg,png and pdf files, making it a versatile tool for artists and designers."
    },
    { 
        name: "AIRWEGO", 
        tech: "Flutter, Dart, Firebase",
        image: ["images/awg.jpg", "images/awg2.jpg", "images/awg3.jpg","images/awg4.jpg"], 
        description: "A mobile application developed using Flutter and Dart, with Firebase as the backend. AirWeGo allows users to search for flights, compare prices, and book tickets seamlessly. The app features a user-friendly interface and real-time updates on flight availability and pricing."
    },
];

function loadProjects() {
    const grid = document.querySelector('.project-grid');
    if(!grid) return; // Safety check
    
    grid.innerHTML = ''; 

    // FIX: Loop through the array to create the HTML elements
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'card';
        
        card.innerHTML = `
            <div class="card-img">
                <img src="${project.image[0]}" alt="${project.name}">
            </div>
            <div class="card-info">
                <h3>${project.name}</h3>
                <p>${project.tech}</p>
            </div>
        `;

        // Add the click event to open the modal
        card.onclick = () => openModal(project);
        
        grid.appendChild(card);
    });
}

function openModal(project) {
    const modal = document.getElementById("projectModal");
    document.getElementById("modalTitle").innerText = project.name;
    document.getElementById("modalDesc").innerText = project.description;
    
    const gallery = document.getElementById("modalGallery");
    gallery.innerHTML = ''; 
    
    project.image.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        gallery.appendChild(img);
    });

    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Prevent background scroll
}

// Close logic
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();

    const closeBtn = document.querySelector(".close");
    const modal = document.getElementById("projectModal");

    if(closeBtn) {
        closeBtn.onclick = () => {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        };
    }

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    };
});