import React from 'react'
import "./event.scss"

export const Event = (event) => {
  return (
    <div className="event">
        <img src='https://firebasestorage.googleapis.com/v0/b/netflix-1123bg.appspot.com/o/items%2FWhatsApp%20Image%202022-06-09%20at%203.33.34%20PM.jpeg?alt=media&token=96d53018-0dee-4fbc-a3ca-c99b35f3563a' className='eventimg'/>
        <div className="info">
            <h2>Kalamkaar's Show</h2>
            <div className="more">
                <div className="additional_info">
                    <div className="artists">
                        <span className="time">
                            <b>Time&Date:-</b>6pm,11 June 2022
                        </span>
                        <span className="venue">
                            <b>Venue:-</b>G-670,Gamma 2,Greater Noida.
                        </span>
                        <span className="artist">
                            <b>Artists:-</b>Karma,Kr$na,Raftaar
                        </span>
                    </div>
                    <div className='desc'>
                        <h4>About Show:-</h4>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, suscipit incidunt libero voluptas dolorem illum dolorum officiis quia iste aspernatur tenetur amet inventore sed facere sunt quis minus, earum aut?</span>
                    </div>
                </div>
                
                <button className='buy_button'>Buy</button>
            </div>
        </div>
    </div>
  )
}
