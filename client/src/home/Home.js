import axios from 'axios';
import React, { useEffect, useState } from 'react'
import{ Event }from '../events/Event'
import Navbar from '../navbar/Navbar'

export default function Home() {
  const[events,setEvents]=useState([]);


  useEffect(()=>{
    
    const getEvents= async ()=>{

      try {
        const res=await axios.get("/events",{
          headers:{
            token:""
          }

        })
        setEvents(res.data)
        
      } catch (err) {
        console.log(err)
        
      }
    };getEvents();
    },[])
    
  return (
    <>
    <Navbar/>

        <h1>Events:-</h1>
        {events.content.map((event,i)=>
        <Event index={i} event={event}/>
        )}

    </>
  )
}
