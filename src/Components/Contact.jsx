"use client"
import React, { useState } from 'react'
import {FaMessage, FaUser} from 'react-icons/fa6'
import { FaEnvelope } from 'react-icons/fa'
import axios from 'axios'
import Image from "next/image"
import toast, { Toaster } from 'react-hot-toast';
import { FaFacebook, FaWhatsapp, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
const Contact = () => {
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [name, setName] = useState('')
    const feedback = {name, email, message}
     
      const handleSubmit =(e)=>{
        e.preventDefault()
      axios.post('api/sendemail', feedback)
      .then((response)=>{
        toast.success(response?.data?.message)
        setEmail("")
        setMessage("")
        setName("")
      }).catch(error => {
        console.log(error);
      })
      }
      
  return (
    <div id='contact' className='bg-gradient-to-r from-[#0e0425] via-[#0e0425] to-[#0e0425] p-5'>
      
        <div className='flex lg:flex-row flex-col py-20 mx-auto justify-between xl:gap-0 gap-8' > 
        <div className='lg:w-1/2 w-full flex xl:flex-row flex-col items-end' data-aos="fade-left" data-aos-duration="2000">
    <Image 
        className='bg-[#0e0425] mx-auto lg:mx-0 self-end' 
        width={300} 
        height={200} 
        src={"/rocket.svg"} 
        alt="" 
        data-aos="fade-down" 
        data-aos-duration="2000" 
    />
    
    <div className="flex flex-col self-end">
  <div className="social-icons flex flex-row justify-between space-x-2 mx-auto sm:ml-0 md:ml-60 mb-5">
    <a href="https://facebook.com/ExcellenceJnr" className="hover:bg-gradient-to-t from-indigo-700 via-fuchsia-600 to-transparent border-2 hover:animate-bounce rounded-full border-purple-600 p-2">
      <FaFacebook className="text-white" />
    </a>
    <a href="https://github.com/stanley-samuel123" className="hover:bg-gradient-to-t from-indigo-700 via-fuchsia-600 to-transparent border-2 hover:animate-bounce rounded-full border-purple-600 p-2">
      <FaGithub className="text-white" />
    </a>
    <a href="https://linkedin.com/in/stanley-samuel-8baa38277" className="hover:bg-gradient-to-t from-indigo-700 via-fuchsia-600 to-transparent border-2 hover:animate-bounce rounded-full border-purple-600 p-2">
      <FaLinkedin className="text-white" />
    </a>
    <a href="https://instagram.com/stanleysamuel70" className="hover:bg-gradient-to-t from-indigo-700 via-fuchsia-600 to-transparent border-2 rounded-full hover:animate-bounce border-purple-600 p-2">
      <FaInstagram className="text-white" />
    </a>
    <a href="https://wa.me/message/JFS322SF713HKI" className="hover:bg-gradient-to-t from-indigo-700 via-fuchsia-600 to-transparent border-2 hover:animate-bounce rounded-full border-purple-600 p-2">
      <FaWhatsapp className="text-white" />
    </a>
  </div>
  
  <h2 className="text-3xl font-bold mb-4 text-white md:text-left text-center">Get in Touch</h2>
  <p className="max-w-sm mx-auto lg:mx-0 text-gray-300 md:text-left text-center">
    Ready to discuss your next project? Whether you need a full-stack application, a responsive website, or technical consultation, I'm here to help turn your vision into reality. Let's connect and explore how my expertise can drive your digital success.
  </p>
</div>

</div>
        <form onSubmit={handleSubmit} data-aos="fade-down" data-aos-duration="1500" className='xl:w-1/3  rounded-l-3xl bg-gradient-to-r from-[#00244D] via-indigo-700 to-transparent p-8 text-white flex flex-col ' >
            <h1 className='font-bold md:text-5xl text-3xl' data-aos="fade-in" data-aos-duration="2000">Get in Touch </h1>
            <p>Send us a Message</p>
            <div className=' mt-8 w-full space-y-7 bg-transparent outline-none  ' data-aos="fade-up" data-aos-duration="2000">
            <div className='flex flex-row mb-8' >
                <input className='py-4 w-full bg-transparent border-b-2 outline-none placeholder:font-bold placeholder:text-white focus:border-blue-700 focus:placeholder:-translate-y-4 focus:placeholder:text-[8px] ' type="text" placeholder='Name' 
                value={name} onChange={(e)=>{setName(e.target.value)}}/>
            <FaUser className='absolute right-16 animate-bounce' />
            </div>
            <div className='flex flex-row mb-20' >
                <input className='w-full py-4  bg-transparent border-b-2 outline-none placeholder:font-bold placeholder:text-white focus:border-blue-700 focus:placeholder:-translate-y-4 focus:placeholder:text-[8px]' type="email" placeholder='Email'
                value={email}  onChange={(e)=>{setEmail(e.target.value)}} />
            <FaEnvelope className='absolute right-16 animate-bounce' />
            </div>
            <div className='flex flex-row' >
                <input className='w-full bg-transparent border-b-2 outline-none py-4 placeholder:font-bold focus:border-blue-700  placeholder:text-white focus:placeholder:-translate-y-4 focus:placeholder:text-[8px]' type="text" placeholder='Your message here...' 
                value={message} 
                onChange={(e)=>{setMessage(e.target.value)}} />
            <FaMessage className='absolute right-16 animate-bounce' />
            </div>
            <button type='submit' className='p-2 shadow-black shadow-md rounded-3xl font-extrabold bg-gradient-to-r from-fuchsia-800 via-green-500 to-indigo-800 cursor-pointer hover:scale-110 duration-500 transition'> Send Message</button>
            </div>
        </form>
       
        </div>
    </div>
  )
}

export default Contact