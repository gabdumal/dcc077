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

// Find machines
const machine1 = db.machines.findOne({ serial_number: "AAA001" });
const machine2 = db.machines.findOne({ serial_number: "AAA002" });
const machine3 = db.machines.findOne({ serial_number: "AAA003" });
const machine4 = db.machines.findOne({ serial_number: "AAA004" });
const machine5 = db.machines.findOne({ serial_number: "AAA005" });
const machine6 = db.machines.findOne({ serial_number: "AAA006" });
const machine7 = db.machines.findOne({ serial_number: "AAA007" });
const machine8 = db.machines.findOne({ serial_number: "AAA008" });
const machine9 = db.machines.findOne({ serial_number: "AAA009" });
const machine10 = db.machines.findOne({ serial_number: "AAA010" });
const machine11 = db.machines.findOne({ serial_number: "AAA011" });
const machine12 = db.machines.findOne({ serial_number: "AAA012" });
const machine13 = db.machines.findOne({ serial_number: "AAA013" });
const machine14 = db.machines.findOne({ serial_number: "AAA014" });
const machine15 = db.machines.findOne({ serial_number: "AAA015" });
const machine16 = db.machines.findOne({ serial_number: "AAA016" });
const machine17 = db.machines.findOne({ serial_number: "AAA017" });
const machine18 = db.machines.findOne({ serial_number: "AAA018" });

function updateMachineVotes(machine, votes) {
  db.machines.updateOne(
    { _id: machine._id },
    {
      $set: {
        casts: votes,
      },
    }
  );
}

// Update machine votes
updateMachineVotes(machine1, [
  { candidate: beloHorizonte10._id, votes: 1 },
  { candidate: beloHorizonte30._id, votes: 1 },
]);
updateMachineVotes(machine2, [
  { candidate: beloHorizonte10._id, votes: 1 },
  { candidate: beloHorizonte30._id, votes: 2 },
]);
updateMachineVotes(machine3, [
  { candidate: beloHorizonte10._id, votes: 2 },
  { candidate: beloHorizonte30._id, votes: 3 },
]);
updateMachineVotes(machine4, [
  { candidate: uberlandia10._id, votes: 1 },
  { candidate: uberlandia30._id, votes: 2 },
]);
updateMachineVotes(machine5, [
  { candidate: uberlandia10._id, votes: 1 },
  { candidate: uberlandia30._id, votes: 1 },
]);
updateMachineVotes(machine6, [
  { candidate: uberlandia10._id, votes: 3 },
  { candidate: uberlandia30._id, votes: 3 },
]);
updateMachineVotes(machine7, [
  { candidate: contagem20._id, votes: 3 },
  { candidate: contagem30._id, votes: 2 },
]);
updateMachineVotes(machine8, [
  { candidate: contagem20._id, votes: 1 },
  { candidate: contagem30._id, votes: 1 },
]);
updateMachineVotes(machine9, [
  { candidate: juizDeFora10._id, votes: 3 },
  { candidate: juizDeFora20._id, votes: 1 },
]);
updateMachineVotes(machine10, [
  { candidate: juizDeFora10._id, votes: 2 },
  { candidate: juizDeFora20._id, votes: 3 },
]);
updateMachineVotes(machine11, [
  { candidate: salvador10._id, votes: 2 },
  { candidate: salvador30._id, votes: 2 },
]);
updateMachineVotes(machine12, [
  { candidate: salvador10._id, votes: 3 },
  { candidate: salvador30._id, votes: 2 },
]);
updateMachineVotes(machine13, [
  { candidate: feiraDeSantana20._id, votes: 3 },
  { candidate: feiraDeSantana30._id, votes: 2 },
]);
updateMachineVotes(machine14, [
  { candidate: feiraDeSantana20._id, votes: 2 },
  { candidate: feiraDeSantana30._id, votes: 2 },
]);
updateMachineVotes(machine15, [
  { candidate: vitoriaDaConquista10._id, votes: 2 },
  { candidate: vitoriaDaConquista20._id, votes: 1 },
]);
updateMachineVotes(machine16, [
  { candidate: vitoriaDaConquista10._id, votes: 2 },
  { candidate: vitoriaDaConquista20._id, votes: 2 },
]);
updateMachineVotes(machine17, [
  { candidate: camacari10._id, votes: 2 },
  { candidate: camacari30._id, votes: 2 },
]);
updateMachineVotes(machine18, [
  { candidate: camacari10._id, votes: 2 },
  { candidate: camacari30._id, votes: 1 },
]);
