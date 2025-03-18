/* global use, db */

// Select the database to use.
use("tse_online");

db.states.insertMany([
  {
    _id: ObjectId(),
    name: "Minas Gerais",
    cities: [
      {
        _id: ObjectId(),
        polling_stations: [
          {
            _id: ObjectId(),
            name: "Centro de Votação Mangueira",
            machines: [
              {
                _id: ObjectId(),
                serial_number: "AAA002",
              },
              {
                _id: ObjectId(),
                serial_number: "AAA001",
              },
            ],
          },
          {
            _id: ObjectId(),
            name: "Local de Voto Sabiá-do-Campo",
            machines: [
              {
                _id: ObjectId(),
                serial_number: "AAA003",
              },
            ],
          },
        ],
        name: "Belo Horizonte",
      },
      {
        _id: ObjectId(),
        polling_stations: [
          {
            _id: ObjectId(),
            name: "Centro de Votação Arara-Azul",
            machines: [
              {
                _id: ObjectId(),
                serial_number: "AAA006",
              },
            ],
          },
          {
            _id: ObjectId(),
            name: "Estação de Voto Cedro",
            machines: [
              {
                _id: ObjectId(),
                serial_number: "AAA004",
              },
              {
                _id: ObjectId(),
                serial_number: "AAA005",
              },
            ],
          },
        ],
        name: "Uberlândia",
      },
      {
        _id: ObjectId(),
        polling_stations: [
          {
            _id: ObjectId(),
            name: "Local de Voto Pau-Brasil",
            machines: [
              {
                _id: ObjectId(),
                serial_number: "AAA007",
              },
            ],
          },
          {
            _id: ObjectId(),
            name: "Estação de Voto Canário",
            machines: [
              {
                _id: ObjectId(),
                serial_number: "AAA008",
              },
            ],
          },
        ],
        name: "Contagem",
      },
      {
        _id: ObjectId(),
        polling_stations: [
          {
            _id: ObjectId(),
            name: "Centro de Votação Ipê-Roxo",
            machines: [
              {
                _id: ObjectId(),
                serial_number: "AAA009",
              },
            ],
          },
          {
            _id: ObjectId(),
            name: "Local de Voto Gralha-Azul",
            machines: [
              {
                _id: ObjectId(),
                serial_number: "AAA010",
              },
            ],
          },
        ],
        name: "Juiz de Fora",
      },
    ],
  },
  {
    _id: ObjectId(),
    name: "Bahia",
    cities: [
      {
        _id: ObjectId(),
        polling_stations: [
          {
            _id: ObjectId(),
            name: "Estação de Voto Farol da Barra",
            machines: [
              {
                _id: ObjectId(),
                serial_number: "AAA011",
              },
            ],
          },
          {
            _id: ObjectId(),
            name: "Centro de Votação Sereia",
            machines: [
              {
                _id: ObjectId(),
                serial_number: "AAA012",
              },
            ],
          },
        ],
        name: "Salvador",
      },
      {
        _id: ObjectId(),
        polling_stations: [
          {
            _id: ObjectId(),
            name: "Local de Voto Cajueiro",
            machines: [
              {
                _id: ObjectId(),
                serial_number: "AAA013",
              },
            ],
          },
          {
            _id: ObjectId(),
            name: "Estação de Voto Beija-Flor-de-Papo-Branco",
            machines: [
              {
                _id: ObjectId(),
                serial_number: "AAA014",
              },
            ],
          },
        ],
        name: "Feira de Santana",
      },
      {
        _id: ObjectId(),
        polling_stations: [
          {
            _id: ObjectId(),
            name: "Centro de Votação Pedra do Reino",
            machines: [
              {
                _id: ObjectId(),
                serial_number: "AAA015",
              },
            ],
          },
          {
            _id: ObjectId(),
            name: "Local de Voto Andorinha",
            machines: [
              {
                _id: ObjectId(),
                serial_number: "AAA016",
              },
            ],
          },
        ],
        name: "Vitória da Conquista",
      },
      {
        _id: ObjectId(),
        polling_stations: [
          {
            _id: ObjectId(),
            name: "Estação de Voto Jatobá",
            machines: [
              {
                _id: ObjectId(),
                serial_number: "AAA017",
              },
            ],
          },
          {
            _id: ObjectId(),
            name: "Centro de Votação Colibri",
            machines: [
              {
                _id: ObjectId(),
                serial_number: "AAA018",
              },
            ],
          },
        ],
        name: "Camaçari",
      },
    ],
  },
]);
