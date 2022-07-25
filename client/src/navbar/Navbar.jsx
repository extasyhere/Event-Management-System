import React from 'react'
import "./Navbar.scss"
import Me from "./Me.jpg"


export default function Navbar() {
  return (
    <div className='container'>
        <div className="left">
            <img src={Me} alt="" />
            <h2>Book UR Event</h2>
            <span>Today's Events</span>
            <span>Upcoming Events</span>
            <span>Past Events</span>
        </div>
        <div className="right">
            <span>Admin Login</span>
            <span>LogOut</span>        
        </div>
    </div>
  )
}
