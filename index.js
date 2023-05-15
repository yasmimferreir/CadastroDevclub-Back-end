import express from "express";

import * as uuid from "uuid";
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

const express = app.use(bodyParser.json());

const users = [];

app.get("/users", (request, response) => {
  return response.json(users);
});

app.post("/users", (request, response) => {
  const { name, age } = request.body;

  const user = { id: uuid.v4(), name, age };

  users.push(user);

  return response.status(201).json(user);
});

app.listen(port, () => {
  console.log(`🤩 Server started on port ${port}`);
});
