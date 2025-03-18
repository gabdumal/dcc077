/* global use, db */

// Select the database to use.
use("tse_online");

// Find citizens
const beloHorizonte10 = db.citizens.findOne({ cpf_number: "00000000049" });
const beloHorizonte30 = db.citizens.findOne({ cpf_number: "00000000098" });
const uberlandia10 = db.citizens.findOne({ cpf_number: "00000000084" });
const uberlandia30 = db.citizens.findOne({ cpf_number: "00000000004" });
const contagem20 = db.citizens.findOne({ cpf_number: "00000000069" });
const contagem30 = db.citizens.findOne({ cpf_number: "00000000022" });
const juizDeFora10 = db.citizens.findOne({ cpf_number: "00000000040" });
const juizDeFora20 = db.citizens.findOne({ cpf_number: "00000000087" });
const salvador10 = db.citizens.findOne({ cpf_number: "00000000073" });
const salvador30 = db.citizens.findOne({ cpf_number: "00000000009" });
const feiraDeSantana20 = db.citizens.findOne({ cpf_number: "00000000091" });
const feiraDeSantana30 = db.citizens.findOne({ cpf_number: "00000000076" });
const vitoriaDaConquista10 = db.citizens.findOne({ cpf_number: "00000000077" });
const vitoriaDaConquista20 = db.citizens.findOne({ cpf_number: "00000000094" });
const camacari10 = db.citizens.findOne({ cpf_number: "00000000032" });
const camacari30 = db.citizens.findOne({ cpf_number: "00000000079" });

function insertCandidate(citizen, party) {
  db.citizens.updateOne(
    { _id: citizen._id },
    {
      $set: {
        candidate: {
          party,
        },
      },
    }
  );
}

// Insert candidates
insertCandidate(beloHorizonte10, "10");
insertCandidate(beloHorizonte30, "30");
insertCandidate(uberlandia10, "10");
insertCandidate(uberlandia30, "30");
insertCandidate(contagem20, "20");
insertCandidate(contagem30, "30");
insertCandidate(juizDeFora10, "10");
insertCandidate(juizDeFora20, "20");
insertCandidate(salvador10, "10");
insertCandidate(salvador30, "30");
insertCandidate(feiraDeSantana20, "20");
insertCandidate(feiraDeSantana30, "30");
insertCandidate(vitoriaDaConquista10, "10");
insertCandidate(vitoriaDaConquista20, "20");
insertCandidate(camacari10, "10");
insertCandidate(camacari30, "30");
