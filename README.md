# TSE Online

`Gabriel Malosto e Lucas Paiva`

O sistema de urnas eletrônicas exige uma operação muito complexa para envio das urnas, operacionalização e contagem de votos. Para isso, o TSE lhe contrata para criar o banco de dados que permitirá o acompanhamento da logística das eleições, o cadastro de candidatos, a geração do relatório final de cada urna e a contagem final.

## Relatório

O relatório deste trabalho pode ser encontrado no arquivo [`REPORT.md`](/REPORT.md).

## Modelo Entidade-Relacionamento

```mermaid

erDiagram

  STATE {
    STRING name
  }
  STATE ||--|{ CITY : "contains"

  CITY {
    STRING name
  }

  CITIZEN {
    STRING cpf_number
    STRING name
    %% May be "MASCULINE", "FEMININE", or "NEUTRAL"
    STRING gender
    LOCAL_DATE birth_date
  }
  CITIZEN }o--|| CITY : "born in"
  CITIZEN }o--|| POLLING_STATION : "registered in"
  CITIZEN ||--o| ATTENDED_TO : ""

  ATTENDED_TO {
    LOCAL_DATETIME timestamp
  }
  ATTENDED_TO }o--|| POLLING_STATION : ""

  POLLING_STATION {
    STRING name
  }
  CITY ||--|{ POLLING_STATION : "contains"

  MACHINE {
    STRING serial_number
  }

  USE {
    LOCAL_DATETIME start_time
    LOCAL_DATETIME end_time
    String status
  }
  POLLING_STATION ||--|{ USE : "uses"
  MACHINE ||--o| USE : "is used by"

  CANDIDATE {
    STRING party
  }
  CANDIDATE |o..|| CITIZEN : "is"

  VOTE {
  }
  MACHINE ||--o{ VOTE : "casts"
  CANDIDATE ||--o{ VOTE : "receives"

```

## Neo4j

Crie um novo banco de dados no Neo4j com o usuário `neo4j` e senha `melancia`.
Conecte-se a essa instância pelo endereço `bolt://localhost:7687`.

Entre na pasta [`neo4j`](neo4j/).

```bash
cd neo4j
```

Instale as dependências necessárias pelo `pip`:

```bash
pip install -r requirements.txt
```

Execute o script [`populate.py`](neo4j/populate.py) para popular o banco de dados:

```bash
python populate.py
```

As consultas estão definidas no arquivo [`queries.cypher`](neo4j/queries.cypher).

## MongoDB

Crie um novo banco de dados no MongoDB chamado `tse_online` com o usuário `admin` e senha `melancia`.

Entre na pasta [`mongodb`](mongodb/).

```bash
cd mongodb
```

Instale as dependências necessárias pelo `pip`:

```bash
pip install -r requirements.txt
```

Execute o script [`populate.py`](mongodb/populate.py) para popular o banco de dados:

```bash
python populate.py
```

Para fazer dump dos dados, execute o seguinte comando:

```bash
mongodump --uri="mongodb://admin:melancia@localhost:27017/tse_online" --authenticationDatabase admin
```
