MATCH (s1:State {name: "São Paulo"})
OPTIONAL MATCH (c1:City {name: "São Paulo"})
OPTIONAL MATCH (c2:City {name: "Campinas"})
OPTIONAL MATCH (c3:City {name: "Santos"})
OPTIONAL MATCH (c4:City {name: "Ribeirão Preto"})
MERGE (s1)-[:CONTAINS]->(c1)
MERGE (s1)-[:CONTAINS]->(c2)
MERGE (s1)-[:CONTAINS]->(c3)
MERGE (s1)-[:CONTAINS]->(c4);

MATCH (s2:State {name: "Rio de Janeiro"})
OPTIONAL MATCH (c5:City {name: "Rio de Janeiro"})
OPTIONAL MATCH (c6:City {name: "Niterói"})
OPTIONAL MATCH (c7:City {name: "Petrópolis"})
OPTIONAL MATCH (c8:City {name: "Campos dos Goytacazes"})
MERGE (s2)-[:CONTAINS]->(c5)
MERGE (s2)-[:CONTAINS]->(c6)
MERGE (s2)-[:CONTAINS]->(c7)
MERGE (s2)-[:CONTAINS]->(c8);

MATCH (s3:State {name: "Minas Gerais"})
OPTIONAL MATCH (c9:City {name: "Belo Horizonte"})
OPTIONAL MATCH (c10:City {name: "Uberlândia"})
OPTIONAL MATCH (c11:City {name: "Contagem"})
OPTIONAL MATCH (c12:City {name: "Juiz de Fora"})
MERGE (s3)-[:CONTAINS]->(c9)
MERGE (s3)-[:CONTAINS]->(c10)
MERGE (s3)-[:CONTAINS]->(c11)
MERGE (s3)-[:CONTAINS]->(c12);

MATCH (s4:State {name: "Bahia"})
OPTIONAL MATCH (c13:City {name: "Salvador"})
OPTIONAL MATCH (c14:City {name: "Feira de Santana"})
OPTIONAL MATCH (c15:City {name: "Vitória da Conquista"})
OPTIONAL MATCH (c16:City {name: "Camaçari"})
MERGE (s4)-[:CONTAINS]->(c13)
MERGE (s4)-[:CONTAINS]->(c14)
MERGE (s4)-[:CONTAINS]->(c15)
MERGE (s4)-[:CONTAINS]->(c16);

MATCH (s5:State {name: "Rio Grande do Sul"})
OPTIONAL MATCH (c17:City {name: "Porto Alegre"})
OPTIONAL MATCH (c18:City {name: "Caxias do Sul"})
OPTIONAL MATCH (c19:City {name: "Pelotas"})
OPTIONAL MATCH (c20:City {name: "Canoas"})
MERGE (s5)-[:CONTAINS]->(c17)
MERGE (s5)-[:CONTAINS]->(c18)
MERGE (s5)-[:CONTAINS]->(c19)
MERGE (s5)-[:CONTAINS]->(c20);
