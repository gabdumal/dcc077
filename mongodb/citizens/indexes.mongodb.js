/* global use, db */

// Select the database to use.
use("tse_online");

db.citizens.createIndex({ cpf_number: 1 }, { unique: true });

db.citizens.createIndex({ born_in: 1 });

db.citizens.createIndex({ registered_in: 1 });

db.citizens.createIndex({ "attended_to.polling_station": 1 });
