// StoreContextProvider (StoreContax.jsx)
import React, { createContext, useEffect, useState } from 'react';
import axios from "axios"


export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cardItems, setCardItems] = useState({});
  const url=" http://localhost:4000"
  const [token,setToken]=useState("")
  const [food_list,setFoodList]=useState([])

  const addToCard = async (itemId) => {
    setCardItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }))
  
  if (token) {
    await axios.post(url+"/api/card/add",{itemId},{headers:{token}})
  }
};
  const removeFromCard =async (itemId) => {
    setCardItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] - 1,
    }))
    if (token) {
      await axios.post(url+"api/card/remove",{itemId},{headers:{token}})
    }
  };

  const getTotalCardAmount = () => {
    let totalAmount = 0;
    for (const itemId in cardItems) {
      if (cardItems[itemId] > 0) {
        const itemInfo = food_list.find((product) => product._id === itemId);
        totalAmount += itemInfo.price * cardItems[itemId];
      }
    }
    return totalAmount;
  }
  // GET FOOD ITEMS FROM DATABASE

  const fetchFoodList=async()=>{
    const resposnse=await axios.get(url+"/api/food/list");
    setFoodList(resposnse.data.data)
  }

  const laodCardData=async(token)=>{
    const response=await axios.post(url+"/api/card/get",{},{headers:{token}})
    setCardItems(response.data.cardData);
  }

  useEffect(()=>{
   
    async function loadData(){
      await fetchFoodList();
      if(localStorage.getItem("token")){
        setToken(localStorage.getItem("token"));
        await laodCardData(localStorage.getItem("token"))
      }
    }
    loadData();
  },[])

  const contextValue = {
    food_list,
    cardItems,
    addToCard,
    removeFromCard,
    getTotalCardAmount,
    url,
    token,
    setToken
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
