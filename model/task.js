let mongoose = require('mongoose')

//give schema,stores data in db, let us have validations for the data

let TaskSchema = new mongoose.Schema({
    task:{
        type:String,
        required:true,
        trim:true
    }
},{
    timestamps:true
})
// schema provides the structure, while model follows schema to send data


module.exports = mongoose.model("task",TaskSchema)// task is collection