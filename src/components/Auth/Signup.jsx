import React from 'react'
import logo from '../../assets/logo.png'
import './Auth.css'


export default function Signup() {
  return (
    <div className="bg-[radial-gradient(circle_at_20%_30%,rgba(12,200,168,0.25),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(255,119,0,0.35),transparent_40%),linear-gradient(135deg,#0f0f0f,#121212,#1a1a1a)] min-h-screen flex flex-col ">

      <div className="logo p-6 ">
        <img src={logo} alt="" className='h-[70px]' />
      </div>

      <div className="leftsection text-white ">
        <div className='heading text-6xl leading-20'>
          <p>Expert level Cybersecurity in <span className='text-[#4daa9b]'>Houre</span> not weeks.</p>
        </div>
        <div className="details leading-8">
          <h3 className='font-bold text-xl'>What's included</h3>
          <p><i class="fa-solid fa-check "></i>Effortlessly spider and map targets to uncover hidden security flows</p>
          <p><i class="fa-solid fa-check"></i>Deliver high-quality, validated findings in hours, not weeks.</p>
          <p><i class="fa-solid fa-check"></i>Generated professional, enterprise-grade secuirty reports autoamtically.</p>
        </div>
      </div>

    
    
   

    </div>
  )
}
