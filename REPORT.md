# Relatório de Modelagem de Dados em Bancos NoSQL

## Introdução

Neste trabalho, foram escolhidos dois bancos de dados NoSQL para estudo e modelagem: o **Neo4j**, um banco baseado em grafos, e o **MongoDB**, um banco orientado a documentos. O objetivo é modelar um sistema eleitoral nesses dois paradigmas e analisar suas características, eficiência e aplicações.

## Modelagem de Dados

A modelagem foi desenvolvida em conjunto e de forma remota. Para facilitar a visualização e a colaboração na construção dos modelos de dados, utilizamos a ferramenta **MermaidJS**.

### Descrição do Modelo

Em ambos os casos, o modelo representa um sistema eleitoral em que:

- **Estados** contêm **Cidades**.
- **Cidades** contêm **Seções Eleitorais**.
- **Seções Eleitorais** usam **Máquinas de Votação**.
- **Máquinas de Votação** emitem **Votos**.
- **Cidadãos** nascem em **Cidades**, estão registrados em **Seções Eleitorais**, e podem ser **Candidatos**.
- **Candidatos** recebem **Votos**.

### Implementação dos Modelos

Com a modelagem finalizada, nossa abordagem seguiu com a definição dos modelos de dados em arquivos específicos para cada banco.

- [**Neo4j**](/neo4j): Arquivos `.cypher`
- [**MongoDB**](/mongodb/): Arquivos `.mongodb.js`

### Diagramas de Modelagem

Um diagrama de entidade-relacionamento tradicional representa a modelagem dos dados.

![Diagrama entidade-relacionamento](/diagram.png)

#### Neo4j

![Diagrama em grafo](/neo4j/diagram.png)

#### MongoDB

![Diagrama de coleções](/mongodb/diagram.png)

### Inserção de Dados

Procedemos com a inserção de um conjunto inicial de dados em ambos os sistemas para estabelecer a estrutura básica do modelo eleitoral. Foram definidas restrições necessárias para preservar a consistência dos dados durante operações de manipulação.

### Correções e Ajustes

Após alguns testes, identificamos inconsistências no modelo inicial e realizamos as correções pertinentes.

### Expansão de Dados com IA Generativa

Para criar consultas interessantes e aderentes ao contexto de uma eleição, utilizamos **IA generativa** para expandir o volume de dados fictícios de cidadãos e seus votos. Foram simulados **100 cidadãos** segundo critérios determinados, permitindo a obtenção de estatísticas mais representativas.

### Alimentação dos Bancos de Dados

Desenvolvemos scripts em **Python** responsáveis pela inserção de dados nos bancos.
As queries específicas podem ser encontradas nas pastas referentes a cada banco.

- [**Neo4j**](/neo4j): [populate.py](/neo4j/populate.py)
- [**MongoDB**](/mongodb/): [populate.py](/mongodb/populate.py)

## Exemplos de Dados Inseridos

### [Neo4j](/neo4j/)

#### Criação de Estados

```bash
MERGE (s1:State {name: "Minas Gerais"});

MERGE (s2:State {name: "Bahia"});
```

#### Criação de Estados

```bash
MERGE (c1:City {name: "Belo Horizonte"});
MERGE (c2:City {name: "Uberlândia"});
MERGE (c3:City {name: "Contagem"});
MERGE (c4:City {name: "Juiz de Fora"});
MERGE (c5:City {name: "Salvador"});
MERGE (c6:City {name: "Feira de Santana"});
MERGE (c7:City {name: "Vitória da Conquista"});
MERGE (c8:City {name: "Camaçari"});
```

#### Relacionamento entre cidades e estados

```bash
MATCH (s1:State {name: "Minas Gerais"})
OPTIONAL MATCH (c1:City {name: "Belo Horizonte"})
OPTIONAL MATCH (c2:City {name: "Uberlândia"})
OPTIONAL MATCH (c3:City {name: "Contagem"})
OPTIONAL MATCH (c4:City {name: "Juiz de Fora"})
MERGE (s1)-[:CONTAINS]->(c1)
MERGE (s1)-[:CONTAINS]->(c2)
MERGE (s1)-[:CONTAINS]->(c3)
MERGE (s1)-[:CONTAINS]->(c4);

MATCH (s2:State {name: "Bahia"})
OPTIONAL MATCH (c5:City {name: "Salvador"})
OPTIONAL MATCH (c6:City {name: "Feira de Santana"})
OPTIONAL MATCH (c7:City {name: "Vitória da Conquista"})
OPTIONAL MATCH (c8:City {name: "Camaçari"})
MERGE (s2)-[:CONTAINS]->(c5)
MERGE (s2)-[:CONTAINS]->(c6)
MERGE (s2)-[:CONTAINS]->(c7)
MERGE (s2)-[:CONTAINS]->(c8);
```

### MongoDB

#### Dados inseridos no MongoDB usando documentos embutidos

```bash
db.states.insertMany([
  {
    _id: ObjectId(),
    name: "Minas Gerais",
    cities: [
      {
        _id: ObjectId(),
        polling_stations: [
          {
            _id: ObjectId(),
            name: "Centro de Votação Mangueira",
            uses: [
              {
                _id: ObjectId(),
                start_time: new Date("2022-10-02T12:00:00Z"),
                end_time: new Date("2022-10-02T17:00:00Z"),
                status: "active",
                machine: machine2._id,
              },
              {
                _id: ObjectId(),
                start_time: new Date("2022-10-02T08:00:00Z"),
                end_time: new Date("2022-10-02T12:00:00Z"),
                status: "broken",
                machine: machine1._id,
              },
            ],
          },
          {
            _id: ObjectId(),
            name: "Local de Voto Sabiá-do-Campo",
            uses: [
              {
                _id: ObjectId(),
                start_time: new Date("2022-10-02T08:00:00Z"),
                end_time: new Date("2022-10-02T17:00:00Z"),
                status: "active",
                machine: machine3._id,
              },
            ],
          },
        ],
        name: "Belo Horizonte",
      },
      // ... outras cidades
    ]
  }
  // ... outros estados
]);
```

## Queries

Os arquivos de queries foram desenvolvidos para cada banco de dados e podem ser encontrados nas pastas referentes a cada um.

Os resultados das queries foram exportados em formato `.json` e entregues junto a este relatório.
Eles podem ser encontrados na seguinte [pasta](/queries/).

### Neo4j

#### 1 - Candidatos registrados em cada cidade e suas informações

```bash
MATCH (s:State)-[:CONTAINS]->(c:City)-[:CONTAINS]->(p:PollingStation)<-[:REGISTERED_IN]-(cz:Citizen)<-[:IS]-(cd:Candidate)
MATCH (bs:State)-[:CONTAINS]->(bc:City)<-[:BORN_IN]-(cz:Citizen)
WITH s, c, COLLECT({party: cd.party, name: cz.name, gender: cz.gender, age: datetime().year - cz.birth_date.year, born_in: {city: bc.name, state: bs.name}}) AS candidates
RETURN s.name AS state, c.name AS city, candidates;
```

#### 2 - Cidadãos registrados em cada cidade e sua participação, se compareceram

```bash
MATCH (s:State)-[:CONTAINS]->(c:City)-[:CONTAINS]->(p:PollingStation)<-[:REGISTERED_IN]-(cz:Citizen)
MATCH (bs:State)-[:CONTAINS]->(bc:City)<-[:BORN_IN]-(cz)
WITH s, c, cz, bc, bs
OPTIONAL MATCH (p)<-[a:ATTENDED_TO]-(cz)
WITH s, c, COLLECT({cpf_number: cz.cpf_number, name: cz.name, gender: cz.gender, age: datetime().year - cz.birth_date.year, born_in: {city: bc.name, state: bs.name}, attended: CASE WHEN a IS NOT NULL THEN a.timestamp ELSE null END}) AS citizens
RETURN s.name AS state, c.name AS city, citizens;
```

#### 2.1 - Cidadãos registrados em cada seção eleitoral e sua participação, se compareceram

```bash
MATCH (s:State)-[:CONTAINS]->(c:City)-[:CONTAINS]->(p:PollingStation)<-[:REGISTERED_IN]-(cz:Citizen)
MATCH (bs:State)-[:CONTAINS]->(bc:City)<-[:BORN_IN]-(cz)
WITH s, c, p, cz, bc, bs
OPTIONAL MATCH (p)<-[a:ATTENDED_TO]-(cz)
WITH s, c, p, COLLECT({cpf_number: cz.cpf_number, name: cz.name, gender: cz.gender, age: datetime().year - cz.birth_date.year, born_in: {city: bc.name, state: bs.name}, attended: CASE WHEN a IS NOT NULL THEN a.timestamp ELSE null END}) AS citizens
RETURN s.name AS state, c.name AS city, p.name AS polling_station, citizens;
```

#### 3 - Contar quantos cidadãos se registraram e compareceram em cada seção eleitoral em cada cidade

```bash
MATCH (s:State)-[:CONTAINS]->(c:City)-[:CONTAINS]->(p:PollingStation)<-[:REGISTERED_IN]-(cz:Citizen)
WITH s, c, p, COUNT(cz) AS registered
OPTIONAL MATCH (p)<-[a:ATTENDED_TO]-(cz)
WITH s, c, p, registered, COUNT(a) AS attended
MATCH (m:Machine)<-[:USES]-(p)
WITH s, c, p, COLLECT({serial_number: m.serial_number}) AS machines, registered, attended
WITH s, c, COLLECT({name: p.name, registered: registered, attended: attended, machines: machines}) AS polling_stations, SUM(registered) AS total_registered, SUM(attended) AS total_attended
RETURN s.name AS state, c.name AS city, polling_stations, total_registered, total_attended;
```

#### 4 - Contar quantos votos cada candidato recebeu em cada máquina

```bash
MATCH (cz:Citizen)<-[:IS]-(cd:Candidate)<-[:CASTS]-(m:Machine)<-[:USES]-(p:PollingStation)<-[:CONTAINS]-(c:City)<-[:CONTAINS]-(s:State)
WITH s, c, p, m, cd, cz, COUNT(cz) AS votes
WITH s, c, p, m, COLLECT({name: cz.name, cpf_number: cz.cpf_number, gender: cz.gender, age: datetime().year - cz.birth_date.year, party: cd.party, votes: votes}) AS candidates
WITH s, c, p, COLLECT({serial_number: m.serial_number, candidates: candidates}) AS machines
WITH s, c, COLLECT({polling_station: p.name, machines: machines}) AS polling_stations
RETURN s.name AS state, c.name AS city, polling_stations;
```

#### 4.1 Contar quantos votos cada candidato recebeu em cada máquina e o número total de cidadãos que compareceram

```bash
MATCH (cd:Candidate)<-[:CASTS]-(m:Machine)<-[:USES]-(p:PollingStation)<-[:CONTAINS]-(c:City)<-[:CONTAINS]-(s:State)
WITH s, c, p, m, cd, COUNT(cd) AS votes
WITH s, c, p, m, COLLECT({party: cd.party, votes: votes}) AS candidates
WITH s, c, p, COLLECT({serial_number: m.serial_number, candidates: candidates}) AS machines
MATCH (cz:Citizen)-[:ATTENDED_TO]->(p)
WITH s, c, p, machines, COUNT(cz) AS attended
RETURN s.name AS state, c.name AS city, p.name AS polling_station, attended, machines;
```

#### 5 - Contar quantos votos cada candidato recebeu em cada seção eleitoral e o número total de cidadãos que compareceram e se registraram

```bash
MATCH (cd:Candidate)<-[v:CASTS]-(m:Machine)<-[:USES]-(p:PollingStation)<-[:CONTAINS]-(c:City)<-[:CONTAINS]-(s:State)
WITH s, c, p, cd, COUNT(v) AS votes
WITH s, c, p, COLLECT({party: cd.party, votes: votes}) AS candidates, SUM(votes) AS valid_votes
MATCH (:Citizen)-[r:REGISTERED_IN]->(p)
WITH s, c, p, candidates, valid_votes, COUNT(r) AS registered
OPTIONAL MATCH (:Citizen)-[a:ATTENDED_TO]->(p)
WITH s, c, p, candidates, valid_votes, registered, COUNT(a) AS attended
WITH s, c, p, candidates, valid_votes, registered, attended, attended - valid_votes AS blank_votes
WITH s, c, COLLECT({name: p.name, candidates: candidates, valid_votes: valid_votes, blank_votes: blank_votes, registered: registered, attended: attended}) AS polling_stations
RETURN s.name AS state, c.name AS city, polling_stations;
```

#### 5.1 - Contar quantos votos cada candidato recebeu em cada cidade e o número total de cidadãos que compareceram

```bash
MATCH (cd:Candidate)<-[v:CASTS]-(m:Machine)<-[:USES]-(p:PollingStation)<-[:CONTAINS]-(c:City)<-[:CONTAINS]-(s:State)
WITH s, c, cd, COUNT(v) AS votes
WITH s, c, COLLECT({party: cd.party, votes: votes}) AS candidates, SUM(votes) AS valid_votes
MATCH (:Citizen)-[r:REGISTERED_IN]->(p:PollingStation)<-[:CONTAINS]-(c)
WITH s, c, candidates, valid_votes, COUNT(r) AS registered
OPTIONAL MATCH (:Citizen)-[a:ATTENDED_TO]->(p:PollingStation)<-[:CONTAINS]-(c)
WITH s, c, candidates, valid_votes, registered, COUNT(a) AS attended
WITH s, c, candidates, valid_votes, registered, attended, attended - valid_votes AS blank_votes
RETURN s.name AS state, c.name AS city, candidates, valid_votes, blank_votes, registered, attended;
```

#### 6 - Obter estatísticas sobre os votos em cada cidade

```bash
MATCH (cd:Candidate)<-[v:CASTS]-(m:Machine)<-[:USES]-(p:PollingStation)<-[:CONTAINS]-(c:City)<-[:CONTAINS]-(s:State)
WITH s, c, cd, COUNT(v) AS votes
WITH s, c, COLLECT({party: cd.party, votes: votes}) AS candidates, SUM(votes) AS valid_votes
MATCH (:Citizen)-[r:REGISTERED_IN]->(p:PollingStation)<-[:CONTAINS]-(c)
WITH s, c, candidates, valid_votes, COUNT(r) AS registered
OPTIONAL MATCH (:Citizen)-[a:ATTENDED_TO]->(p:PollingStation)<-[:CONTAINS]-(c)
WITH s, c, candidates, valid_votes, registered, COUNT(a) AS attended
WITH s, c, candidates, valid_votes, registered, attended, attended - valid_votes AS blank_votes, toFloat(attended) / toFloat(registered) * 100 AS turnout_percentage, valid_votes + (attended - valid_votes) AS total_votes
WITH s, c, candidates, valid_votes, blank_votes, registered, attended, turnout_percentage, total_votes, [cd IN candidates | {party: cd.party, votes: cd.votes, votes_to_valid: toFloat(cd.votes) / toFloat(valid_votes) * 100}] AS candidates_with_percentages, toFloat(blank_votes) / toFloat(total_votes) * 100 AS blank_votes_to_total
RETURN s.name AS state, c.name AS city, candidates_with_percentages, blank_votes, blank_votes_to_total, valid_votes, turnout_percentage, registered, attended;
```

#### 7 - Obter estatísticas sobre o gênero dos candidatos

```bash
WITH ["masculine", "feminine", "neutral"] AS genders
UNWIND genders AS gender
OPTIONAL MATCH (cz:Citizen {gender: gender})<-[:IS]-(cd:Candidate)
WITH gender, COUNT(cd) AS candidate_count
RETURN gender, candidate_count ORDER BY gender;
```

#### 7.1 - Obter estatísticas sobre a idade dos candidatos

```bash
MATCH (cz:Citizen)<-[:IS]-(cd:Candidate)
WITH cd, date().year - date(cz.birth_date).year AS age
WITH cd, CASE WHEN age >= 0 AND age < 18 THEN '0-17' WHEN age >= 18 AND age < 30 THEN '18-29' WHEN age >= 30 AND age < 40 THEN '30-39' WHEN age >= 40 AND age < 50 THEN '40-49' WHEN age >= 50 THEN '50+' ELSE 'Unknown' END AS age_ranges
RETURN age_ranges, COUNT(cd) AS candidate_count ORDER BY age_ranges;
```

#### 7.2 - Obter estatísticas sobre a cidade de nascimento dos candidatos

```bash
MATCH (bs:State)-[:CONTAINS]->(bc:City)<-[:BORN_IN]-(cz:Citizen)<-[:IS]-(cd:Candidate)
RETURN bs.name AS state, bc.name AS city, COUNT(cd) AS candidate_count ORDER BY state, city;
```

#### 8 - Obter estatísticas sobre o gênero dos cidadãos por cidade em que estão registrados

```bash
MATCH (s:State)-[:CONTAINS]->(c:City)
WITH s, c, ["masculine", "feminine", "neutral"] AS genders
UNWIND genders AS gender
WITH s, c, gender
OPTIONAL MATCH (cz:Citizen {gender: gender})-[:REGISTERED_IN]->(p:PollingStation)<-[:CONTAINS]-(c)
WITH s, c, gender, COUNT(cz) AS citizen_count
WITH s, c, collect({gender: gender, citizen_count: citizen_count}) AS genders
RETURN s.name AS state, c.name AS city, genders ORDER BY state, city;
```

#### 8.1. Obter estatísticas sobre a idade dos cidadãos por cidade em que estão registrados

```bash
MATCH (cz:Citizen)-[:REGISTERED_IN]->(p:PollingStation)<-[:CONTAINS]-(c:City)<-[:CONTAINS]-(s:State)
WHERE cz.birth_date IS NOT NULL
WITH s, c, cz, date().year - date(cz.birth_date).year AS age
WITH s, c, cz, CASE WHEN age >= 0 AND age < 18 THEN '0-17' WHEN age >= 18 AND age < 30 THEN '18-29' WHEN age >= 30 AND age < 40 THEN '30-39' WHEN age >= 40 AND age < 50 THEN '40-49' WHEN age >= 50 THEN '50+' ELSE 'Unknown' END AS age_range
WITH s, c, age_range, COUNT(cz) AS citizen_count
WITH s, c, collect({age_range: age_range, citizen_count: citizen_count}) AS age_ranges
RETURN s.name AS state, c.name AS city, age_ranges ORDER BY state, city;
```

#### 8.2 - Obter estatísticas sobre a cidade de nascimento dos cidadãos por cidade em que estão registrados

```bash
MATCH (cz:Citizen)-[:REGISTERED_IN]->(p:PollingStation)<-[:CONTAINS]-(c:City)<-[:CONTAINS]-(s:State)
MATCH (bs:State)-[:CONTAINS]->(bc:City)<-[:BORN_IN]-(cz:Citizen)
WITH s, c, bs, bc, COUNT(cz) AS citizen_count
WITH s, c, collect({state: bs.name, city: bc.name, citizen_count: citizen_count}) AS cities_of_birth
RETURN s.name AS state, c.name AS city, cities_of_birth ORDER BY state, city;
```

#### 9 - Obter a idade média dos cidadãos por cidade em que estão registrados

```bash
MATCH (cz:Citizen)-[:REGISTERED_IN]->(p:PollingStation)<-[:CONTAINS]-(c:City)<-[:CONTAINS]-(s:State)
WHERE cz.birth_date IS NOT NULL
WITH s, c, cz, date().year - date(cz.birth_date).year AS age
WITH s, c, AVG(age) AS average_age
RETURN s.name AS state, c.name AS city, average_age ORDER BY state, city;
```

#### 9.1. Obter a idade média dos cidadãos por cidade em que nasceram

```bash
MATCH (bs:State)-[:CONTAINS]->(bc:City)<-[:BORN_IN]-(cz:Citizen)
WHERE cz.birth_date IS NOT NULL
WITH bs, bc, cz, date().year - date(cz.birth_date).year AS age
WITH bs, bc, AVG(age) AS average_age
RETURN bs.name AS state, bc.name AS city, average_age ORDER BY state, city;
```

#### 10 - Obter quantos candidatos de cada gênero estão registrados em cada partido

```bash
MATCH (cd:Candidate)
WHERE cd.party IS NOT NULL
WITH DISTINCT cd.party AS party, ["masculine", "feminine", "neutral"] AS genders
UNWIND genders AS gender
WITH party, gender
OPTIONAL MATCH (cd:Candidate {party: party})-[:IS]->(cz:Citizen {gender: gender})
WITH party, gender, COUNT(cd) AS candidate_count
WITH party, collect({gender: gender, candidate_count: candidate_count}) AS genders
RETURN party, genders ORDER BY party;
```

#### 10.1 - Obter quantos candidatos de cada faixa etária estão registrados em cada partido

```bash
MATCH (cd:Candidate)-[:IS]->(cz:Citizen)
WHERE cd.party IS NOT NULL AND cz.birth_date IS NOT NULL
WITH cz, cd.party AS party, date().year - date(cz.birth_date).year AS age
WITH cz, party, CASE WHEN age >= 0 AND age < 18 THEN '0-17' WHEN age >= 18 AND age < 30 THEN '18-29' WHEN age >= 30 AND age < 40 THEN '30-39' WHEN age >= 40 AND age < 50 THEN '40-49' WHEN age >= 50 THEN '50+' ELSE 'Unknown' END AS age_range
WITH party, age_range, COUNT(cz) AS candidate_count
WITH party, collect({age_range: age_range, candidate_count: candidate_count}) AS age_ranges, reduce(total = 0, a IN collect({age_range: age_range, candidate_count: candidate_count}) | total + a.candidate_count) AS total_candidates
RETURN party, age_ranges, total_candidates ORDER BY party;
```

### [MongoDB](/mongodb/)

As quatro primeiras queries - numeradas de 1 até 3 - foram executadas também no banco MongoDB. Entretanto, não é plausível adicioná-las a este relatório devido ao número de linhas necessário. Desta forma, as consultas foram separadas em arquivos **JavaScript** e compactadas junto ao relatório. A complexidade destas consultas neste tipo de banco é discutida em nossa conclusão.

## Conclusão

Considerando o domínio de aplicação deste trabalho, o banco de dados baseado em grafos mostrou-se uma alternativa bastante pertinente. Sua estrutura permitiu a formulação de consultas sucintas, legíveis e de execução rápida, proporcionando uma experiência eficiente na recuperação de informações.

Por outro lado, as consultas realizadas no banco de dados orientado a documentos tornaram-se excessivamente longas e de difícil leitura. Embora tenham apresentado tempos de resposta curtos devido ao pequeno volume de dados utilizados nos testes, sua complexidade estrutural indica que essa abordagem não é a mais adequada para este contexto. No entanto, é possível considerar seu uso em partes específicas do processo eleitoral, como na busca por substrings em relatórios.

Além disso, embora o MongoDB permita a modelagem baseada em referências – o que poderia aproximá-lo de um modelo relacional –, essa abordagem foi evitada no projeto. O objetivo era explorar e contrastar diferentes paradigmas de bancos de dados **NoSQL**, em vez de replicar características do modelo relacional.
