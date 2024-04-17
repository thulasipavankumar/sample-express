const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Middleware to log request method and payload
app.use((req, res, next) => {
  console.log(`Received ${req.method} request at ${req.url}`);
  if (Object.keys(req.body).length !== 0) {
    console.log('Payload:', req.body);
  }
  next();
});

// Route to handle all requests
app.all('*', (req, res) => {
  res.send('Received your request!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

