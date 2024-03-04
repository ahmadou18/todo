const Todo = require("../model/todo.model.js");

const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findById(id);
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const createTodo = async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findByIdAndUpdate(id, req.body);
    if (!todo) {
      return res.status(404).send("Todo not found");
    }
    const updatedTodo = await Todo.findById(id);
    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findByIdAndDelete(id);
    if (!todo) {
      return res.status(404).send("Todo not found");
    }
    res.status(200).json("Todo deleted");
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  getTodos,
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
};
