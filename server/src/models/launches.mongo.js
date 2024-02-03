const mongoose = require("mongoose");

const launch = {
  flightNumber: 1000,
  mission: "Kepler Exploration X",
  rocket: "Explore IS1",
  lauchDate: new Date("Deceber 27,2030"),
  target: "Kepla-442 b ",
  customers: ["Tap|Space", "NASA"],
  upcoming: true,
  success: true,
};

const launchesSchema = new mongoose.Schema({
  flightNumber: {
    type: Number,
    required: true,
  },
  lauchDate: {
    type: Date,
    required: true,
  },
  mission: {
    type: String,
    required: true,
  },
  rocket: {
    type: String,
    required: true,
  },
  target: {
    type: String,
    required: true,
  },
  customers: {
    type: [String],
    required: true,
  },
  upcoming: {
    type: Boolean,
    required: true,
  },
  success: {
    type: Boolean,
    required: true,
  },
});
