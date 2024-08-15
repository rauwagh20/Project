
import React, { useContext, useState } from 'react'
import "./navbar.css"
import { assets } from '../../assets/assets'
import {Link, useNavigate} from "react-router-dom"
import { StoreContext } from '../../Context/StoreContax'

export default function navbar({setShowLogin}) {

    const[menu,setMenu]=useState("menu")

    const{getTotalCardAmount,token,setToken}=useContext(StoreContext)
    const navigate=useNavigate();
    const logout=()=>{
            localStorage.removeItem("token");
            setToken("");
            navigate("/")


    }

  return (
    <div className='navbar'>
        <Link to="/"><img src={assets.logo} alt='' className='logo' /></Link>
        <ul className="navbar-menu">
            <Link to="/" onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</Link>
            <a href="#explore-menu" onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</a>
            <a href="#appdownload" onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</a>
            <a href="#footer" onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact-us</a>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className='navbar-serach-iocn'>
                <Link to="/card"><img src={assets.basket_icon} alt="" /></Link>

                <div className={getTotalCardAmount()===0?"":"dot"}></div>
            </div>
            {!token?<button onClick={()=>setShowLogin(true)}> SIgn In </button>
        :<div className='navbar-profile'>
            <img src={assets.profile_icon} alt="" />
            <ul className="navprofile-deopdown">
                <li><img src={assets.bag_icon} alt="" /><p>Order</p></li>
                <hr />
                <li onClick={logout}><img src={assets.logout_icon} alt="" />Logout</li>
            </ul>
        </div>    
        }
            
        </div>
    </div>
  )
}

