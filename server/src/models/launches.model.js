const launches = new Map();

let latestFlightNumber = 100;

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

launches.set(launch.flightNumber, launch);

function existsLaunchWithId(launchId) {
  return launches.has(launchId);
}

function getAllLaunches() {
  return Array.from(launches.values());
}

function addNewLaunch(lauch) {
  latestFlightNumber += 1;
  launches.set(
    latestFlightNumber,
    Object.assign(lauch, {
      success: true,
      upcoming: true,
      customers: ["Tap|Space", "NASA"],
      flightNumber: latestFlightNumber,
    })
  );
}

function abortLaunchById(launchId) {
  const aborted = launches.get(launchId);
  aborted.upcoming = false;
  aborted.success = false;

  return aborted;
}

module.exports = {
  existsLaunchWithId,
  getAllLaunches,
  addNewLaunch,
  abortLaunchById,
};
