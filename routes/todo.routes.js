const express = require("express");
// create router
const router = require("express").Router();
// import controller
const {
  getTodos,
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todos.controller.js");

// routes
router.get("/", getTodos);
router.get("/:id", getTodo);
router.post("/", createTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

module.exports = router;
