const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// FIX 1: Serve static files from the root folder (.) instead of 'public'
app.use(express.static(__dirname)); 
app.use(express.json());

// FIX 2: Point to index.html in the root
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/projects', (req, res) => {
    const projects = [
         { id: 1, name: "BOOKITBUDDY", 
        image: ["images/bib.png", "images/bib2.png", "images/bib3.png", "images/bib4.png", "images/bib5.png", "images/bib6.png", "images/bib7.png", "images/bib8.png", "images/bib9.png"],
        description: "A BulSU E-Library Reservation System. Developed using Python and a database, this project allows users to reserve function halls, manage their reservations, and access library resources efficiently."
        },
        { id: 2, name: "SOLVEIT", 
            image:["images/solveit.png", "images/solveit2.png", "images/solveit3.png", "images/solveit4.png", "images/solveit5.png", "images/solveit6.png"],
            description: "A problem-solving application for numerical methods and algorithms developed using java language"},
        { id: 3,  name: "PEENOISE RACE", 
            image: ["images/peenoise.png", "images/peenoise2.png", "images/peenoise3.png", "images/peenoise4.png", "images/peenoise5.png", "images/peenoise6.png","images/peenoise7.png" ], 
            description: "A fun and engaging type racing game developed using HTML, CSS, and JavaScript."}
    ];
    res.json(projects);
});

app.listen(PORT, () => {
    console.log(`Portfolio server running at http://localhost:${PORT}`);
});