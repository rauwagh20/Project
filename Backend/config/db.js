import mongoose from "mongoose"

export const connectDB= async()=>{
    await mongoose.connect("mongodb+srv://FoodsApp:7020884102@cluster0.tgnaplx.mongodb.net/food-del")
    .then(()=>
        console.log("dbConnected")
    );
}