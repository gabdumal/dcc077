from pymongo import MongoClient
from states import run as states
from citizens import run as citizens

client = MongoClient("mongodb://admin:melancia@localhost:27017/")
db = client["tse_online"]

db.drop_collection("citizens")
db.drop_collection("states")

states.run(db)
citizens.run(db)
