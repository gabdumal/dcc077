from pymongo import MongoClient
from states import run as states

client = MongoClient("mongodb://admin:melancia@localhost:27017/")
db = client["tse_online"]

db.drop_collection("states")
states.run(db)
