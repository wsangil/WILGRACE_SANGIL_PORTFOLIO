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
            description: "A fun and engaging type racing game developed using HTML, CSS, and JavaScript."},
        { id: 4,
        name: "DRAWMANCE", 
        image: ["images/drawmance.png", "images/drawmance2.png", "images/drawmance3.png"], 
        description: "A web-based drawing application developed using HTML, CSS, JavaScript, PHP, and XAMPP. It allows users to create and draw on a canvas at the same time, fostering creativity and collaboration. Users can also save their drawings as jpg,png and pdf files, making it a versatile tool for artists and designers."
        },
        { id: 5,
        name: "AIRWEGO", 
        image: ["images/awg.jpg", "images/awg2.jpg", "images/awg3.jpg","images/awg4.jpg"], 
        description: "A mobile application developed using Flutter and Dart, with Firebase as the backend. AirWeGo allows users to search for flights, compare prices, and book tickets seamlessly. The app features a user-friendly interface and real-time updates on flight availability and pricing."
        },
    ];
    res.json(projects);
});

app.listen(PORT, () => {
    console.log(`Portfolio server running at http://localhost:${PORT}`);
});