def run(db):
    db.machines.create_index([("serial_number", 1)], unique=True)
