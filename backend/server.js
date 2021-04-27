var { graphql, buildSchema } = require("graphql");
var express = require("express");
var { graphqlHTTP } = require("express-graphql");
var pgp = require("pg-promise")();
const conn = {
  host: "localhost",
  port: 5432,
  database: "bachelor",
  user: "postgres",
  password: "admin",
};
var db = pgp(conn);

var schema = buildSchema(`
    type Query {
        roles: [Role]
        users: [SistemosNaudotojas]
    }
    type Role {
      id_role: Int
    }
    type SistemosNaudotojas {
      vardas: String
      pavarde: String
      elpastas: String!
      slaptazodis: String!
      id_sistemosnaudotojas: Int!
    }
`);

async function getRoles() {
  let returnable = [];
  await db
    .any("SELECT * FROM role")
    .then(function (data) {
      returnable = data;
    })
    .catch(function (error) {});
  return returnable;
}

async function getUsers() {
  let returnable = [];
  await db
    .any("SELECT * FROM sistemosnaudotojas")
    .then(function (data) {
      returnable = data;
    })
    .catch(function (error) {});
  return returnable;
}

var root = {
  roles: () => {
    return getRoles();
  },
  users: () => {
    return getUsers();
  },
};

var app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);
app.listen(4000);
console.log("Running a GraphQL API server at http://localhost:4000/graphql");
