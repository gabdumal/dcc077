// Citizens
MATCH (cz:Citizen)
RETURN cz.cpf_number AS cpf_number, cz.name AS name, cz.gender AS gender,
       cz.birth_date AS birth_date;

// Complete Citizens
MATCH (cz:Citizen)
OPTIONAL MATCH (cz:Citizen)-[:BORN_IN]->(bc:City)<-[:CONTAINS]-(bs:State)
OPTIONAL MATCH (cz:Citizen)-[:REGISTERED_IN]->(p:PollingStation)<-[:CONTAINS]-
               (rc:City)<-[:CONTAINS]-(rs:State)
WITH cz, {name: bc.name, state: {name: bs.name}} AS city,
     {name: p.name, city: {name: rc.name, state: {name: rs.name}}}
     AS polling_station
RETURN cz.cpf_number AS cpf_number, cz.name AS name, cz.gender AS gender,
       cz.birth_date AS birth_date, city, polling_station;
