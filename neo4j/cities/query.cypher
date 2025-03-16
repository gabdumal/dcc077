// Cities
MATCH (c:City)
RETURN c.name AS name;

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
