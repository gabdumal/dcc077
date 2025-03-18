def run(db):
    db.citizens.create_index([("cpf_number", 1)], unique=True)
    db.citizens.create_index([("born_in", 1)])
    db.citizens.create_index([("registered_in", 1)])
    db.citizens.create_index([("attended_to.polling_station", 1)])
