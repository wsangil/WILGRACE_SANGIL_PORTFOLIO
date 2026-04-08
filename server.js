const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to serve your static files (CSS, JS, Images)
app.use(express.static('public'));
app.use(express.json());

// Route for the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// A sample API route for your projects (mimicking your VibeCheck style)
app.get('/api/projects', (req, res) => {
    const projects = [
        { 
            id: 1, 
            name: "BOOKITBUDDY", 
            tech: "Python, Database", 
            image: "images/bookitbuddy.png" // Put this file in your public folder
        },
        { 
            id: 2, 
            name: "SOLVEIT", 
            tech: "java, numerical methods", 
            image: "images/solveit.png" 
        },
        { 
            id: 3, 
            name: "PEENOISE RACE", 
            tech: "html, css, js", 
            image: "images/peenoise.png" 
        }
    ];
    res.json(projects);
});

app.listen(PORT, () => {
    console.log(`Portfolio server running at http://localhost:${PORT}`);
});