/* global use, db */

// Select the database to use.
use("tse_online");

db.states.insertMany([
  {
    name: "Minas Gerais",
    cities: [
      {
        polling_stations: [
          {
            name: "Centro de Votação Mangueira",
            machines: [
              {
                serial_number: "AAA002",
              },
              {
                serial_number: "AAA001",
              },
            ],
          },
          {
            name: "Local de Voto Sabiá-do-Campo",
            machines: [
              {
                serial_number: "AAA003",
              },
            ],
          },
        ],
        name: "Belo Horizonte",
      },
      {
        polling_stations: [
          {
            name: "Centro de Votação Arara-Azul",
            machines: [
              {
                serial_number: "AAA006",
              },
            ],
          },
          {
            name: "Estação de Voto Cedro",
            machines: [
              {
                serial_number: "AAA004",
              },
              {
                serial_number: "AAA005",
              },
            ],
          },
        ],
        name: "Uberlândia",
      },
      {
        polling_stations: [
          {
            name: "Local de Voto Pau-Brasil",
            machines: [
              {
                serial_number: "AAA007",
              },
            ],
          },
          {
            name: "Estação de Voto Canário",
            machines: [
              {
                serial_number: "AAA008",
              },
            ],
          },
        ],
        name: "Contagem",
      },
      {
        polling_stations: [
          {
            name: "Centro de Votação Ipê-Roxo",
            machines: [
              {
                serial_number: "AAA009",
              },
            ],
          },
          {
            name: "Local de Voto Gralha-Azul",
            machines: [
              {
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
    name: "Bahia",
    cities: [
      {
        polling_stations: [
          {
            name: "Estação de Voto Farol da Barra",
            machines: [
              {
                serial_number: "AAA011",
              },
            ],
          },
          {
            name: "Centro de Votação Sereia",
            machines: [
              {
                serial_number: "AAA012",
              },
            ],
          },
        ],
        name: "Salvador",
      },
      {
        polling_stations: [
          {
            name: "Local de Voto Cajueiro",
            machines: [
              {
                serial_number: "AAA013",
              },
            ],
          },
          {
            name: "Estação de Voto Beija-Flor-de-Papo-Branco",
            machines: [
              {
                serial_number: "AAA014",
              },
            ],
          },
        ],
        name: "Feira de Santana",
      },
      {
        polling_stations: [
          {
            name: "Centro de Votação Pedra do Reino",
            machines: [
              {
                serial_number: "AAA015",
              },
            ],
          },
          {
            name: "Local de Voto Andorinha",
            machines: [
              {
                serial_number: "AAA016",
              },
            ],
          },
        ],
        name: "Vitória da Conquista",
      },
      {
        polling_stations: [
          {
            name: "Estação de Voto Jatobá",
            machines: [
              {
                serial_number: "AAA017",
              },
            ],
          },
          {
            name: "Centro de Votação Colibri",
            machines: [
              {
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
