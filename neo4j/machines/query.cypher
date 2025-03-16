// Machines
MATCH (m:Machine)
RETURN m.serial_number AS serial_number;

// Complete Machines
MATCH (m:Machine)
OPTIONAL MATCH (m:Machine)<-[u:USES]-(p:PollingStation)<-[:CONTAINS]-(c:City)<-
               [:CONTAINS]-(s:State)
WITH m, p, u,
  CASE
    WHEN p IS NULL AND u IS NULL THEN []
    ELSE
    collect({polling_station:
             {name: p.name, city: {name: c.name, state: {name: s.name}}},
             status: u.status, start_time: u.start_time, end_time: u.end_time})
  END AS uses
RETURN m.serial_number AS serial_number, uses;
