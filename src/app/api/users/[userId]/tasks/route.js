import { Task } from "@/models/task";
import { User } from "@/models/user";
import { NextResponse } from "next/server";


export async function GET(request,{params}){
 
    const {userId}=params;

    try {
     const tasks=await Task.find({
            userId:userId,
        });
        return NextResponse.json(tasks);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"Failed to find tasks",
            status:false,
        })
    }
}