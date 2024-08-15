import mongoose from "mongoose"

const userSchema=new mongoose.Schema({
    name:{type:String,require:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,require:true},
    cardData:{typr:Object,default:{}}
},{minimize:false})//card data enry will be created any data

const userModel=mongoose.model.user || mongoose.model("user",userSchema);
export default userModel