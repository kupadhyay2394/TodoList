import mongoose, {Schema}  from "mongoose";
const todoSchema=new Schema({
    taskName:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    status:{
        type:String,
        enum:['Started','Pending','Complted'],
        default:'Started'

    },
    completedAt:{
        type:Date
        
        
    },
},{timestamps:true}
)

export const ToDo=mongoose.model("ToDo",todoSchema);
