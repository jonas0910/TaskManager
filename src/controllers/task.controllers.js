import taskModel from "../models/task.model.js"

export const getTasks=async(req,res)=>{
    const tasks= await taskModel.find({user: req.user.id}).populate("user");
    res.json(tasks);
}
export const createTask=async(req,res)=>{
    const {title,description,date}=req.body;
    const newTask=new taskModel({
        title,
        description,
        date,
        user:req.user.id
    })
    const taskSaved= await newTask.save();
    res.json(taskSaved)
}
export const getTask=async(req,res)=>{
    const task=await taskModel.findById(req.params.id);
    if(!task){return res.status(404).json({message:"Task not found"})}
    res.json(task);
}
export const updateTask=async(req,res)=>{
    const task=await taskModel.findByIdAndUpdate(req.params.id, req.body,{new:true});
    if(!task){return res.status(404).json({message:"Task not found"})}
    res.json(task);
}
export const deleteTask=async(req,res)=>{
    const task=await taskModel.findByIdAndDelete(req.params.id);
    if(!task){return res.status(404).json({message:"Task not found"})}
    res.json(task);
}
