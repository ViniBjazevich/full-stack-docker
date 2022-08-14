const axios = require("axios");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;

const { createUser, createUserTable, selectUsers } = require("./db/users");

app.use(cors());

app.get("/createUserTable", createUserTable);
app.get("/users", selectUsers);
app.get("/createUser", createUser);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
