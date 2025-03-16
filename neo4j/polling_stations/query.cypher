// Polling stations
MATCH (p:PollingStation)
RETURN {name: p.name} AS pollingStationsData;

// Polling stations by City
MATCH (c:City)-[:CONTAINS]->(p:PollingStation)
WITH c.name AS city, COLLECT(p.name) AS pollingStations
RETURN {city: city, pollingStations: pollingStations}
       AS pollingStationsByCityData;

// Polling stations by State
MATCH (s:State)-[:CONTAINS]->(c:City)-[:CONTAINS]->(p:PollingStation)
WITH s.name AS state, COLLECT(p.name) AS pollingStations
RETURN {state: state, pollingStations: pollingStations}
       AS pollingStationsByStateData;

// Polling stations by City and State
MATCH (s:State)-[:CONTAINS]->(c:City)-[:CONTAINS]->(p:PollingStation)
WITH s.name AS state, c.name AS city, COLLECT(p.name) AS pollingStations
WITH state, COLLECT({city: city, pollingStations: pollingStations}) AS cities
RETURN {state: state, cities: cities} AS pollingStationsByCityAndStateData;
