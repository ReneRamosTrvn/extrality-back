const express = require("express");
const router = express.Router();
const {
  addTask,
  getUser,
  getTasksByUser,
  getAllUsers,
  deleteTask,
  editTask,
  loginUser,
} = require("../controllers/user.controller.js");

router.post("/:userId/tasks", addTask);
router.get("/:id", getUser);
router.get("/:userId/tasks", getTasksByUser);
router.get("/", getAllUsers);
router.delete("/:taskId/tasks", deleteTask);
router.put("/:taskId/tasks", editTask);
router.post("/login", loginUser);

module.exports = router;
