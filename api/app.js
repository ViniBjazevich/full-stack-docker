const axios = require("axios");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/vini", (req, res) => {
  res.send("Vini");
});

app.get("/bailey", (req, res) => {
  res.send("bailey");
});

app.get("/users", (req, res) => {
  axios.get("https://jsonplaceholder.typicode.com/users")
    .then(({data}) => res.send(data))
    .catch((err) => res.send(e))
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
