const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'GSE Backend running', timestamp: new Date() });
});

// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'GSE API working!' });
});

app.listen(PORT, () => {
  console.log(`GSE Backend running on port ${PORT}`);
});
