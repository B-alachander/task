
const express=require("express")
const mongoose=require("mongoose")
const {engine}=require("express-handlebars")
const taskRouter=require("./route/taskRoutes")
const methodOverride =require("method-override")
let app=express();
let PORT=5000;


async function db(){
    await mongoose.connect("mongodb://127.0.0.1:27017/Task-manager")
    console.log("Mongo Db connected");
}db()

// mount template engine
app.engine("handlebars",engine())// letting express that we are using express-handlebars
app.set("view engine", "handlebars")// used convert extension to .handlebars



//inbuilt middleware
//to use css
app.use(express.static(__dirname+"/public"))
//to use the form data
app.use(express.urlencoded({extended:false}))
//router-level-middleware
app.use(methodOverride("_method"))
app.use('/task-manager',taskRouter) // taskRouter is used to provide paths through /task-manager



app.listen(PORT,(err)=>{
    if(err)console.log(err);
    console.log('post on 5000');
})