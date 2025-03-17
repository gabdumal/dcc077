/* global use, db */

// Select the database to use.
use("tse_online");

db.states.createIndex({ name: 1 }, { unique: true });

db.states.createIndex({ _id: 1, "cities.name": 1 }, { unique: true });

db.states.createIndex(
  { _id: 1, "cities._id": 1, "cities.polling_stations.name": 1 },
  { unique: true }
);

db.states.createIndex(
  { "cities.polling_stations.machines.serial_number": 1 },
  { unique: true }
);
