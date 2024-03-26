const Employee = require("../models/user.model.js");
const Task = require("../models/task.model.js");

const addEmploye = async (req, res) => {
  try {
    const employeeExists = await Employee.find(req.body);
    if (employeeExists.length > 0) {
      return res.status(200).json({ mesage: "User already exists" });
    }
    const employee = await Employee.create(req.body);
    res.status(200).json({ message: "Employee added" });
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    await Task.deleteMany({ owner: id });
    const employee = await Employee.findByIdAndDelete(id, req.body);
    res.status(200).json({ message: "User deleted" });
  } catch (error) {
    res.status(500).json(error);
  }
};

const changeStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndUpdate(id, req.body);
    if (!task) {
      return res.status(404);
    }
    res.status(200).json({ message: "Status changed" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  addEmploye,
  deleteEmployee,
  changeStatus,
};
