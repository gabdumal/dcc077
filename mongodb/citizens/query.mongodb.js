/* global use, db */

// Select the database to use.
use("tse_online");

// Select every citizen
db.citizens.find().forEach((citizen) => {
  console.log(citizen.name);
});
