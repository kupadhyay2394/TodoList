import { ToDo } from "./model.js";
async function addTask(req,res) {
    const {taskName, status}=req.body;
    if(!taskName){
        return res("no task added");
    }

    const task=await ToDo.create({
        taskName,
        status,
        
    })
    return res.status(201).send("Task added successfully");
}
async function getallTask(req, res) {
   const task= await ToDo.find(); 
   return res.status(201).send(task);
    
}
async function putPending(req, res) {
    const {taskName}=req.body;
    const task=await ToDo.findOneAndUpdate(
        {taskName:taskName},
        {
            status:"pending"
        },
        {new:true}
    );
    return res.status(201).send(task);


    
}
async function completedTask(req,res) {
    const {taskName}=req.body;
    const task=await ToDo.findOneAndUpdate(
        {taskName:taskName},
        {
            status:"Complted",
            completedAt:Date.now()
        },
        {new:true}
    );
    return res.status(201).send(task);
    
}
export {addTask, getallTask,putPending,completedTask};