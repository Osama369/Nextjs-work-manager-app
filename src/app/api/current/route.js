// this api will provide  the user data through token user that is currently Login in
import {NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { User } from "@/models/user";
export async function GET(request){
    
    const authToken= request.cookies.get("userAuthToken")?.value;

    console.log(authToken);

    const data= jwt.verify(authToken, process.env.JWT_SECRET);
    const user= await User.findById(data.id).select("-password");
    console.log(data);
    console.log(user); 
    return NextResponse.json(user);
}