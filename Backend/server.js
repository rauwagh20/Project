import express from "express"

import cors from "cors"
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import "dotenv/config.js"
import cardRouter from "./routes/cardRoute.js";


// APP CONFIG

const app=express()
const port=process.env.PORT || 4000;

//MIDDELWARE
app.use(express.json())
app.use(cors())


//DB CONNECTION
connectDB();

//API ENDPOINT
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/card",cardRouter)

app.get("/",(req,res)=>{
    res.send("API WORKING")
})

app.listen(port,()=>{
    console.log(`server statred on http://localhost:${port}`)
})

//mongodb+srv://FoodsApp:7020884102@cluster0.tgnaplx.mongodb.net/?