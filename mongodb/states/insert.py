from bson import ObjectId
from datetime import datetime


def run(db):
    # Find machines
    machine1 = db.machines.find_one({"serial_number": "AAA001"})
    machine2 = db.machines.find_one({"serial_number": "AAA002"})
    machine3 = db.machines.find_one({"serial_number": "AAA003"})
    machine4 = db.machines.find_one({"serial_number": "AAA004"})
    machine5 = db.machines.find_one({"serial_number": "AAA005"})
    machine6 = db.machines.find_one({"serial_number": "AAA006"})
    machine7 = db.machines.find_one({"serial_number": "AAA007"})
    machine8 = db.machines.find_one({"serial_number": "AAA008"})
    machine9 = db.machines.find_one({"serial_number": "AAA009"})
    machine10 = db.machines.find_one({"serial_number": "AAA010"})
    machine11 = db.machines.find_one({"serial_number": "AAA011"})
    machine12 = db.machines.find_one({"serial_number": "AAA012"})
    machine13 = db.machines.find_one({"serial_number": "AAA013"})
    machine14 = db.machines.find_one({"serial_number": "AAA014"})
    machine15 = db.machines.find_one({"serial_number": "AAA015"})
    machine16 = db.machines.find_one({"serial_number": "AAA016"})
    machine17 = db.machines.find_one({"serial_number": "AAA017"})
    machine18 = db.machines.find_one({"serial_number": "AAA018"})

    # Insert states
    db.states.insert_many(
        [
            {
                "_id": ObjectId(),
                "name": "Minas Gerais",
                "cities": [
                    {
                        "_id": ObjectId(),
                        "polling_stations": [
                            {
                                "_id": ObjectId(),
                                "name": "Centro de Votação Mangueira",
                                "uses": [
                                    {
                                        "_id": ObjectId(),
                                        "start_time": datetime(2022, 10, 2, 12, 0),
                                        "end_time": datetime(2022, 10, 2, 17, 0),
                                        "status": "active",
                                        "machine": machine2["_id"],
                                    },
                                    {
                                        "_id": ObjectId(),
                                        "start_time": datetime(2022, 10, 2, 8, 0),
                                        "end_time": datetime(2022, 10, 2, 12, 0),
                                        "status": "broken",
                                        "machine": machine1["_id"],
                                    },
                                ],
                            },
                            {
                                "_id": ObjectId(),
                                "name": "Local de Voto Sabiá-do-Campo",
                                "uses": [
                                    {
                                        "_id": ObjectId(),
                                        "start_time": datetime(2022, 10, 2, 8, 0),
                                        "end_time": datetime(2022, 10, 2, 17, 0),
                                        "status": "active",
                                        "machine": machine3["_id"],
                                    },
                                ],
                            },
                        ],
                        "name": "Belo Horizonte",
                    },
                    {
                        "_id": ObjectId(),
                        "polling_stations": [
                            {
                                "_id": ObjectId(),
                                "name": "Centro de Votação Arara-Azul",
                                "uses": [
                                    {
                                        "_id": ObjectId(),
                                        "start_time": datetime(2022, 10, 2, 8, 0),
                                        "end_time": datetime(2022, 10, 2, 17, 0),
                                        "status": "active",
                                        "machine": machine6["_id"],
                                    },
                                ],
                            },
                            {
                                "_id": ObjectId(),
                                "name": "Estação de Voto Cedro",
                                "uses": [
                                    {
                                        "_id": ObjectId(),
                                        "start_time": datetime(2022, 10, 2, 8, 0),
                                        "end_time": datetime(2022, 10, 2, 10, 0),
                                        "status": "broken",
                                        "machine": machine4["_id"],
                                    },
                                    {
                                        "_id": ObjectId(),
                                        "start_time": datetime(2022, 10, 2, 10, 0),
                                        "end_time": datetime(2022, 10, 2, 17, 0),
                                        "status": "active",
                                        "machine": machine5["_id"],
                                    },
                                ],
                            },
                        ],
                        "name": "Uberlândia",
                    },
                    {
                        "_id": ObjectId(),
                        "polling_stations": [
                            {
                                "_id": ObjectId(),
                                "name": "Local de Voto Pau-Brasil",
                                "uses": [
                                    {
                                        "_id": ObjectId(),
                                        "start_time": datetime(2022, 10, 2, 8, 0),
                                        "end_time": datetime(2022, 10, 2, 17, 0),
                                        "status": "active",
                                        "machine": machine7["_id"],
                                    },
                                ],
                            },
                            {
                                "_id": ObjectId(),
                                "name": "Estação de Voto Canário",
                                "uses": [
                                    {
                                        "_id": ObjectId(),
                                        "start_time": datetime(2022, 10, 2, 8, 0),
                                        "end_time": datetime(2022, 10, 2, 17, 0),
                                        "status": "active",
                                        "machine": machine8["_id"],
                                    },
                                ],
                            },
                        ],
                        "name": "Contagem",
                    },
                    {
                        "_id": ObjectId(),
                        "polling_stations": [
                            {
                                "_id": ObjectId(),
                                "name": "Centro de Votação Ipê-Roxo",
                                "uses": [
                                    {
                                        "_id": ObjectId(),
                                        "start_time": datetime(2022, 10, 2, 8, 0),
                                        "end_time": datetime(2022, 10, 2, 17, 0),
                                        "status": "active",
                                        "machine": machine9["_id"],
                                    },
                                ],
                            },
                            {
                                "_id": ObjectId(),
                                "name": "Local de Voto Gralha-Azul",
                                "uses": [
                                    {
                                        "_id": ObjectId(),
                                        "start_time": datetime(2022, 10, 2, 8, 0),
                                        "end_time": datetime(2022, 10, 2, 17, 0),
                                        "status": "active",
                                        "machine": machine10["_id"],
                                    },
                                ],
                            },
                        ],
                        "name": "Juiz de Fora",
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "name": "Bahia",
                "cities": [
                    {
                        "_id": ObjectId(),
                        "polling_stations": [
                            {
                                "_id": ObjectId(),
                                "name": "Estação de Voto Farol da Barra",
                                "uses": [
                                    {
                                        "_id": ObjectId(),
                                        "start_time": datetime(2022, 10, 2, 8, 0),
                                        "end_time": datetime(2022, 10, 2, 17, 0),
                                        "status": "active",
                                        "machine": machine11["_id"],
                                    },
                                ],
                            },
                            {
                                "_id": ObjectId(),
                                "name": "Centro de Votação Sereia",
                                "uses": [
                                    {
                                        "_id": ObjectId(),
                                        "start_time": datetime(2022, 10, 2, 8, 0),
                                        "end_time": datetime(2022, 10, 2, 17, 0),
                                        "status": "active",
                                        "machine": machine12["_id"],
                                    },
                                ],
                            },
                        ],
                        "name": "Salvador",
                    },
                    {
                        "_id": ObjectId(),
                        "polling_stations": [
                            {
                                "_id": ObjectId(),
                                "name": "Local de Voto Cajueiro",
                                "uses": [
                                    {
                                        "_id": ObjectId(),
                                        "start_time": datetime(2022, 10, 2, 8, 0),
                                        "end_time": datetime(2022, 10, 2, 17, 0),
                                        "status": "active",
                                        "machine": machine13["_id"],
                                    },
                                ],
                            },
                            {
                                "_id": ObjectId(),
                                "name": "Estação de Voto Beija-Flor-de-Papo-Branco",
                                "uses": [
                                    {
                                        "_id": ObjectId(),
                                        "start_time": datetime(2022, 10, 2, 8, 0),
                                        "end_time": datetime(2022, 10, 2, 17, 0),
                                        "status": "active",
                                        "machine": machine14["_id"],
                                    },
                                ],
                            },
                        ],
                        "name": "Feira de Santana",
                    },
                    {
                        "_id": ObjectId(),
                        "polling_stations": [
                            {
                                "_id": ObjectId(),
                                "name": "Centro de Votação Pedra do Reino",
                                "uses": [
                                    {
                                        "_id": ObjectId(),
                                        "start_time": datetime(2022, 10, 2, 8, 0),
                                        "end_time": datetime(2022, 10, 2, 17, 0),
                                        "status": "active",
                                        "machine": machine15["_id"],
                                    },
                                ],
                            },
                            {
                                "_id": ObjectId(),
                                "name": "Local de Voto Andorinha",
                                "uses": [
                                    {
                                        "_id": ObjectId(),
                                        "start_time": datetime(2022, 10, 2, 8, 0),
                                        "end_time": datetime(2022, 10, 2, 17, 0),
                                        "status": "active",
                                        "machine": machine16["_id"],
                                    },
                                ],
                            },
                        ],
                        "name": "Vitória da Conquista",
                    },
                    {
                        "_id": ObjectId(),
                        "polling_stations": [
                            {
                                "_id": ObjectId(),
                                "name": "Estação de Voto Jatobá",
                                "uses": [
                                    {
                                        "_id": ObjectId(),
                                        "start_time": datetime(2022, 10, 2, 8, 0),
                                        "end_time": datetime(2022, 10, 2, 17, 0),
                                        "status": "active",
                                        "machine": machine17["_id"],
                                    },
                                ],
                            },
                            {
                                "_id": ObjectId(),
                                "name": "Centro de Votação Colibri",
                                "uses": [
                                    {
                                        "_id": ObjectId(),
                                        "start_time": datetime(2022, 10, 2, 8, 0),
                                        "end_time": datetime(2022, 10, 2, 17, 0),
                                        "status": "active",
                                        "machine": machine18["_id"],
                                    },
                                ],
                            },
                        ],
                        "name": "Camaçari",
                    },
                ],
            },
        ]
    )
