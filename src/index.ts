import cors from "cors";
import dotenv from "dotenv";
import express, { Request, Response } from "express";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

//Middleware
app.use(cors());
app.use(express.json());

//Connect MOngoDB
mongoose
  .connect(process.env.MONGO_URI!, {})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

//Task Schema & Model
const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  completed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

const Task = mongoose.model("Task", taskSchema);

//Routes
app.get("/task", async (req: Request, res: Response) => {
  const task = await Task.find();
  res.json(task);
});

app.post("/task", async (req: Request, res: Response) => {
  const { title, description } = req.body;
  const newTask = new Task({ title, description });
  await newTask.save();
  res.status(201).json(newTask);
});

app.put("/task/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;
  const updatedTask = await Task.findByIdAndUpdate(
    id,
    { title, description, completed },
    { new: true }
  );
  res.json(updatedTask);
});

app.delete("/task/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  await Task.findByIdAndDelete(id);
  res.json({ message: "Task Deleted!" });
});

app.get("/", (req: Request, res: Response) => {
  res.send("Task Manager API is running");
});

app.listen(PORT, () => {
  console.log(`Server running on https://localhost:${PORT}`);
});
