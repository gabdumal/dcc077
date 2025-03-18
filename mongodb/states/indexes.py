def run(db):
    db.states.create_index([("name", 1)], unique=True)
    db.states.create_index([("_id", 1), ("cities.name", 1)], unique=True)
    db.states.create_index(
        [("_id", 1), ("cities._id", 1), ("cities.polling_stations.name", 1)],
        unique=True,
    )
