"use client"
import {useRef} from 'react'
import React from 'react'
import logo from '../../public/Logo.png'
import {FaRegWindowClose} from 'react-icons/fa'
// import {Link} from 'react-router-dom'
import { FaFacebook, FaWhatsapp, FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa'
import Link from 'next/link'
function Navbar() {

    const menuRef = useRef(null);
    const closeRef = useRef(null);
    const listRef = useRef(null);
    const cont = useRef(null)

    const menuOpen = () => {
        menuRef.current.style.display = 'none'
        closeRef.current.style.display = 'block'
        listRef.current.style.display = 'flex'
        cont.current.style.position = 'fixed'
    };

    function menuClose  () {
         closeRef.current.style.display = 'none'
         menuRef.current.style.display = 'block'
        listRef.current.style.display = 'none'
        cont.current.style.position = 'fixed'
    }

  return (
    <div ref={cont} className='w-screen fixed shadow-sm shadow-white z-20 bg-gray-800'>
        <div className='flex justify-between items-center py-2 px-4 lg:px-4 ' >
            <div >
                <img src={logo} alt="" className='w-[40px] bg-white bg-transparent' />
            </div>

            <div className='hidden lg:flex lg:flex-row text-white justify-between space-x-[350px] ' >
                <ul className=' flex gap-4 text-[18px] font-bold '>
                   <Link href='/'> <li className='hover:text-[#3A0879] cursor-pointer focus:bg- from-gray-800 to-fuchsia-800'>Home</li></Link>
                    <Link href='/projects'><li className='hover:text-[#3A0879] cursor-pointer '>Projects</li></Link>
                    <Link href='/Skills'> <li className='hover:text-[#3A0879] cursor-pointer'>Skills</li></Link>
                    <Link href='/Contact'> <li className='hover:text-[#3A0879] cursor-pointer'>Contact</li></Link>
                </ul>
                <div className='social-icons flex flex-row ml-60 justify-between space-x-2 '>
                    <a href="https://facebook.com/ExcellenceJnr" className=' hover:bg-gradient-to-t from-indigo-700 via-fuchsia-600 to-transparent border-2 hover:animate-bounce rounded-full border-purple-600 p-2'><FaFacebook /></a>
                    <a href="https://github.com/stanley-samuel123" className=' hover:bg-gradient-to-t from-indigo-700 via-fuchsia-600 to-transparent border-2 hover:animate-bounce rounded-full border-purple-600 p-2' ><FaGithub /></a>
                    <a href="https://linkedin.com/in/stanley-samuel-8baa38277" className='hover:bg-gradient-to-t from-indigo-700 via-fuchsia-600 to-transparent border-2 hover:animate-bounce rounded-full border-purple-600 p-2'><FaLinkedin /></a>
                    <a href="https://instagram.com/stanleysamuel70" className='hover:bg-gradient-to-t from-indigo-700 via-fuchsia-600 to-transparent border-2 rounded-full hover:animate-bounce border-purple-600 p-2'><FaInstagram /></a>
                    <a href="https://wa.me/message/JFS322SF713HKI" className='hover:bg-gradient-to-t from-indigo-700 via-fuchsia-600 to-transparent border-2 hover:animate-bounce rounded-full border-purple-600 p-2'><FaWhatsapp /></a>
                </div>
            </div>

            <div className='hidden lg:flex'>
            
                <Link href="/Contact"><button className='border-[1px] ml-4 w-[130px] h-[35px] hover:bg-gradient-to-t from-indigo-700 via-fuchsia-600 to-transparent rounded-md text-white font-semibold hover:bg-purple-600 hover:animate-bounce'>Lets Connect</button></Link>
            </div>
            <div ref={menuRef} onClick={menuOpen} className='flex lg:hidden visible'>
                {/* <LuMenuSquare size={40} className='text-white'/> */}
            </div>
            <div  ref={closeRef} onClick={menuClose} className='hidden relative'>
                <FaRegWindowClose size={35} className='text-white fixed right-4 mb-8 top-9 z-50 ' />
            </div>
            

        </div>
        <div ref={listRef} className='hidden'>
                <ul className=' flex flex-col items-center w-[100%] mt-2 bg-white gap-14 py-8 fixed z-50'>
                <Link  href='/'> <li className='hover:text-[#3A0879] cursor-pointer hover:border-b-2'>Home</li></Link>
                <Link href='/projects'><li className='hover:text-[#3A0879] cursor-pointer'>Projects</li></Link>
                    <Link href='/Skills'> <li className='hover:text-[#3A0879] cursor-pointer'>Skills</li></Link>
                    <Link href='/Contact'> <li className='hover:text-[#3A0879] cursor-pointer'>Contact</li></Link>
                </ul>
            </div>
    </div>
  )
}

export default Navbar