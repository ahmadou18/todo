const mongoose = require("mongoose");

const schema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },

  description: {
    type: String,
  },

  completed: {
    type: Boolean,
    default: false,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Todo = mongoose.model("Todo", schema);

module.exports = Todo;
