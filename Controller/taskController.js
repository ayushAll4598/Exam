import taskModel from "../Model/taskModel.js";

const controller = {
    async Create (req,res){
        const order = new taskModel(req.body);
        await order.save()
        res.json(order);
    },
    async Getall (req,res){
        const Order = await taskModel.find();
        res.json(Order);
    },
    async GetbyId (req,res){
        const Orders = await taskModel.findById(req.params.id);
        res.json(Orders);
    },
    async UpdateOrder (req,res){
        const UpdateOrder = await taskModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(UpdateOrder);
    },
    async DeleteOrder (req,res){
        const DeleteOrder = await taskModel.findByIdAndDelete(req.params.id);
        res.json("Order Deleted Successfully");
    }

}
export default controller;