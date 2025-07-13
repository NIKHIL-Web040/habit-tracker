const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();


const app = express();
const PORT = 3000;

// Middleware to handle form data and JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const authRoutes = require('./routes/auth');
app.use('/api', authRoutes);

const habitRoutes = require('./routes/habits');
app.use('/api/habits', habitRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('Habit Tracker Server is running ');
});
console.log("👉 Mongo URI:", process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}); // DEBUG
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log(" MongoDB connected successfully"))
.catch((err) => console.error("MongoDB connection error:", err));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});