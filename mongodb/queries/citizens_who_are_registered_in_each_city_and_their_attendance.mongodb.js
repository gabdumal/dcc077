/* global use, db */

// Select the database to use.
use("tse_online");

// 2. Citizens who are registered in each city and their attendance if they have attended
db.citizens.aggregate([
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
            state: "$name",
            city: "$cities.name",
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
            state: "$name",
            city: "$cities.name",
            polling_station: "$cities.polling_stations.name",
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
    $lookup: {
      from: "states",
      let: {
        attendedToPollingStations: "$attended_to.polling_station",
        attendedToTimestamp: "$attended_to.timestamp",
      },
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
              $in: [
                "$cities.polling_stations._id",
                "$$attendedToPollingStations",
              ],
            },
          },
        },
        {
          $project: {
            _id: 0,
            state: "$name",
            city: "$cities.name",
            polling_station: "$cities.polling_stations.name",
            timestamp: "$$attendedToTimestamp",
          },
        },
      ],
      as: "attended_to_info",
    },
  },
  {
    $unwind: {
      path: "$attended_to_info",
      preserveNullAndEmptyArrays: true,
    },
  },

  {
    $group: {
      _id: "$_id", // Group by the citizen's _id to collect all attended_to_info
      name: { $first: "$name" },
      cpf_number: { $first: "$cpf_number" },
      gender: { $first: "$gender" },
      birth_date: { $first: "$birth_date" },
      born_in: { $first: "$born_in_info" },
      registered_in: { $first: "$registered_in_info" },
      attended_to: { $push: "$attended_to_info" }, // Collect all attended_to_info for the citizen
    },
  },
  {
    $group: {
      _id: {
        state: "$registered_in.state",
        city: "$registered_in.city",
      }, // Group by the city and state where the polling station is located
      citizens: {
        $push: {
          name: "$name",
          cpf_number: "$cpf_number",
          gender: "$gender",
          birth_date: "$birth_date",
          born_in: "$born_in",
          registered_in: "$registered_in",
          attended_to: "$attended_to",
        },
      },
    },
  },
  {
    $project: {
      _id: 0,
      state: "$_id.state",
      city: "$_id.city",
      citizens: 1,
    },
  },
  {
    $sort: {
      state: 1,
      city: 1,
    },
  },
]);
