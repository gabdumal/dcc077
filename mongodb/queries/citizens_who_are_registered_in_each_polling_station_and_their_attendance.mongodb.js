/* global use, db */

// Select the database to use.
use("tse_online");

// 2. Citizens who are registered in each polling station and their attendance if they have attended
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
      citizens: {
        $push: {
          name: "$name",
          cpf_number: "$cpf_number",
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
      citizens: 1,
    },
  },
]);
