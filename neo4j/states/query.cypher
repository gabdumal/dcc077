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
     COLLECT({serial_number: m.serial_number}) AS machines
WITH state, city,
     COLLECT({name: polling_station, machines: machines}) AS polling_stations
WITH state, COLLECT({name: city, polling_stations: polling_stations}) AS cities
RETURN state AS name, cities;

// States with Cities and born Citizens
MATCH (s:State)-[:CONTAINS]->(c:City)<-[:BORN_IN]-(cz:Citizen)
WITH s.name AS state, c.name AS cities, COLLECT(cz.name) AS citizens
RETURN state, COLLECT({name: cities, citizens: citizens}) AS cities;

// States with Cities, Polling Stations and registered Citizens
MATCH (s:State)-[:CONTAINS]->(c:City)-[:CONTAINS]->(p:PollingStation)<-
      [r:REGISTERED_IN]-(cz:Citizen)
WITH s.name AS state, c.name AS cities, p.name AS polling_station,
     COLLECT(cz.name) AS citizens
WITH state, cities,
     COLLECT({name: polling_station, citizens: citizens}) AS polling_stations
RETURN state,
       COLLECT({name: cities, polling_stations: polling_stations}) AS cities;

// States with Cities, Polling Stations and registered Citizens
MATCH (s:State)-[:CONTAINS]->(c:City)-[:CONTAINS]->(p:PollingStation)<-
      [r:REGISTERED_IN]-(cz:Citizen)
WITH s.name AS state, c.name AS cities, p.name AS polling_station,
     COLLECT(cz.name) AS citizens
WITH state, cities,
     COLLECT({name: polling_station, citizens: citizens}) AS polling_stations
RETURN state,
       COLLECT({name: cities, polling_stations: polling_stations}) AS cities;
