// this is our dynamic routes 

import { Task } from "@/models/task";
import { NextResponse } from "next/server";

// get single task here
export async function GET(request,{params}){
   const {taskId}= params

   try {
      const task= await Task.findById(taskId);
      return NextResponse.json(task);
   } catch (error) {
      console.log(error);
      return NextRequest.json({
           message:"failde to find user task",
             status:false,
      })
   }
}

export async function DELETE(request,{params}){
   const{ taskId}=  params;

   try {
      await Task.deleteOne({
         _id:taskId
      }, {maxTimeMS:20000});
      return NextResponse.json({
         message:"task deleted",
         status :true,
      })
      
   } catch (error) {
      console.log(error);
      return NextRequest.json({
          message:"failed to delete task",
          status:"false",
      })
   }
}

// update the task and its conetent

export async function PUT(request, {params}){
   const {taskId}=params;
   // fetch the details that we have to change 
   const {title,description,status}= await request.json();
   try {
      if(!title || !description){
         return NextResponse.json({
            message:"title and description is required",
            status:false,
         })
      }
      let updatedTask={}; 
      if(title) updatedTask.title=title;
      if(description) updatedTask.description=description;
      if(status) updatedTask.status=status;
      const task= await Task.findOneAndUpdate({
         _id:taskId,
      },
      updatedTask,
      {
         new:true,
         runValidators:true,
      }
      );
      return NextResponse.json(task);
   } catch (error) {
      console.log(error);
      return NextResponse.json({
         message:"fail to updated task",
         status:false,

      })
   }
}






