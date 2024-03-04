const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const todoRoutes = require("./routes/todo.routes.js");

const server = () =>
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

// middleware
app.use(express.json());

// routes

app.use("/api/todos", todoRoutes);

const CONNECTION_URL =
  "mongodb+srv://admin:VVggfxjn3i2V2r4@cluster0.exq2ewy.mongodb.net/todo-mongo?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    console.log("Connected to the database!");
    server();
  })
  .catch((err) => {
    console.error("Cannot connect to the database!", err);
  });
