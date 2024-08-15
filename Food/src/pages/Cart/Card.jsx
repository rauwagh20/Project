"use client"
import React, { useContext } from 'react'
import "./Card.css"
import { StoreContext } from '../../Context/StoreContax'
import {useNavigate} from "react-router-dom"
function Card() {

    const{cardItems,food_list,removeFromCard,getTotalCardAmount,url}=useContext(StoreContext)

    const navigate=useNavigate();
    
  return (
    <div className='card'>
      <div className="card-items">
        <div className="card-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quntity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        
        {food_list.map((item,index)=>{
            if(cardItems[item._id]>0)
              {
              return(
                <>
              <div className=' card-items-title card-items-item' >
               <img src={url+"/images/"+item.image} alt="" />
               
               <p>{item.name}</p>
               <p>{cardItems[item._id]}</p>
               <p>{item.price*cardItems[item._id]}</p>
               <p onClick={()=>removeFromCard(item._id)} className='cross'>X</p>
              </div>
              <hr />
              </>
              )
            }
        })}

      </div>
          <div className="card-bottom">
            <div className="card-total">
              <h2>Card Totals</h2>
              <div>
                <div className="card-total-details">
                  <p>SubTotal</p>
                  <p>${getTotalCardAmount()}</p>
                </div>
                <hr />
                <div className="card-total-details">
                  <p>Delivery Fee</p>
                  <p>${getTotalCardAmount()===0?0:2}</p>
                </div>
                <hr />
                <div className="card-total-details">
                  <b>Total:</b>
                  <b>${getTotalCardAmount()===0?0:getTotalCardAmount()+2}</b>
                </div>
               
              </div>
              <button onClick={()=>navigate("/order")}>Procced To Checkout</button>
            </div>
            <div className="card-promocode">
              <div>
                <p>If You Have A promocode,Enter Here</p>
                <div className="card-promocode-input">
                  <input type="text" placeholder='Enter Your Promo Code' />
                  <button>Submit</button>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Card