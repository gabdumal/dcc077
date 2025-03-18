/* global use, db */

// Select the database to use.
use("tse_online");

const record = db.states.findOne({
  "cities.polling_stations.uses.machine.serial_number": "AAA001",
});

// const machine = state[0].cities[0].polling_stations[0].uses.machine;

console.log(record);
