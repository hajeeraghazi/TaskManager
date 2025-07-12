import express from "express";
import Task from "../models/task.model";

const router = express.Router();

// Create Task
router.post("/", async (req, res) => {
  try {
    const { title, description } = req.body;
    const task = new Task({ title, description });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get All Tasks
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get Task by ID
router.get("/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update Task
router.put("/:id", async (req, res) => {
  try {
    const { title, description, completed } = req.body;
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      { title, description, completed },
      { new: true }
    );
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete Task
router.delete("/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json({ message: "Task deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
