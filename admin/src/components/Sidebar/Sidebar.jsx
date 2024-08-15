import React from 'react'
import "./Sidebar.css"
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebar-options">
        <NavLink to="/add" className="side-option">
          <img src={assets.add_icon} alt="" />
          <p>Add items</p>
        </NavLink>
        <NavLink to="/list" className="side-option">
          <img src={assets.order_icon} alt="" />
          <p>List items</p>
        </NavLink>
        <NavLink to="/order" className="side-option">
          <img src={assets.order_icon} alt="" />
          <p>Order items</p>
        </NavLink>
      </div>

    </div>
  )
}
