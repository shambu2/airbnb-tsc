import mongoose, { model } from "mongoose";

const userSchema = new mongoose.Schema({
   name:{
    type:String,
    required: true,
    minLength: 4
   },
   email:{
    type:String,
    required:true,
    minLength: 4
   },
   password:{
    type:String,
    required:true,
    minLength:4
   }

})

export const User = mongoose.model("User",userSchema)