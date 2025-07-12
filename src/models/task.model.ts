import mongoose, { Document, Schema } from "mongoose";

export interface ITask extends Document {
  title: String;
  description: String;
  completed: Boolean;
}

const TaskSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    completed: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model<ITask>("Task", TaskSchema);
