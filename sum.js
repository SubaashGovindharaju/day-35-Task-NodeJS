const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const textFilesFolderPath = path.join(__dirname, 'text_files'); // Update with your folder path

// API endpoint to retrieve all text files
app.get('/textfiles', (req, res) => {
    fs.readdir(textFilesFolderPath, (err, files) => {
        if (err) {
            console.error('Error reading folder:', err);
            res.status(500).json({ error: 'Error reading folder' });
        } else {
            const textFiles = files.filter(file => file.endsWith('.txt'));
            res.json({ textFiles });
        }
    });
});
