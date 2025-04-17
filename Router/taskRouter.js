import taskController from "../Controller/taskController.js";
import express from "express";

const router = express.Router();

router.post("/create", taskController.Create);
router.get("/get", taskController.Getall);
router.get("/get/:id", taskController.GetbyId);
router.put("/update/:id", taskController.UpdateOrder);
router.delete("/delete/:id", taskController.DeleteOrder);

export default router;