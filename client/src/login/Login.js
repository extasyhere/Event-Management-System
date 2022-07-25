import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { login } from '../authContext/apiCalls'
import { AuthContext } from '../authContext/authContext'
import "./Login.scss"

export default function Login() {
	const [email,setEmail]=useState("")
	const [phone_num,setPhone_num]=useState("")
	const [username,setUsername]=useState("")
	const [password,setPassword]=useState("")
	const{dispatch}=useContext(AuthContext)

	const handleLogin=(e)=>{
		e.preventDefault()
		login({email,password},dispatch);
	}
	

	return (
		<div className="login">
			<h1 className='headers' >Sign In</h1>
		    <form className="loginForm">
			<inpts
			  type="text"
			  placeholder="email"
			  className="loginInput"
			  onChange={(e) => setEmail(e.target.value)}
			  
			/>
			<input
			  type="password"
			  placeholder="password"
			  className="loginInput"
			  onChange={(e)=>setPassword(e.target.value)}
			  
			/>
			<button
			  className="loginButton"
				onClick={handleLogin}
			>
			  Login
			</button>
		    </form>
			<a href="/register">
				<h3 className='headers'>Sign Up?</h3>
			</a>
		</div>
	  );
	}
