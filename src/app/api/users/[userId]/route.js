import { User } from "@/models/user";
import { NextResponse } from "next/server";


// get single user

export async function GET(request, { params }) {
    const {userId}= params
    try {
        
        const user= await User.findById(userId);
        return NextResponse.json(user);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"Failed to find user",
            status:false,
        })
        
    }

}

// delete the user api
export async function DELETE(request, { params }) {
  const { userId } = params
      try {
           await User.deleteOne({ 
            _id:userId
           },  { maxTimeMS: 20000 } );
           return NextResponse.json({
                message:"user deleted",
           })
      } catch (error) {
          console.log(error);
            return NextResponse.json({
                message:"Failed to delete user",
                status:false,
            })
      }
  }

  // update user api

    export async function PUT(request, { params }) {
        const { userId } =params;
        // fetch the  details of the user that have to be change or update
        const {name,password,about,profileURL}= await request.json();
        try {
            if(!name ||! password){
                return NextResponse.json({
                    message:"name and password is required",
                    status:false,
                })
                
            }
            let updatedUser={};
            if(name) updatedUser.name=name;
            if(password) updatedUser.password=password;
            if(about) updatedUser.about=about;
            if(profileURL) updatedUser.profileURL=profileURL;
            await User.updateOne({_id :userId},updatedUser,{new:true},{maxTimeMS:150});
            return NextResponse.json({
                message:'user Updated',
                status:true,
            })
            
        } catch (error) {
            console.log(error);
            return NextResponse.json({
                message:"Failed to update user",
                status:false,
               
            })
        }
    }
