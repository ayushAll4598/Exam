import express from "express";
import taskRouter from "./Router/taskRouter.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import connection from "./connection.js";

dotenv.config();
const app = express();
app.use(express.json());


app.use("/task",taskRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})
