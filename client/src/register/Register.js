import React, { useRef } from 'react'
import { useHistory } from 'react-router-dom'
import axios from "axios"
import "./Register.scss"
import { useState } from 'react'

export default function Register() {
    const [email,setEmail]=useState("")
	const [phone_num,setPhone_num]=useState("")
	const [username,setUsername]=useState("")
	const [password,setPassword]=useState("")
    const history=useHistory()

    const emailRef=useRef()
    const passwordRef=useRef()
    const phone_numRef=useRef()
    const usernameRef=useRef()
    
    const handleRegister=async (e)=>{
        e.preventDefault()
        setEmail(emailRef.current.value)
        setPassword(passwordRef.current.value)
        setPhone_num(phone_numRef.current.value)
        setUsername(usernameRef.current.value)
        try {
            await axios.post("auth/register",{email,username,password,phone_num})
            history.push("/login") 

        } catch (err) {
            console.log(err)
            
        }
    }

return (          
    <div className="Containr">
        <h1>Add Details</h1>
        <div className='register'>
            <form >
                <input type="email" placeholder='email' ref={emailRef}/>
                <input type="Phn No." placeholder='Phn No.' ref={phone_numRef}/>
                <input type="password" placeholder='password' ref={passwordRef}/>
                <input type="username" placeholder='username' ref={usernameRef}/>
                <button className='RegisterButton'onClick={handleRegister}>Get Started</button>
            </form>
        </div>
    </div>
)
}
