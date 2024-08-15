"use client"
import React from 'react'
import "./PlaceOrder.css"
import { StoreContext } from '../../Context/StoreContax'
import { useContext } from "react"
function PlaceOrder() {

    const {getTotalCardAmount}=useContext(StoreContext)

  return (
   <form className='place-order'>
    <div className='place-order-left'>
      <p className='title'>Delivery information</p>
    <div className='multi-field'>
      <input type="text" placeholder='First Name'/>
      <input type="text" placeholder='Last Name'/>
    </div>
    <input type="text" placeholder='Email '/>
    <input type="text" placeholder='Street'/>
    <div className='multi-field'>
      <input type="text" placeholder='City'/>
      <input type="text" placeholder='State'/>
    </div>

    <div className='multi-field'>
      <input type="text" placeholder='Zip Code'/>
      <input type="text" placeholder='Country'/>
    </div>
    <input type="text" placeholder='Phone' />
    </div>


    <div className='place-order-right'>
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
              <button >Procced To Payment</button>
            </div>
    </div>
   </form>
  )
}

export default PlaceOrder