const mongoose = require("mongoose");

const technicianSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  garageName: { type: String, required: true },
  location: { type: String, required: true },
  servicesOffered: { type: String }, // you can change this to an array if needed later
}, { timestamps: true });

module.exports = mongoose.model("Technician", technicianSchema);
