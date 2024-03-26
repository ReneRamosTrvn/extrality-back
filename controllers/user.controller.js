const User = require("../models/user.model.js");
const Task = require("../models/task.model.js");
const mongoose = require("mongoose");

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if (password != user.password) {
      return res.status(401).json({ message: "Incorrect password" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

//Add task to specific user
const addTask = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User does not exist" });
    }
    const task = await Task.create(req.body);
    res.status(200).json({ message: "Task added succesfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

//Delete specific task
const deleteTask = async (req, res) => {
  try {
    const { taskId } = req.params;
    const task = await Task.findByIdAndDelete(taskId);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json({ message: "Task deleted succesfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

//Edit specific task
const editTask = async (req, res) => {
  try {
    const { taskId } = req.params;
    const task = await Task.findByIdAndUpdate(taskId, req.body);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json({ message: "Task edited succesfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const getTasksByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const userTasks = await Task.find({ owner: userId });

    res.status(200).json(userTasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getUser,
  addTask,
  getAllUsers,
  getTasksByUser,
  deleteTask,
  editTask,
  loginUser,
};
