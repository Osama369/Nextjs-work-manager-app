// here we can develope our apis

// import the connectDb
import { User } from "@/models/user";
import { connectDb } from "../../../helper/db";
import { NextResponse } from "next/server";
  
// calling function here for testing 
// static apis
connectDb();
export function GET(request){
     const users=[

        {
            id:1,
            name:"usama", 
            address:"sindh"
        },
         
        {
            id:2,
            name:"ahmed",
            address:"karachi"
        },

        {
            id:3,
            name:"mohammad",
            address:"lahore"
        },
 
     ];
         return NextResponse.json(users);
}

// create user api
export async function POST(request){
   // fetch the detials from request
    const {name,email,password,about,profileURL}= await request.json();
    // create user object with model
   const user= new User({
        name,
        email,
        password,
        about,
        profileURL,
    });
    try {
        const createdUser = await user.save();
        const response = NextResponse.json(user,{
                  status:201
                });
          return response;
    } catch (error) {
        console.log(error); 
        return NextResponse.json({
            message:"Failed to create user",
            status:false,
        })
    }
 

}
export function DELETE(){
    
}
export function PUT(){
    
}