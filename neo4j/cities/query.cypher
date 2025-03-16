// Cities
MATCH (c:City)
RETURN c.name AS name;

// Cities with Polling Stations
MATCH (c:City)-[:CONTAINS]->(p:PollingStation)
WITH c.name AS city, COLLECT(p.name) AS pollingStations
RETURN city, pollingStations;
