from neo4j import GraphDatabase

# Connect to Neo4j
driver = GraphDatabase.driver("bolt://localhost:7687", auth=("neo4j", "melancia"))

# Function to read a Cypher file
def read_cypher_file(file_path):
    with open(file_path, "r") as file:
        return file.read()

# Read and combine Cypher files
queries = read_cypher_file("constraints.cypher")
queries += read_cypher_file("states/create.cypher")
queries += read_cypher_file("cities/create.cypher")
queries += read_cypher_file("cities/link.cypher")
queries += read_cypher_file("polling_stations/create.cypher")
queries += read_cypher_file("machines/create.cypher")
queries += read_cypher_file("citizens/create.cypher")
queries += read_cypher_file("citizens/link_to_city.cypher")
queries += read_cypher_file("citizens/link_to_polling_station.cypher")
queries += read_cypher_file("candidates/create.cypher")

# Execute the combined queries
with driver.session() as session:
    for query in queries.split(";"):
        query = query.strip()
        if query:
            session.run(query)

# Close the driver
driver.close()
