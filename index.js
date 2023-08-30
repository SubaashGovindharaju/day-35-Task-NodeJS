const express = require('express');
const app = express();
const fs = require("fs");
const folder = './folder';


// ... (Creating and writing to a new file)
app.get('/dateFile', (req, res) => {
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder);
  }
  const currentDate = new Date().toISOString().split('T')[0];
  const currentTime = new Date();
  const hours = currentTime.getHours().toString().padStart(2, '0');
  const minutes = currentTime.getMinutes().toString().padStart(2, '0');
  const seconds = currentTime.getSeconds().toString().padStart(2, '0');
  const currentTimeString = `${hours}-${minutes}-${seconds}`;
  const filename = `${currentDate}_${currentTimeString}`;
  const path = `${folder}/${filename}`;
  const content = String(new Date());
  fs.writeFile(path, content, (err) => {
    if (err) throw err;
    res.send(`Text file ${filename} created successfully`)
    console.log("complee the writhing");
  });
})



app.get('/fetchfiles', (req, res) => {
  // Read directory contents
  fs.readdir(folder, (err, files) => {
    if (err) throw err
    // Prepare an array to store filenames
    const filenames = [];
    // Loop through files and log them
    files.forEach((file) => {
      filenames.push(file);
    });
    // Send the filenames as a JSON response
    res.json(filenames);
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
