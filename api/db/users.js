const { createConnection, endConnection } = require("./db");

async function createUserTable(req, res) {
  const db = await createConnection();
  const query = `CREATE TABLE users (
      user_id serial PRIMARY KEY,
      name VARCHAR ( 50 ) UNIQUE NOT NULL,
      created_on TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    );`;

  try {
    const result = await db.query(query);

    res.send(result.rows);
    endConnection(db);
  } catch (e) {
    console.error(e.stack);
    res.send(e.stack);
  }
}

async function deleteUserTable(req, res) {
  const db = await createConnection();
  const query = `DROP TABLE users;`;

  try {
    const result = await db.query(query);

    res.send(result.rows);
    endConnection(db);
  } catch (e) {
    console.error(e.stack);
    res.send(e.stack);
  }
}

async function selectUsers(req, res) {
  const db = await createConnection();
  const query = `SELECT * FROM users;`;

  try {
    const result = await db.query(query);

    res.send(result.rows);
  } catch (e) {
    console.error(e.stack);
    res.send(e.stack);
  }

  endConnection(db);
}

async function createUser(req, res) {
  const { name } = req.body;
  const db = await createConnection();
  const query = `INSERT INTO users (name) VALUES ('${name}');`;

  try {
    const result = await db.query(query);

    res.send(result.rows);
  } catch (e) {
    console.error(e.stack);
    res.send(e.stack);
  }

  endConnection(db);
}

module.exports = {
  createUser,
  createUserTable,
  selectUsers,
  deleteUserTable,
};
