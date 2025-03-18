/* global use, db */

// Select the database to use.
use("tse_online");

db.states.createIndex({ serial_number: 1 }, { unique: true });
