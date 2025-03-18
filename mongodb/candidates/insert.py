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
            {"_id": citizen["_id"]}, {"$set": {"candidate": {"party": party}}}
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

    def update_machine_votes(machine, votes):
        db.machines.update_one({"_id": machine["_id"]}, {"$set": {"casts": votes}})

    # Update machine votes
    update_machine_votes(
        machine1,
        [
            {"candidate": beloHorizonte10["_id"], "votes": 1},
            {"candidate": beloHorizonte30["_id"], "votes": 1},
        ],
    )
    update_machine_votes(
        machine2,
        [
            {"candidate": beloHorizonte10["_id"], "votes": 1},
            {"candidate": beloHorizonte30["_id"], "votes": 2},
        ],
    )
    update_machine_votes(
        machine3,
        [
            {"candidate": beloHorizonte10["_id"], "votes": 2},
            {"candidate": beloHorizonte30["_id"], "votes": 3},
        ],
    )
    update_machine_votes(
        machine4,
        [
            {"candidate": uberlandia10["_id"], "votes": 1},
            {"candidate": uberlandia30["_id"], "votes": 2},
        ],
    )
    update_machine_votes(
        machine5,
        [
            {"candidate": uberlandia10["_id"], "votes": 1},
            {"candidate": uberlandia30["_id"], "votes": 1},
        ],
    )
    update_machine_votes(
        machine6,
        [
            {"candidate": uberlandia10["_id"], "votes": 3},
            {"candidate": uberlandia30["_id"], "votes": 3},
        ],
    )
    update_machine_votes(
        machine7,
        [
            {"candidate": contagem20["_id"], "votes": 3},
            {"candidate": contagem30["_id"], "votes": 2},
        ],
    )
    update_machine_votes(
        machine8,
        [
            {"candidate": contagem20["_id"], "votes": 1},
            {"candidate": contagem30["_id"], "votes": 1},
        ],
    )
    update_machine_votes(
        machine9,
        [
            {"candidate": juizDeFora10["_id"], "votes": 3},
            {"candidate": juizDeFora20["_id"], "votes": 1},
        ],
    )
    update_machine_votes(
        machine10,
        [
            {"candidate": juizDeFora10["_id"], "votes": 2},
            {"candidate": juizDeFora20["_id"], "votes": 3},
        ],
    )
    update_machine_votes(
        machine11,
        [
            {"candidate": salvador10["_id"], "votes": 2},
            {"candidate": salvador30["_id"], "votes": 2},
        ],
    )
    update_machine_votes(
        machine12,
        [
            {"candidate": salvador10["_id"], "votes": 3},
            {"candidate": salvador30["_id"], "votes": 2},
        ],
    )
    update_machine_votes(
        machine13,
        [
            {"candidate": feiraDeSantana20["_id"], "votes": 3},
            {"candidate": feiraDeSantana30["_id"], "votes": 2},
        ],
    )
    update_machine_votes(
        machine14,
        [
            {"candidate": feiraDeSantana20["_id"], "votes": 2},
            {"candidate": feiraDeSantana30["_id"], "votes": 2},
        ],
    )
    update_machine_votes(
        machine15,
        [
            {"candidate": vitoriaDaConquista10["_id"], "votes": 2},
            {"candidate": vitoriaDaConquista20["_id"], "votes": 1},
        ],
    )
    update_machine_votes(
        machine16,
        [
            {"candidate": vitoriaDaConquista10["_id"], "votes": 2},
            {"candidate": vitoriaDaConquista20["_id"], "votes": 2},
        ],
    )
    update_machine_votes(
        machine17,
        [
            {"candidate": camacari10["_id"], "votes": 2},
            {"candidate": camacari30["_id"], "votes": 2},
        ],
    )
    update_machine_votes(
        machine18,
        [
            {"candidate": camacari10["_id"], "votes": 2},
            {"candidate": camacari30["_id"], "votes": 1},
        ],
    )
