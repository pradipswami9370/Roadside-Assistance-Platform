const User = require("../models/User"); 
const mongoose = require("mongoose");

const serviceRequestSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  status: { type: String, default: 'pending' }, // e.g., pending, accepted, completed
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("ServiceRequest", serviceRequestSchema);
