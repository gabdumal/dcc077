from bson import ObjectId
from datetime import datetime


def run(db):
    db.states.insert_many(
        [
            {
                "_id": ObjectId(),
                "name": "Minas Gerais",
                "cities": [
                    {
                        "_id": ObjectId(),
                        "name": "Belo Horizonte",
                        "polling_stations": [
                            {
                                "_id": ObjectId(),
                                "name": "Centro de Votação Mangueira",
                                "uses": [
                                    {
                                        "_id": ObjectId(),
                                        "start_time": datetime(2022, 10, 2, 12, 0, 0),
                                        "end_time": datetime(2022, 10, 2, 17, 0, 0),
                                        "status": "active",
                                        "machine": {
                                            "_id": ObjectId(),
                                            "serial_number": "AAA002",
                                        },
                                    },
                                    {
                                        "_id": ObjectId(),
                                        "start_time": datetime(2022, 10, 2, 8, 0, 0),
                                        "end_time": datetime(2022, 10, 2, 12, 0, 0),
                                        "status": "broken",
                                        "machine": {
                                            "_id": ObjectId(),
                                            "serial_number": "AAA001",
                                        },
                                    },
                                ],
                            },
                            {
                                "_id": ObjectId(),
                                "name": "Local de Voto Sabiá-do-Campo",
                                "uses": [
                                    {
                                        "_id": ObjectId(),
                                        "start_time": datetime(2022, 10, 2, 8, 0, 0),
                                        "end_time": datetime(2022, 10, 2, 17, 0, 0),
                                        "status": "active",
                                        "machine": {
                                            "_id": ObjectId(),
                                            "serial_number": "AAA003",
                                        },
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        "_id": ObjectId(),
                        "name": "Uberlândia",
                        "polling_stations": [
                            {
                                "_id": ObjectId(),
                                "name": "Centro de Votação Arara-Azul",
                                "uses": [
                                    {
                                        "_id": ObjectId(),
                                        "start_time": datetime(2022, 10, 2, 8, 0, 0),
                                        "end_time": datetime(2022, 10, 2, 17, 0, 0),
                                        "status": "active",
                                        "machine": {
                                            "_id": ObjectId(),
                                            "serial_number": "AAA006",
                                        },
                                    },
                                ],
                            },
                            {
                                "_id": ObjectId(),
                                "name": "Estação de Voto Cedro",
                                "uses": [
                                    {
                                        "_id": ObjectId(),
                                        "start_time": datetime(2022, 10, 2, 8, 0, 0),
                                        "end_time": datetime(2022, 10, 2, 10, 0, 0),
                                        "status": "broken",
                                        "machine": {
                                            "_id": ObjectId(),
                                            "serial_number": "AAA004",
                                        },
                                    },
                                    {
                                        "_id": ObjectId(),
                                        "start_time": datetime(2022, 10, 2, 10, 0, 0),
                                        "end_time": datetime(2022, 10, 2, 17, 0, 0),
                                        "status": "active",
                                        "machine": {
                                            "_id": ObjectId(),
                                            "serial_number": "AAA005",
                                        },
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        "_id": ObjectId(),
                        "name": "Contagem",
                        "polling_stations": [
                            {
                                "_id": ObjectId(),
                                "name": "Local de Voto Pau-Brasil",
                                "uses": [
                                    {
                                        "_id": ObjectId(),
                                        "start_time": datetime(2022, 10, 2, 8, 0, 0),
                                        "end_time": datetime(2022, 10, 2, 17, 0, 0),
                                        "status": "active",
                                        "machine": {
                                            "_id": ObjectId(),
                                            "serial_number": "AAA007",
                                        },
                                    },
                                ],
                            },
                            {
                                "_id": ObjectId(),
                                "name": "Estação de Voto Canário",
                                "uses": [
                                    {
                                        "_id": ObjectId(),
                                        "start_time": datetime(2022, 10, 2, 8, 0, 0),
                                        "end_time": datetime(2022, 10, 2, 17, 0, 0),
                                        "status": "active",
                                        "machine": {
                                            "_id": ObjectId(),
                                            "serial_number": "AAA008",
                                        },
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        "_id": ObjectId(),
                        "name": "Juiz de Fora",
                        "polling_stations": [
                            {
                                "_id": ObjectId(),
                                "name": "Centro de Votação Ipê-Roxo",
                                "uses": [
                                    {
                                        "_id": ObjectId(),
                                        "start_time": datetime(2022, 10, 2, 8, 0, 0),
                                        "end_time": datetime(2022, 10, 2, 17, 0, 0),
                                        "status": "active",
                                        "machine": {
                                            "_id": ObjectId(),
                                            "serial_number": "AAA009",
                                        },
                                    },
                                ],
                            },
                            {
                                "_id": ObjectId(),
                                "name": "Local de Voto Gralha-Azul",
                                "uses": [
                                    {
                                        "_id": ObjectId(),
                                        "start_time": datetime(2022, 10, 2, 8, 0, 0),
                                        "end_time": datetime(2022, 10, 2, 17, 0, 0),
                                        "status": "active",
                                        "machine": {
                                            "_id": ObjectId(),
                                            "serial_number": "AAA010",
                                        },
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "name": "Bahia",
                "cities": [
                    {
                        "_id": ObjectId(),
                        "name": "Salvador",
                        "polling_stations": [
                            {
                                "_id": ObjectId(),
                                "name": "Estação de Voto Farol da Barra",
                                "uses": [
                                    {
                                        "_id": ObjectId(),
                                        "start_time": datetime(2022, 10, 2, 8, 0, 0),
                                        "end_time": datetime(2022, 10, 2, 17, 0, 0),
                                        "status": "active",
                                        "machine": {
                                            "_id": ObjectId(),
                                            "serial_number": "AAA011",
                                        },
                                    },
                                ],
                            },
                            {
                                "_id": ObjectId(),
                                "name": "Centro de Votação Sereia",
                                "uses": [
                                    {
                                        "_id": ObjectId(),
                                        "start_time": datetime(2022, 10, 2, 8, 0, 0),
                                        "end_time": datetime(2022, 10, 2, 17, 0, 0),
                                        "status": "active",
                                        "machine": {
                                            "_id": ObjectId(),
                                            "serial_number": "AAA012",
                                        },
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        "_id": ObjectId(),
                        "name": "Feira de Santana",
                        "polling_stations": [
                            {
                                "_id": ObjectId(),
                                "name": "Local de Voto Cajueiro",
                                "uses": [
                                    {
                                        "_id": ObjectId(),
                                        "start_time": datetime(2022, 10, 2, 8, 0, 0),
                                        "end_time": datetime(2022, 10, 2, 17, 0, 0),
                                        "status": "active",
                                        "machine": {
                                            "_id": ObjectId(),
                                            "serial_number": "AAA013",
                                        },
                                    },
                                ],
                            },
                            {
                                "_id": ObjectId(),
                                "name": "Estação de Voto Beija-Flor-de-Papo-Branco",
                                "uses": [
                                    {
                                        "_id": ObjectId(),
                                        "start_time": datetime(2022, 10, 2, 8, 0, 0),
                                        "end_time": datetime(2022, 10, 2, 17, 0, 0),
                                        "status": "active",
                                        "machine": {
                                            "_id": ObjectId(),
                                            "serial_number": "AAA014",
                                        },
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        "_id": ObjectId(),
                        "name": "Vitória da Conquista",
                        "polling_stations": [
                            {
                                "_id": ObjectId(),
                                "name": "Centro de Votação Pedra do Reino",
                                "uses": [
                                    {
                                        "_id": ObjectId(),
                                        "start_time": datetime(2022, 10, 2, 8, 0, 0),
                                        "end_time": datetime(2022, 10, 2, 17, 0, 0),
                                        "status": "active",
                                        "machine": {
                                            "_id": ObjectId(),
                                            "serial_number": "AAA015",
                                        },
                                    },
                                ],
                            },
                            {
                                "_id": ObjectId(),
                                "name": "Local de Voto Andorinha",
                                "uses": [
                                    {
                                        "_id": ObjectId(),
                                        "start_time": datetime(2022, 10, 2, 8, 0, 0),
                                        "end_time": datetime(2022, 10, 2, 17, 0, 0),
                                        "status": "active",
                                        "machine": {
                                            "_id": ObjectId(),
                                            "serial_number": "AAA016",
                                        },
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        "_id": ObjectId(),
                        "name": "Camaçari",
                        "polling_stations": [
                            {
                                "_id": ObjectId(),
                                "name": "Estação de Voto Jatobá",
                                "uses": [
                                    {
                                        "_id": ObjectId(),
                                        "start_time": datetime(2022, 10, 2, 8, 0, 0),
                                        "end_time": datetime(2022, 10, 2, 17, 0, 0),
                                        "status": "active",
                                        "machine": {
                                            "_id": ObjectId(),
                                            "serial_number": "AAA017",
                                        },
                                    },
                                ],
                            },
                            {
                                "_id": ObjectId(),
                                "name": "Centro de Votação Colibri",
                                "uses": [
                                    {
                                        "_id": ObjectId(),
                                        "start_time": datetime(2022, 10, 2, 8, 0, 0),
                                        "end_time": datetime(2022, 10, 2, 17, 0, 0),
                                        "status": "active",
                                        "machine": {
                                            "_id": ObjectId(),
                                            "serial_number": "AAA018",
                                        },
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ]
    )
