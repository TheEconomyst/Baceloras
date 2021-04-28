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
    type Mutation {
      insertRole(id: Int): String
    }
    type Query {
        roles: [Role]
        users: [SistemosNaudotojas]
        role(id: ID): Role
        user(id: ID): SistemosNaudotojas
        teikejai: PaslaugosTeikejas
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
    scalar Date
    type DarboGrafikas {
      laikasnuo: Date
      laikasiki: Date
      pietupertrauka: Boolean
      pietupertraukanuo: Date
      pietupetraukaiki: Date
      id_DarboGrafikas: Int!
      rezervacijos: [Rezervacija]
      paslaugosTeikejas: PaslaugosTeikejas!
    }
    type PaslaugosTeikejas {
      aprasymas: String
      role: Role
      nuolaidos: [Nuolaida]
      teikejopaslauga: [TeikejoPaslauga]
      sistemosnaudotojas: SistemosNaudotojas
      imone: Imone
    }
    type Imone {
      pavadinimas: String
      teikejai: [PaslaugosTeikejas]
      paslaugos: [Paslauga]
    }
    type TeikejoPaslauga {
      trukme: Int
      kaina: Int
      paslaugosteikejas: PaslaugosTeikejas
      paslaugos: [Paslauga]
    }
    type Nuolaida {
      procentas: Float
      kodas: Int
      galiojimoPradzia: Date
      galiojimoPabaiga: Date
      paslaugosteikejas: PaslaugosTeikejas
    }
    type Paslauga {
      pavadinimas: String
      trukme: Int
      kaina: Int
      araktyvi: Boolean
    }
    type Rezervacija {
      sukurimodata: Date
      busena: RezervacijosBusena
    }
    type RezervacijosBusena {
      id: Int
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

async function getRole(id) {
  let returnable = {};
  await db
    .one(`SELECT * FROM role WHERE id_role=${id}`)
    .then(function (data) {
      returnable = data;
    })
    .catch(function (error) {});
  return returnable;
}

async function getTeikejai() {
  let returnable = [];
  await db
    .any(
      `SELECT * FROM paslaugosteikejas FULL JOIN imone ON paslaugosteikejas.fk_imoneid_imone=imone.id_imone FULL JOIN sistemosnaudotojas ON paslaugosteikejas.id_sistemosnaudotojas=sistemosnaudotojas.id_sistemosnaudotojas`
    )
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
async function getUser(id) {
  let returnable = {};
  await db
    .one(`SELECT * FROM sistemosnaudotojas WHERE id_sistemosnaudotojas=${id}`)
    .then(function (data) {
      returnable = data;
    })
    .catch(function (error) {});
  return returnable;
}
async function insertR(id) {
  message = "";
  await db
    .query(`INSERT INTO role VALUES(${id})`)
    .then(() => (message = "Success"))
    .catch(() => (message = "Error"));
  return message;
}

var root = {
  roles: () => {
    return getRoles();
  },
  users: () => {
    return getUsers();
  },
  insertRole: ({ id }) => {
    return insertR(id);
  },
  role: ({ id }) => {
    return getRole(id);
  },
  user: ({ id }) => {
    return getUser(id);
  },
  teikejai: () => {
    return getTeikejai();
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
