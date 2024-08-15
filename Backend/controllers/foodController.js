import exp from "constants";
import foodmodel from "../models/foodModel.js";
import fs from "fs"
import { response } from "express";
import { log } from "console";


//ADD FOOD ITEMS

const addFood = async(req,res)=>{

    let image_filename = (`${req.file.filename}`)

    const food=new foodmodel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })
    try{
        await food.save();
        res.json({success:true,message:"Food Added"})
    }catch(error){
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

//

//ALL FOOD LIST
const listFood=async(req,res)=>{
        try {
            const foods=await foodmodel.find({});
            res.json({success:true,data:foods})
        } catch (error) {
            console.log(error);
            res.json({success:false,message:"Error"})
        }
}

//Remove Food Item

const removeFood=async(req,res)=>{
        try {
            const food=await foodmodel.findById(req.body.id);
            fs.unlink(`uploads/${food.Image}`,()=>{})
                    //DELET FROM MONGO DB
                await foodmodel.findByIdAndDelete(req.body.id)
            res.json({success:true,message:"Food Remove"})
        } catch (error) {
            console.log(error);
            res.json({success:true,message:"error"})
        }
}

export {addFood, listFood,removeFood}