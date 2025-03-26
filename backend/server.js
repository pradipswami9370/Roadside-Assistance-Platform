require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));

const app = express();
app.use(cors());
app.use(express.json());

// 1. IMPORT userRoutes
const userRoutes = require('./routes/userRoutes');

// 2. USE userRoutes for any path starting with /api/users
app.use('/api/users', userRoutes);

// Sample route
app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
