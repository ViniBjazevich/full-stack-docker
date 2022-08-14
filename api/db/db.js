const { Pool } = require("pg");

// $ docker run --name local-postgres -p 5432:5432 -e POSTGRES_PASSWORD=mypassword -e POSTGRES_USER=admin -d postgres
const createConnection = async () => {
  const pool = new Pool({
    user: "admin",
    host: "localhost",
    database: "postgres",
    password: "mypassword",
    port: 5432,
    allowExitOnIdle: true,
  });

  return await pool.connect();
};

const endConnection = (db) => {
  db.release();
}

module.exports = {
  createConnection,
  endConnection,
};
