MATCH (m:Machine)-[v:CASTS]->(cd:Candidate)
DETACH DELETE v;
