require("dotenv").config(); // Load .env variables

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT;


//serve static files
app.use(express.static(path.join(__dirname, 'public')));

//serve main page
app
app.get('/', (req, res) => { 
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});