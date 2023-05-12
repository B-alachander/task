const Task = require("../model/task")

const getTasks=async(req,res)=>{
try {
    let tasks = await Task.find().lean()
    res.status(200).render("home",{tasks})
    
} catch (error) {
    res.status(402).json({
        messege:"no task added"
    })
}}



// const postTask=async (req,res)=>{
//     try
//     {
//         let {task}=req.body
//         // console.log(req.body);
//         await Task.create({task:task})
//         res.redirect("/task-manager/task")
//         }
//         catch(err){
//             console.log(err);
//             }

// }


const postTask=async (req,res)=>{
    try
    {
        let {task}=req.body
        //to prevent duplicates
        const Tasks = await Task.findOne({ task });
                if(Tasks)
            {
                res.json("data already added")
            }else{
                console.log(req.body);
                await Task.create({task:task})
                 res.redirect("/task-manager/task")
            }
        }
        catch(err){
            console.log(err);
            }

}

const getTask=async (req,res)=>{
   try {
    let id=req.params.id
    let task=await Task.findOne({_id:id}).lean()
    res.status(200).render("update",{task})
   } catch (error) {
    console.log(error);
   }

}
const updateTask=async (req,res)=>{
    try {
     let id=req.params.id
     let updateTask=req.body.task
     await Task.updateOne({_id:id},{$set:{task:updateTask}}).lean()
     res.status(302).redirect("/task-manager/task")
    } catch (error) {
     console.log(error);
    }
 
 }

 const deleteTask=async (req,res)=>{
    try {
     let id=req.params.id
     await Task.deleteOne({_id:id})
     res.status(500).redirect("/task-manager/task")
    } catch (error) {
     console.log(error);
    }
 }




module.exports={
    getTasks,
    postTask,
    getTask,
    updateTask,
    deleteTask
}