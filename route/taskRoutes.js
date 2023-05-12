const express=require("express")
const {getTasks,postTask,getTask, updateTask, deleteTask}=require("../controller/taskController")
let taskRouter=express.Router()
// to create task
taskRouter.get("/task",getTasks)
// to post task
taskRouter.post("/task",postTask)
// to get task
taskRouter.get("/task/:id",getTask)
// to update task
taskRouter.put("/task/:id",updateTask)
// to delete task
taskRouter.delete("/task/:id",deleteTask)




module.exports=taskRouter;
