/* global use, db */

// Select the database to use.
use("tse_online");

// 3. Count how many citizens have registered in and attended to each polling station
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
      _id: {
        state: "$registered_in_info.state",
        city: "$registered_in_info.city",
        polling_station: "$registered_in_info.polling_station",
      },
      total_registered: { $sum: 1 },
      total_attended: {
        $sum: {
          $cond: {
            if: { $gt: ["$attended_to_info", 0] },
            then: 1,
            else: 0,
          },
        },
      },
    },
  },
  {
    $project: {
      _id: 0,
      state: "$_id.state",
      city: "$_id.city",
      polling_station: "$_id.polling_station",
      total_registered: 1,
      total_attended: 1,
    },
  },
  {
    $sort: {
      state: 1,
      city: 1,
      polling_station: 1,
    },
  },
]);
