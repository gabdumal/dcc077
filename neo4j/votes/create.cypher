/* Casts a vote for the candidate of the N party who is registered in the city where the machine is used */
// Belo Horizonte
MATCH (m:Machine {serial_number: "AAA001"})<-[:USES]-(p:PollingStation)<-
      [:CONTAINS]-(c:City)<-[:CONTAINS]-(s:State)
MATCH (s:State)-[:CONTAINS]->(c:City)-[:CONTAINS]->(ps:PollingStation)<-
      [:REGISTERED_IN]-(cz:Citizen)<-[:IS]-(cd:Candidate {party: "10"})
WITH cd, m
WHERE cd IS NOT NULL
MERGE (m)<-[:CASTS {number: 1}]->(cd);

MATCH (m:Machine {serial_number: "AAA001"})<-[:USES]-(p:PollingStation)<-
      [:CONTAINS]-(c:City)<-[:CONTAINS]-(s:State)
MATCH (s:State)-[:CONTAINS]->(c:City)-[:CONTAINS]->(ps:PollingStation)<-
      [:REGISTERED_IN]-(cz:Citizen)<-[:IS]-(cd:Candidate {party: "30"})
WITH cd, m
WHERE cd IS NOT NULL
MERGE (m)<-[:CASTS {number: 2}]->(cd);

MATCH (m:Machine {serial_number: "AAA002"})<-[:USES]-(p:PollingStation)<-
      [:CONTAINS]-(c:City)<-[:CONTAINS]-(s:State)
MATCH (s:State)-[:CONTAINS]->(c:City)-[:CONTAINS]->(ps:PollingStation)<-
      [:REGISTERED_IN]-(cz:Citizen)<-[:IS]-(cd:Candidate {party: "10"})
WITH cd, m
WHERE cd IS NOT NULL
MERGE (m)<-[:CASTS {number: 1}]->(cd);

MATCH (m:Machine {serial_number: "AAA002"})<-[:USES]-(p:PollingStation)<-
      [:CONTAINS]-(c:City)<-[:CONTAINS]-(s:State)
MATCH (s:State)-[:CONTAINS]->(c:City)-[:CONTAINS]->(ps:PollingStation)<-
      [:REGISTERED_IN]-(cz:Citizen)<-[:IS]-(cd:Candidate {party: "30"})
WITH cd, m
WHERE cd IS NOT NULL
MERGE (m)<-[:CASTS {number: 2}]->(cd)
MERGE (m)<-[:CASTS {number: 3}]->(cd);

MATCH (m:Machine {serial_number: "AAA003"})<-[:USES]-(p:PollingStation)<-
      [:CONTAINS]-(c:City)<-[:CONTAINS]-(s:State)
MATCH (s:State)-[:CONTAINS]->(c:City)-[:CONTAINS]->(ps:PollingStation)<-
      [:REGISTERED_IN]-(cz:Citizen)<-[:IS]-(cd:Candidate {party: "10"})
WITH cd, m
WHERE cd IS NOT NULL
MERGE (m)<-[:CASTS {number: 1}]->(cd)
MERGE (m)<-[:CASTS {number: 2}]->(cd);

MATCH (m:Machine {serial_number: "AAA003"})<-[:USES]-(p:PollingStation)<-
      [:CONTAINS]-(c:City)<-[:CONTAINS]-(s:State)
MATCH (s:State)-[:CONTAINS]->(c:City)-[:CONTAINS]->(ps:PollingStation)<-
      [:REGISTERED_IN]-(cz:Citizen)<-[:IS]-(cd:Candidate {party: "30"})
WITH cd, m
WHERE cd IS NOT NULL
MERGE (m)<-[:CASTS {number: 3}]->(cd)
MERGE (m)<-[:CASTS {number: 4}]->(cd)
MERGE (m)<-[:CASTS {number: 5}]->(cd);

// Uberlândia
MATCH (m:Machine {serial_number: "AAA004"})<-[:USES]-(p:PollingStation)<-
      [:CONTAINS]-(c:City)<-[:CONTAINS]-(s:State)
MATCH (s:State)-[:CONTAINS]->(c:City)-[:CONTAINS]->(ps:PollingStation)<-
      [:REGISTERED_IN]-(cz:Citizen)<-[:IS]-(cd:Candidate {party: "10"})
WITH cd, m
WHERE cd IS NOT NULL
MERGE (m)<-[:CASTS {number: 1}]->(cd);

MATCH (m:Machine {serial_number: "AAA004"})<-[:USES]-(p:PollingStation)<-
      [:CONTAINS]-(c:City)<-[:CONTAINS]-(s:State)
MATCH (s:State)-[:CONTAINS]->(c:City)-[:CONTAINS]->(ps:PollingStation)<-
      [:REGISTERED_IN]-(cz:Citizen)<-[:IS]-(cd:Candidate {party: "30"})
WITH cd, m
WHERE cd IS NOT NULL
MERGE (m)<-[:CASTS {number: 2}]->(cd)
MERGE (m)<-[:CASTS {number: 3}]->(cd);

MATCH (m:Machine {serial_number: "AAA005"})<-[:USES]-(p:PollingStation)<-
      [:CONTAINS]-(c:City)<-[:CONTAINS]-(s:State)
MATCH (s:State)-[:CONTAINS]->(c:City)-[:CONTAINS]->(ps:PollingStation)<-
      [:REGISTERED_IN]-(cz:Citizen)<-[:IS]-(cd:Candidate {party: "10"})
WITH cd, m
WHERE cd IS NOT NULL
MERGE (m)<-[:CASTS {number: 1}]->(cd);

MATCH (m:Machine {serial_number: "AAA005"})<-[:USES]-(p:PollingStation)<-
      [:CONTAINS]-(c:City)<-[:CONTAINS]-(s:State)
MATCH (s:State)-[:CONTAINS]->(c:City)-[:CONTAINS]->(ps:PollingStation)<-
      [:REGISTERED_IN]-(cz:Citizen)<-[:IS]-(cd:Candidate {party: "30"})
WITH cd, m
WHERE cd IS NOT NULL
MERGE (m)<-[:CASTS {number: 2}]->(cd);

MATCH (m:Machine {serial_number: "AAA006"})<-[:USES]-(p:PollingStation)<-
      [:CONTAINS]-(c:City)<-[:CONTAINS]-(s:State)
MATCH (s:State)-[:CONTAINS]->(c:City)-[:CONTAINS]->(ps:PollingStation)<-
      [:REGISTERED_IN]-(cz:Citizen)<-[:IS]-(cd:Candidate {party: "10"})
WITH cd, m
WHERE cd IS NOT NULL
MERGE (m)<-[:CASTS {number: 1}]->(cd)
MERGE (m)<-[:CASTS {number: 2}]->(cd)
MERGE (m)<-[:CASTS {number: 3}]->(cd);

MATCH (m:Machine {serial_number: "AAA006"})<-[:USES]-(p:PollingStation)<-
      [:CONTAINS]-(c:City)<-[:CONTAINS]-(s:State)
MATCH (s:State)-[:CONTAINS]->(c:City)-[:CONTAINS]->(ps:PollingStation)<-
      [:REGISTERED_IN]-(cz:Citizen)<-[:IS]-(cd:Candidate {party: "30"})
WITH cd, m
WHERE cd IS NOT NULL
MERGE (m)<-[:CASTS {number: 4}]->(cd)
MERGE (m)<-[:CASTS {number: 5}]->(cd)
MERGE (m)<-[:CASTS {number: 6}]->(cd);

// Contagem

MATCH (m:Machine {serial_number: "AAA007"})<-[:USES]-(p:PollingStation)<-
      [:CONTAINS]-(c:City)<-[:CONTAINS]-(s:State)
MATCH (s:State)-[:CONTAINS]->(c:City)-[:CONTAINS]->(ps:PollingStation)<-
      [:REGISTERED_IN]-(cz:Citizen)<-[:IS]-(cd:Candidate {party: "20"})
WITH cd, m
WHERE cd IS NOT NULL
MERGE (m)<-[:CASTS {number: 1}]->(cd)
MERGE (m)<-[:CASTS {number: 2}]->(cd)
MERGE (m)<-[:CASTS {number: 3}]->(cd);

MATCH (m:Machine {serial_number: "AAA007"})<-[:USES]-(p:PollingStation)<-
      [:CONTAINS]-(c:City)<-[:CONTAINS]-(s:State)
MATCH (s:State)-[:CONTAINS]->(c:City)-[:CONTAINS]->(ps:PollingStation)<-
      [:REGISTERED_IN]-(cz:Citizen)<-[:IS]-(cd:Candidate {party: "30"})
WITH cd, m
WHERE cd IS NOT NULL
MERGE (m)<-[:CASTS {number: 4}]->(cd)
MERGE (m)<-[:CASTS {number: 5}]->(cd);

MATCH (m:Machine {serial_number: "AAA008"})<-[:USES]-(p:PollingStation)<-
      [:CONTAINS]-(c:City)<-[:CONTAINS]-(s:State)
MATCH (s:State)-[:CONTAINS]->(c:City)-[:CONTAINS]->(ps:PollingStation)<-
      [:REGISTERED_IN]-(cz:Citizen)<-[:IS]-(cd:Candidate {party: "20"})
WITH cd, m
WHERE cd IS NOT NULL
MERGE (m)<-[:CASTS {number: 1}]->(cd);

MATCH (m:Machine {serial_number: "AAA008"})<-[:USES]-(p:PollingStation)<-
      [:CONTAINS]-(c:City)<-[:CONTAINS]-(s:State)
MATCH (s:State)-[:CONTAINS]->(c:City)-[:CONTAINS]->(ps:PollingStation)<-
      [:REGISTERED_IN]-(cz:Citizen)<-[:IS]-(cd:Candidate {party: "30"})
WITH cd, m
WHERE cd IS NOT NULL
MERGE (m)<-[:CASTS {number: 2}]->(cd);

// Juiz de Fora

MATCH (m:Machine {serial_number: "AAA009"})<-[:USES]-(p:PollingStation)<-
      [:CONTAINS]-(c:City)<-[:CONTAINS]-(s:State)
MATCH (s:State)-[:CONTAINS]->(c:City)-[:CONTAINS]->(ps:PollingStation)<-
      [:REGISTERED_IN]-(cz:Citizen)<-[:IS]-(cd:Candidate {party: "10"})
WITH cd, m
WHERE cd IS NOT NULL
MERGE (m)<-[:CASTS {number: 1}]->(cd)
MERGE (m)<-[:CASTS {number: 2}]->(cd)
MERGE (m)<-[:CASTS {number: 3}]->(cd);

MATCH (m:Machine {serial_number: "AAA009"})<-[:USES]-(p:PollingStation)<-
      [:CONTAINS]-(c:City)<-[:CONTAINS]-(s:State)
MATCH (s:State)-[:CONTAINS]->(c:City)-[:CONTAINS]->(ps:PollingStation)<-
      [:REGISTERED_IN]-(cz:Citizen)<-[:IS]-(cd:Candidate {party: "20"})
WITH cd, m
WHERE cd IS NOT NULL
MERGE (m)<-[:CASTS {number: 4}]->(cd);

MATCH (m:Machine {serial_number: "AAA010"})<-[:USES]-(p:PollingStation)<-
      [:CONTAINS]-(c:City)<-[:CONTAINS]-(s:State)
MATCH (s:State)-[:CONTAINS]->(c:City)-[:CONTAINS]->(ps:PollingStation)<-
      [:REGISTERED_IN]-(cz:Citizen)<-[:IS]-(cd:Candidate {party: "10"})
WITH cd, m
WHERE cd IS NOT NULL
MERGE (m)<-[:CASTS {number: 1}]->(cd)
MERGE (m)<-[:CASTS {number: 2}]->(cd);

MATCH (m:Machine {serial_number: "AAA010"})<-[:USES]-(p:PollingStation)<-
      [:CONTAINS]-(c:City)<-[:CONTAINS]-(s:State)
MATCH (s:State)-[:CONTAINS]->(c:City)-[:CONTAINS]->(ps:PollingStation)<-
      [:REGISTERED_IN]-(cz:Citizen)<-[:IS]-(cd:Candidate {party: "20"})
WITH cd, m
WHERE cd IS NOT NULL
MERGE (m)<-[:CASTS {number: 3}]->(cd)
MERGE (m)<-[:CASTS {number: 4}]->(cd)
MERGE (m)<-[:CASTS {number: 5}]->(cd);

// Salvador

MATCH (m:Machine {serial_number: "AAA011"})<-[:USES]-(p:PollingStation)<-
      [:CONTAINS]-(c:City)<-[:CONTAINS]-(s:State)
MATCH (s:State)-[:CONTAINS]->(c:City)-[:CONTAINS]->(ps:PollingStation)<-
      [:REGISTERED_IN]-(cz:Citizen)<-[:IS]-(cd:Candidate {party: "10"})
WITH cd, m
WHERE cd IS NOT NULL
MERGE (m)<-[:CASTS {number: 1}]->(cd)
MERGE (m)<-[:CASTS {number: 2}]->(cd);

MATCH (m:Machine {serial_number: "AAA011"})<-[:USES]-(p:PollingStation)<-
      [:CONTAINS]-(c:City)<-[:CONTAINS]-(s:State)
MATCH (s:State)-[:CONTAINS]->(c:City)-[:CONTAINS]->(ps:PollingStation)<-
      [:REGISTERED_IN]-(cz:Citizen)<-[:IS]-(cd:Candidate {party: "30"})
WITH cd, m
WHERE cd IS NOT NULL
MERGE (m)<-[:CASTS {number: 3}]->(cd)
MERGE (m)<-[:CASTS {number: 4}]->(cd);

MATCH (m:Machine {serial_number: "AAA012"})<-[:USES]-(p:PollingStation)<-
      [:CONTAINS]-(c:City)<-[:CONTAINS]-(s:State)
MATCH (s:State)-[:CONTAINS]->(c:City)-[:CONTAINS]->(ps:PollingStation)<-
      [:REGISTERED_IN]-(cz:Citizen)<-[:IS]-(cd:Candidate {party: "10"})
WITH cd, m
WHERE cd IS NOT NULL
MERGE (m)<-[:CASTS {number: 1}]->(cd)
MERGE (m)<-[:CASTS {number: 2}]->(cd)
MERGE (m)<-[:CASTS {number: 3}]->(cd);

MATCH (m:Machine {serial_number: "AAA012"})<-[:USES]-(p:PollingStation)<-
      [:CONTAINS]-(c:City)<-[:CONTAINS]-(s:State)
MATCH (s:State)-[:CONTAINS]->(c:City)-[:CONTAINS]->(ps:PollingStation)<-
      [:REGISTERED_IN]-(cz:Citizen)<-[:IS]-(cd:Candidate {party: "30"})
WITH cd, m
WHERE cd IS NOT NULL
MERGE (m)<-[:CASTS {number: 4}]->(cd)
MERGE (m)<-[:CASTS {number: 5}]->(cd);

// Feira de Santana

MATCH (m:Machine {serial_number: "AAA013"})<-[:USES]-(p:PollingStation)<-
      [:CONTAINS]-(c:City)<-[:CONTAINS]-(s:State)
MATCH (s:State)-[:CONTAINS]->(c:City)-[:CONTAINS]->(ps:PollingStation)<-
      [:REGISTERED_IN]-(cz:Citizen)<-[:IS]-(cd:Candidate {party: "20"})
WITH cd, m
WHERE cd IS NOT NULL
MERGE (m)<-[:CASTS {number: 1}]->(cd)
MERGE (m)<-[:CASTS {number: 2}]->(cd)
MERGE (m)<-[:CASTS {number: 3}]->(cd);

MATCH (m:Machine {serial_number: "AAA013"})<-[:USES]-(p:PollingStation)<-
      [:CONTAINS]-(c:City)<-[:CONTAINS]-(s:State)
MATCH (s:State)-[:CONTAINS]->(c:City)-[:CONTAINS]->(ps:PollingStation)<-
      [:REGISTERED_IN]-(cz:Citizen)<-[:IS]-(cd:Candidate {party: "30"})
WITH cd, m
WHERE cd IS NOT NULL
MERGE (m)<-[:CASTS {number: 4}]->(cd)
MERGE (m)<-[:CASTS {number: 5}]->(cd);

MATCH (m:Machine {serial_number: "AAA014"})<-[:USES]-(p:PollingStation)<-
      [:CONTAINS]-(c:City)<-[:CONTAINS]-(s:State)
MATCH (s:State)-[:CONTAINS]->(c:City)-[:CONTAINS]->(ps:PollingStation)<-
      [:REGISTERED_IN]-(cz:Citizen)<-[:IS]-(cd:Candidate {party: "20"})
WITH cd, m
WHERE cd IS NOT NULL
MERGE (m)<-[:CASTS {number: 1}]->(cd)
MERGE (m)<-[:CASTS {number: 2}]->(cd);

MATCH (m:Machine {serial_number: "AAA014"})<-[:USES]-(p:PollingStation)<-
      [:CONTAINS]-(c:City)<-[:CONTAINS]-(s:State)
MATCH (s:State)-[:CONTAINS]->(c:City)-[:CONTAINS]->(ps:PollingStation)<-
      [:REGISTERED_IN]-(cz:Citizen)<-[:IS]-(cd:Candidate {party: "30"})
WITH cd, m
WHERE cd IS NOT NULL
MERGE (m)<-[:CASTS {number: 3}]->(cd)
MERGE (m)<-[:CASTS {number: 4}]->(cd);

// Vitória da Conquista

MATCH (m:Machine {serial_number: "AAA015"})<-[:USES]-(p:PollingStation)<-
      [:CONTAINS]-(c:City)<-[:CONTAINS]-(s:State)
MATCH (s:State)-[:CONTAINS]->(c:City)-[:CONTAINS]->(ps:PollingStation)<-
      [:REGISTERED_IN]-(cz:Citizen)<-[:IS]-(cd:Candidate {party: "10"})
WITH cd, m
WHERE cd IS NOT NULL
MERGE (m)<-[:CASTS {number: 1}]->(cd)
MERGE (m)<-[:CASTS {number: 2}]->(cd);

MATCH (m:Machine {serial_number: "AAA015"})<-[:USES]-(p:PollingStation)<-
      [:CONTAINS]-(c:City)<-[:CONTAINS]-(s:State)
MATCH (s:State)-[:CONTAINS]->(c:City)-[:CONTAINS]->(ps:PollingStation)<-
      [:REGISTERED_IN]-(cz:Citizen)<-[:IS]-(cd:Candidate {party: "20"})
WITH cd, m
WHERE cd IS NOT NULL
MERGE (m)<-[:CASTS {number: 3}]->(cd);

MATCH (m:Machine {serial_number: "AAA016"})<-[:USES]-(p:PollingStation)<-
      [:CONTAINS]-(c:City)<-[:CONTAINS]-(s:State)
MATCH (s:State)-[:CONTAINS]->(c:City)-[:CONTAINS]->(ps:PollingStation)<-
      [:REGISTERED_IN]-(cz:Citizen)<-[:IS]-(cd:Candidate {party: "10"})
WITH cd, m
WHERE cd IS NOT NULL
MERGE (m)<-[:CASTS {number: 1}]->(cd)
MERGE (m)<-[:CASTS {number: 2}]->(cd);

MATCH (m:Machine {serial_number: "AAA016"})<-[:USES]-(p:PollingStation)<-
      [:CONTAINS]-(c:City)<-[:CONTAINS]-(s:State)
MATCH (s:State)-[:CONTAINS]->(c:City)-[:CONTAINS]->(ps:PollingStation)<-
      [:REGISTERED_IN]-(cz:Citizen)<-[:IS]-(cd:Candidate {party: "20"})
WITH cd, m
WHERE cd IS NOT NULL
MERGE (m)<-[:CASTS {number: 3}]->(cd)
MERGE (m)<-[:CASTS {number: 4}]->(cd);

// Camaçari

MATCH (m:Machine {serial_number: "AAA017"})<-[:USES]-(p:PollingStation)<-
      [:CONTAINS]-(c:City)<-[:CONTAINS]-(s:State)
MATCH (s:State)-[:CONTAINS]->(c:City)-[:CONTAINS]->(ps:PollingStation)<-
      [:REGISTERED_IN]-(cz:Citizen)<-[:IS]-(cd:Candidate {party: "10"})
WITH cd, m
WHERE cd IS NOT NULL
MERGE (m)<-[:CASTS {number: 1}]->(cd)
MERGE (m)<-[:CASTS {number: 2}]->(cd);

MATCH (m:Machine {serial_number: "AAA017"})<-[:USES]-(p:PollingStation)<-
      [:CONTAINS]-(c:City)<-[:CONTAINS]-(s:State)
MATCH (s:State)-[:CONTAINS]->(c:City)-[:CONTAINS]->(ps:PollingStation)<-
      [:REGISTERED_IN]-(cz:Citizen)<-[:IS]-(cd:Candidate {party: "30"})
WITH cd, m
WHERE cd IS NOT NULL
MERGE (m)<-[:CASTS {number: 3}]->(cd)
MERGE (m)<-[:CASTS {number: 4}]->(cd);

MATCH (m:Machine {serial_number: "AAA018"})<-[:USES]-(p:PollingStation)<-
      [:CONTAINS]-(c:City)<-[:CONTAINS]-(s:State)
MATCH (s:State)-[:CONTAINS]->(c:City)-[:CONTAINS]->(ps:PollingStation)<-
      [:REGISTERED_IN]-(cz:Citizen)<-[:IS]-(cd:Candidate {party: "10"})
WITH cd, m
WHERE cd IS NOT NULL
MERGE (m)<-[:CASTS {number: 1}]->(cd)
MERGE (m)<-[:CASTS {number: 2}]->(cd);

MATCH (m:Machine {serial_number: "AAA018"})<-[:USES]-(p:PollingStation)<-
      [:CONTAINS]-(c:City)<-[:CONTAINS]-(s:State)
MATCH (s:State)-[:CONTAINS]->(c:City)-[:CONTAINS]->(ps:PollingStation)<-
      [:REGISTERED_IN]-(cz:Citizen)<-[:IS]-(cd:Candidate {party: "30"})
WITH cd, m
WHERE cd IS NOT NULL
MERGE (m)<-[:CASTS {number: 3}]->(cd);
