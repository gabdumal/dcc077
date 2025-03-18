from bson import ObjectId


def run(db):
    db.machines.insert_many(
        [
            {"_id": ObjectId(), "serial_number": "AAA001", "casts": []},
            {"_id": ObjectId(), "serial_number": "AAA002", "casts": []},
            {"_id": ObjectId(), "serial_number": "AAA003", "casts": []},
            {"_id": ObjectId(), "serial_number": "AAA004", "casts": []},
            {"_id": ObjectId(), "serial_number": "AAA005", "casts": []},
            {"_id": ObjectId(), "serial_number": "AAA006", "casts": []},
            {"_id": ObjectId(), "serial_number": "AAA007", "casts": []},
            {"_id": ObjectId(), "serial_number": "AAA008", "casts": []},
            {"_id": ObjectId(), "serial_number": "AAA009", "casts": []},
            {"_id": ObjectId(), "serial_number": "AAA010", "casts": []},
            {"_id": ObjectId(), "serial_number": "AAA011", "casts": []},
            {"_id": ObjectId(), "serial_number": "AAA012", "casts": []},
            {"_id": ObjectId(), "serial_number": "AAA013", "casts": []},
            {"_id": ObjectId(), "serial_number": "AAA014", "casts": []},
            {"_id": ObjectId(), "serial_number": "AAA015", "casts": []},
            {"_id": ObjectId(), "serial_number": "AAA016", "casts": []},
            {"_id": ObjectId(), "serial_number": "AAA017", "casts": []},
            {"_id": ObjectId(), "serial_number": "AAA018", "casts": []},
            {"_id": ObjectId(), "serial_number": "AAA019", "casts": []},
            {"_id": ObjectId(), "serial_number": "AAA020", "casts": []},
        ]
    )
