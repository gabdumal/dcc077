// Belo Horizonte
MATCH (c1:City {name: "Belo Horizonte"})
MERGE (c1)-[:CONTAINS]->
      (p1:PollingStation {name: "Centro de Votação Mangueira"})
MERGE (c1)-[:CONTAINS]->
      (p2:PollingStation {name: "Local de Voto Sabiá-do-Campo"});

// Uberlândia
MATCH (c2:City {name: "Uberlândia"})
MERGE (c2)-[:CONTAINS]->(p3:PollingStation {name: "Estação de Voto Cedro"})
MERGE (c2)-[:CONTAINS]->
      (p4:PollingStation {name: "Centro de Votação Arara-Azul"});

// Contagem
MATCH (c3:City {name: "Contagem"})
MERGE (c3)-[:CONTAINS]->(p5:PollingStation {name: "Local de Voto Pau-Brasil"})
MERGE (c3)-[:CONTAINS]->(p6:PollingStation {name: "Estação de Voto Canário"});

// Juiz de Fora
MATCH (c4:City {name: "Juiz de Fora"})
MERGE (c4)-[:CONTAINS]->(p7:PollingStation {name: "Centro de Votação Ipê-Roxo"})
MERGE (c4)-[:CONTAINS]->(p8:PollingStation {name: "Local de Voto Gralha-Azul"});

// Salvador
MATCH (c5:City {name: "Salvador"})
MERGE (c5)-[:CONTAINS]->
      (p9:PollingStation {name: "Estação de Voto Farol da Barra"})
MERGE (c5)-[:CONTAINS]->(p10:PollingStation {name: "Centro de Votação Sereia"});

// Feira de Santana
MATCH (c6:City {name: "Feira de Santana"})
MERGE (c6)-[:CONTAINS]->(p11:PollingStation {name: "Local de Voto Cajueiro"})
MERGE (c6)-[:CONTAINS]->
      (p12:PollingStation {name: "Estação de Voto Beija-Flor-de-Papo-Branco"});

// Vitória da Conquista
MATCH (c7:City {name: "Vitória da Conquista"})
MERGE (c7)-[:CONTAINS]->
      (p13:PollingStation {name: "Centro de Votação Pedra do Reino"})
MERGE (c7)-[:CONTAINS]->(p14:PollingStation {name: "Local de Voto Andorinha"});

// Camaçari
MATCH (c8:City {name: "Camaçari"})
MERGE (c8)-[:CONTAINS]->(p15:PollingStation {name: "Estação de Voto Jatobá"})
MERGE (c8)-[:CONTAINS]->
      (p16:PollingStation {name: "Centro de Votação Colibri"});
