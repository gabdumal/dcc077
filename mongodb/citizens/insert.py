from datetime import datetime
from bson import ObjectId


def run(db):
    # Find states
    minasGerais = db.states.find_one({"name": "Minas Gerais"})
    bahia = db.states.find_one({"name": "Bahia"})

    # Find cities
    beloHorizonte = next(
        city for city in minasGerais["cities"] if city["name"] == "Belo Horizonte"
    )
    uberlandia = next(
        city for city in minasGerais["cities"] if city["name"] == "Uberlândia"
    )
    contagem = next(
        city for city in minasGerais["cities"] if city["name"] == "Contagem"
    )
    juizDeFora = next(
        city for city in minasGerais["cities"] if city["name"] == "Juiz de Fora"
    )
    salvador = next(city for city in bahia["cities"] if city["name"] == "Salvador")
    feiraDeSantana = next(
        city for city in bahia["cities"] if city["name"] == "Feira de Santana"
    )
    vitoriaDaConquista = next(
        city for city in bahia["cities"] if city["name"] == "Vitória da Conquista"
    )
    camacari = next(city for city in bahia["cities"] if city["name"] == "Camaçari")

    # Find polling stations
    centroDeVotacaoMangueira = next(
        station
        for station in beloHorizonte["polling_stations"]
        if station["name"] == "Centro de Votação Mangueira"
    )
    localDeVotoSabiaDoCampo = next(
        station
        for station in beloHorizonte["polling_stations"]
        if station["name"] == "Local de Voto Sabiá-do-Campo"
    )
    centroDeVotacaoAraraAzul = next(
        station
        for station in uberlandia["polling_stations"]
        if station["name"] == "Centro de Votação Arara-Azul"
    )
    estacaoDeVotoCedro = next(
        station
        for station in uberlandia["polling_stations"]
        if station["name"] == "Estação de Voto Cedro"
    )
    localDeVotoPauBrasil = next(
        station
        for station in contagem["polling_stations"]
        if station["name"] == "Local de Voto Pau-Brasil"
    )
    estacaoDeVotoCanario = next(
        station
        for station in contagem["polling_stations"]
        if station["name"] == "Estação de Voto Canário"
    )
    centroDeVotacaoIpeRoxo = next(
        station
        for station in juizDeFora["polling_stations"]
        if station["name"] == "Centro de Votação Ipê-Roxo"
    )
    localDeVotoGralhaAzul = next(
        station
        for station in juizDeFora["polling_stations"]
        if station["name"] == "Local de Voto Gralha-Azul"
    )
    estacaoDeVotoFarolDaBarra = next(
        station
        for station in salvador["polling_stations"]
        if station["name"] == "Estação de Voto Farol da Barra"
    )
    centroDeVotacaoSereia = next(
        station
        for station in salvador["polling_stations"]
        if station["name"] == "Centro de Votação Sereia"
    )
    localDeVotoCajueiro = next(
        station
        for station in feiraDeSantana["polling_stations"]
        if station["name"] == "Local de Voto Cajueiro"
    )
    estacaoDeVotoBeijaFlorDePapoBranco = next(
        station
        for station in feiraDeSantana["polling_stations"]
        if station["name"] == "Estação de Voto Beija-Flor-de-Papo-Branco"
    )
    centroDeVotacaoPedraDoReino = next(
        station
        for station in vitoriaDaConquista["polling_stations"]
        if station["name"] == "Centro de Votação Pedra do Reino"
    )
    localDeVotoAndorinha = next(
        station
        for station in vitoriaDaConquista["polling_stations"]
        if station["name"] == "Local de Voto Andorinha"
    )
    estacaoDeVotoJatoba = next(
        station
        for station in camacari["polling_stations"]
        if station["name"] == "Estação de Voto Jatobá"
    )
    centroDeVotacaoColibri = next(
        station
        for station in camacari["polling_stations"]
        if station["name"] == "Centro de Votação Colibri"
    )

    # Insert citizens
    db.citizens.insert_many(
        [
            {
                "_id": ObjectId(),
                "cpf_number": "00000000001",
                "name": "João Silva",
                "gender": "masculine",
                "birth_date": datetime(1990, 5, 15),
                "born_in": beloHorizonte["_id"],
                "registered_in": centroDeVotacaoMangueira["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 8, 15),
                        "polling_station": centroDeVotacaoMangueira["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000002",
                "name": "Maria Oliveira",
                "gender": "feminine",
                "birth_date": datetime(1985, 11, 22),
                "born_in": feiraDeSantana["_id"],
                "registered_in": localDeVotoSabiaDoCampo["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 9, 30),
                        "polling_station": localDeVotoSabiaDoCampo["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000003",
                "name": "Pedro Souza",
                "gender": "masculine",
                "birth_date": datetime(1995, 3, 10),
                "born_in": salvador["_id"],
                "registered_in": estacaoDeVotoCedro["_id"],
                "attended_to": [],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000004",
                "name": "Ana Costa",
                "gender": "neutral",
                "birth_date": datetime(1980, 7, 25),
                "born_in": beloHorizonte["_id"],
                "registered_in": centroDeVotacaoAraraAzul["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 11, 20),
                        "polling_station": centroDeVotacaoAraraAzul["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000005",
                "name": "Lucas Fernandes",
                "gender": "masculine",
                "birth_date": datetime(2000, 9, 12),
                "born_in": juizDeFora["_id"],
                "registered_in": localDeVotoPauBrasil["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 12, 0),
                        "polling_station": localDeVotoPauBrasil["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000006",
                "name": "Carla Santos",
                "gender": "feminine",
                "birth_date": datetime(1992, 12, 30),
                "born_in": beloHorizonte["_id"],
                "registered_in": estacaoDeVotoCanario["_id"],
                "attended_to": [],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000007",
                "name": "Rafael Almeida",
                "gender": "masculine",
                "birth_date": datetime(1988, 4, 18),
                "born_in": beloHorizonte["_id"],
                "registered_in": centroDeVotacaoIpeRoxo["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 14, 25),
                        "polling_station": centroDeVotacaoIpeRoxo["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000008",
                "name": "Fernanda Lima",
                "gender": "feminine",
                "birth_date": datetime(1998, 6, 5),
                "born_in": contagem["_id"],
                "registered_in": localDeVotoGralhaAzul["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 15, 40),
                        "polling_station": localDeVotoGralhaAzul["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000009",
                "name": "Bruno Carvalho",
                "gender": "masculine",
                "birth_date": datetime(1993, 8, 20),
                "born_in": vitoriaDaConquista["_id"],
                "registered_in": estacaoDeVotoFarolDaBarra["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 16, 55),
                        "polling_station": estacaoDeVotoFarolDaBarra["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000010",
                "name": "Juliana Rocha",
                "gender": "feminine",
                "birth_date": datetime(1987, 2, 14),
                "born_in": contagem["_id"],
                "registered_in": centroDeVotacaoSereia["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 8, 5),
                        "polling_station": centroDeVotacaoSereia["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000011",
                "name": "Marcos Pereira",
                "gender": "masculine",
                "birth_date": datetime(1991, 10, 8),
                "born_in": juizDeFora["_id"],
                "registered_in": localDeVotoCajueiro["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 9, 15),
                        "polling_station": localDeVotoCajueiro["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000012",
                "name": "Patrícia Gomes",
                "gender": "feminine",
                "birth_date": datetime(1984, 3, 17),
                "born_in": camacari["_id"],
                "registered_in": estacaoDeVotoBeijaFlorDePapoBranco["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 10, 30),
                        "polling_station": estacaoDeVotoBeijaFlorDePapoBranco["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000013",
                "name": "Gustavo Martins",
                "gender": "masculine",
                "birth_date": datetime(1996, 7, 22),
                "born_in": camacari["_id"],
                "registered_in": centroDeVotacaoPedraDoReino["_id"],
                "attended_to": [],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000014",
                "name": "Aline Barbosa",
                "gender": "feminine",
                "birth_date": datetime(1989, 9, 3),
                "born_in": uberlandia["_id"],
                "registered_in": localDeVotoAndorinha["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 12, 20),
                        "polling_station": localDeVotoAndorinha["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000015",
                "name": "Daniel Ribeiro",
                "gender": "masculine",
                "birth_date": datetime(1994, 1, 28),
                "born_in": beloHorizonte["_id"],
                "registered_in": estacaoDeVotoJatoba["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 13, 0),
                        "polling_station": estacaoDeVotoJatoba["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000016",
                "name": "Tatiane Castro",
                "gender": "feminine",
                "birth_date": datetime(1986, 5, 19),
                "born_in": feiraDeSantana["_id"],
                "registered_in": centroDeVotacaoColibri["_id"],
                "attended_to": [],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000017",
                "name": "Felipe Nunes",
                "gender": "neutral",
                "birth_date": datetime(1997, 11, 11),
                "born_in": uberlandia["_id"],
                "registered_in": centroDeVotacaoMangueira["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 15, 25),
                        "polling_station": centroDeVotacaoMangueira["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000018",
                "name": "Camila Dias",
                "gender": "feminine",
                "birth_date": datetime(1983, 12, 7),
                "born_in": contagem["_id"],
                "registered_in": localDeVotoSabiaDoCampo["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 16, 40),
                        "polling_station": localDeVotoSabiaDoCampo["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000019",
                "name": "Roberto Mendes",
                "gender": "masculine",
                "birth_date": datetime(1999, 4, 25),
                "born_in": contagem["_id"],
                "registered_in": estacaoDeVotoCedro["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 8, 55),
                        "polling_station": estacaoDeVotoCedro["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000020",
                "name": "Vanessa Lopes",
                "gender": "feminine",
                "birth_date": datetime(1982, 8, 14),
                "born_in": camacari["_id"],
                "registered_in": centroDeVotacaoAraraAzul["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 9, 5),
                        "polling_station": centroDeVotacaoAraraAzul["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000021",
                "name": "Eduardo Correia",
                "gender": "masculine",
                "birth_date": datetime(1990, 6, 30),
                "born_in": juizDeFora["_id"],
                "registered_in": localDeVotoPauBrasil["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 10, 15),
                        "polling_station": localDeVotoPauBrasil["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000022",
                "name": "Isabela Freitas",
                "gender": "feminine",
                "birth_date": datetime(1985, 10, 12),
                "born_in": uberlandia["_id"],
                "registered_in": estacaoDeVotoCanario["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 11, 30),
                        "polling_station": estacaoDeVotoCanario["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000023",
                "name": "Thiago Araújo",
                "gender": "masculine",
                "birth_date": datetime(1995, 2, 18),
                "born_in": juizDeFora["_id"],
                "registered_in": centroDeVotacaoIpeRoxo["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 12, 45),
                        "polling_station": centroDeVotacaoIpeRoxo["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000024",
                "name": "Larissa Cardoso",
                "gender": "feminine",
                "birth_date": datetime(1980, 7, 5),
                "born_in": uberlandia["_id"],
                "registered_in": localDeVotoGralhaAzul["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 13, 20),
                        "polling_station": localDeVotoGralhaAzul["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000025",
                "name": "Rodrigo Teixeira",
                "gender": "masculine",
                "birth_date": datetime(2000, 9, 22),
                "born_in": salvador["_id"],
                "registered_in": estacaoDeVotoFarolDaBarra["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 14, 0),
                        "polling_station": estacaoDeVotoFarolDaBarra["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000026",
                "name": "Mariana Moreira",
                "gender": "feminine",
                "birth_date": datetime(1992, 12, 15),
                "born_in": vitoriaDaConquista["_id"],
                "registered_in": centroDeVotacaoSereia["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 15, 10),
                        "polling_station": centroDeVotacaoSereia["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000027",
                "name": "André Cunha",
                "gender": "masculine",
                "birth_date": datetime(1988, 4, 8),
                "born_in": camacari["_id"],
                "registered_in": localDeVotoCajueiro["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 16, 25),
                        "polling_station": localDeVotoCajueiro["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000028",
                "name": "Bianca Neves",
                "gender": "feminine",
                "birth_date": datetime(1998, 6, 25),
                "born_in": salvador["_id"],
                "registered_in": estacaoDeVotoBeijaFlorDePapoBranco["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 8, 40),
                        "polling_station": estacaoDeVotoBeijaFlorDePapoBranco["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000029",
                "name": "Carlos Monteiro",
                "gender": "masculine",
                "birth_date": datetime(1993, 8, 10),
                "born_in": salvador["_id"],
                "registered_in": centroDeVotacaoPedraDoReino["_id"],
                "attended_to": [],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000030",
                "name": "Renata Pires",
                "gender": "feminine",
                "birth_date": datetime(1987, 2, 28),
                "born_in": vitoriaDaConquista["_id"],
                "registered_in": localDeVotoAndorinha["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 10, 5),
                        "polling_station": localDeVotoAndorinha["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000031",
                "name": "Paulo Viana",
                "gender": "masculine",
                "birth_date": datetime(1991, 10, 18),
                "born_in": salvador["_id"],
                "registered_in": estacaoDeVotoJatoba["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 11, 15),
                        "polling_station": estacaoDeVotoJatoba["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000032",
                "name": "Sandra Moraes",
                "gender": "feminine",
                "birth_date": datetime(1984, 3, 7),
                "born_in": feiraDeSantana["_id"],
                "registered_in": centroDeVotacaoColibri["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 12, 30),
                        "polling_station": centroDeVotacaoColibri["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000033",
                "name": "Diego Ramos",
                "gender": "masculine",
                "birth_date": datetime(1996, 7, 12),
                "born_in": beloHorizonte["_id"],
                "registered_in": centroDeVotacaoMangueira["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 13, 45),
                        "polling_station": centroDeVotacaoMangueira["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000034",
                "name": "Helena Fonseca",
                "gender": "feminine",
                "birth_date": datetime(1989, 9, 22),
                "born_in": vitoriaDaConquista["_id"],
                "registered_in": localDeVotoSabiaDoCampo["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 14, 20),
                        "polling_station": localDeVotoSabiaDoCampo["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000035",
                "name": "Alexandre Brito",
                "gender": "masculine",
                "birth_date": datetime(1994, 1, 8),
                "born_in": uberlandia["_id"],
                "registered_in": estacaoDeVotoCedro["_id"],
                "attended_to": [],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000036",
                "name": "Cláudia Guimarães",
                "gender": "feminine",
                "birth_date": datetime(1986, 5, 29),
                "born_in": uberlandia["_id"],
                "registered_in": centroDeVotacaoAraraAzul["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 16, 10),
                        "polling_station": centroDeVotacaoAraraAzul["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000037",
                "name": "Vinícius Andrade",
                "gender": "masculine",
                "birth_date": datetime(1997, 11, 1),
                "born_in": contagem["_id"],
                "registered_in": localDeVotoPauBrasil["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 8, 25),
                        "polling_station": localDeVotoPauBrasil["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000038",
                "name": "Natália Peixoto",
                "gender": "feminine",
                "birth_date": datetime(1983, 12, 17),
                "born_in": salvador["_id"],
                "registered_in": estacaoDeVotoCanario["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 9, 40),
                        "polling_station": estacaoDeVotoCanario["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000039",
                "name": "Ricardo Tavares",
                "gender": "masculine",
                "birth_date": datetime(1999, 4, 15),
                "born_in": vitoriaDaConquista["_id"],
                "registered_in": centroDeVotacaoIpeRoxo["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 10, 55),
                        "polling_station": centroDeVotacaoIpeRoxo["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000040",
                "name": "Luciana Barros",
                "gender": "feminine",
                "birth_date": datetime(1982, 8, 24),
                "born_in": contagem["_id"],
                "registered_in": localDeVotoGralhaAzul["_id"],
                "attended_to": [],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000041",
                "name": "Fábio Rios",
                "gender": "masculine",
                "birth_date": datetime(1990, 6, 10),
                "born_in": uberlandia["_id"],
                "registered_in": estacaoDeVotoFarolDaBarra["_id"],
                "attended_to": [],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000042",
                "name": "Gabriela Moura",
                "gender": "feminine",
                "birth_date": datetime(1985, 10, 2),
                "born_in": camacari["_id"],
                "registered_in": centroDeVotacaoSereia["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 13, 30),
                        "polling_station": centroDeVotacaoSereia["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000043",
                "name": "Leonardo Dantas",
                "gender": "masculine",
                "birth_date": datetime(1995, 2, 28),
                "born_in": vitoriaDaConquista["_id"],
                "registered_in": localDeVotoCajueiro["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 14, 45),
                        "polling_station": localDeVotoCajueiro["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000044",
                "name": "Raquel Vasconcelos",
                "gender": "feminine",
                "birth_date": datetime(1980, 7, 15),
                "born_in": feiraDeSantana["_id"],
                "registered_in": estacaoDeVotoBeijaFlorDePapoBranco["_id"],
                "attended_to": [],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000045",
                "name": "Marcelo Bezerra",
                "gender": "masculine",
                "birth_date": datetime(2000, 9, 2),
                "born_in": camacari["_id"],
                "registered_in": centroDeVotacaoPedraDoReino["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 16, 0),
                        "polling_station": centroDeVotacaoPedraDoReino["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000046",
                "name": "Letícia Rezende",
                "gender": "feminine",
                "birth_date": datetime(1992, 12, 25),
                "born_in": feiraDeSantana["_id"],
                "registered_in": localDeVotoAndorinha["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 8, 10),
                        "polling_station": localDeVotoAndorinha["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000047",
                "name": "Hugo Medeiros",
                "gender": "neutral",
                "birth_date": datetime(1988, 4, 28),
                "born_in": contagem["_id"],
                "registered_in": estacaoDeVotoJatoba["_id"],
                "attended_to": [],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000048",
                "name": "Elaine Siqueira",
                "gender": "feminine",
                "birth_date": datetime(1998, 6, 15),
                "born_in": beloHorizonte["_id"],
                "registered_in": centroDeVotacaoColibri["_id"],
                "attended_to": [],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000049",
                "name": "Márcio Falcão",
                "gender": "masculine",
                "birth_date": datetime(1993, 8, 30),
                "born_in": contagem["_id"],
                "registered_in": centroDeVotacaoMangueira["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 11, 55),
                        "polling_station": centroDeVotacaoMangueira["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000050",
                "name": "Simone Câmara",
                "gender": "feminine",
                "birth_date": datetime(1987, 2, 18),
                "born_in": vitoriaDaConquista["_id"],
                "registered_in": localDeVotoSabiaDoCampo["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 12, 5),
                        "polling_station": localDeVotoSabiaDoCampo["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000051",
                "name": "Ana Silva",
                "gender": "feminine",
                "birth_date": datetime(1985, 3, 22),
                "born_in": camacari["_id"],
                "registered_in": estacaoDeVotoCedro["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 8, 15),
                        "polling_station": estacaoDeVotoCedro["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000052",
                "name": "Carlos Oliveira",
                "gender": "masculine",
                "birth_date": datetime(1990, 7, 15),
                "born_in": uberlandia["_id"],
                "registered_in": centroDeVotacaoAraraAzul["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 9, 30),
                        "polling_station": centroDeVotacaoAraraAzul["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000053",
                "name": "Mariana Costa",
                "gender": "feminine",
                "birth_date": datetime(1988, 11, 30),
                "born_in": beloHorizonte["_id"],
                "registered_in": localDeVotoPauBrasil["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 10, 45),
                        "polling_station": localDeVotoPauBrasil["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000054",
                "name": "Pedro Santos",
                "gender": "masculine",
                "birth_date": datetime(1992, 5, 10),
                "born_in": feiraDeSantana["_id"],
                "registered_in": estacaoDeVotoCanario["_id"],
                "attended_to": [],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000055",
                "name": "Fernanda Lima",
                "gender": "feminine",
                "birth_date": datetime(1986, 9, 25),
                "born_in": contagem["_id"],
                "registered_in": centroDeVotacaoIpeRoxo["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 12, 20),
                        "polling_station": centroDeVotacaoIpeRoxo["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000056",
                "name": "Ricardo Almeida",
                "gender": "masculine",
                "birth_date": datetime(1991, 12, 5),
                "born_in": salvador["_id"],
                "registered_in": localDeVotoGralhaAzul["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 13, 35),
                        "polling_station": localDeVotoGralhaAzul["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000057",
                "name": "Juliana Ribeiro",
                "gender": "feminine",
                "birth_date": datetime(1989, 4, 18),
                "born_in": vitoriaDaConquista["_id"],
                "registered_in": estacaoDeVotoFarolDaBarra["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 14, 50),
                        "polling_station": estacaoDeVotoFarolDaBarra["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000058",
                "name": "Lucas Carvalho",
                "gender": "masculine",
                "birth_date": datetime(1993, 8, 12),
                "born_in": camacari["_id"],
                "registered_in": centroDeVotacaoSereia["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 15, 5),
                        "polling_station": centroDeVotacaoSereia["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000059",
                "name": "Patrícia Gomes",
                "gender": "feminine",
                "birth_date": datetime(1987, 1, 20),
                "born_in": beloHorizonte["_id"],
                "registered_in": localDeVotoCajueiro["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 16, 15),
                        "polling_station": localDeVotoCajueiro["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000060",
                "name": "Gustavo Martins",
                "gender": "masculine",
                "birth_date": datetime(1994, 6, 28),
                "born_in": vitoriaDaConquista["_id"],
                "registered_in": estacaoDeVotoBeijaFlorDePapoBranco["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 8, 25),
                        "polling_station": estacaoDeVotoBeijaFlorDePapoBranco["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000061",
                "name": "Tatiane Rocha",
                "gender": "feminine",
                "birth_date": datetime(1984, 10, 14),
                "born_in": contagem["_id"],
                "registered_in": centroDeVotacaoPedraDoReino["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 9, 40),
                        "polling_station": centroDeVotacaoPedraDoReino["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000062",
                "name": "Roberto Nunes",
                "gender": "masculine",
                "birth_date": datetime(1995, 2, 9),
                "born_in": contagem["_id"],
                "registered_in": localDeVotoAndorinha["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 10, 55),
                        "polling_station": localDeVotoAndorinha["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000063",
                "name": "Camila Fernandes",
                "gender": "feminine",
                "birth_date": datetime(1983, 7, 3),
                "born_in": juizDeFora["_id"],
                "registered_in": estacaoDeVotoJatoba["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 11, 20),
                        "polling_station": estacaoDeVotoJatoba["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000064",
                "name": "Daniel Souza",
                "gender": "masculine",
                "birth_date": datetime(1996, 11, 22),
                "born_in": salvador["_id"],
                "registered_in": centroDeVotacaoColibri["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 12, 30),
                        "polling_station": centroDeVotacaoColibri["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000065",
                "name": "Aline Barbosa",
                "gender": "neutral",
                "birth_date": datetime(1982, 4, 17),
                "born_in": camacari["_id"],
                "registered_in": centroDeVotacaoMangueira["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 13, 45),
                        "polling_station": centroDeVotacaoMangueira["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000066",
                "name": "Marcos Pereira",
                "gender": "masculine",
                "birth_date": datetime(1997, 9, 8),
                "born_in": contagem["_id"],
                "registered_in": localDeVotoSabiaDoCampo["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 14, 55),
                        "polling_station": localDeVotoSabiaDoCampo["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000067",
                "name": "Isabela Castro",
                "gender": "feminine",
                "birth_date": datetime(1981, 12, 1),
                "born_in": beloHorizonte["_id"],
                "registered_in": estacaoDeVotoCedro["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 15, 10),
                        "polling_station": estacaoDeVotoCedro["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000068",
                "name": "Felipe Mendes",
                "gender": "masculine",
                "birth_date": datetime(1998, 3, 26),
                "born_in": contagem["_id"],
                "registered_in": centroDeVotacaoAraraAzul["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 16, 25),
                        "polling_station": centroDeVotacaoAraraAzul["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000069",
                "name": "Vanessa Dias",
                "gender": "feminine",
                "birth_date": datetime(1980, 6, 19),
                "born_in": salvador["_id"],
                "registered_in": localDeVotoPauBrasil["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 8, 35),
                        "polling_station": localDeVotoPauBrasil["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000070",
                "name": "Rafael Cardoso",
                "gender": "masculine",
                "birth_date": datetime(1999, 8, 11),
                "born_in": contagem["_id"],
                "registered_in": estacaoDeVotoCanario["_id"],
                "attended_to": [],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000071",
                "name": "Larissa Teixeira",
                "gender": "feminine",
                "birth_date": datetime(1979, 5, 24),
                "born_in": salvador["_id"],
                "registered_in": centroDeVotacaoIpeRoxo["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 10, 5),
                        "polling_station": centroDeVotacaoIpeRoxo["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000072",
                "name": "Bruno Correia",
                "gender": "masculine",
                "birth_date": datetime(2000, 1, 13),
                "born_in": camacari["_id"],
                "registered_in": localDeVotoGralhaAzul["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 11, 15),
                        "polling_station": localDeVotoGralhaAzul["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000073",
                "name": "Clara Monteiro",
                "gender": "feminine",
                "birth_date": datetime(1978, 10, 7),
                "born_in": beloHorizonte["_id"],
                "registered_in": estacaoDeVotoFarolDaBarra["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 12, 40),
                        "polling_station": estacaoDeVotoFarolDaBarra["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000074",
                "name": "Eduardo Moreira",
                "gender": "masculine",
                "birth_date": datetime(2001, 4, 29),
                "born_in": camacari["_id"],
                "registered_in": centroDeVotacaoSereia["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 13, 55),
                        "polling_station": centroDeVotacaoSereia["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000075",
                "name": "Gabriela Lopes",
                "gender": "feminine",
                "birth_date": datetime(1977, 9, 16),
                "born_in": camacari["_id"],
                "registered_in": localDeVotoCajueiro["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 14, 10),
                        "polling_station": localDeVotoCajueiro["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000076",
                "name": "André Vieira",
                "gender": "masculine",
                "birth_date": datetime(2002, 7, 2),
                "born_in": contagem["_id"],
                "registered_in": estacaoDeVotoBeijaFlorDePapoBranco["_id"],
                "attended_to": [],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000077",
                "name": "Beatriz Neves",
                "gender": "feminine",
                "birth_date": datetime(1976, 2, 28),
                "born_in": camacari["_id"],
                "registered_in": centroDeVotacaoPedraDoReino["_id"],
                "attended_to": [],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000078",
                "name": "Thiago Machado",
                "gender": "masculine",
                "birth_date": datetime(2003, 12, 15),
                "born_in": uberlandia["_id"],
                "registered_in": localDeVotoAndorinha["_id"],
                "attended_to": [],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000079",
                "name": "Laura Freitas",
                "gender": "feminine",
                "birth_date": datetime(1975, 8, 9),
                "born_in": salvador["_id"],
                "registered_in": estacaoDeVotoJatoba["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 9, 10),
                        "polling_station": estacaoDeVotoJatoba["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000080",
                "name": "Diego Araújo",
                "gender": "masculine",
                "birth_date": datetime(2004, 5, 21),
                "born_in": contagem["_id"],
                "registered_in": centroDeVotacaoColibri["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 10, 25),
                        "polling_station": centroDeVotacaoColibri["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000081",
                "name": "Carolina Pires",
                "gender": "feminine",
                "birth_date": datetime(1974, 3, 14),
                "born_in": contagem["_id"],
                "registered_in": centroDeVotacaoMangueira["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 11, 35),
                        "polling_station": centroDeVotacaoMangueira["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000082",
                "name": "Paulo Cunha",
                "gender": "masculine",
                "birth_date": datetime(2005, 10, 30),
                "born_in": vitoriaDaConquista["_id"],
                "registered_in": localDeVotoSabiaDoCampo["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 12, 50),
                        "polling_station": localDeVotoSabiaDoCampo["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000083",
                "name": "Sara Marques",
                "gender": "feminine",
                "birth_date": datetime(1973, 1, 25),
                "born_in": beloHorizonte["_id"],
                "registered_in": estacaoDeVotoCedro["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 13, 5),
                        "polling_station": estacaoDeVotoCedro["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000084",
                "name": "Marcelo Fonseca",
                "gender": "masculine",
                "birth_date": datetime(2005, 6, 18),
                "born_in": juizDeFora["_id"],
                "registered_in": centroDeVotacaoAraraAzul["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 14, 15),
                        "polling_station": centroDeVotacaoAraraAzul["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000085",
                "name": "Helena Barros",
                "gender": "feminine",
                "birth_date": datetime(1972, 11, 12),
                "born_in": vitoriaDaConquista["_id"],
                "registered_in": localDeVotoPauBrasil["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 15, 30),
                        "polling_station": localDeVotoPauBrasil["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000086",
                "name": "Leandro Tavares",
                "gender": "masculine",
                "birth_date": datetime(2005, 9, 5),
                "born_in": vitoriaDaConquista["_id"],
                "registered_in": estacaoDeVotoCanario["_id"],
                "attended_to": [],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000087",
                "name": "Renata Miranda",
                "gender": "feminine",
                "birth_date": datetime(1971, 4, 27),
                "born_in": contagem["_id"],
                "registered_in": centroDeVotacaoIpeRoxo["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 8, 55),
                        "polling_station": centroDeVotacaoIpeRoxo["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000088",
                "name": "Vinícius Xavier",
                "gender": "masculine",
                "birth_date": datetime(2005, 2, 19),
                "born_in": vitoriaDaConquista["_id"],
                "registered_in": localDeVotoGralhaAzul["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 9, 20),
                        "polling_station": localDeVotoGralhaAzul["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000089",
                "name": "Amanda Brito",
                "gender": "feminine",
                "birth_date": datetime(1970, 7, 22),
                "born_in": salvador["_id"],
                "registered_in": estacaoDeVotoFarolDaBarra["_id"],
                "attended_to": [],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000090",
                "name": "Rodrigo Peixoto",
                "gender": "masculine",
                "birth_date": datetime(2005, 12, 8),
                "born_in": juizDeFora["_id"],
                "registered_in": centroDeVotacaoSereia["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 11, 45),
                        "polling_station": centroDeVotacaoSereia["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000091",
                "name": "Natália Andrade",
                "gender": "feminine",
                "birth_date": datetime(1969, 5, 31),
                "born_in": juizDeFora["_id"],
                "registered_in": localDeVotoCajueiro["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 12, 55),
                        "polling_station": localDeVotoCajueiro["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000092",
                "name": "Alexandre Campos",
                "gender": "masculine",
                "birth_date": datetime(2000, 8, 14),
                "born_in": feiraDeSantana["_id"],
                "registered_in": estacaoDeVotoBeijaFlorDePapoBranco["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 13, 10),
                        "polling_station": estacaoDeVotoBeijaFlorDePapoBranco["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000093",
                "name": "Bianca Rezende",
                "gender": "feminine",
                "birth_date": datetime(1968, 10, 3),
                "born_in": vitoriaDaConquista["_id"],
                "registered_in": centroDeVotacaoPedraDoReino["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 14, 25),
                        "polling_station": centroDeVotacaoPedraDoReino["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000094",
                "name": "Igor Dantas",
                "gender": "masculine",
                "birth_date": datetime(2001, 3, 26),
                "born_in": vitoriaDaConquista["_id"],
                "registered_in": localDeVotoAndorinha["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 15, 40),
                        "polling_station": localDeVotoAndorinha["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000095",
                "name": "Luana Moura",
                "gender": "feminine",
                "birth_date": datetime(1967, 12, 17),
                "born_in": uberlandia["_id"],
                "registered_in": estacaoDeVotoJatoba["_id"],
                "attended_to": [],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000096",
                "name": "Hugo Bezerra",
                "gender": "masculine",
                "birth_date": datetime(2002, 7, 9),
                "born_in": uberlandia["_id"],
                "registered_in": centroDeVotacaoColibri["_id"],
                "attended_to": [],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000097",
                "name": "Yasmin Vasconcelos",
                "gender": "feminine",
                "birth_date": datetime(1966, 9, 28),
                "born_in": uberlandia["_id"],
                "registered_in": centroDeVotacaoMangueira["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 9, 15),
                        "polling_station": centroDeVotacaoMangueira["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000098",
                "name": "Cauê Guimarães",
                "gender": "neutral",
                "birth_date": datetime(2003, 1, 20),
                "born_in": camacari["_id"],
                "registered_in": localDeVotoSabiaDoCampo["_id"],
                "attended_to": [],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000099",
                "name": "Letícia Duarte",
                "gender": "feminine",
                "birth_date": datetime(1965, 4, 11),
                "born_in": vitoriaDaConquista["_id"],
                "registered_in": estacaoDeVotoCedro["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 11, 40),
                        "polling_station": estacaoDeVotoCedro["_id"],
                    },
                ],
            },
            {
                "_id": ObjectId(),
                "cpf_number": "00000000100",
                "name": "Arthur Siqueira",
                "gender": "masculine",
                "birth_date": datetime(2004, 6, 5),
                "born_in": contagem["_id"],
                "registered_in": centroDeVotacaoAraraAzul["_id"],
                "attended_to": [
                    {
                        "_id": ObjectId(),
                        "timestamp": datetime(2022, 10, 2, 12, 45),
                        "polling_station": centroDeVotacaoAraraAzul["_id"],
                    },
                ],
            },
        ]
    )
