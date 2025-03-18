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
        ]
    )
