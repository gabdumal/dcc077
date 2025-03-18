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
            uses: [
              {
                _id: ObjectId(),
                start_time: new Date("2022-10-02T12:00:00Z"),
                end_time: new Date("2022-10-02T17:00:00Z"),
                status: "active",
                machine: {
                  _id: ObjectId(),
                  serial_number: "AAA002",
                },
              },
              {
                _id: ObjectId(),
                start_time: new Date("2022-10-02T08:00:00Z"),
                end_time: new Date("2022-10-02T12:00:00Z"),
                status: "broken",
                machine: {
                  _id: ObjectId(),
                  serial_number: "AAA001",
                },
              },
            ],
          },
          {
            _id: ObjectId(),
            name: "Local de Voto Sabiá-do-Campo",
            uses: [
              {
                _id: ObjectId(),
                start_time: new Date("2022-10-02T08:00:00Z"),
                end_time: new Date("2022-10-02T17:00:00Z"),
                status: "active",
                machine: {
                  _id: ObjectId(),
                  serial_number: "AAA003",
                },
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
            uses: [
              {
                _id: ObjectId(),
                start_time: new Date("2022-10-02T08:00:00Z"),
                end_time: new Date("2022-10-02T17:00:00Z"),
                status: "active",
                machine: {
                  _id: ObjectId(),
                  serial_number: "AAA006",
                },
              },
            ],
          },
          {
            _id: ObjectId(),
            name: "Estação de Voto Cedro",
            uses: [
              {
                _id: ObjectId(),
                start_time: new Date("2022-10-02T08:00:00Z"),
                end_time: new Date("2022-10-02T10:00:00Z"),
                status: "broken",
                machine: {
                  _id: ObjectId(),
                  serial_number: "AAA004",
                },
              },
              {
                _id: ObjectId(),
                start_time: new Date("2022-10-02T10:00:00Z"),
                end_time: new Date("2022-10-02T17:00:00Z"),
                status: "active",
                machine: {
                  _id: ObjectId(),
                  serial_number: "AAA005",
                },
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
            uses: [
              {
                _id: ObjectId(),
                start_time: new Date("2022-10-02T08:00:00Z"),
                end_time: new Date("2022-10-02T17:00:00Z"),
                status: "active",
                machine: {
                  _id: ObjectId(),
                  serial_number: "AAA007",
                },
              },
            ],
          },
          {
            _id: ObjectId(),
            name: "Estação de Voto Canário",
            uses: [
              {
                _id: ObjectId(),
                start_time: new Date("2022-10-02T08:00:00Z"),
                end_time: new Date("2022-10-02T17:00:00Z"),
                status: "active",
                machine: {
                  _id: ObjectId(),
                  serial_number: "AAA008",
                },
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
            uses: [
              {
                _id: ObjectId(),
                start_time: new Date("2022-10-02T08:00:00Z"),
                end_time: new Date("2022-10-02T17:00:00Z"),
                status: "active",
                machine: {
                  _id: ObjectId(),
                  serial_number: "AAA009",
                },
              },
            ],
          },
          {
            _id: ObjectId(),
            name: "Local de Voto Gralha-Azul",
            uses: [
              {
                _id: ObjectId(),
                start_time: new Date("2022-10-02T08:00:00Z"),
                end_time: new Date("2022-10-02T17:00:00Z"),
                status: "active",
                machine: {
                  _id: ObjectId(),
                  serial_number: "AAA010",
                },
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
            uses: [
              {
                _id: ObjectId(),
                start_time: new Date("2022-10-02T08:00:00Z"),
                end_time: new Date("2022-10-02T17:00:00Z"),
                status: "active",
                machine: {
                  _id: ObjectId(),
                  serial_number: "AAA011",
                },
              },
            ],
          },
          {
            _id: ObjectId(),
            name: "Centro de Votação Sereia",
            uses: [
              {
                _id: ObjectId(),
                start_time: new Date("2022-10-02T08:00:00Z"),
                end_time: new Date("2022-10-02T17:00:00Z"),
                status: "active",
                machine: {
                  _id: ObjectId(),
                  serial_number: "AAA012",
                },
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
            uses: [
              {
                _id: ObjectId(),
                start_time: new Date("2022-10-02T08:00:00Z"),
                end_time: new Date("2022-10-02T17:00:00Z"),
                status: "active",
                machine: {
                  _id: ObjectId(),
                  serial_number: "AAA013",
                },
              },
            ],
          },
          {
            _id: ObjectId(),
            name: "Estação de Voto Beija-Flor-de-Papo-Branco",
            uses: [
              {
                _id: ObjectId(),
                start_time: new Date("2022-10-02T08:00:00Z"),
                end_time: new Date("2022-10-02T17:00:00Z"),
                status: "active",
                machine: {
                  _id: ObjectId(),
                  serial_number: "AAA014",
                },
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
            uses: [
              {
                _id: ObjectId(),
                start_time: new Date("2022-10-02T08:00:00Z"),
                end_time: new Date("2022-10-02T17:00:00Z"),
                status: "active",
                machine: {
                  _id: ObjectId(),
                  serial_number: "AAA015",
                },
              },
            ],
          },
          {
            _id: ObjectId(),
            name: "Local de Voto Andorinha",
            uses: [
              {
                _id: ObjectId(),
                start_time: new Date("2022-10-02T08:00:00Z"),
                end_time: new Date("2022-10-02T17:00:00Z"),
                status: "active",
                machine: {
                  _id: ObjectId(),
                  serial_number: "AAA016",
                },
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
            uses: [
              {
                _id: ObjectId(),
                start_time: new Date("2022-10-02T08:00:00Z"),
                end_time: new Date("2022-10-02T17:00:00Z"),
                status: "active",
                machine: {
                  _id: ObjectId(),
                  serial_number: "AAA017",
                },
              },
            ],
          },
          {
            _id: ObjectId(),
            name: "Centro de Votação Colibri",
            uses: [
              {
                _id: ObjectId(),
                start_time: new Date("2022-10-02T08:00:00Z"),
                end_time: new Date("2022-10-02T17:00:00Z"),
                status: "active",
                machine: {
                  _id: ObjectId(),
                  serial_number: "AAA018",
                },
              },
            ],
          },
        ],
        name: "Camaçari",
      },
    ],
  },
]);
