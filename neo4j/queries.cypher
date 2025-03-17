// 1. Candidates registered in each city and its information
MATCH (s:State)-[:CONTAINS]->(c:City)-[:CONTAINS]->(p:PollingStation)<-
      [:REGISTERED_IN]-(cz:Citizen)<-[:IS]-(cd:Candidate)
MATCH (bs:State)-[:CONTAINS]->(bc:City)<-[:BORN_IN]-(cz:Citizen)
WITH s, c, COLLECT({party: cd.party, name: cz.name, gender: cz.gender,
                    age: datetime().year - cz.birth_date.year,
                    born_in: {city: bc.name, state: bs.name}}) AS candidates
RETURN s.name AS state, c.name AS city, candidates;

// 2. Citizens who are registered in each polling station and their attendance if they have attended
MATCH (s:State)-[:CONTAINS]->(c:City)-[:CONTAINS]->(p:PollingStation)<-
      [:REGISTERED_IN]-(cz:Citizen)
MATCH (bs:State)-[:CONTAINS]->(bc:City)<-[:BORN_IN]-(cz)
WITH s, c, p, cz, bc, bs
OPTIONAL MATCH (p)<-[a:ATTENDED_TO]-(cz)
WITH s,
     c, p, COLLECT({cpf_number: cz.cpf_number, name: cz.name, gender: cz.gender,
                    age: datetime().year - cz.birth_date.year,
                    born_in: {city: bc.name, state: bs.name}, attended:
  CASE
    WHEN a IS NOT NULL THEN a.timestamp
    ELSE null
  END}) AS citizens
RETURN s.name AS state, c.name AS city, p.name AS polling_station, citizens;

// 2.1. Citizens who are registered in each city and their attendance if they have attended
MATCH (s:State)-[:CONTAINS]->(c:City)-[:CONTAINS]->(p:PollingStation)<-
      [:REGISTERED_IN]-(cz:Citizen)
MATCH (bs:State)-[:CONTAINS]->(bc:City)<-[:BORN_IN]-(cz)
WITH s, c, cz, bc, bs
OPTIONAL MATCH (p)<-[a:ATTENDED_TO]-(cz)
WITH s, c, COLLECT({cpf_number: cz.cpf_number, name: cz.name, gender: cz.gender,
                    age: datetime().year - cz.birth_date.year,
                    born_in: {city: bc.name, state: bs.name}, attended:
  CASE
    WHEN a IS NOT NULL THEN a.timestamp
    ELSE null
  END}) AS citizens
RETURN s.name AS state, c.name AS city, citizens;

// 3. Count how many citizens have registered in and attended to each polling station in each city
MATCH (s:State)-[:CONTAINS]->(c:City)-[:CONTAINS]->(p:PollingStation)<-
      [:REGISTERED_IN]-(cz:Citizen)
WITH s, c, p, COUNT(cz) AS registered
OPTIONAL MATCH (p)<-[a:ATTENDED_TO]-(cz)
WITH s, c, p, registered, COUNT(a) AS attended
MATCH (m:Machine)<-[:USES]-(p)
WITH s, c, p, COLLECT({serial_number: m.serial_number}) AS machines, registered,
     attended
WITH s, c, COLLECT({name: p.name, registered: registered, attended: attended,
                    machines: machines}) AS polling_stations,
     SUM(registered) AS total_registered, SUM(attended) AS total_attended
RETURN s.name AS state, c.name AS city, polling_stations, total_registered,
       total_attended;

// 4. Count how many votes each candidate has received in each machine
MATCH (cz:Citizen)<-[:IS]-(cd:Candidate)<-[:CASTS]-(m:Machine)<-[:USES]-
      (p:PollingStation)<-[:CONTAINS]-(c:City)<-[:CONTAINS]-(s:State)
WITH s, c, p, m, cd, cz, COUNT(cz) AS votes
WITH s, c, p,
     m, COLLECT({name: cz.name, cpf_number: cz.cpf_number, gender: cz.gender,
                 age: datetime().year - cz.birth_date.year, party: cd.party,
                 votes: votes}) AS candidates
WITH s, c, p, COLLECT({serial_number: m.serial_number, candidates: candidates})
              AS machines
WITH s, c,
     COLLECT({polling_station: p.name, machines: machines}) AS polling_stations
RETURN s.name AS state, c.name AS city, polling_stations;

// 4.1. Count how many votes each candidate has received in each machine, ans the total number of attended citizens
MATCH (cd:Candidate)<-[:CASTS]-(m:Machine)<-[:USES]-(p:PollingStation)<-
      [:CONTAINS]-(c:City)<-[:CONTAINS]-(s:State)
WITH s, c, p, m, cd, COUNT(cd) AS votes
WITH s, c, p, m, COLLECT({party: cd.party, votes: votes}) AS candidates
WITH s, c, p, COLLECT({serial_number: m.serial_number, candidates: candidates})
              AS machines
MATCH (cz:Citizen)-[:ATTENDED_TO]->(p)
WITH s, c, p, machines, COUNT(cz) AS attended
RETURN s.name AS state, c.name AS city, p.name AS polling_station, attended,
       machines;

// 5. Count how many votes each candidate has received in each polling_station, and the total number of attended and registered citizens
MATCH (cd:Candidate)<-[v:CASTS]-(m:Machine)<-[:USES]-(p:PollingStation)<-
      [:CONTAINS]-(c:City)<-[:CONTAINS]-(s:State)
WITH s, c, p, cd, COUNT(v) AS votes
WITH s, c, p, COLLECT({party: cd.party, votes: votes}) AS candidates,
     SUM(votes) AS valid_votes
MATCH (:Citizen)-[r:REGISTERED_IN]->(p)
WITH s, c, p, candidates, valid_votes, COUNT(r) AS registered
OPTIONAL MATCH (:Citizen)-[a:ATTENDED_TO]->(p)
WITH s, c, p, candidates, valid_votes, registered, COUNT(a) AS attended
WITH s, c, p, candidates, valid_votes, registered, attended,
     attended - valid_votes AS blank_votes
WITH s,
     c, COLLECT({name: p.name, candidates: candidates, valid_votes: valid_votes,
                 blank_votes: blank_votes, registered: registered,
                 attended: attended}) AS polling_stations
RETURN s.name AS state, c.name AS city, polling_stations;

// 5.1. Count how many votes each candidate has received in each city, and the total number of attended citizens
MATCH (cd:Candidate)<-[v:CASTS]-(m:Machine)<-[:USES]-(p:PollingStation)<-
      [:CONTAINS]-(c:City)<-[:CONTAINS]-(s:State)
WITH s, c, cd, COUNT(v) AS votes
WITH s, c, COLLECT({party: cd.party, votes: votes}) AS candidates,
     SUM(votes) AS valid_votes
MATCH (:Citizen)-[r:REGISTERED_IN]->(p:PollingStation)<-[:CONTAINS]-(c)
WITH s, c, candidates, valid_votes, COUNT(r) AS registered
OPTIONAL MATCH (:Citizen)-[a:ATTENDED_TO]->(p:PollingStation)<-[:CONTAINS]-(c)
WITH s, c, candidates, valid_votes, registered, COUNT(a) AS attended
WITH s, c, candidates, valid_votes, registered, attended,
     attended - valid_votes AS blank_votes
RETURN s.name AS state, c.name AS city, candidates, valid_votes, blank_votes,
       registered, attended;

// 6. Get statistics about votes in each city
MATCH (cd:Candidate)<-[v:CASTS]-(m:Machine)<-[:USES]-(p:PollingStation)<-
      [:CONTAINS]-(c:City)<-[:CONTAINS]-(s:State)
WITH s, c, cd, COUNT(v) AS votes
WITH s, c, COLLECT({party: cd.party, votes: votes}) AS candidates,
     SUM(votes) AS valid_votes
MATCH (:Citizen)-[r:REGISTERED_IN]->(p:PollingStation)<-[:CONTAINS]-(c)
WITH s, c, candidates, valid_votes, COUNT(r) AS registered
OPTIONAL MATCH (:Citizen)-[a:ATTENDED_TO]->(p:PollingStation)<-[:CONTAINS]-(c)
WITH s, c, candidates, valid_votes, registered, COUNT(a) AS attended
WITH s, c, candidates, valid_votes,
     registered, attended, attended - valid_votes AS blank_votes,
     toFloat(attended) / toFloat(registered) * 100 AS turnout_percentage,
     valid_votes + (attended - valid_votes) AS total_votes
WITH s, c, candidates, valid_votes, blank_votes, registered, attended,
     turnout_percentage, total_votes,
     [cd IN candidates
     | {party: cd.party, votes: cd.votes,
        votes_to_valid: toFloat(cd.votes) / toFloat(valid_votes) * 100}]
     AS candidates_with_percentages,
     toFloat(blank_votes) / toFloat(total_votes) * 100 AS blank_votes_to_total
RETURN s.name AS state, c.name AS city, candidates_with_percentages,
       blank_votes, blank_votes_to_total, valid_votes, turnout_percentage,
       registered, attended;
