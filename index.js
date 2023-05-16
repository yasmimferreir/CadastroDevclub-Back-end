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

app.put("/users/:id", (request, response) => {
  const { id } = request.params;
  const { name, age } = request.body;

  const updateUser = { id, name, age };

  const index = users.findIndex((user) => user.id === id);

  if (index < 0) {
    return response
      .status(404)
      .json({ error: "Id não encontrado/incorreto, verifique os dados" });
  }

  users[index] = updateUser;

  return response.json(updateUser);
});

app.listen(port, () => {
  console.log(`🤩 Server started on port ${port}`);
});
