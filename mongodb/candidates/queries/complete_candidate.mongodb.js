/* global use, db */

// Select the database to use.
use("tse_online");

// Complete candidates
db.citizens.aggregate([
  {
    $match: {
      "candidate.party": { $exists: true },
    },
  },
  {
    $lookup: {
      from: "states",
      let: { bornInCity: "$born_in" },
      pipeline: [
        {
          $unwind: "$cities",
        },
        {
          $match: {
            $expr: {
              $eq: ["$cities._id", "$$bornInCity"],
            },
          },
        },
        {
          $project: {
            _id: 0,
            city: "$cities.name",
            state: "$name",
          },
        },
      ],
      as: "born_in_info",
    },
  },
  {
    $unwind: "$born_in_info",
  },
  {
    $lookup: {
      from: "states",
      let: { registeredInPollingStation: "$registered_in" },
      pipeline: [
        {
          $unwind: "$cities",
        },
        {
          $unwind: "$cities.polling_stations",
        },
        {
          $match: {
            $expr: {
              $eq: [
                "$cities.polling_stations._id",
                "$$registeredInPollingStation",
              ],
            },
          },
        },
        {
          $project: {
            _id: 0,
            polling_station: "$cities.polling_stations.name",
            city: "$cities.name",
            state: "$name",
          },
        },
      ],
      as: "registered_in_info",
    },
  },
  {
    $unwind: "$registered_in_info",
  },
  {
    $project: {
      _id: 0,
      name: 1,
      cpf_number: 1,
      gender: 1,
      birth_date: 1,
      "candidate.party": 1,
      born_in: { city: "$born_in_info.city", state: "$born_in_info.state" },
      registered_in: {
        polling_station: "$registered_in_info.polling_station",
        city: "$registered_in_info.city",
        state: "$registered_in_info.state",
      },
    },
  },
]);
