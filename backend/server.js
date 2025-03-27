const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

// Load environment variables
dotenv.config();

const app = express();
app.use(express.json()); // Middleware to parse JSON body
app.use(cors());

// Import technician routes
const technicianRoutes = require("./routes/technicianRoutes");

// Use the routes
app.use("/api/technicians", technicianRoutes);

// Import service request routes
const serviceRequestRoutes = require('./routes/serviceRequestRoutes');

// Use the service request routes
app.use('/api/requests', serviceRequestRoutes);


const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.log(err));
