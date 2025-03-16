// Cities
MATCH (c:City)
RETURN {name: c.name} AS citiesData;

// Cites in alphabetical order
MATCH (c:City)
RETURN {name: c.name} AS citiesData ORDER BY c.name;

// Cities by State
MATCH (s:State)-[:CONTAINS]->(c:City)
WITH s.name AS state, COLLECT(c.name) AS cities
RETURN {state: state, cities: cities} AS citiesByStateData;
