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
  {
    _id: new ObjectId(),
    cpf_number: "00000000002",
    name: "Maria Oliveira",
    gender: "feminine",
    birth_date: new Date("1985-11-22T00:00:00Z"),
    born_in: feiraDeSantana._id,
    registered_in: localDeVotoSabiaDoCampo._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T09:30:00Z"),
        polling_station: localDeVotoSabiaDoCampo._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000003",
    name: "Pedro Souza",
    gender: "masculine",
    birth_date: new Date("1995-03-10T00:00:00Z"),
    born_in: salvador._id,
    registered_in: estacaoDeVotoCedro._id,
    attended_to: [],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000004",
    name: "Ana Costa",
    gender: "neutral",
    birth_date: new Date("1980-07-25T00:00:00Z"),
    born_in: beloHorizonte._id,
    registered_in: centroDeVotacaoAraraAzul._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T11:20:00Z"),
        polling_station: centroDeVotacaoAraraAzul._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000005",
    name: "Lucas Fernandes",
    gender: "masculine",
    birth_date: new Date("2000-09-12T00:00:00Z"),
    born_in: juizDeFora._id,
    registered_in: localDeVotoPauBrasil._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T12:00:00Z"),
        polling_station: localDeVotoPauBrasil._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000006",
    name: "Carla Santos",
    gender: "feminine",
    birth_date: new Date("1992-12-30T00:00:00Z"),
    born_in: beloHorizonte._id,
    registered_in: estacaoDeVotoCanario._id,
    attended_to: [],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000007",
    name: "Rafael Almeida",
    gender: "masculine",
    birth_date: new Date("1988-04-18T00:00:00Z"),
    born_in: beloHorizonte._id,
    registered_in: centroDeVotacaoIpeRoxo._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T14:25:00Z"),
        polling_station: centroDeVotacaoIpeRoxo._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000008",
    name: "Fernanda Lima",
    gender: "feminine",
    birth_date: new Date("1998-06-05T00:00:00Z"),
    born_in: contagem._id,
    registered_in: localDeVotoGralhaAzul._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T15:40:00Z"),
        polling_station: localDeVotoGralhaAzul._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000009",
    name: "Bruno Carvalho",
    gender: "masculine",
    birth_date: new Date("1993-08-20T00:00:00Z"),
    born_in: vitoriaDaConquista._id,
    registered_in: estacaoDeVotoFarolDaBarra._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T16:55:00Z"),
        polling_station: estacaoDeVotoFarolDaBarra._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000010",
    name: "Juliana Rocha",
    gender: "feminine",
    birth_date: new Date("1987-02-14T00:00:00Z"),
    born_in: contagem._id,
    registered_in: centroDeVotacaoSereia._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T08:05:00Z"),
        polling_station: centroDeVotacaoSereia._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000011",
    name: "Marcos Pereira",
    gender: "masculine",
    birth_date: new Date("1991-10-08T00:00:00Z"),
    born_in: juizDeFora._id,
    registered_in: localDeVotoCajueiro._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T09:15:00Z"),
        polling_station: localDeVotoCajueiro._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000012",
    name: "Patrícia Gomes",
    gender: "feminine",
    birth_date: new Date("1984-03-17T00:00:00Z"),
    born_in: camacari._id,
    registered_in: estacaoDeVotoBeijaFlorDePapoBranco._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T10:30:00Z"),
        polling_station: estacaoDeVotoBeijaFlorDePapoBranco._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000013",
    name: "Gustavo Martins",
    gender: "masculine",
    birth_date: new Date("1996-07-22T00:00:00Z"),
    born_in: camacari._id,
    registered_in: centroDeVotacaoPedraDoReino._id,
    attended_to: [],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000014",
    name: "Aline Barbosa",
    gender: "feminine",
    birth_date: new Date("1989-09-03T00:00:00Z"),
    born_in: uberlandia._id,
    registered_in: localDeVotoAndorinha._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T12:20:00Z"),
        polling_station: localDeVotoAndorinha._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000015",
    name: "Daniel Ribeiro",
    gender: "masculine",
    birth_date: new Date("1994-01-28T00:00:00Z"),
    born_in: beloHorizonte._id,
    registered_in: estacaoDeVotoJatoba._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T13:00:00Z"),
        polling_station: estacaoDeVotoJatoba._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000016",
    name: "Tatiane Castro",
    gender: "feminine",
    birth_date: new Date("1986-05-19T00:00:00Z"),
    born_in: feiraDeSantana._id,
    registered_in: centroDeVotacaoColibri._id,
    attended_to: [],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000017",
    name: "Felipe Nunes",
    gender: "neutral",
    birth_date: new Date("1997-11-11T00:00:00Z"),
    born_in: uberlandia._id,
    registered_in: centroDeVotacaoMangueira._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T15:25:00Z"),
        polling_station: centroDeVotacaoMangueira._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000018",
    name: "Camila Dias",
    gender: "feminine",
    birth_date: new Date("1983-12-07T00:00:00Z"),
    born_in: contagem._id,
    registered_in: localDeVotoSabiaDoCampo._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T16:40:00Z"),
        polling_station: localDeVotoSabiaDoCampo._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000019",
    name: "Roberto Mendes",
    gender: "masculine",
    birth_date: new Date("1999-04-25T00:00:00Z"),
    born_in: contagem._id,
    registered_in: estacaoDeVotoCedro._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T08:55:00Z"),
        polling_station: estacaoDeVotoCedro._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000020",
    name: "Vanessa Lopes",
    gender: "feminine",
    birth_date: new Date("1982-08-14T00:00:00Z"),
    born_in: camacari._id,
    registered_in: centroDeVotacaoAraraAzul._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T09:05:00Z"),
        polling_station: centroDeVotacaoAraraAzul._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000021",
    name: "Eduardo Correia",
    gender: "masculine",
    birth_date: new Date("1990-06-30T00:00:00Z"),
    born_in: juizDeFora._id,
    registered_in: localDeVotoPauBrasil._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T10:15:00Z"),
        polling_station: localDeVotoPauBrasil._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000022",
    name: "Isabela Freitas",
    gender: "feminine",
    birth_date: new Date("1985-10-12T00:00:00Z"),
    born_in: uberlandia._id,
    registered_in: estacaoDeVotoCanario._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T11:30:00Z"),
        polling_station: estacaoDeVotoCanario._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000023",
    name: "Thiago Araújo",
    gender: "masculine",
    birth_date: new Date("1995-02-18T00:00:00Z"),
    born_in: juizDeFora._id,
    registered_in: centroDeVotacaoIpeRoxo._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T12:45:00Z"),
        polling_station: centroDeVotacaoIpeRoxo._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000024",
    name: "Larissa Cardoso",
    gender: "feminine",
    birth_date: new Date("1980-07-05T00:00:00Z"),
    born_in: uberlandia._id,
    registered_in: localDeVotoGralhaAzul._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T13:20:00Z"),
        polling_station: localDeVotoGralhaAzul._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000025",
    name: "Rodrigo Teixeira",
    gender: "masculine",
    birth_date: new Date("2000-09-22T00:00:00Z"),
    born_in: salvador._id,
    registered_in: estacaoDeVotoFarolDaBarra._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T14:00:00Z"),
        polling_station: estacaoDeVotoFarolDaBarra._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000026",
    name: "Mariana Moreira",
    gender: "feminine",
    birth_date: new Date("1992-12-15T00:00:00Z"),
    born_in: vitoriaDaConquista._id,
    registered_in: centroDeVotacaoSereia._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T15:10:00Z"),
        polling_station: centroDeVotacaoSereia._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000027",
    name: "André Cunha",
    gender: "masculine",
    birth_date: new Date("1988-04-08T00:00:00Z"),
    born_in: camacari._id,
    registered_in: localDeVotoCajueiro._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T16:25:00Z"),
        polling_station: localDeVotoCajueiro._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000028",
    name: "Bianca Neves",
    gender: "feminine",
    birth_date: new Date("1998-06-25T00:00:00Z"),
    born_in: salvador._id,
    registered_in: estacaoDeVotoBeijaFlorDePapoBranco._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T08:40:00Z"),
        polling_station: estacaoDeVotoBeijaFlorDePapoBranco._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000029",
    name: "Carlos Monteiro",
    gender: "masculine",
    birth_date: new Date("1993-08-10T00:00:00Z"),
    born_in: salvador._id,
    registered_in: centroDeVotacaoPedraDoReino._id,
    attended_to: [],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000030",
    name: "Renata Pires",
    gender: "feminine",
    birth_date: new Date("1987-02-28T00:00:00Z"),
    born_in: vitoriaDaConquista._id,
    registered_in: localDeVotoAndorinha._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T10:05:00Z"),
        polling_station: localDeVotoAndorinha._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000031",
    name: "Paulo Viana",
    gender: "masculine",
    birth_date: new Date("1991-10-18T00:00:00Z"),
    born_in: salvador._id,
    registered_in: estacaoDeVotoJatoba._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T11:15:00Z"),
        polling_station: estacaoDeVotoJatoba._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000032",
    name: "Sandra Moraes",
    gender: "feminine",
    birth_date: new Date("1984-03-07T00:00:00Z"),
    born_in: feiraDeSantana._id,
    registered_in: centroDeVotacaoColibri._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T12:30:00Z"),
        polling_station: centroDeVotacaoColibri._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000033",
    name: "Diego Ramos",
    gender: "masculine",
    birth_date: new Date("1996-07-12T00:00:00Z"),
    born_in: beloHorizonte._id,
    registered_in: centroDeVotacaoMangueira._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T13:45:00Z"),
        polling_station: centroDeVotacaoMangueira._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000034",
    name: "Helena Fonseca",
    gender: "feminine",
    birth_date: new Date("1989-09-22T00:00:00Z"),
    born_in: vitoriaDaConquista._id,
    registered_in: localDeVotoSabiaDoCampo._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T14:20:00Z"),
        polling_station: localDeVotoSabiaDoCampo._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000035",
    name: "Alexandre Brito",
    gender: "masculine",
    birth_date: new Date("1994-01-08T00:00:00Z"),
    born_in: uberlandia._id,
    registered_in: estacaoDeVotoCedro._id,
    attended_to: [],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000036",
    name: "Cláudia Guimarães",
    gender: "feminine",
    birth_date: new Date("1986-05-29T00:00:00Z"),
    born_in: uberlandia._id,
    registered_in: centroDeVotacaoAraraAzul._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T16:10:00Z"),
        polling_station: centroDeVotacaoAraraAzul._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000037",
    name: "Vinícius Andrade",
    gender: "masculine",
    birth_date: new Date("1997-11-01T00:00:00Z"),
    born_in: contagem._id,
    registered_in: localDeVotoPauBrasil._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T08:25:00Z"),
        polling_station: localDeVotoPauBrasil._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000038",
    name: "Natália Peixoto",
    gender: "feminine",
    birth_date: new Date("1983-12-17T00:00:00Z"),
    born_in: salvador._id,
    registered_in: estacaoDeVotoCanario._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T09:40:00Z"),
        polling_station: estacaoDeVotoCanario._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000039",
    name: "Ricardo Tavares",
    gender: "masculine",
    birth_date: new Date("1999-04-15T00:00:00Z"),
    born_in: vitoriaDaConquista._id,
    registered_in: centroDeVotacaoIpeRoxo._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T10:55:00Z"),
        polling_station: centroDeVotacaoIpeRoxo._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000040",
    name: "Luciana Barros",
    gender: "feminine",
    birth_date: new Date("1982-08-24T00:00:00Z"),
    born_in: contagem._id,
    registered_in: localDeVotoGralhaAzul._id,
    attended_to: [],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000041",
    name: "Fábio Rios",
    gender: "masculine",
    birth_date: new Date("1990-06-10T00:00:00Z"),
    born_in: uberlandia._id,
    registered_in: estacaoDeVotoFarolDaBarra._id,
    attended_to: [],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000042",
    name: "Gabriela Moura",
    gender: "feminine",
    birth_date: new Date("1985-10-02T00:00:00Z"),
    born_in: camacari._id,
    registered_in: centroDeVotacaoSereia._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T13:30:00Z"),
        polling_station: centroDeVotacaoSereia._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000043",
    name: "Leonardo Dantas",
    gender: "masculine",
    birth_date: new Date("1995-02-28T00:00:00Z"),
    born_in: vitoriaDaConquista._id,
    registered_in: localDeVotoCajueiro._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T14:45:00Z"),
        polling_station: localDeVotoCajueiro._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000044",
    name: "Raquel Vasconcelos",
    gender: "feminine",
    birth_date: new Date("1980-07-15T00:00:00Z"),
    born_in: feiraDeSantana._id,
    registered_in: estacaoDeVotoBeijaFlorDePapoBranco._id,
    attended_to: [],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000045",
    name: "Marcelo Bezerra",
    gender: "masculine",
    birth_date: new Date("2000-09-02T00:00:00Z"),
    born_in: camacari._id,
    registered_in: centroDeVotacaoPedraDoReino._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T16:00:00Z"),
        polling_station: centroDeVotacaoPedraDoReino._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000046",
    name: "Letícia Rezende",
    gender: "feminine",
    birth_date: new Date("1992-12-25T00:00:00Z"),
    born_in: feiraDeSantana._id,
    registered_in: localDeVotoAndorinha._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T08:10:00Z"),
        polling_station: localDeVotoAndorinha._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000047",
    name: "Hugo Medeiros",
    gender: "neutral",
    birth_date: new Date("1988-04-28T00:00:00Z"),
    born_in: contagem._id,
    registered_in: estacaoDeVotoJatoba._id,
    attended_to: [],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000048",
    name: "Elaine Siqueira",
    gender: "feminine",
    birth_date: new Date("1998-06-15T00:00:00Z"),
    born_in: beloHorizonte._id,
    registered_in: centroDeVotacaoColibri._id,
    attended_to: [],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000049",
    name: "Márcio Falcão",
    gender: "masculine",
    birth_date: new Date("1993-08-30T00:00:00Z"),
    born_in: contagem._id,
    registered_in: centroDeVotacaoMangueira._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T11:55:00Z"),
        polling_station: centroDeVotacaoMangueira._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000050",
    name: "Simone Câmara",
    gender: "feminine",
    birth_date: new Date("1987-02-18T00:00:00Z"),
    born_in: vitoriaDaConquista._id,
    registered_in: localDeVotoSabiaDoCampo._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T12:05:00Z"),
        polling_station: localDeVotoSabiaDoCampo._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000051",
    name: "Ana Silva",
    gender: "feminine",
    birth_date: new Date("1985-03-22T00:00:00Z"),
    born_in: camacari._id,
    registered_in: estacaoDeVotoCedro._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T08:15:00Z"),
        polling_station: estacaoDeVotoCedro._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000052",
    name: "Carlos Oliveira",
    gender: "masculine",
    birth_date: new Date("1990-07-15T00:00:00Z"),
    born_in: uberlandia._id,
    registered_in: centroDeVotacaoAraraAzul._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T09:30:00Z"),
        polling_station: centroDeVotacaoAraraAzul._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000053",
    name: "Mariana Costa",
    gender: "feminine",
    birth_date: new Date("1988-11-30T00:00:00Z"),
    born_in: beloHorizonte._id,
    registered_in: localDeVotoPauBrasil._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T10:45:00Z"),
        polling_station: localDeVotoPauBrasil._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000054",
    name: "Pedro Santos",
    gender: "masculine",
    birth_date: new Date("1992-05-10T00:00:00Z"),
    born_in: feiraDeSantana._id,
    registered_in: estacaoDeVotoCanario._id,
    attended_to: [],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000055",
    name: "Fernanda Lima",
    gender: "feminine",
    birth_date: new Date("1986-09-25T00:00:00Z"),
    born_in: contagem._id,
    registered_in: centroDeVotacaoIpeRoxo._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T12:20:00Z"),
        polling_station: centroDeVotacaoIpeRoxo._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000056",
    name: "Ricardo Almeida",
    gender: "masculine",
    birth_date: new Date("1991-12-05T00:00:00Z"),
    born_in: salvador._id,
    registered_in: localDeVotoGralhaAzul._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T13:35:00Z"),
        polling_station: localDeVotoGralhaAzul._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000057",
    name: "Juliana Ribeiro",
    gender: "feminine",
    birth_date: new Date("1989-04-18T00:00:00Z"),
    born_in: vitoriaDaConquista._id,
    registered_in: estacaoDeVotoFarolDaBarra._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T14:50:00Z"),
        polling_station: estacaoDeVotoFarolDaBarra._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000058",
    name: "Lucas Carvalho",
    gender: "masculine",
    birth_date: new Date("1993-08-12T00:00:00Z"),
    born_in: camacari._id,
    registered_in: centroDeVotacaoSereia._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T15:05:00Z"),
        polling_station: centroDeVotacaoSereia._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000059",
    name: "Patrícia Gomes",
    gender: "feminine",
    birth_date: new Date("1987-01-20T00:00:00Z"),
    born_in: beloHorizonte._id,
    registered_in: localDeVotoCajueiro._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T16:15:00Z"),
        polling_station: localDeVotoCajueiro._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000060",
    name: "Gustavo Martins",
    gender: "masculine",
    birth_date: new Date("1994-06-28T00:00:00Z"),
    born_in: vitoriaDaConquista._id,
    registered_in: estacaoDeVotoBeijaFlorDePapoBranco._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T08:25:00Z"),
        polling_station: estacaoDeVotoBeijaFlorDePapoBranco._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000061",
    name: "Tatiane Rocha",
    gender: "feminine",
    birth_date: new Date("1984-10-14T00:00:00Z"),
    born_in: contagem._id,
    registered_in: centroDeVotacaoPedraDoReino._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T09:40:00Z"),
        polling_station: centroDeVotacaoPedraDoReino._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000062",
    name: "Roberto Nunes",
    gender: "masculine",
    birth_date: new Date("1995-02-09T00:00:00Z"),
    born_in: contagem._id,
    registered_in: localDeVotoAndorinha._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T10:55:00Z"),
        polling_station: localDeVotoAndorinha._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000063",
    name: "Camila Fernandes",
    gender: "feminine",
    birth_date: new Date("1983-07-03T00:00:00Z"),
    born_in: juizDeFora._id,
    registered_in: estacaoDeVotoJatoba._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T11:20:00Z"),
        polling_station: estacaoDeVotoJatoba._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000064",
    name: "Daniel Souza",
    gender: "masculine",
    birth_date: new Date("1996-11-22T00:00:00Z"),
    born_in: salvador._id,
    registered_in: centroDeVotacaoColibri._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T12:30:00Z"),
        polling_station: centroDeVotacaoColibri._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000065",
    name: "Aline Barbosa",
    gender: "neutral",
    birth_date: new Date("1982-04-17T00:00:00Z"),
    born_in: camacari._id,
    registered_in: centroDeVotacaoMangueira._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T13:45:00Z"),
        polling_station: centroDeVotacaoMangueira._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000066",
    name: "Marcos Pereira",
    gender: "masculine",
    birth_date: new Date("1997-09-08T00:00:00Z"),
    born_in: contagem._id,
    registered_in: localDeVotoSabiaDoCampo._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T14:55:00Z"),
        polling_station: localDeVotoSabiaDoCampo._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000067",
    name: "Isabela Castro",
    gender: "feminine",
    birth_date: new Date("1981-12-01T00:00:00Z"),
    born_in: beloHorizonte._id,
    registered_in: estacaoDeVotoCedro._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T15:10:00Z"),
        polling_station: estacaoDeVotoCedro._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000068",
    name: "Felipe Mendes",
    gender: "masculine",
    birth_date: new Date("1998-03-26T00:00:00Z"),
    born_in: contagem._id,
    registered_in: centroDeVotacaoAraraAzul._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T16:25:00Z"),
        polling_station: centroDeVotacaoAraraAzul._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000069",
    name: "Vanessa Dias",
    gender: "feminine",
    birth_date: new Date("1980-06-19T00:00:00Z"),
    born_in: salvador._id,
    registered_in: localDeVotoPauBrasil._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T08:35:00Z"),
        polling_station: localDeVotoPauBrasil._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000070",
    name: "Rafael Cardoso",
    gender: "masculine",
    birth_date: new Date("1999-08-11T00:00:00Z"),
    born_in: contagem._id,
    registered_in: estacaoDeVotoCanario._id,
    attended_to: [],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000071",
    name: "Larissa Teixeira",
    gender: "feminine",
    birth_date: new Date("1979-05-24T00:00:00Z"),
    born_in: salvador._id,
    registered_in: centroDeVotacaoIpeRoxo._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T10:05:00Z"),
        polling_station: centroDeVotacaoIpeRoxo._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000072",
    name: "Bruno Correia",
    gender: "masculine",
    birth_date: new Date("2000-01-13T00:00:00Z"),
    born_in: camacari._id,
    registered_in: localDeVotoGralhaAzul._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T11:15:00Z"),
        polling_station: localDeVotoGralhaAzul._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000073",
    name: "Clara Monteiro",
    gender: "feminine",
    birth_date: new Date("1978-10-07T00:00:00Z"),
    born_in: beloHorizonte._id,
    registered_in: estacaoDeVotoFarolDaBarra._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T12:40:00Z"),
        polling_station: estacaoDeVotoFarolDaBarra._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000074",
    name: "Eduardo Moreira",
    gender: "masculine",
    birth_date: new Date("2001-04-29T00:00:00Z"),
    born_in: camacari._id,
    registered_in: centroDeVotacaoSereia._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T13:55:00Z"),
        polling_station: centroDeVotacaoSereia._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000075",
    name: "Gabriela Lopes",
    gender: "feminine",
    birth_date: new Date("1977-09-16T00:00:00Z"),
    born_in: camacari._id,
    registered_in: localDeVotoCajueiro._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T14:10:00Z"),
        polling_station: localDeVotoCajueiro._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000076",
    name: "André Vieira",
    gender: "masculine",
    birth_date: new Date("2002-07-02T00:00:00Z"),
    born_in: contagem._id,
    registered_in: estacaoDeVotoBeijaFlorDePapoBranco._id,
    attended_to: [],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000077",
    name: "Beatriz Neves",
    gender: "feminine",
    birth_date: new Date("1976-02-28T00:00:00Z"),
    born_in: camacari._id,
    registered_in: centroDeVotacaoPedraDoReino._id,
    attended_to: [],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000078",
    name: "Thiago Machado",
    gender: "masculine",
    birth_date: new Date("2003-12-15T00:00:00Z"),
    born_in: uberlandia._id,
    registered_in: localDeVotoAndorinha._id,
    attended_to: [],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000079",
    name: "Laura Freitas",
    gender: "feminine",
    birth_date: new Date("1975-08-09T00:00:00Z"),
    born_in: salvador._id,
    registered_in: estacaoDeVotoJatoba._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T09:10:00Z"),
        polling_station: estacaoDeVotoJatoba._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000080",
    name: "Diego Araújo",
    gender: "masculine",
    birth_date: new Date("2004-05-21T00:00:00Z"),
    born_in: contagem._id,
    registered_in: centroDeVotacaoColibri._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T10:25:00Z"),
        polling_station: centroDeVotacaoColibri._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000081",
    name: "Carolina Pires",
    gender: "feminine",
    birth_date: new Date("1974-03-14T00:00:00Z"),
    born_in: contagem._id,
    registered_in: centroDeVotacaoMangueira._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T11:35:00Z"),
        polling_station: centroDeVotacaoMangueira._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000082",
    name: "Paulo Cunha",
    gender: "masculine",
    birth_date: new Date("2005-10-30T00:00:00Z"),
    born_in: vitoriaDaConquista._id,
    registered_in: localDeVotoSabiaDoCampo._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T12:50:00Z"),
        polling_station: localDeVotoSabiaDoCampo._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000083",
    name: "Sara Marques",
    gender: "feminine",
    birth_date: new Date("1973-01-25T00:00:00Z"),
    born_in: beloHorizonte._id,
    registered_in: estacaoDeVotoCedro._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T13:05:00Z"),
        polling_station: estacaoDeVotoCedro._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000084",
    name: "Marcelo Fonseca",
    gender: "masculine",
    birth_date: new Date("2005-06-18T00:00:00Z"),
    born_in: juizDeFora._id,
    registered_in: centroDeVotacaoAraraAzul._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T14:15:00Z"),
        polling_station: centroDeVotacaoAraraAzul._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000085",
    name: "Helena Barros",
    gender: "feminine",
    birth_date: new Date("1972-11-12T00:00:00Z"),
    born_in: vitoriaDaConquista._id,
    registered_in: localDeVotoPauBrasil._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T15:30:00Z"),
        polling_station: localDeVotoPauBrasil._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000086",
    name: "Leandro Tavares",
    gender: "masculine",
    birth_date: new Date("2005-09-05T00:00:00Z"),
    born_in: vitoriaDaConquista._id,
    registered_in: estacaoDeVotoCanario._id,
    attended_to: [],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000087",
    name: "Renata Miranda",
    gender: "feminine",
    birth_date: new Date("1971-04-27T00:00:00Z"),
    born_in: contagem._id,
    registered_in: centroDeVotacaoIpeRoxo._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T08:55:00Z"),
        polling_station: centroDeVotacaoIpeRoxo._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000088",
    name: "Vinícius Xavier",
    gender: "masculine",
    birth_date: new Date("2005-02-19T00:00:00Z"),
    born_in: vitoriaDaConquista._id,
    registered_in: localDeVotoGralhaAzul._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T09:20:00Z"),
        polling_station: localDeVotoGralhaAzul._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000089",
    name: "Amanda Brito",
    gender: "feminine",
    birth_date: new Date("1970-07-22T00:00:00Z"),
    born_in: salvador._id,
    registered_in: estacaoDeVotoFarolDaBarra._id,
    attended_to: [],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000090",
    name: "Rodrigo Peixoto",
    gender: "masculine",
    birth_date: new Date("2005-12-08T00:00:00Z"),
    born_in: juizDeFora._id,
    registered_in: centroDeVotacaoSereia._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T11:45:00Z"),
        polling_station: centroDeVotacaoSereia._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000091",
    name: "Natália Andrade",
    gender: "feminine",
    birth_date: new Date("1969-05-31T00:00:00Z"),
    born_in: juizDeFora._id,
    registered_in: localDeVotoCajueiro._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T12:55:00Z"),
        polling_station: localDeVotoCajueiro._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000092",
    name: "Alexandre Campos",
    gender: "masculine",
    birth_date: new Date("2000-08-14T00:00:00Z"),
    born_in: feiraDeSantana._id,
    registered_in: estacaoDeVotoBeijaFlorDePapoBranco._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T13:10:00Z"),
        polling_station: estacaoDeVotoBeijaFlorDePapoBranco._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000093",
    name: "Bianca Rezende",
    gender: "feminine",
    birth_date: new Date("1968-10-03T00:00:00Z"),
    born_in: vitoriaDaConquista._id,
    registered_in: centroDeVotacaoPedraDoReino._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T14:25:00Z"),
        polling_station: centroDeVotacaoPedraDoReino._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000094",
    name: "Igor Dantas",
    gender: "masculine",
    birth_date: new Date("2001-03-26T00:00:00Z"),
    born_in: vitoriaDaConquista._id,
    registered_in: localDeVotoAndorinha._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T15:40:00Z"),
        polling_station: localDeVotoAndorinha._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000095",
    name: "Luana Moura",
    gender: "feminine",
    birth_date: new Date("1967-12-17T00:00:00Z"),
    born_in: uberlandia._id,
    registered_in: estacaoDeVotoJatoba._id,
    attended_to: [],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000096",
    name: "Hugo Bezerra",
    gender: "masculine",
    birth_date: new Date("2002-07-09T00:00:00Z"),
    born_in: uberlandia._id,
    registered_in: centroDeVotacaoColibri._id,
    attended_to: [],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000097",
    name: "Yasmin Vasconcelos",
    gender: "feminine",
    birth_date: new Date("1966-09-28T00:00:00Z"),
    born_in: uberlandia._id,
    registered_in: centroDeVotacaoMangueira._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T09:15:00Z"),
        polling_station: centroDeVotacaoMangueira._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000098",
    name: "Cauê Guimarães",
    gender: "neutral",
    birth_date: new Date("2003-01-20T00:00:00Z"),
    born_in: camacari._id,
    registered_in: localDeVotoSabiaDoCampo._id,
    attended_to: [],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000099",
    name: "Letícia Duarte",
    gender: "feminine",
    birth_date: new Date("1965-04-11T00:00:00Z"),
    born_in: vitoriaDaConquista._id,
    registered_in: estacaoDeVotoCedro._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T11:40:00Z"),
        polling_station: estacaoDeVotoCedro._id,
      },
    ],
  },
  {
    _id: new ObjectId(),
    cpf_number: "00000000100",
    name: "Arthur Siqueira",
    gender: "masculine",
    birth_date: new Date("2004-06-05T00:00:00Z"),
    born_in: contagem._id,
    registered_in: centroDeVotacaoAraraAzul._id,
    attended_to: [
      {
        _id: new ObjectId(),
        timestamp: new Date("2022-10-02T12:45:00Z"),
        polling_station: centroDeVotacaoAraraAzul._id,
      },
    ],
  },
]);
