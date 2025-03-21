/* global use, db */

// Select the database to use.
use("tse_online");

// 1. Candidates registered in each city and its information
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
    $group: {
      _id: {
        city: "$registered_in_info.city",
        state: "$registered_in_info.state",
      }, // Group by the city and state where the polling station is located
      candidates: {
        $push: {
          name: "$name",
          cpf_number: "$cpf_number",
          gender: "$gender",
          birth_date: "$birth_date",
          party: "$candidate.party",
          born_in: { city: "$born_in_info.city", state: "$born_in_info.state" },
          polling_station: "$registered_in_info.polling_station",
        },
      },
    },
  },
  {
    $project: {
      _id: 0,
      city: "$_id.city",
      state: "$_id.state",
      candidates: 1,
    },
  },
]);
