import express from "express"
import {addToCard,removeFromCard,getCard } from "../controllers/cardController.js"
import authMiddelware from "../middelware/auth.js";
const cardRouter=express.Router();


cardRouter.post("/add", authMiddelware,addToCard)
cardRouter.post("/remove", authMiddelware,removeFromCard)
cardRouter.post("/get", authMiddelware,getCard)

export default cardRouter;