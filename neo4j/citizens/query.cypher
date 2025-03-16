// Citizens
MATCH (cz:Citizen)
RETURN cz.cpf_number AS cpf_number, cz.name AS name, cz.gender AS gender,
       cz.birth_date AS birth_date;
