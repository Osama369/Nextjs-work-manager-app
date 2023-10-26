import { NextResponse } from "next/server";
import { User } from "@/models/user";
import bcrypt from "bcryptjs";
import  jwt  from "jsonwebtoken";
export  async function POST(request){
    // fetch the emailID and password from the database
    const {email,password}= await request.json();

    try { 
        // step1. get the user
         const user= await User.findOne({
            email:email    
         })
         if(!user || user==null  ){
             return NextResponse.json({
                 status:404,
                 message:"User not found"
                })
            }
            
            //step2. validate the password
          const matched = bcrypt.compareSync(password, user.password)
            // if password is not matched
             if (!matched) {
                return NextResponse.json({
                    status:400,
                    message:"Password is not matched"
                })
             } 
           

             // step3. create the token 
                // use the jwt (jswebtoken)
            const token = jwt.sign({id:user._id, namea:user.name},process.env.JWT_SECRET,{
                      
                   expiresIn:"1d",
                });
                console.log(token); 

        // step4. send this token via cookies  
                    
           const response = NextResponse.json({
                status:200,
                message:"User Logged in successfully",
                data:user
            });  
             
             response.cookies.set("userAuthToken", token, {
                   
                    httpOnly:true,
                    expiresIn:"1d",

             })
                return response;

    } catch (error) {
          console.log(error);

          return NextResponse.json({
                status:500,
                message:"Internal Server Error"
          })
    }
}