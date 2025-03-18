def run(db):
    db.create_collection(
        "machines",
        validator={
            "$jsonSchema": {
                "bsonType": "object",
                "required": ["_id", "serial_number", "casts"],
                "properties": {
                    "_id": {
                        "bsonType": "objectId",
                        "description": "Unique identifier for the machine (required).",
                    },
                    "serial_number": {
                        "bsonType": "string",
                        "description": "Serial number of the machine (required).",
                    },
                    "casts": {
                        "bsonType": "array",
                        "description": "Array of votes casted in the machine.",
                        "items": {
                            "bsonType": "object",
                            "required": ["candidate"],
                            "properties": {
                                "candidate": {
                                    "bsonType": "objectId",
                                    "description": "Candidate voted (required).",
                                },
                            },
                        },
                    },
                },
            }
        },
    )
