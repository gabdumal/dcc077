// Candidates
MATCH (cd:Candidate)
RETURN cd.party AS party;

// Complete Candidates
MATCH (cd:Candidate)-[:IS]->(cz:Citizen)
OPTIONAL MATCH (cz:Citizen)-[:BORN_IN]->(bc:City)<-[:CONTAINS]-(bs:State)
OPTIONAL MATCH (cz:Citizen)-[:REGISTERED_IN]->(p:PollingStation)<-[:CONTAINS]-
               (rc:City)<-[:CONTAINS]-(rs:State)
WITH cd,
     {cpf_number: cz.cpf_number, name: cz.name, gender: cz.gender,
      birth_date: cz.birth_date, city: {name: bc.name, state: {name: bs.name}},
      polling_station:
      {name: p.name, city: {name: rc.name, state: {name: rs.name}}}} AS citizen
RETURN cd.party AS party, citizen;
