MATCH (s1:State {name: "São Paulo"})
DETACH DELETE s1;

MATCH (s2:State {name: "Rio de Janeiro"})
DETACH DELETE s2;

MATCH (s3:State {name: "Minas Gerais"})
DETACH DELETE s3;

MATCH (s4:State {name: "Bahia"})
DETACH DELETE s4;

MATCH (s5:State {name: "Rio Grande do Sul"})
DETACH DELETE s5;
