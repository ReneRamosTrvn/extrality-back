const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  dateStarted: {
    type: Date,
    requried: true,
  },
  dateFinished: {
    type: Date,
    required: true,
  },
  status: {
    type: Boolean,
    required: false,
    default: false,
  },
  dateCreated: {
    type: Date,
    required: false,
    default: Date.now(),
  },
});

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;
