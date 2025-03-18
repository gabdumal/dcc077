def run(db):
    db.create_collection(
        "machines",
        validator={
            "$jsonSchema": {
                "bsonType": "object",
                "required": ["_id", "serial_number"],
                "properties": {
                    "_id": {
                        "bsonType": "objectId",
                        "description": "Unique identifier for the machine (required).",
                    },
                    "serial_number": {
                        "bsonType": "string",
                        "description": "Serial number of the machine (required).",
                    },
                },
            }
        },
    )
