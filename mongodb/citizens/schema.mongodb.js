/* global use, db */

// Select the database to use.
use("tse_online");

db.createCollection("citizens", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
        "cpf_number",
        "name",
        "gender",
        "birth_date",
        "born_in",
        "registered_in",
      ],
      properties: {
        cpf_number: {
          bsonType: "string",
          description: "CPF number of the citizen (required).",
        },
        name: {
          bsonType: "string",
          description: "Name of the citizen (required).",
        },
        gender: {
          bsonType: "string",
          enum: ["masculine", "feminine", "neutral"],
          description: "Gender of the citizen (required).",
        },
        birth_date: {
          bsonType: "date",
          description: "Birth date of the citizen (required).",
        },
        born_in: {
          bsonType: "objectId",
          description: "Reference to the city of birth (required).",
        },
        registered_in: {
          bsonType: "objectId",
          description:
            "Reference to the polling station where the citizen is registered (required).",
        },
        attended: {
          bsonType: "array",
          description: "List of attendance to polling stations records.",
          items: {
            bsonType: "object",
            required: ["time", "polling_station"],
            properties: {
              time: {
                bsonType: "date",
                description: "Timestamp of attendance (required).",
              },
              polling_station: {
                bsonType: "objectId",
                description: "Reference to the polling station (required).",
              },
            },
          },
        },
      },
    },
  },
});
