def run(db):
    db.create_collection(
        "states",
        validator={
            "$jsonSchema": {
                "bsonType": "object",
                "required": ["_id", "name", "cities"],
                "properties": {
                    "_id": {
                        "bsonType": "objectId",
                        "description": "Unique identifier for the state (required).",
                    },
                    "name": {
                        "bsonType": "string",
                        "description": "Name of the state (required).",
                    },
                    "cities": {
                        "bsonType": "array",
                        "description": "List of cities in the state (required).",
                        "items": {
                            "bsonType": "object",
                            "required": ["_id", "name", "polling_stations"],
                            "properties": {
                                "_id": {
                                    "bsonType": "objectId",
                                    "description": "Unique identifier for the city (required).",
                                },
                                "name": {
                                    "bsonType": "string",
                                    "description": "Name of the city (required).",
                                },
                                "polling_stations": {
                                    "bsonType": "array",
                                    "description": "List of polling stations in the city (required).",
                                    "items": {
                                        "bsonType": "object",
                                        "required": ["_id", "name", "machines"],
                                        "properties": {
                                            "_id": {
                                                "bsonType": "objectId",
                                                "description": "Unique identifier for the polling station (required).",
                                            },
                                            "name": {
                                                "bsonType": "string",
                                                "description": "Name of the polling station (required).",
                                            },
                                            "machines": {
                                                "bsonType": "array",
                                                "description": "List of machines in the polling station (required).",
                                                "items": {
                                                    "bsonType": "object",
                                                    "required": [
                                                        "_id",
                                                        "serial_number",
                                                    ],
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
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            }
        },
    )
