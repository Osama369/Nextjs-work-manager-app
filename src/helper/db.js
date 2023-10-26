
import mongoose from "mongoose";
export const connectDb= async ()=>{
  try{

    const{connection}=await mongoose.connect(process.env.MONGO_URL,{
        
        dbName:"work-manager",
    });
    console.log("connected");

    // create user for testing just for testing
    // const user1= new User({
    //   name:"usama",
    //   email:"usama123@gmail.com",
    //   password: "password",
    //   about:"this is usama",
    //   profileURL:"https://www.google.com",

    // });
    // await user1.save();
    // console.log("user is create",user1);

    console.log(connection.host);
  }catch(error){
    console.log(error);
  }
};

// export default connectDb;




