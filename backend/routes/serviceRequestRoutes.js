const express = require("express");
const router = express.Router();
const ServiceRequest = require("../models/ServiceRequest");

// Add this line so Mongoose is aware of the "User" model:
const User = require("../models/User");

// Create a service request (User submits a request)
router.post("/", async (req, res) => {
  const { user, description, location } = req.body;
  try {
    const newRequest = new ServiceRequest({ user, description, location });
    await newRequest.save();
    res.status(201).json({ message: "Service request created successfully", request: newRequest });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all service requests (For technicians to view)
router.get("/", async (req, res) => {
  try {
    const requests = await ServiceRequest.find().populate("user", "name email");
    res.json(requests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
