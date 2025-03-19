// 1. Candidates registered in each city and its information
MATCH (s:State)-[:CONTAINS]->(c:City)-[:CONTAINS]->(p:PollingStation)<-
      [:REGISTERED_IN]-(cz:Citizen)<-[:IS]-(cd:Candidate)
MATCH (bs:State)-[:CONTAINS]->(bc:City)<-[:BORN_IN]-(cz:Citizen)
WITH s, c, COLLECT({party: cd.party, name: cz.name, gender: cz.gender,
                    age: datetime().year - cz.birth_date.year,
                    born_in: {city: bc.name, state: bs.name}}) AS candidates
RETURN s.name AS state, c.name AS city, candidates;

// 2. Citizens who are registered in each city and their attendance if they have attended
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

// 2.1. Citizens who are registered in each polling station and their attendance if they have attended
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

// 7. Get statistics about candidates gender
WITH ["masculine", "feminine", "neutral"] AS genders
UNWIND genders AS gender
OPTIONAL MATCH (cz:Citizen {gender: gender})<-[:IS]-(cd:Candidate)
WITH gender, COUNT(cd) AS candidate_count
RETURN gender, candidate_count ORDER BY gender;

// 7.1. Get statistics about candidates age
MATCH (cz:Citizen)<-[:IS]-(cd:Candidate)
WITH cd, date().year - date(cz.birth_date).year AS age
WITH cd,
  CASE
    WHEN age >= 0 AND age < 18 THEN '0-17'
    WHEN age >= 18 AND age < 30 THEN '18-29'
    WHEN age >= 30 AND age < 40 THEN '30-39'
    WHEN age >= 40 AND age < 50 THEN '40-49'
    WHEN age >= 50 THEN '50+'
    ELSE 'Unknown'
  END AS age_ranges
RETURN age_ranges, COUNT(cd) AS candidate_count ORDER BY age_ranges;

// 7.2. Get statistics about candidates city of birth
MATCH (bs:State)-[:CONTAINS]->(bc:City)<-[:BORN_IN]-(cz:Citizen)<-[:IS]-
      (cd:Candidate)
RETURN bs.name AS state, bc.name AS city, COUNT(cd) AS candidate_count
       ORDER BY state, city;

// 8. Get statistics about citizens gender by city in which they are registered
MATCH (s:State)-[:CONTAINS]->(c:City)
WITH s, c, ["masculine", "feminine", "neutral"] AS genders
UNWIND genders AS gender
WITH s, c, gender
OPTIONAL MATCH (cz:Citizen {gender: gender})-[:REGISTERED_IN]->
               (p:PollingStation)<-[:CONTAINS]-(c)
WITH s, c, gender, COUNT(cz) AS citizen_count
WITH s, c, collect({gender: gender, citizen_count: citizen_count}) AS genders
RETURN s.name AS state, c.name AS city, genders ORDER BY state, city;

// 8.1. Get statistics about citizens age by city in which they are registered
MATCH (cz:Citizen)-[:REGISTERED_IN]->(p:PollingStation)<-[:CONTAINS]-(c:City)<-
      [:CONTAINS]-(s:State)
WHERE cz.birth_date IS NOT NULL
WITH s, c, cz, date().year - date(cz.birth_date).year AS age
WITH s, c, cz,
  CASE
    WHEN age >= 0 AND age < 18 THEN '0-17'
    WHEN age >= 18 AND age < 30 THEN '18-29'
    WHEN age >= 30 AND age < 40 THEN '30-39'
    WHEN age >= 40 AND age < 50 THEN '40-49'
    WHEN age >= 50 THEN '50+'
    ELSE 'Unknown'
  END AS age_range
WITH s, c, age_range, COUNT(cz) AS citizen_count
WITH s, c,
     collect({age_range: age_range, citizen_count: citizen_count}) AS age_ranges
RETURN s.name AS state, c.name AS city, age_ranges ORDER BY state, city;

// 8.2. Get statistics about citizens city of birth by city in which they are registered
MATCH (cz:Citizen)-[:REGISTERED_IN]->(p:PollingStation)<-[:CONTAINS]-(c:City)<-
      [:CONTAINS]-(s:State)
MATCH (bs:State)-[:CONTAINS]->(bc:City)<-[:BORN_IN]-(cz:Citizen)
WITH s, c, bs, bc, COUNT(cz) AS citizen_count
WITH s, c,
     collect({state: bs.name, city: bc.name, citizen_count: citizen_count})
     AS cities_of_birth
RETURN s.name AS state, c.name AS city, cities_of_birth ORDER BY state, city;

// 9. Get average age of citizens by city in which they are registered
MATCH (cz:Citizen)-[:REGISTERED_IN]->(p:PollingStation)<-[:CONTAINS]-(c:City)<-
      [:CONTAINS]-(s:State)
WHERE cz.birth_date IS NOT NULL
WITH s, c, cz, date().year - date(cz.birth_date).year AS age
WITH s, c, AVG(age) AS average_age
RETURN s.name AS state, c.name AS city, average_age ORDER BY state, city;

// 9.1 Get average age of citizens by city in which they are born
MATCH (bs:State)-[:CONTAINS]->(bc:City)<-[:BORN_IN]-(cz:Citizen)
WHERE cz.birth_date IS NOT NULL
WITH bs, bc, cz, date().year - date(cz.birth_date).year AS age
WITH bs, bc, AVG(age) AS average_age
RETURN bs.name AS state, bc.name AS city, average_age ORDER BY state, city;

// 10. Get how many candidates of each gender are registered in each party
MATCH (cd:Candidate)
WHERE cd.party IS NOT NULL
WITH DISTINCT cd.party AS party, ["masculine", "feminine", "neutral"] AS genders
UNWIND genders AS gender
WITH party, gender
OPTIONAL MATCH (cd:Candidate {party: party})-[:IS]->
               (cz:Citizen {gender: gender})
WITH party, gender, COUNT(cd) AS candidate_count
WITH party,
     collect({gender: gender, candidate_count: candidate_count}) AS genders
RETURN party, genders ORDER BY party;

// 10.1. Get how many candidates of each age range are registered in each party
MATCH (cd:Candidate)-[:IS]->(cz:Citizen)
WHERE cd.party IS NOT NULL AND cz.birth_date IS NOT NULL
WITH cz, cd.party AS party, date().year - date(cz.birth_date).year AS age
WITH cz, party,
  CASE
    WHEN age >= 0 AND age < 18 THEN '0-17'
    WHEN age >= 18 AND age < 30 THEN '18-29'
    WHEN age >= 30 AND age < 40 THEN '30-39'
    WHEN age >= 40 AND age < 50 THEN '40-49'
    WHEN age >= 50 THEN '50+'
    ELSE 'Unknown'
  END AS age_range
WITH party, age_range, COUNT(cz) AS candidate_count
WITH party, collect({age_range: age_range, candidate_count: candidate_count})
            AS age_ranges,
     reduce(total = 0, a IN
            collect({age_range: age_range, candidate_count: candidate_count}) |
            total + a.candidate_count) AS total_candidates
RETURN party, age_ranges, total_candidates ORDER BY party;
