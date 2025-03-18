/* global use, db */

// Select the database to use.
use("tse_online");

db.states.find({ name: "Bahia" }, { "cities.name": 1, _id: 0 });
