MATCH (s1:State {name: "Minas Gerais"})
OPTIONAL MATCH (s1)-[r1:CONTAINS]->(c1:City {name: "Belo Horizonte"})
OPTIONAL MATCH (s1)-[r2:CONTAINS]->(c2:City {name: "Uberlândia"})
OPTIONAL MATCH (s1)-[r3:CONTAINS]->(c3:City {name: "Contagem"})
OPTIONAL MATCH (s1)-[r4:CONTAINS]->(c4:City {name: "Juiz de Fora"})
DETACH DELETE r1, r2, r3, r4;

MATCH (s2:State {name: "Bahia"})
OPTIONAL MATCH (s2)-[r5:CONTAINS]->(c5:City {name: "Salvador"})
OPTIONAL MATCH (s2)-[r6:CONTAINS]->(c6:City {name: "Feira de Santana"})
OPTIONAL MATCH (s2)-[r7:CONTAINS]->(c7:City {name: "Vitória da Conquista"})
OPTIONAL MATCH (s2)-[r8:CONTAINS]->(c8:City {name: "Camaçari"})
DETACH DELETE r5, r6, r7, r8;
