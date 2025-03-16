MATCH (s1:State {name: "São Paulo"})
OPTIONAL MATCH (s1)-[r1:CONTAINS]->(c1:City {name: "São Paulo"})
OPTIONAL MATCH (s1)-[r2:CONTAINS]->(c2:City {name: "Campinas"})
OPTIONAL MATCH (s1)-[r3:CONTAINS]->(c3:City {name: "Santos"})
OPTIONAL MATCH (s1)-[r4:CONTAINS]->(c4:City {name: "Ribeirão Preto"})
DETACH DELETE r1, r2, r3, r4;

MATCH (s2:State {name: "Rio de Janeiro"})
OPTIONAL MATCH (s2)-[r5:CONTAINS]->(c5:City {name: "Rio de Janeiro"})
OPTIONAL MATCH (s2)-[r6:CONTAINS]->(c6:City {name: "Niterói"})
OPTIONAL MATCH (s2)-[r7:CONTAINS]->(c7:City {name: "Petrópolis"})
OPTIONAL MATCH (s2)-[r8:CONTAINS]->(c8:City {name: "Campos dos Goytacazes"})
DETACH DELETE r5, r6, r7, r8;

MATCH (s3:State {name: "Minas Gerais"})
OPTIONAL MATCH (s3)-[r9:CONTAINS]->(c9:City {name: "Belo Horizonte"})
OPTIONAL MATCH (s3)-[r10:CONTAINS]->(c10:City {name: "Uberlândia"})
OPTIONAL MATCH (s3)-[r11:CONTAINS]->(c11:City {name: "Contagem"})
OPTIONAL MATCH (s3)-[r12:CONTAINS]->(c12:City {name: "Juiz de Fora"})
DETACH DELETE r9, r10, r11, r12;

MATCH (s4:State {name: "Bahia"})
OPTIONAL MATCH (s4)-[r13:CONTAINS]->(c13:City {name: "Salvador"})
OPTIONAL MATCH (s4)-[r14:CONTAINS]->(c14:City {name: "Feira de Santana"})
OPTIONAL MATCH (s4)-[r15:CONTAINS]->(c15:City {name: "Vitória da Conquista"})
OPTIONAL MATCH (s4)-[r16:CONTAINS]->(c16:City {name: "Camaçari"})
DETACH DELETE r13, r14, r15, r16;

MATCH (s5:State {name: "Rio Grande do Sul"})
OPTIONAL MATCH (s5)-[r17:CONTAINS]->(c17:City {name: "Porto Alegre"})
OPTIONAL MATCH (s5)-[r18:CONTAINS]->(c18:City {name: "Caxias do Sul"})
OPTIONAL MATCH (s5)-[r19:CONTAINS]->(c19:City {name: "Pelotas"})
OPTIONAL MATCH (s5)-[r20:CONTAINS]->(c20:City {name: "Canoas"})
DETACH DELETE r17, r18, r19, r20;
