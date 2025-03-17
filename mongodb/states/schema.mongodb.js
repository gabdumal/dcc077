/* global use, db */

// Select the database to use.
use("tse_online");

db.createCollection("states", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "cities"],
      properties: {
        name: {
          bsonType: "string",
          description: "Name of the state (required).",
        },
        cities: {
          bsonType: "array",
          description: "List of cities in the state (required).",
          items: {
            bsonType: "object",
            required: ["name", "polling_stations"],
            properties: {
              name: {
                bsonType: "string",
                description: "Name of the city (required).",
              },
              polling_stations: {
                bsonType: "array",
                description: "List of polling stations in the city (required).",
                items: {
                  bsonType: "object",
                  required: ["name", "machines"],
                  properties: {
                    name: {
                      bsonType: "string",
                      description: "Name of the polling station (required).",
                    },
                    machines: {
                      bsonType: "array",
                      description:
                        "List of machines in the polling station (required).",
                      items: {
                        bsonType: "object",
                        required: ["serial_number"],
                        properties: {
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
});
