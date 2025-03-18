/* global use, db */

// Select the database to use.
use("tse_online");

// Find states
const minasGerais = db.states.findOne({ name: "Minas Gerais" });
const bahia = db.states.findOne({ name: "Bahia" });

// Find cities
const beloHorizonte = minasGerais.cities.find(
  (city) => city.name === "Belo Horizonte"
);
const uberlandia = minasGerais.cities.find(
  (city) => city.name === "Uberlândia"
);
const contagem = minasGerais.cities.find((city) => city.name === "Contagem");
const juizDeFora = minasGerais.cities.find(
  (city) => city.name === "Juiz de Fora"
);
const salvador = bahia.cities.find((city) => city.name === "Salvador");
const feiraDeSantana = bahia.cities.find(
  (city) => city.name === "Feira de Santana"
);
const vitoriaDaConquista = bahia.cities.find(
  (city) => city.name === "Vitória da Conquista"
);
const camacari = bahia.cities.find((city) => city.name === "Camaçari");

// Find polling stations
const centroDeVotacaoMangueira = beloHorizonte.polling_stations.find(
  (station) => station.name === "Centro de Votação Mangueira"
);
const localDeVotoSabiaDoCampo = beloHorizonte.polling_stations.find(
  (station) => station.name === "Local de Voto Sabiá-do-Campo"
);
const centroDeVotacaoAraraAzul = uberlandia.polling_stations.find(
  (station) => station.name === "Centro de Votação Arara-Azul"
);
const estacaoDeVotoCedro = uberlandia.polling_stations.find(
  (station) => station.name === "Estação de Voto Cedro"
);
const localDeVotoPauBrasil = contagem.polling_stations.find(
  (station) => station.name === "Local de Voto Pau-Brasil"
);
const estacaoDeVotoCanario = contagem.polling_stations.find(
  (station) => station.name === "Estação de Voto Canário"
);
const centroDeVotacaoIpeRoxo = juizDeFora.polling_stations.find(
  (station) => station.name === "Centro de Votação Ipê-Roxo"
);
const localDeVotoGralhaAzul = juizDeFora.polling_stations.find(
  (station) => station.name === "Local de Voto Gralha-Azul"
);
const estacaoDeVotoFarolDaBarra = salvador.polling_stations.find(
  (station) => station.name === "Estação de Voto Farol da Barra"
);
const centroDeVotacaoSereia = salvador.polling_stations.find(
  (station) => station.name === "Centro de Votação Sereia"
);
const localDeVotoCajueiro = feiraDeSantana.polling_stations.find(
  (station) => station.name === "Local de Voto Cajueiro"
);
const estacaoDeVotoBeijaFlorDePapoBranco = feiraDeSantana.polling_stations.find(
  (station) => station.name === "Estação de Voto Beija-Flor-de-Papo-Branco"
);
const centroDeVotacaoPedraDoReino = vitoriaDaConquista.polling_stations.find(
  (station) => station.name === "Centro de Votação Pedra do Reino"
);
const localDeVotoAndorinha = vitoriaDaConquista.polling_stations.find(
  (station) => station.name === "Local de Voto Andorinha"
);
const estacaoDeVotoJatoba = camacari.polling_stations.find(
  (station) => station.name === "Estação de Voto Jatobá"
);
const centroDeVotacaoColibri = camacari.polling_stations.find(
  (station) => station.name === "Centro de Votação Colibri"
);

// Insert citizens
db.citizens.insertMany([
  {
    _id: new ObjectId(),
    cpf_number: "00000000001",
    name: "João Silva",
    gender: "masculine",
    birth_date: new Date("1990-05-15T00:00:00Z"),
    born_in: beloHorizonte._id,
    registered_in: centroDeVotacaoMangueira._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T08:15:00Z"),
        polling_station: centroDeVotacaoMangueira._id,
      },
    ],
  },
]);
