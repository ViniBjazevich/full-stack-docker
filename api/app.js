const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;

const {
  createUser,
  createUserTable,
  selectUsers,
  deleteUserTable,
} = require("./db/users");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/users", selectUsers);
app.post("/createUserTable", createUserTable);
app.post("/createUser", createUser);
app.delete("/deleteUserTable", deleteUserTable);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
