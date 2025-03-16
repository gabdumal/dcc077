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
MERGE (m)<-[:CASTS {number: 1}]->(cd)
MERGE (m)<-[:CASTS {number: 2}]->(cd);
