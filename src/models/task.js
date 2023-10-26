// create task model 
import mongoose from "mongoose";
  const Schema = mongoose.Schema;
    // design the schema here for task

const taskSchema= new Schema ({
    title:{
        type:String,
        required:true,
        trim:true,
        minlength:3,
    },
    description:{
        type:String,
        required:true,
        minlength:3,
    },

    addedDate:{
         type:Date,
         required:true,
        default:Date.now,
    },

    status:{
        type:String,
        enum:["pending","completed"],
        default:"pending",
    },

    userId:{
        type:mongoose.Schema.Types.ObjectId,
    }
});

// create model here with task 
export const Task= mongoose.models.tasks || mongoose.model("tasks",taskSchema);