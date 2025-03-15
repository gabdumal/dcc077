// State
CREATE CONSTRAINT state_name_unique IF NOT EXISTS FOR (s: State) REQUIRE s.name
IS UNIQUE;

// City
CREATE CONSTRAINT city_name_state_unique IF NOT EXISTS FOR (c: City) REQUIRE (
c.name, c.state) IS UNIQUE;

// Citizen
CREATE CONSTRAINT citizen_cpf_number_unique IF NOT EXISTS FOR (cz: Citizen)
REQUIRE cz.cpf_number IS UNIQUE;

// Polling Station
CREATE CONSTRAINT polling_station_name_city_unique IF NOT EXISTS FOR (ps:
PollingStation) REQUIRE (ps.name, ps.city) IS UNIQUE;

// Machine
CREATE CONSTRAINT machine_serial_number_unique IF NOT EXISTS FOR (m: Machine)
REQUIRE m.serial_number IS UNIQUE;

// Candidate
CREATE CONSTRAINT candidate_party_city_unique IF NOT EXISTS FOR (ca: Candidate)
REQUIRE (ca.party, ca.city) IS UNIQUE;
