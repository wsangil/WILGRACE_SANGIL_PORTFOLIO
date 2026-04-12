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
        { 
            id: 1, 
            name: "BOOKITBUDDY", 
            tech: "Python, Database", 
            image: "images/bookitbuddy.PNG" 
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