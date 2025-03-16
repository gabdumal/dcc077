MATCH (s1:State {name: "Minas Gerais"})
DETACH DELETE s1;

MATCH (s2:State {name: "Bahia"})
DETACH DELETE s2;
