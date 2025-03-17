// Citizens
MATCH (cz:Citizen)
RETURN cz.cpf_number AS cpf_number, cz.name AS name, cz.gender AS gender,
       cz.birth_date AS birth_date;

// Complete Citizens
MATCH (cz:Citizen)
OPTIONAL MATCH (cz:Citizen)-[:BORN_IN]->(bc:City)<-[:CONTAINS]-(bs:State)
OPTIONAL MATCH (cz:Citizen)-[:REGISTERED_IN]->(rp:PollingStation)<-[:CONTAINS]-
               (rc:City)<-[:CONTAINS]-(rs:State)
OPTIONAL MATCH (cz:Citizen)-[a:ATTENDED_TO]->(ap:PollingStation)<-[:CONTAINS]-
               (ac:City)<-[:CONTAINS]-(as:State)
WITH cz, {name: bc.name, state: {name: bs.name}} AS city,
     {name: rp.name, city: {name: rc.name, state: {name: rs.name}}}
     AS polling_station,
     {time: a.timestamp,
      polling_station:
      {name: ap.name, city: {name: ac.name, state: {name: as.name}}}}
     AS attended_to
RETURN cz.cpf_number AS cpf_number, cz.name AS name, cz.gender AS gender,
       cz.birth_date AS birth_date, city, polling_station, attended_to;
