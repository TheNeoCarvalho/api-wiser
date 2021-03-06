# API Wiser

## Stacks usadas:

- Nodejs + Typescript
- Express
- Sequelize (ORM)
- Postgres
- Docker
- Jest

## Link da API no Heroku

### [API no heroku](https://minha-api-wiser.herokuapp.com/)

## Documentação

- [Documentação](https://documenter.getpostman.com/view/4161908/TWDZJbqa#ec6dd8b5-75bd-4dc5-b3a9-19249b925308) (Postman)

<br>

## endpoints

| endpoint | method | url                            |
| -------- | :----- | :----------------------------- |
| /        | POST   | http://localhost:8081          |
| /:code   | GET    | http://localhost:8081/P368QRfV |

<br>

## Docker

### Iniciando o Postgres no Docker

```
docker run --name postgresdb -p 5432:5432 -d -e POSTGRES_PASSWORD=postgres -d postgres
```

## \*Será necessário acessar o postgres e criar uma base de dados ou usar uma já existente.

<br>

## Altere o nome do arquivo .env-example para .env e altere de acordo com seu banco.

```
# POSTGRES
    DATABASE_HOST=localhost
    DATABASE_DB=
    DATABASE_PORT=5432
    DATABASE_USER=
    DATABASE_PASS=postgres
    DIALECT=postgres
```

## Clonando o projeto

```
git clone https://github.com/TheNeoCarvalho/api-wiser.git
```

## Instalando as dependências

```
cd api-wiser
yarn install
```

## Iniciando o projeto

```
yarn start
```

## Rodando os testes

```
yarn test
```
