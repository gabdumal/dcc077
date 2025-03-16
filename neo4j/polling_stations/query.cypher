// Polling Stations
MATCH (p:PollingStation)
RETURN p.name AS name;

// Complete Polling Stations
MATCH (p:PollingStation)
OPTIONAL MATCH (s:State)-[:CONTAINS]->(c:City)-[:CONTAINS]->(p)
WITH p, {name: c.name, state: {name: s.name}} AS city
RETURN p.name AS name, city;

// Polling Stations with Machines
MATCH (p:PollingStation)-[r:USES]->(m:Machine)
WITH p.name AS polling_station,
     COLLECT({serial_number: m.serial_number}) AS machines
RETURN polling_station AS name, machines;

// Polling Stations with registered Citizens
MATCH (cz:Citizen)-[:REGISTERED_IN]->(ps:PollingStation)
WITH ps, COLLECT({cpf_number: cz.cpf_number, name: cz.name, gender: cz.gender,
                  birth_date: cz.birth_date}) AS citizens
RETURN ps.name AS name, citizens;

// Polling Stations with registered Citizens who are Candidates
MATCH (cd:Candidate)-[:IS]->(cz:Citizen)-[:REGISTERED_IN]->(ps:PollingStation)
WITH ps, COLLECT({cpf_number: cz.cpf_number, name: cz.name, gender: cz.gender,
                  birth_date: cz.birth_date, candidature: {party: cd.party}})
         AS citizens
RETURN ps.name AS name, citizens;
