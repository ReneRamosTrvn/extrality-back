const express = require("express");
const router = express.Router();

const {
  addEmploye,
  deleteEmployee,
  changeStatus,
} = require("../controllers/admin.controller.js");

router.post("/", addEmploye);
router.delete("/:id", deleteEmployee);
router.put("/:id/task", changeStatus);

module.exports = router;
