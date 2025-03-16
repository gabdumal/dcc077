MATCH (s1:State {name: "Minas Gerais"})
OPTIONAL MATCH (c1:City {name: "Belo Horizonte"})
OPTIONAL MATCH (c2:City {name: "Uberlândia"})
OPTIONAL MATCH (c3:City {name: "Contagem"})
OPTIONAL MATCH (c4:City {name: "Juiz de Fora"})
MERGE (s1)-[:CONTAINS]->(c1)
MERGE (s1)-[:CONTAINS]->(c2)
MERGE (s1)-[:CONTAINS]->(c3)
MERGE (s1)-[:CONTAINS]->(c4);

MATCH (s2:State {name: "Bahia"})
OPTIONAL MATCH (c5:City {name: "Salvador"})
OPTIONAL MATCH (c6:City {name: "Feira de Santana"})
OPTIONAL MATCH (c7:City {name: "Vitória da Conquista"})
OPTIONAL MATCH (c8:City {name: "Camaçari"})
MERGE (s2)-[:CONTAINS]->(c5)
MERGE (s2)-[:CONTAINS]->(c6)
MERGE (s2)-[:CONTAINS]->(c7)
MERGE (s2)-[:CONTAINS]->(c8);
