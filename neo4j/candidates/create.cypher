// Belo Horizonte
MATCH (cz:Citizen {cpf_number: "00000000049"})
MERGE (cd:Candidate {party: "10"})-[:IS]->(cz);

MATCH (cz:Citizen {cpf_number: "00000000050"})
MERGE (cd:Candidate {party: "20"})-[:IS]->(cz);

MATCH (cz:Citizen {cpf_number: "00000000098"})
MERGE (cd:Candidate {party: "30"})-[:IS]->(cz);

// Uberlândia

MATCH (cz:Citizen {cpf_number: "00000000004"})
MERGE (cd:Candidate {party: "30"})-[:IS]->(cz);

MATCH (cz:Citizen {cpf_number: "00000000084"})
MERGE (cd:Candidate {party: "10"})-[:IS]->(cz);

// Contagem

MATCH (cz:Citizen {cpf_number: "00000000069"})
MERGE (cd:Candidate {party: "20"})-[:IS]->(cz);

MATCH (cz:Citizen {cpf_number: "00000000022"})
MERGE (cd:Candidate {party: "30"})-[:IS]->(cz);

// Juiz de Fora

MATCH (cz:Citizen {cpf_number: "00000000040"})
MERGE (cd:Candidate {party: "10"})-[:IS]->(cz);

MATCH (cz:Citizen {cpf_number: "00000000087"})
MERGE (cd:Candidate {party: "20"})-[:IS]->(cz);

// Salvador

MATCH (cz:Citizen {cpf_number: "00000000009"})
MERGE (cd:Candidate {party: "30"})-[:IS]->(cz);

MATCH (cz:Citizen {cpf_number: "00000000073"})
MERGE (cd:Candidate {party: "10"})-[:IS]->(cz);

// Feira de Santana

MATCH (cz:Citizen {cpf_number: "00000000091"})
MERGE (cd:Candidate {party: "20"})-[:IS]->(cz);

MATCH (cz:Citizen {cpf_number: "00000000076"})
MERGE (cd:Candidate {party: "30"})-[:IS]->(cz);

// Vitória da Conquista

MATCH (cz:Citizen {cpf_number: "00000000077"})
MERGE (cd:Candidate {party: "10"})-[:IS]->(cz);

MATCH (cz:Citizen {cpf_number: "00000000094"})
MERGE (cd:Candidate {party: "20"})-[:IS]->(cz);

// Camaçari

MATCH (cz:Citizen {cpf_number: "00000000079"})
MERGE (cd:Candidate {party: "30"})-[:IS]->(cz);

MATCH (cz:Citizen {cpf_number: "00000000032"})
MERGE (cd:Candidate {party: "10"})-[:IS]->(cz);
