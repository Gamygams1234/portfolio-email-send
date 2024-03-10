// app.js or server.js
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const submissionRoutes = require('./routes/submissionRoutes.js');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());


// Routes
app.use('/api', submissionRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});