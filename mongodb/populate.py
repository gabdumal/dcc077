from pymongo import MongoClient
from machines import run as machines
from states import run as states
from citizens import run as citizens
from candidates import run as candidates

client = MongoClient("mongodb://admin:melancia@localhost:27017/")
db = client["tse_online"]

db.drop_collection("citizens")
db.drop_collection("states")
db.drop_collection("machines")

machines.run(db)
states.run(db)
# citizens.run(db)
# candidates.run(db)
