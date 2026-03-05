import React, { useState } from 'react'
import logo from '../../assets/logo.png'


export default function Login() {

  const [loginData, setLoginData] = useState({
    email: "",
    password:"",
  })

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    })
  }

  const handleLogin = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));


    if (user.email === loginData.email && user.password === loginData.password) {
      alert("Login successfull!!")
      localStorage.setItem("isLogined", true)
      window.location.href = '/dashboard'
    } else {
      alert("Invalid email or password")
    }
  }

   return (
      <div className=" main bg-[radial-gradient(circle_at_20%_30%,rgba(12,200,168,0.25),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(255,119,0,0.35),transparent_40%),linear-gradient(135deg,#0f0f0f,#121212,#1a1a1a)] min-h-screen ">
  
        <div className="logo p-6 ">
          <img src={logo} alt="" className='h-[70px]' />
        </div>
  
        <div className="dashboard">
        <div className="leftsection text-white">
            <div className='heading text-5xl leading-tight '>
            <p>Expert level Cybersecurity in <span className='text-[#4daa9b]'>Houre</span> not weeks.</p>
          </div>
          <div className="details leading-8 ">
            <h3 className='font-bold text-xl mb-4'>What's included</h3>
            <p><i class="fa-solid fa-check text-sm text-green-500 "></i> Effortlessly spider and map targets to uncover hidden security flows</p>
            <p><i class="fa-solid fa-check text-sm text-green-500 "></i> Deliver high-quality, validated findings in hours, not weeks.</p>
            <p><i class="fa-solid fa-check text-sm text-green-500 "></i> Generated professional, enterprise-grade secuirty reports autoamtically.</p>
            </div>
            
            <div className="review leading-loose ">
              <p className='mb-7 text-sm '><i class="fa-solid fa-star text-xs text-green-500"></i> Trustpilot</p>
              <h3>Rated 4.5/5.0  <span className='text-gray-600 text-xs'> (100k+ reviews)</span></h3>
            </div>
        </div>
  
        <div className="rightSection">
            <div className="signupForm">
            
                <h1 className='text-6xl'>Log in</h1>
                <p>Create new account? <a href="" className='text-blue-700'>Sign up</a></p>
              
  
              <div className="form">
                <input onChange={handleChange} type="text" name="email" id="" placeholder='Email address*' />
                <input onChange={handleChange} type="password" name="password" id="" placeholder='Password' />
              </div>
              <div>
  
                <div className='terms'>
                <input type="checkbox" /> <span>I agree to Ap's <a href="" className='text-blue-800'>Terms & Condition</a> and acknowledge the <a href="" className='text-blue-700'>Privacy Policy</a></span>
                </div>
              </div>
  
              <button className='btn' onClick={handleLogin}>Log in</button>
          </div>
        </div>
        </div>
      
      
     
  
      </div>
    )
}
