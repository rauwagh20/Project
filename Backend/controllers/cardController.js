import userModel from "../models/userModel.js"

//ADD Item to user card

const addToCard=async(req,res)=>{
    try {
        let userData=await userModel.findById(req.body.userId);
        let cardData=await userData.cardData;
        if(!cardData[req.body.itemId]){
            cardData[req.body.itemId]=1 
        }else{
            cardData[req.body.itemId]+=1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cardData});
        res.json({success:true,message:"added to card"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }


}


//REMOVE ITEM FROM USER CARD
const removeFromCard=async(req,res)=>{
try {
    let userData=await userModel.findById(req.body.userId);
    let cardData=await userData.cardData;
    if (cardData[req.body.itemId]) {
         cardData[req.body.itemId]-=1;

    }
    await userModel.findByIdAndUpdate(req.body.userId,{cardData})
    res.json({success:true,message:"remove from card"}) 

} catch (error) {
  console.log({success:false,message:"Error"});
}
}

//FETCH USER CARD DATA
const getCard=async(req,res)=>{
    try {
        let userData=await userModel.findById(req.body.userId)
        let cardData=await userData.cardData;
        res.json({success:true,cardData})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
        
    }

}

export{addToCard,removeFromCard,getCard};