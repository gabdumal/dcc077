def run(db):
    # Find citizens
    beloHorizonte10 = db.citizens.find_one({"cpf_number": "00000000049"})
    beloHorizonte30 = db.citizens.find_one({"cpf_number": "00000000098"})
    uberlandia10 = db.citizens.find_one({"cpf_number": "00000000084"})
    uberlandia30 = db.citizens.find_one({"cpf_number": "00000000004"})
    contagem20 = db.citizens.find_one({"cpf_number": "00000000069"})
    contagem30 = db.citizens.find_one({"cpf_number": "00000000022"})
    juizDeFora10 = db.citizens.find_one({"cpf_number": "00000000040"})
    juizDeFora20 = db.citizens.find_one({"cpf_number": "00000000087"})
    salvador10 = db.citizens.find_one({"cpf_number": "00000000073"})
    salvador30 = db.citizens.find_one({"cpf_number": "00000000009"})
    feiraDeSantana20 = db.citizens.find_one({"cpf_number": "00000000091"})
    feiraDeSantana30 = db.citizens.find_one({"cpf_number": "00000000076"})
    vitoriaDaConquista10 = db.citizens.find_one({"cpf_number": "00000000077"})
    vitoriaDaConquista20 = db.citizens.find_one({"cpf_number": "00000000094"})
    camacari10 = db.citizens.find_one({"cpf_number": "00000000032"})
    camacari30 = db.citizens.find_one({"cpf_number": "00000000079"})

    def insert_candidate(citizen, party):
        db.citizens.update_one(
            {"_id": citizen["_id"]},
            {
                "$set": {
                    "candidate": {
                        "party": party,
                    },
                },
            },
        )

    # Insert candidates
    insert_candidate(beloHorizonte10, "10")
    insert_candidate(beloHorizonte30, "30")
    insert_candidate(uberlandia10, "10")
    insert_candidate(uberlandia30, "30")
    insert_candidate(contagem20, "20")
    insert_candidate(contagem30, "30")
    insert_candidate(juizDeFora10, "10")
    insert_candidate(juizDeFora20, "20")
    insert_candidate(salvador10, "10")
    insert_candidate(salvador30, "30")
    insert_candidate(feiraDeSantana20, "20")
    insert_candidate(feiraDeSantana30, "30")
    insert_candidate(vitoriaDaConquista10, "10")
    insert_candidate(vitoriaDaConquista20, "20")
    insert_candidate(camacari10, "10")
    insert_candidate(camacari30, "30")
