import mongoose from "mongoose";
const Schema = mongoose.Schema;
// design the schema here for user
const userSchema = new Schema({

    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
    },
    email: {
        type: String,
        unique:true,
        required: [true,"email is reuuired"],
        trim: true,
        minlength: 3,
    },
    password: { 
        type: String,
        required: [true, "password is required"],
        trim: true,
        minlength: 3,
    },
    about: String,
    profileURL:String,
});

// create model here with name  users
export const User =mongoose.models.users || mongoose.model("users", userSchema);
