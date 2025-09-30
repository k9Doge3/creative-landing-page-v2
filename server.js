const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3070;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Route for the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Creative Landing Page V2 Server is running!`);
    console.log(`📍 Local URL: http://localhost:${PORT}`);
    console.log(`🎨 Featuring Karim Youssef's creative design with KY logo`);
    console.log(`🏗️  Wildrose Painters business section included`);
    console.log(`💫 Dark theme with animated background and interactive elements`);
    console.log(`\n⭐ Press Ctrl+C to stop the server`);
});