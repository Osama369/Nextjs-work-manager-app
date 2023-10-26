// here we can develope our apis

// import the connectDb
import { User } from "@/models/user";
import { connectDb } from "../../../helper/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
  
// calling function here for testing 
// static apis
connectDb();

// get user api or find all users 
export async function GET(request){
     let users=[];
       try {
             users= await User.find();
       } catch (error) {
          console.log(error);
          // or message by nextrespone
          return NextResponse.json({
            message:"Failed to find users",
            status:false,

          })
       }
         return NextResponse.json(users);
}

// create user api
// Create user API
export async function POST(request) {
  try {
    // Fetch user data from the request body
    const { name, email, password, about, profileURL } = await request.json();

    // Hash the password securely
    const hashedPassword = await bcrypt.hash(password, 10); // Use async bcrypt.hash

    // Create a new user object
    const user = new User({
      name,
      email,
      password: hashedPassword, // Store the hashed password
      about,
      profileURL,
    });

    // Save the user to the database
    const createdUser = await user.save();

    // Return a success response with the created user
    return NextResponse.json({
      message: "User created successfully",
      status: true,
      user: createdUser, // Send the created user object in the response
    }, { status: 201 }); // Set the HTTP status code to 201 for successful creation
  } catch (error) {
    console.error(error);
    
    // Return an error response with a meaningful message
    return NextResponse.json({
      message: "Failed to create user",
      status: false,
    }, { status: 500 }); // Set the HTTP status code to 500 for internal server error
  }
}
export function DELETE(){
    
}
export function PUT(){
    
}