import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type:String},
    status: {type: String, 
            enum: ["Pending", "in progress", "Completed"], 
            default: "Pending"},
    createdAt: {type: Date, default: Date.now},
})

export default mongoose.model("Tasks", taskSchema);