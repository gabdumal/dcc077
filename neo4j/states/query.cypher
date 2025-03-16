// States
MATCH (s:State)
RETURN s.name AS name;

// States with Cities
MATCH (s:State)-[:CONTAINS]->(c:City)
WITH s.name AS state, COLLECT(c.name) AS cities
RETURN state, cities;

// States with Cities and Polling Stations
MATCH (s:State)-[:CONTAINS]->(c:City)-[:CONTAINS]->(p:PollingStation)
WITH s.name AS state, c.name AS city, COLLECT(p.name) AS pollingStations
WITH state, COLLECT({city: city, pollingStations: pollingStations}) AS cities
RETURN state, cities;

// States with Polling Stations
MATCH (s:State)-[:CONTAINS]->(c:City)-[:CONTAINS]->(p:PollingStation)
WITH s.name AS state, COLLECT(p.name) AS pollingStations
RETURN state, pollingStations;

// States with Cities and Polling Stations
MATCH (s:State)-[:CONTAINS]->(c:City)-[:CONTAINS]->(p:PollingStation)
WITH s.name AS state, c.name AS city, COLLECT(p.name) AS pollingStations
WITH state, COLLECT({city: city, pollingStations: pollingStations}) AS cities
RETURN state, cities;
