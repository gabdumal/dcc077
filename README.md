# TSE Online

`Gabriel Malosto e Lucas Paiva`

O sistema de urnas eletrônicas exige uma operação muito complexa para envio das urnas, operacionalização e contagem de votos. Para isso, o TSE lhe contrata para criar o banco de dados que permitirá o acompanhamento da logística das eleições, o cadastro de candidatos, a geração do relatório final de cada urna e a contagem final.

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
  CITIZEN ||--o| ATTENDED : ""

  ATTENDED {
    LOCAL_DATETIME time
  }
  ATTENDED }o--|| POLLING_STATION : ""

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
