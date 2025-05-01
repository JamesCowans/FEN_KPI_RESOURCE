
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./routes/auth.routes');

const app = express();
app.use(express.json());

// Health-check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK' });
});

// Mount auth routes
app.use('/api/auth', authRouter);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => {
    console.error(`MongoDB connection error: ${err}`);
  });

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});