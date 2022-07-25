import React from 'react'
import "./admin.scss"
import AdminNavBar from './adminNavBar'



export default function Admin() {
  return (
      <>    
      <AdminNavBar/>
    <div className="buttonadmin">
        <button className='loginButtonadmin'>update Event</button>
        <button className='loginButtonadmin'>update User</button>
    </div>
    </>

  )
}
