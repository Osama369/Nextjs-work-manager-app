// yahan se api fire hogi 
// creating api for task 


import { Task } from "@/models/task";
import { NextResponse } from "next/server";

//1. get all tasks 
export async function GET(request){
  let tasks=[];
  try {
    tasks= await Task.find();
  } catch (error) {
       console.log(error);
         return NextResponse.json({
            message:"fail to find  tasks",
            status:false,

         })
  }
     return NextResponse.json(tasks);
}


// create task api here
export async function POST(request){

 // fetch all the data from model 
 const {title,description,userId}= await request.json();

 try {
     const task = new Task({
            title,
            description,
            userId,

     });
      const createdTask =await task.save();
        const response = NextResponse.json(task,{
                status:201,
            });
        return response;
 } catch (error) {
    console.log(error);
    return NextResponse.json({
        message:"Failed to create task",
        status:false,
    })
 }


}