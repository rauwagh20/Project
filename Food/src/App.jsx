"use client"
import React, { useState } from 'react'
import Navbar from "./components/Navbar/navbar"
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home/Home"
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Card from './pages/Cart/Card'
import Footer from "./components/Footer/Footer"
import LoginPopup from './components/LoginPopup/LoginPopup'



function App() {
  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<LoginPopup  setShowLogin={ setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/card' element={<Card/>}/>
        <Route path="/order" element={<PlaceOrder/>}/>
      </Routes>
      
    </div>
    <Footer/>
    </>
  )
}

export default App