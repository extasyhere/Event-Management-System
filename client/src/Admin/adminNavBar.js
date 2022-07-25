import React from 'react'
import Me from "./Me.jpg"
import "./adminNavBar.scss"


export default function AdminNavBar() {
  return (
    <div className='admin'>
        <div className='topbar'>
            <div className="left">
                <img src={Me} alt="" />
                <h2>Book UR Event</h2>

            </div>
            <div className="right">
                <span>LogOut</span>        
            </div>
        </div>  
    </div>
  )
}
