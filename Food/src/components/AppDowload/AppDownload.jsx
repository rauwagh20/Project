import React from 'react'
import "./AppDownload.css"
import { assets } from '../../assets/assets'
export default function AppDownload() {
  return (
    <div className='appdownload' id='appdownload'>
        <p>For Better Experience Download <br />Tomato App</p>
        <div className="appdownload-platform">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
        </div>
    </div>
  )
}
