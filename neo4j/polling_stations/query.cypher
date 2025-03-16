// Polling Stations
MATCH (p:PollingStation)
RETURN p.name AS name;

// Polling Stations with Machines
MATCH (p:PollingStation)-[r:USES]->(m:Machine)
WITH p.name AS polling_station, COLLECT(m.serial_number) AS machines
RETURN polling_station AS name, machines;

// Polling Stations with registered Citizens
MATCH (cz:Citizen)-[:REGISTERED_IN]->(ps:PollingStation)
RETURN ps.name AS name, collect(cz.name) AS citizens;
