// States
MATCH (s:State)
RETURN s.name AS name;

// States with Cities
MATCH (s:State)-[:CONTAINS]->(c:City)
WITH s.name AS state, COLLECT(c.name) AS cities
RETURN state AS name, cities;

// States with Polling Stations
MATCH (s:State)-[:CONTAINS]->(c:City)-[:CONTAINS]->(p:PollingStation)
WITH s.name AS state, COLLECT(p.name) AS pollingStations
RETURN state AS name, pollingStations;

// States with Cities and Polling Stations
MATCH (s:State)-[:CONTAINS]->(c:City)-[:CONTAINS]->(p:PollingStation)
WITH s.name AS state, c.name AS city, COLLECT(p.name) AS pollingStations
WITH state, COLLECT({name: city, pollingStations: pollingStations}) AS cities
RETURN state AS name, cities;

// States with Cities, Polling Stations, and Machines
MATCH (s:State)-[:CONTAINS]->(c:City)-[:CONTAINS]->(p:PollingStation)-[r:USES]->
      (m:Machine)
WITH s.name AS state, c.name AS city, p.name AS polling_station,
     COLLECT(m.serial_number) AS machines
WITH state, city,
     COLLECT({name: polling_station, machines: machines}) AS polling_stations
WITH state, COLLECT({name: city, polling_stations: polling_stations}) AS cities
RETURN state AS name, cities;
