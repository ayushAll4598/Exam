import mongoose from "mongoose";

const url = "mongodb+srv://ayushsavaliya4544:fO6vQDlG4eZ2DYvj@cluster0.p65uq.mongodb.net/Exam?retryWrites=true&w=majority&appName=Cluster0"
mongoose.set("strictQuery", false);
mongoose.connect(url)

export default mongoose.connection