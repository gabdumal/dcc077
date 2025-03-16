// Candidates registered in each city and its information
MATCH (s:State)-[:CONTAINS]->(c:City)-[:CONTAINS]->(ps:PollingStation)<-
      [:REGISTERED_IN]-(cz:Citizen)<-[:IS]-(cd:Candidate)
MATCH (bs:State)-[:CONTAINS]->(bc:City)<-[:BORN_IN]-(cz:Citizen)
WITH s, c, COLLECT({party: cd.party, name: cz.name, gender: cz.gender,
                    age: datetime().year - cz.birth_date.year,
                    born_in: {city: bc.name, state: bs.name}}) AS candidates
RETURN s.name AS state, c.name AS city, candidates;

// Citizens who are registered in each polling station and their attendance if they have voted
MATCH (s:State)-[:CONTAINS]->(c:City)-[:CONTAINS]->(ps:PollingStation)<-
      [:REGISTERED_IN]-(cz:Citizen)
MATCH (bs:State)-[:CONTAINS]->(bc:City)<-[:BORN_IN]-(cz)
WITH s, c, ps, cz, bc, bs
OPTIONAL MATCH (ps)<-[a:ATTENDED_TO]-(cz)
WITH s, c,
     ps, COLLECT({cpf_number: cz.cpf_number, name: cz.name,
                  gender: cz.gender, age: datetime().year - cz.birth_date.year,
                  born_in: {city: bc.name, state: bs.name}, attended:
  CASE
    WHEN a IS NOT NULL THEN a.timestamp
    ELSE null
  END}) AS citizens
RETURN s.name AS state, c.name AS city, ps.name AS polling_station, citizens;
