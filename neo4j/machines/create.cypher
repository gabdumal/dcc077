// Belo Horizonte - Centro de Votação Mangueira
MATCH (c1:City {name: "Belo Horizonte"})-[:CONTAINS]->
      (p1:PollingStation {name: "Centro de Votação Mangueira"})
MERGE (p1)-
      [:USES {start_time: datetime("2022-10-02T08:00:00"),
              end_time: datetime("2022-10-02T12:00:00"), status: "broken"}]->
      (m1:Machine {serial_number: "AAA001"})
MERGE (p1)-
      [:USES {start_time: datetime("2022-10-02T12:00:00"),
              end_time: datetime("2022-10-02T17:00:00"), status: "active"}]->
      (m2:Machine {serial_number: "AAA002"});

// Belo Horizonte - Local de Voto Sabiá-do-Campo
MATCH (c1:City {name: "Belo Horizonte"})-[:CONTAINS]->
      (p2:PollingStation {name: "Local de Voto Sabiá-do-Campo"})
MERGE (p2)-
      [:USES {start_time: datetime("2022-10-02T08:00:00"),
              end_time: datetime("2022-10-02T17:00:00"), status: "active"}]->
      (m3:Machine {serial_number: "AAA003"});

// Uberlândia - Estação de Voto Cedro
MATCH (c2:City {name: "Uberlândia"})-[:CONTAINS]->
      (p3:PollingStation {name: "Estação de Voto Cedro"})
MERGE (p3)-
      [:USES {start_time: datetime("2022-10-02T08:00:00"),
              end_time: datetime("2022-10-02T10:00:00"), status: "broken"}]->
      (m4:Machine {serial_number: "AAA004"})
MERGE (p3)-
      [:USES {start_time: datetime("2022-10-02T10:00:00"),
              end_time: datetime("2022-10-02T17:00:00"), status: "active"}]->
      (m5:Machine {serial_number: "AAA005"});

// Uberlândia - Centro de Votação Arara-Azul
MATCH (c2:City {name: "Uberlândia"})-[:CONTAINS]->
      (p4:PollingStation {name: "Centro de Votação Arara-Azul"})
MERGE (p4)-
      [:USES {start_time: datetime("2022-10-02T08:00:00"),
              end_time: datetime("2022-10-02T17:00:00"), status: "active"}]->
      (m6:Machine {serial_number: "AAA006"});

// Contagem - Local de Voto Pau-Brasil
MATCH (c3:City {name: "Contagem"})-[:CONTAINS]->
      (p5:PollingStation {name: "Local de Voto Pau-Brasil"})
MERGE (p5)-
      [:USES {start_time: datetime("2022-10-02T08:00:00"),
              end_time: datetime("2022-10-02T17:00:00"), status: "active"}]->
      (m7:Machine {serial_number: "AAA007"});

// Contagem - Estação de Voto Canário
MATCH (c3:City {name: "Contagem"})-[:CONTAINS]->
      (p6:PollingStation {name: "Estação de Voto Canário"})
MERGE (p6)-
      [:USES {start_time: datetime("2022-10-02T08:00:00"),
              end_time: datetime("2022-10-02T17:00:00"), status: "active"}]->
      (m8:Machine {serial_number: "AAA008"});

// Juiz de Fora - Centro de Votação Ipê-Roxo
MATCH (c4:City {name: "Juiz de Fora"})-[:CONTAINS]->
      (p7:PollingStation {name: "Centro de Votação Ipê-Roxo"})
MERGE (p7)-
      [:USES {start_time: datetime("2022-10-02T08:00:00"),
              end_time: datetime("2022-10-02T17:00:00"), status: "active"}]->
      (m9:Machine {serial_number: "AAA009"});

// Juiz de Fora - Local de Voto Gralha-Azul
MATCH (c4:City {name: "Juiz de Fora"})-[:CONTAINS]->
      (p8:PollingStation {name: "Local de Voto Gralha-Azul"})
MERGE (p8)-
      [:USES {start_time: datetime("2022-10-02T08:00:00"),
              end_time: datetime("2022-10-02T17:00:00"), status: "active"}]->
      (m10:Machine {serial_number: "AAA010"});

// Salvador - Estação de Voto Farol da Barra
MATCH (c5:City {name: "Salvador"})-[:CONTAINS]->
      (p9:PollingStation {name: "Estação de Voto Farol da Barra"})
MERGE (p9)-
      [:USES {start_time: datetime("2022-10-02T08:00:00"),
              end_time: datetime("2022-10-02T17:00:00"), status: "active"}]->
      (m11:Machine {serial_number: "AAA011"});

// Salvador - Centro de Votação Sereia
MATCH (c5:City {name: "Salvador"})-[:CONTAINS]->
      (p10:PollingStation {name: "Centro de Votação Sereia"})
MERGE (p10)-
      [:USES {start_time: datetime("2022-10-02T08:00:00"),
              end_time: datetime("2022-10-02T17:00:00"), status: "active"}]->
      (m12:Machine {serial_number: "AAA012"});

// Feira de Santana - Local de Voto Cajueiro
MATCH (c6:City {name: "Feira de Santana"})-[:CONTAINS]->
      (p11:PollingStation {name: "Local de Voto Cajueiro"})
MERGE (p11)-
      [:USES {start_time: datetime("2022-10-02T08:00:00"),
              end_time: datetime("2022-10-02T17:00:00"), status: "active"}]->
      (m13:Machine {serial_number: "AAA013"});

// Feira de Santana - Estação de Voto Beija-Flor-de-Papo-Branco
MATCH (c6:City {name: "Feira de Santana"})-[:CONTAINS]->
      (p12:PollingStation {name: "Estação de Voto Beija-Flor-de-Papo-Branco"})
MERGE (p12)-
      [:USES {start_time: datetime("2022-10-02T08:00:00"),
              end_time: datetime("2022-10-02T17:00:00"), status: "active"}]->
      (m14:Machine {serial_number: "AAA014"});

// Vitória da Conquista - Centro de Votação Pedra do Reino
MATCH (c7:City {name: "Vitória da Conquista"})-[:CONTAINS]->
      (p13:PollingStation {name: "Centro de Votação Pedra do Reino"})
MERGE (p13)-
      [:USES {start_time: datetime("2022-10-02T08:00:00"),
              end_time: datetime("2022-10-02T17:00:00"), status: "active"}]->
      (m15:Machine {serial_number: "AAA015"});

// Vitória da Conquista - Local de Voto Andorinha
MATCH (c7:City {name: "Vitória da Conquista"})-[:CONTAINS]->
      (p14:PollingStation {name: "Local de Voto Andorinha"})
MERGE (p14)-
      [:USES {start_time: datetime("2022-10-02T08:00:00"),
              end_time: datetime("2022-10-02T17:00:00"), status: "active"}]->
      (m16:Machine {serial_number: "AAA016"});

// Camaçari - Estação de Voto Jatobá
MATCH (c8:City {name: "Camaçari"})-[:CONTAINS]->
      (p15:PollingStation {name: "Estação de Voto Jatobá"})
MERGE (p15)-
      [:USES {start_time: datetime("2022-10-02T08:00:00"),
              end_time: datetime("2022-10-02T17:00:00"), status: "active"}]->
      (m17:Machine {serial_number: "AAA017"});

// Camaçari - Centro de Votação Colibri
MATCH (c8:City {name: "Camaçari"})-[:CONTAINS]->
      (p16:PollingStation {name: "Centro de Votação Colibri"})
MERGE (p16)-
      [:USES {start_time: datetime("2022-10-02T08:00:00"),
              end_time: datetime("2022-10-02T17:00:00"), status: "active"}]->
      (m18:Machine {serial_number: "AAA018"});

// Unused machines
MERGE (m19:Machine {serial_number: "AAA019"});
MERGE (m20:Machine {serial_number: "AAA020"});
