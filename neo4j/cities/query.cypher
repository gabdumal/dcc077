// Cities
MATCH (c:City)
RETURN c.name AS name;

// Complete Cities
MATCH (c:City)
OPTIONAL MATCH (s:State)-[:CONTAINS]->(c)
WITH c, {name: s.name} AS state
RETURN c.name AS name, state;

// Cities with Polling Stations
MATCH (c:City)-[:CONTAINS]->(p:PollingStation)
WITH c.name AS city, COLLECT(p.name) AS pollingStations
RETURN city AS name, pollingStations;

// Cities with Polling Stations and Machines
MATCH (c:City)-[:CONTAINS]->(p:PollingStation)-[r:USES]->(m:Machine)
WITH c.name AS city, p.name AS polling_station,
     COLLECT(m.serial_number) AS machines
WITH city,
     COLLECT({name: polling_station, machines: machines}) AS polling_stations
RETURN city, polling_stations;

// Cities with born Citizens
MATCH (cz:Citizen)-[:BORN_IN]->(ct:City)
RETURN ct.name AS name, COLLECT(cz.name) AS citizens;

// Cities with Polling Stations and registered Citizens
MATCH (c:City)-[:CONTAINS]->(p:PollingStation)<-[r:REGISTERED_IN]-(cz:Citizen)
WITH c.name AS city, p.name AS polling_station, COLLECT(cz.name) AS citizens
WITH city,
     COLLECT({name: polling_station, citizens: citizens}) AS polling_stations
RETURN city, polling_stations;

// Cities with Polling Stations and registered Citizens who are Candidates
MATCH (c:City)-[:CONTAINS]->(p:PollingStation)<-[r:REGISTERED_IN]-(cz:Citizen)<-
      [:IS]-(cd:Candidate)
WITH c.name AS city, p.name AS polling_station,
     COLLECT({name: cz.name, gender: cz.gender, birth_date: cz.birth_date,
              candidature: {party: cd.party}}) AS citizens
WITH city,
     COLLECT({name: polling_station, citizens: citizens}) AS polling_stations
RETURN city, polling_stations;
