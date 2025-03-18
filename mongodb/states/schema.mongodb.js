/* global use, db */

// Select the database to use.
use("tse_online");

db.createCollection("states", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["_id", "name", "cities"],
      properties: {
        _id: {
          bsonType: "objectId",
          description: "Unique identifier for the state (required).",
        },
        name: {
          bsonType: "string",
          description: "Name of the state (required).",
        },
        cities: {
          bsonType: "array",
          description: "List of cities in the state (required).",
          items: {
            bsonType: "object",
            required: ["_id", "name", "polling_stations"],
            properties: {
              _id: {
                bsonType: "objectId",
                description: "Unique identifier for the city (required).",
              },
              name: {
                bsonType: "string",
                description: "Name of the city (required).",
              },
              polling_stations: {
                bsonType: "array",
                description: "List of polling stations in the city (required).",
                items: {
                  bsonType: "object",
                  required: ["_id", "name", "machines"],
                  properties: {
                    _id: {
                      bsonType: "objectId",
                      description:
                        "Unique identifier for the polling station (required).",
                    },
                    name: {
                      bsonType: "string",
                      description: "Name of the polling station (required).",
                    },
                    uses: {
                      bsonType: "array",
                      description:
                        "List of uses of machines in the polling station (required).",
                      items: {
                        bsonType: "object",
                        required: [
                          "_id",
                          "start_time",
                          "end_time",
                          "status",
                          "machine",
                        ],
                        properties: {
                          _id: {
                            bsonType: "objectId",
                            description:
                              "Unique identifier for the usage (required).",
                          },
                          start_time: {
                            bsonType: "date",
                            description: "Start time of the usage (required).",
                          },
                          end_time: {
                            bsonType: "date",
                            description: "End time of the usage (required).",
                          },
                          status: {
                            enum: ["active", "broken"],
                            description: "Status of the machine (required).",
                          },
                          machine: {
                            bsonType: "object",
                            required: ["_id", "serial_number"],
                            properties: {
                              _id: {
                                bsonType: "objectId",
                                description:
                                  "Unique identifier for the machine (required).",
                              },
                              serial_number: {
                                bsonType: "string",
                                description:
                                  "Serial number of the machine (required).",
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
});
