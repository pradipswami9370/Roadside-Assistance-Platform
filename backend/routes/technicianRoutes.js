const express = require("express");
const router = express.Router();
const Technician = require("../models/Technician");

// Register a technician
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, garageName, location, servicesOffered } = req.body;

    // Check if the email is already registered
    let technician = await Technician.findOne({ email });
    if (technician) {
      return res.status(400).json({ msg: "Technician already exists" });
    }

    // Create new technician
    technician = new Technician({
      name,
      email,
      password,
      garageName,
      location,
      servicesOffered,
    });

    await technician.save();
    res.status(201).json({ msg: "Technician registered successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
