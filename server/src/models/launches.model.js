const launches = new Map();

const launch = {
  flightNumber: 1000,
  mission: "Kepler Exploration X",
  rocket: "Explore IS1",
  lauchDate: new Date("Deceber 27,2030"),
  destination: "Kepla-442 b ",
  customer: ["Tap|Space", "NASA"],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

module.exports = { launches };
