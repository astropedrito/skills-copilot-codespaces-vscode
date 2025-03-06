// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Use static files from public directory
app.use(express.static('public'));

// Use JSON body parser
app.use(express.json());

// Create in-memory database
const comments = [];

// Get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Create a new comment
app.post('/comments', (req, res) => {
  const { author, text } = req.body;
  if (!author || !text) {
    res.status(400).send('Bad request: author and text are required');
  } else {
    const comment = { author, text };
    comments.push(comment);
    res.status(201).json(comment);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});